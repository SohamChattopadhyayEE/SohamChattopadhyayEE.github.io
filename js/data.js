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
      title:    "Mapping Functional Changes in the Embryonic Heart of Atlantic Salmon Post Viral Infection Using AI Technique",
      authors:  "Soham Chattopadhyay, et al.",  // ← fill in full co-author list from the paper
      venue:    "IEEE International Conference on Image Processing (ICIP)",
      year:     "2023",
      abstract: "Addresses detection of viral infection in Atlantic salmon by analysing videos of beating embryonic hearts. Converts video data into heart-area time-signals, derives spectrogram features, and applies an ensemble of deep learning classifiers — achieving 82% average accuracy in distinguishing infected from healthy embryonic hearts.",
      link:     "https://ieeexplore.ieee.org/document/9897203/",
      type:     "conference"
    },
    {
      title:    "Deep feature selection using adaptive β-Hill Climbing aided whale optimization algorithm for lung and colon cancer detection",
      authors:  "Agnish Bhattacharya, Biswajit Saha, Soham Chattopadhyay, Ram Sarkar",
      venue:    "Biomedical Signal Processing and Control",
      year:     "2023",
      abstract: "Proposes an adaptive β-Hill Climbing aided whale optimization algorithm for automated deep feature selection, applied to histopathological image-based detection of lung and colon cancers.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "A feature selection model for speech emotion recognition using clustering-based population generation with hybrid of equilibrium optimizer and atom search optimization algorithm",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Ali Ahmadian, Ram Sarkar",
      venue:    "Multimedia Tools and Applications, vol. 82(7), pp. 9693–9726",
      year:     "2023",
      abstract: "Presents a hybrid meta-heuristic feature selection framework combining equilibrium optimizer and atom search optimization with clustering-based population seeding for robust speech emotion recognition.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "Deep features selection through genetic algorithm for cervical pre-cancerous cell classification",
      authors:  "Rohit Kundu, Soham Chattopadhyay",
      venue:    "Multimedia Tools and Applications, vol. 82(9), pp. 13431–13452",
      year:     "2023",
      abstract: "Employs a genetic algorithm to select discriminative deep features extracted from CNN models for accurate classification of cervical pre-cancerous cells in Pap-smear images.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "AltWOA: Altruistic Whale Optimization Algorithm for feature selection on microarray datasets",
      authors:  "Rohit Kundu, Soham Chattopadhyay, Erik Cuevas, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 144",
      year:     "2022",
      abstract: "Introduces AltWOA, a biologically-inspired altruistic variant of the whale optimization algorithm, for high-dimensional feature selection on gene-expression microarray datasets.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "DRDA-Net: Dense residual dual-shuffle attention network for breast cancer classification using histopathological images",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 145",
      year:     "2022",
      abstract: "Proposes DRDA-Net, a novel CNN architecture integrating dense residual connections with a dual-shuffle attention mechanism for accurate and efficient breast cancer grading from histopathological images.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "MTRRE-Net: A deep learning model for detection of breast cancer from histopathological images",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Diego Oliva, Erik Cuevas, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 150",
      year:     "2022",
      abstract: "Presents MTRRE-Net, a multi-scale deep learning architecture leveraging residual and recurrent components for robust detection and classification of breast cancer from whole-slide histopathological images.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "Motivation detection using EEG signal analysis by residual-in-residual convolutional neural network",
      authors:  "Soham Chattopadhyay, Laila Zary, Chai Quek, Dilip K. Prasad",
      venue:    "Expert Systems with Applications, vol. 184",
      year:     "2021",
      abstract: "Develops a residual-in-residual CNN for decoding motivational states from EEG signals, enabling a non-invasive brain–computer interface for affect-aware human–machine interaction.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "Ensemble of CNN classifiers using Sugeno Fuzzy Integral Technique for Cervical Cytology Image Classification",
      authors:  "Rohit Kundu, Hritam Basak, Akhil Koilada, Soham Chattopadhyay, Sukanta Chakraborty, Nibaran Das",
      venue:    "arXiv preprint arXiv:2108.09460",
      year:     "2021",
      abstract: "Proposes an ensemble of CNN classifiers fused via the Sugeno fuzzy integral for multi-class cervical cytology image classification, achieving improved robustness over individual classifiers.",
      link:     "https://arxiv.org/abs/2108.09460",
      type:     "preprint"
    },
    {
      title:    "A Hybrid Meta-Heuristic Feature Selection Method Using Golden Ratio and Equilibrium Optimization Algorithms for Speech Emotion Recognition",
      authors:  "Arijit Dey, Soham Chattopadhyay, Pawan Kumar Singh, Ali Ahmadian, Massimiliano Ferrara, Ram Sarkar",
      venue:    "IEEE Access, vol. 8, pp. 200953–200970",
      year:     "2020",
      abstract: "Presents a hybrid meta-heuristic combining golden ratio search and equilibrium optimization for feature selection in speech emotion recognition, validated on standard benchmark datasets.",
      link:     "",
      type:     "journal"
    },
    {
      title:    "Multi-scale Attention U-Net (MsAUNet): A Modified U-Net Architecture for Scene Segmentation",
      authors:  "Soham Chattopadhyay, Hritam Basak",
      venue:    "arXiv preprint arXiv:2009.06911",
      year:     "2020",
      abstract: "Introduces MsAUNet, a multi-scale attention-augmented U-Net variant for semantic scene segmentation, combining skip connections with spatial attention gates to improve boundary delineation.",
      link:     "https://arxiv.org/abs/2009.06911",
      type:     "preprint"
    },
    {
      title:    "Optimizing Speech Emotion Recognition using Manta-Ray Based Feature Selection",
      authors:  "Soham Chattopadhyay, Arijit Dey, Hritam Basak",
      venue:    "arXiv preprint arXiv:2009.08909",
      year:     "2020",
      abstract: "Applies manta-ray foraging optimization as a wrapper-based feature selector for speech emotion recognition, reducing feature dimensionality while improving classification accuracy.",
      link:     "https://arxiv.org/abs/2009.08909",
      type:     "preprint"
    }
  ],

  /* ─── Patents ────────────────────────────────────────────────────────── */
  /* Each item: { title, inventors, number, status, year, description, link } */
  patents: [
    {
      title:      "System and Method for Context-Aware and Priority-Driven Projection Area Selection in Multi-user Environment",
      inventors:  "Soham Chattopadhyay, et al., Yogesh Kumar, Sumit Aggarwal, Asif Jama",
      number:     "Application filed — number pending",
      status:     "Filed",
      year:       "2024",
      description:"A system and method for detecting optimal surface for projection in multi-spectator environment.",
      link:       "https://drive.google.com/file/d/1k_DxLyOUV-oJzYu5Nluwau79dX54ZeK-/view?usp=sharing"
    }
  ]

};
