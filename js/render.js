/**
 * render.js — shared rendering utilities for all portfolio pages.
 * Reads from DATA (defined in data.js) and builds DOM elements.
 */

/* ── Navbar ──────────────────────────────────────────────────────────── */
function buildNav() {
  const pages = [
    { label: "Home",         href: "index.html"        },
    { label: "Biography",    href: "biography.html"    },
    { label: "News",         href: "news.html"         },
    { label: "Projects",     href: "projects.html"     },
    { label: "Publications", href: "publications.html" },
    { label: "Patents",      href: "patents.html"      },
  ];

  const currentFile = location.pathname.split("/").pop() || "index.html";

  const nav = document.getElementById("main-nav");
  if (!nav) return;

  nav.innerHTML = `
    <span class="nav-brand">${DATA.personal.name}</span>
    <button class="nav-toggle" aria-label="Toggle menu" onclick="this.classList.toggle('open'); document.getElementById('nav-links').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${currentFile === p.href ? 'active' : ''}">${p.label}</a></li>
      `).join("")}
    </ul>
  `;
}

/* ── Footer ──────────────────────────────────────────────────────────── */
function buildFooter() {
  const el = document.getElementById("main-footer");
  if (!el) return;
  el.innerHTML = `
    <footer>
      &copy; ${new Date().getFullYear()} ${DATA.personal.name} &mdash;
      <a href="mailto:${DATA.personal.email}">${DATA.personal.email}</a>
    </footer>
  `;
}

/* ── Profile (home page only) ─────────────────────────────────────────── */
function buildProfile() {
  const el = document.getElementById("profile-section");
  if (!el) return;
  const p = DATA.personal;

  const socialBtns = [
    p.cv       && `<a class="social-btn" href="${p.cv}" target="_blank">${svgCV()} CV / Résumé</a>`,
    p.linkedin && `<a class="social-btn" href="${p.linkedin}" target="_blank" rel="noopener">${svgLinkedIn()} LinkedIn</a>`,
    p.github   && `<a class="social-btn" href="${p.github}" target="_blank" rel="noopener">${svgGitHub()} GitHub</a>`,
    p.leetcode && `<a class="social-btn" href="${p.leetcode}" target="_blank" rel="noopener">${svgCode()} LeetCode</a>`,
    p.email    && `<a class="social-btn" href="mailto:${p.email}">${svgMail()} Email</a>`,
  ].filter(Boolean).join("");

  el.innerHTML = `
    <section class="profile">
      <div class="profile-photo-wrap">
        <img
          class="profile-photo"
          src="${p.profilePic}"
          alt="${p.name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="profile-monogram" style="display:none;">${initials(p.name)}</div>
      </div>
      <h1>${p.name}</h1>
      <p class="title">${p.title}</p>
      <span class="subtitle-badge">${p.subtitle}</span>
      <div class="social-links">${socialBtns}</div>
    </section>
  `;
}

/* ── Bio (home page only) ─────────────────────────────────────────────── */
function buildBio() {
  const el = document.getElementById("bio-section");
  if (!el) return;
  el.innerHTML = `
    <div class="bio-section">
      <h2>Biography</h2>
      <p>${DATA.personal.bio}</p>
    </div>
  `;
}

/* ── Home preview sections ────────────────────────────────────────────── */
function buildHomeSection({ containerId, title, href, items, renderCard }) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const cards = items.length
    ? items.map(renderCard).join("")
    : `<p class="empty-state">Nothing here yet — check back soon.</p>`;

  el.innerHTML = `
    <div class="home-section">
      <div class="section-header">
        <h2>${title}</h2>
        <a class="view-all-link" href="${href}">View all &rarr;</a>
      </div>
      <div class="scroll-window">${cards}</div>
    </div>
  `;
}

/* ── Full page list ───────────────────────────────────────────────────── */
function buildFullList({ containerId, items, renderCard, emptyMsg }) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!items.length) {
    el.innerHTML = `<p class="empty-state">${emptyMsg || "Nothing here yet."}</p>`;
    return;
  }
  el.innerHTML = `<div class="card-list">${items.map(renderCard).join("")}</div>`;
}

/* ── Card renderers ───────────────────────────────────────────────────── */
function newsCard(item) {
  const link = item.link
    ? `<a class="card-link" href="${item.link}" target="_blank" rel="noopener">Read more &rarr;</a>`
    : "";
  return `
    <div class="card">
      <div class="card-meta">${item.date}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${link}
    </div>`;
}

function projectCard(item) {
  const img = item.image
    ? `<img class="card-image" src="${item.image}" alt="${item.title}" loading="lazy"/>`
    : `<div class="card-image-placeholder">&#128187;</div>`;

  const link = item.link
    ? `<a class="card-link" href="${item.link}" target="_blank" rel="noopener">View project &rarr;</a>`
    : "";

  return `
    <div class="card project-card">
      <div class="project-card-image">${img}</div>
      <div class="project-card-body">
        <div class="card-meta">${item.date || ""}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
        ${link}
      </div>
    </div>`;
}

function publicationCard(item) {
  const badge = item.type
    ? `<span class="type-badge ${item.type}">${item.type}</span>`
    : "";
  const link = item.link
    ? `<a class="card-link" href="${item.link}" target="_blank" rel="noopener">View paper &rarr;</a>`
    : "";
  return `
    <div class="card">
      ${badge}
      <h3>${item.title}</h3>
      <div class="card-meta">${item.authors} &mdash; ${item.venue} (${item.year})</div>
      <p>${item.abstract || ""}</p>
      ${link}
    </div>`;
}

function patentCard(item) {
  const status = item.status
    ? `<span class="type-badge ${item.status.toLowerCase()}">${item.status}</span>`
    : "";
  const link = item.link
    ? `<a class="card-link" href="${item.link}" target="_blank" rel="noopener">View patent &rarr;</a>`
    : "";
  return `
    <div class="card">
      ${status}
      <h3>${item.title}</h3>
      <div class="card-meta">${item.inventors} &mdash; ${item.number} (${item.year})</div>
      <p>${item.description || ""}</p>
      ${link}
    </div>`;
}

/* ── Biography page builder ───────────────────────────────────────────── */
function buildBiographyPage() {
  const p = DATA.personal;

  /* Career Summary */
  const summary = document.getElementById("bio-summary");
  if (summary) {
    summary.innerHTML = `
      <div class="bio-section">
        <h2>Career Summary</h2>
        <p>${p.bio}</p>
      </div>`;
  }

  /* Education */
  const eduEl = document.getElementById("bio-education");
  if (eduEl) {
    const items = (DATA.education || []).map(e => `
      <div class="bio-card">
        <div class="bio-card-left">
          <span class="bio-date">${e.start} – ${e.end}</span>
          <span class="bio-location">${e.location}</span>
        </div>
        <div class="bio-card-right">
          <h3>${e.degree}</h3>
          <div class="bio-institution">${e.institution}</div>
          <div class="bio-sub">Major: ${e.major}</div>
          ${e.grade ? `<div class="bio-sub">Grade: <strong>${e.grade}</strong></div>` : ""}
        </div>
      </div>`).join("");
    eduEl.innerHTML = `
      <div class="bio-block">
        <h2 class="bio-block-title">Education</h2>
        ${items || "<p class='empty-state'>No education entries yet.</p>"}
      </div>`;
  }

  /* Experience */
  const expEl = document.getElementById("bio-experience");
  if (expEl) {
    const items = (DATA.experience || []).map(e => `
      <div class="bio-card">
        <div class="bio-card-left">
          <span class="bio-date">${e.start} – ${e.end}</span>
          <span class="bio-location">${e.location || ""}</span>
          ${e.supervisor ? `<span class="bio-supervisor">Supervisor: ${e.supervisor}</span>` : ""}
        </div>
        <div class="bio-card-right">
          <h3>${e.institution}</h3>
          <div class="bio-role">${e.role}</div>
          <p class="bio-desc">${e.description}</p>
        </div>
      </div>`).join("");
    expEl.innerHTML = `
      <div class="bio-block">
        <h2 class="bio-block-title">Experience</h2>
        ${items || "<p class='empty-state'>No experience entries yet.</p>"}
      </div>`;
  }
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

/* Inline SVG icons (no external dependency) */
function svgCV() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-7h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h3v1.5H8V10z"/></svg>`;
}
function svgLinkedIn() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
}
function svgGitHub() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;
}
function svgCode() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 6.293L2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 0l-1.414 1.414L18.586 12l-4.293 4.293 1.414 1.414L21.414 12z"/></svg>`;
}
function svgMail() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
}
