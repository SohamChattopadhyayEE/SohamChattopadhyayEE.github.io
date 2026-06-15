/**
 * Cloudflare Worker — Formspree → GitHub bridge
 *
 * Deploy this to Cloudflare Workers (free tier, workers.cloudflare.com).
 * Set these environment variables (Worker → Settings → Variables → Secrets):
 *
 *   GITHUB_TOKEN   — Personal Access Token with repo scope
 *   GITHUB_OWNER   — SohamChattopadhyayEE
 *   GITHUB_REPO    — SohamChattopadhyayEE.github.io
 *
 * Then paste this Worker's URL into Formspree:
 *   Form → Integrations → Webhooks → Add Endpoint
 */

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Parse Formspree webhook payload
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    // Formspree sends form fields at the top level of the payload.
    // Field names must match what recommend.html submits:
    //   name, designation, linkedin, recommendation
    const name        = (body.name        || '').trim();
    const designation = (body.designation || '').trim();
    const linkedin    = (body.linkedin    || '').trim().replace('(not provided)', '');
    const text        = (body.recommendation || '').trim();

    if (!name || !text) {
      return new Response('Missing required fields', { status: 400 });
    }

    const date = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Trigger the GitHub Actions "add-recommendation" workflow via repository_dispatch
    const dispatchUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/dispatches`;
    const res = await fetch(dispatchUrl, {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
        'Accept':        'application/vnd.github.v3+json',
        'Content-Type':  'application/json',
        'User-Agent':    'recommendation-bot/1.0'
      },
      body: JSON.stringify({
        event_type:     'new-recommendation',
        client_payload: { name, designation, linkedin, text, date }
      })
    });

    if (res.status === 204) {
      return new Response('OK — workflow dispatched', { status: 200 });
    }

    const err = await res.text().catch(() => res.status);
    console.error('GitHub dispatch failed:', err);
    return new Response(`GitHub API error (${res.status})`, { status: 502 });
  }
};
