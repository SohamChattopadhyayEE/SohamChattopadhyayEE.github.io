/**
 * PORTFOLIO DATA — edit this file to update all content on the site.
 *
 * Sections:
 *   personal        → name, bio, links, profile picture path, CV path
 *   news            → array of news items
 *   projects        → array of project entries
 *   publications    → array of journal / conference papers
 *   patents         → array of patent entries
 *
 * Image paths are relative to the site root (e.g. "assets/projects/slam.jpg").
 * Leave image: "" to show a colour placeholder instead.
 */

const DATA = {

  /* ─── Personal Information ───────────────────────────────────────────── */
  personal: {
    name:       "Soham Chattopadhyay",
    title:      "Robotics & Computer Vision Engineer",
    subtitle:   "PhD Aspirant · Fall 2027",
    email:      "c.soham99.official@gmail.com",

    /* Social / profile links — set to "" to hide the button */
    linkedin:   "https://www.linkedin.com/in/soham-chattopadhyay-8bab441b0/",   // ← update
    github:     "https://github.com/SohamChattopadhyayEE",
    leetcode:   "",   // ← add your LeetCode URL
    cv:         "assets/cv.pdf",                // ← drop your CV here

    /* Profile picture: place your photo at assets/profile.jpg
       (or change this path).  If the file is missing the site shows
       a monogram avatar automatically. */
    profilePic: "assets/profile.jpg",

    /* Biography shown on the Home page */
    bio: `I am a Robotics and Computer Vision Engineer with over four years of
hands-on experience building autonomous systems, visual-inertial navigation
pipelines, and deep-learning-based perception stacks. My work spans the full
stack — from embedded sensor integration and hardware bring-up to ROS 2
middleware, SLAM, and reinforcement-learning-based control for mobile robots.

I am actively preparing to apply for a <strong>PhD in Fall 2027</strong>,
with research interests centred on visual-inertial odometry, learning-based
SLAM, and data-efficient robot learning in unstructured environments.`
  },

  /* ─── News ───────────────────────────────────────────────────────────── */
  /* Each item: { date, title, description, link }
     Set link: "" to omit the "Read more" button. */
  news: [
    {
      date:        "June 2026",
      title:       "Manuscript submitted to IROS 2026",
      description: "Submitted our work on tightly-coupled visual-inertial odometry with learned feature tracking to IEEE/RSJ IROS 2026.",
      link:        ""
    },
    {
      date:        "March 2026",
      title:       "Patent filed on autonomous docking system",
      description: "Filed a patent for a vision-based autonomous docking approach for warehouse mobile robots using AprilTag pose estimation.",
      link:        ""
    },
    {
      date:        "September 2025",
      title:       "RL-based navigation demo at internal review",
      description: "Demonstrated a reinforcement-learning navigation agent running fully on-device (edge deployment) at the quarterly research review.",
      link:        ""
    }
  ],

  /* ─── Projects ───────────────────────────────────────────────────────── */
  /* Each item: { title, description, tags[], link, image, date } */
  projects: [
    {
      title:       "Visual-Inertial Navigation System (VINS)",
      date:        "2024 – Present",
      description: "Developed a tightly-coupled stereo visual-inertial odometry system using IMU pre-integration and non-linear optimisation (Ceres Solver). Benchmarked against EuRoC and custom warehouse datasets.",
      tags:        ["ROS 2", "C++", "SLAM", "IMU", "Ceres Solver"],
      link:        "",
      image:       ""
    },
    {
      title:       "RL-Based Autonomous Mobile Robot Navigation",
      date:        "2025 – Present",
      description: "Trained a Soft Actor-Critic (SAC) agent for goal-conditioned navigation in cluttered environments. Deployed on a real AMR using a lightweight ONNX model with a custom ROS 2 interface.",
      tags:        ["Reinforcement Learning", "SAC", "ROS 2", "ONNX", "Python"],
      link:        "",
      image:       ""
    },
    {
      title:       "AprilTag-Based Autonomous Docking",
      date:        "2025",
      description: "End-to-end docking pipeline for warehouse AMRs using fiducial marker pose estimation, PID control, and a custom state machine. Achieved sub-centimetre repeatability.",
      tags:        ["Computer Vision", "AprilTag", "PID", "ROS 2", "C++"],
      link:        "",
      image:       ""
    },
    {
      title:       "Semantic Mapping with Object Detection",
      date:        "2024",
      description: "Integrated YOLOv8 with a LiDAR-based occupancy grid to build semantic maps of warehouse shop floors, enabling object-class-aware path planning.",
      tags:        ["YOLO", "LiDAR", "Python", "ROS 2", "Semantic Mapping"],
      link:        "",
      image:       ""
    }
  ],

  /* ─── Publications ───────────────────────────────────────────────────── */
  /* Each item: { title, authors, venue, year, abstract, link, type }
     type: "journal" | "conference" | "preprint"                           */
  publications: [
    {
      title:    "Tightly-Coupled Stereo Visual-Inertial Odometry with Learned Feature Tracking",
      authors:  "S. Chattopadhyay, et al.",
      venue:    "IEEE/RSJ IROS 2026 (under review)",
      year:     "2026",
      abstract: "We propose a tightly-coupled stereo VIO system that replaces handcrafted feature descriptors with a lightweight learned tracker, improving robustness in low-texture and high-dynamic environments.",
      link:     "",
      type:     "conference"
    }
  ],

  /* ─── Patents ────────────────────────────────────────────────────────── */
  /* Each item: { title, inventors, number, status, year, description, link } */
  patents: [
    {
      title:      "Vision-Based Autonomous Docking System for Warehouse Mobile Robots",
      inventors:  "Soham Chattopadhyay, et al.",
      number:     "Application filed — number pending",
      status:     "Filed",
      year:       "2026",
      description:"A system and method for precisely docking an autonomous mobile robot to a charging station or load port using fiducial marker detection and a model-predictive feedback controller.",
      link:       ""
    }
  ]

};
