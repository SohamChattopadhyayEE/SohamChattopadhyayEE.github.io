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
    title:      "Robotics & Computer Vision Researcher",
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
    profilePic: "assets/profile.jpeg",

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
      date:        "February 2025",
      title:       "Joined Addverb Technologies as Research Engineer",
      description: "Joined Addverb Technologies, a leading robotics and warehouse automation company, as a Research Engineer focusing on perception and autonomous navigation for mobile robots.",
      link:        ""
    },
    {
      date:        "September 2024",
      title:       "Patent filed at Samsung Research",
      description: "Filed a patent entitled \"System and Method for Context-Aware and Priority-Driven Projection Area Selection in Multi-user Environment\" from Samsung Research Institute India – Delhi.",
      link:        ""
    },
    {
      date:        "June 2024",
      title:       "Returned to Samsung Research India – Delhi",
      description: "Returned to Samsung Research Institute India – Delhi and resumed the previous role as R&D Engineer after the overseas business trip to Samsung Research Seoul.",
      link:        ""
    },
    {
      date:        "February 2024",
      title:       "Business trip to Samsung Research – Seoul",
      description: "Travelled to Samsung Research headquarters in Seoul, South Korea, for a collaborative R&D engagement and knowledge exchange with the global research team.",
      link:        ""
    },
    {
      date:        "July 2022",
      title:       "Joined Samsung Research Institute India – Delhi as R&D Engineer",
      description: "Began career as an R&D Engineer at Samsung Research Institute India – Delhi, working on cutting-edge research and product development in the areas of computer vision and intelligent systems.",
      link:        ""
    },
    {
      date:        "May 2022",
      title:       "Graduated from Jadavpur University",
      description: "Completed undergraduate studies from Jadavpur University, one of India's premier technical institutions, marking the beginning of a professional journey in robotics and computer vision.",
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
