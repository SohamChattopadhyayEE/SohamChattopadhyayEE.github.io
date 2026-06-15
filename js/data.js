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
    linkedin:   "https://www.linkedin.com/in/soham-chattopadhyay-8bab441b0/",
    github:     "https://github.com/SohamChattopadhyayEE",
    scholar:    "https://scholar.google.com/citations?user=3pRo5gQAAAAJ&hl=en",
    leetcode:   "",   // ← add your LeetCode URL
    cv:         "assets/cv.pdf",

    /* Profile picture: place your photo at assets/profile.jpg
       (or change this path).  If the file is missing the site shows
       a monogram avatar automatically. */
    profilePic: "assets/profile.jpeg",

    /* Biography shown on the Home page */
    bio: `I am a Research Engineer with over four years of 
    experience in computer vision, reinforcement learning, and robot perception. 
    My research spans mutli-view geometry, semantic segmentation, object detection 
    and tracking, reinforcement learning, and efficient deployment through 
    quantization and pruning.

    I am an aspiring candidate for a full-time PhD position for fall 2027,
    with research interests centred on various applications of computer vision, 
    multi-modal learning and reinforcement learning, such as robot perception and learning-based
    end-to-end control.`
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
      title:       "On Business trip to Samsung Research – Seoul",
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
      title:       "Follow-Me Feature For Samsung-Ballie",
      date:        "2024",
      description: "Developed the Follow-me feature for Samsung's home companion named Ballie. The same has been demonstrated in IFA'24, Berlin.",
      tags:        ["Computer Vision", "ONNX", "Python", "C++"],
      link:        "",
      image:       "assets/projects/human_following_ballie.gif"
    },
    {
      title:       "RL-Based Docking",
      date:        "2025 – Present",
      description: "An RL-based docking module, which works seamlessly across different docking stations with an accuracy of 5mm",
      tags:        ["Reinforcement Learning", "PPO", "ROS", "ONNX", "Python", "C++"],
      link:        "",
      image:       "assets/projects/rl_based_docking.gif"
    },
    {
      title:       "Object-shape Reactive Wrapping Algorithm",
      date:        "2025",
      description: "End-to-end object-shape agnostic wrapping algorithm which wraps around any non-uniform objects maintaining a fixed distance and uniform velocity.",
      tags:        ["Computer Vision", "PID", "ROS"],
      link:        "",
      image:       "assets/projects/atlanta-original-compressed.gif"
    },
    {
      title:       "Simulator Development for RL-based Navigation Task",
      date:        "2026",
      description: "Developed a light-weight simulator for RL-based training which leverages the physics of Mujoco environment and can be integrated seamlessly with Stable-baseline3 library",
      tags:        ["Python", "Reinforcement Learning", "Mujoco", "Stable-baseline3"],
      link:        "",
      image:       "assets/projects/light_weight_sim_for_rl.gif"
    },
    {
      title:       "Tag-based Odometry Estimation",
      date:        "2025",
      description: "An independent odometry estimation from Apriltags which works in accordance with other modalities, improving the overall estimation.",
      tags:        ["Ceres", "Optimization", "State estimation", "AprilTag"],
      link:        "",
      image:       "assets/projects/tag_odom.gif"
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
      year:     "2022",
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
      link:     "https://www.sciencedirect.com/science/article/abs/pii/S1746809423001258",
      type:     "journal"
    },
    {
      title:    "A feature selection model for speech emotion recognition using clustering-based population generation with hybrid of equilibrium optimizer and atom search optimization algorithm",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Ali Ahmadian, Ram Sarkar",
      venue:    "Multimedia Tools and Applications, vol. 82(7), pp. 9693–9726",
      year:     "2023",
      abstract: "Presents a hybrid meta-heuristic feature selection framework combining equilibrium optimizer and atom search optimization with clustering-based population seeding for robust speech emotion recognition.",
      link:     "https://link.springer.com/article/10.1007/s11042-021-11839-3",
      type:     "journal"
    },
    {
      title:    "Deep features selection through genetic algorithm for cervical pre-cancerous cell classification",
      authors:  "Rohit Kundu, Soham Chattopadhyay",
      venue:    "Multimedia Tools and Applications, vol. 82(9), pp. 13431–13452",
      year:     "2023",
      abstract: "Employs a genetic algorithm to select discriminative deep features extracted from CNN models for accurate classification of cervical pre-cancerous cells in Pap-smear images.",
      link:     "https://link.springer.com/article/10.1007/s11042-022-13736-9",
      type:     "journal"
    },
    {
      title:    "AltWOA: Altruistic Whale Optimization Algorithm for feature selection on microarray datasets",
      authors:  "Rohit Kundu, Soham Chattopadhyay, Erik Cuevas, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 144",
      year:     "2022",
      abstract: "Introduces AltWOA, a biologically-inspired altruistic variant of the whale optimization algorithm, for high-dimensional feature selection on gene-expression microarray datasets.",
      link:     "https://www.sciencedirect.com/science/article/abs/pii/S001048252200141X",
      type:     "journal"
    },
    {
      title:    "DRDA-Net: Dense residual dual-shuffle attention network for breast cancer classification using histopathological images",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 145",
      year:     "2022",
      abstract: "Proposes DRDA-Net, a novel CNN architecture integrating dense residual connections with a dual-shuffle attention mechanism for accurate and efficient breast cancer grading from histopathological images.",
      link:     "https://www.sciencedirect.com/science/article/abs/pii/S0010482522002293",
      type:     "journal"
    },
    {
      title:    "MTRRE-Net: A deep learning model for detection of breast cancer from histopathological images",
      authors:  "Soham Chattopadhyay, Arijit Dey, Pawan Kumar Singh, Diego Oliva, Erik Cuevas, Ram Sarkar",
      venue:    "Computers in Biology and Medicine, vol. 150",
      year:     "2022",
      abstract: "Presents MTRRE-Net, a multi-scale deep learning architecture leveraging residual and recurrent components for robust detection and classification of breast cancer from whole-slide histopathological images.",
      link:     "https://www.sciencedirect.com/science/article/abs/pii/S0010482522008630",
      type:     "journal"
    },
    {
      title:    "Motivation detection using EEG signal analysis by residual-in-residual convolutional neural network",
      authors:  "Soham Chattopadhyay, Laila Zary, Chai Quek, Dilip K. Prasad",
      venue:    "Expert Systems with Applications, vol. 184",
      year:     "2021",
      abstract: "Develops a residual-in-residual CNN for decoding motivational states from EEG signals, enabling a non-invasive brain–computer interface for affect-aware human–machine interaction.",
      link:     "https://www.sciencedirect.com/science/article/pii/S0957417421009544",
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
      link:     "https://ieeexplore.ieee.org/abstract/document/9247182",
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
  ],

  /* ─── Education ──────────────────────────────────────────────────────── */
  /* Each item: { degree, major, institution, location, start, end, grade } */
  education: [
    {
      degree:      "Bachelor of Electrical Engineering, Honours",
      major:       "Electrical Engineering",
      institution: "Jadavpur University",
      location:    "Kolkata, India",
      start:       "2018",
      end:         "May 2022",
      grade:       "9.01 / 10 (A+)"
    }
  ],

  /* ─── Experience ─────────────────────────────────────────────────────── */
  /* Each item: { institution, location, role, start, end, supervisor?, description } */
  experience: [
    {
      institution: "Addverb Technologies",
      location:    "India",
      role:        "Engineer — Computer Vision & Robotics",
      start:       "February 2025",
      end:         "Present",
      description: "I am currently working at Addverb as a robotics software engineer, primarily focusing on developing AI-based solutions for robot-perception. My work involves fusing multi-modal sensor data (LiDAR, Camera, IMU and Wheel encoder) for SLAM and mapping, and creating AI software to enable autonomous navigation, obstacle avoidance, and scene understanding. My primary responsibility includes reading and understanding various research papers across fields like Reinforcement Learning, Generative AI, Scene Segmentation, Object detection, followed by quick prototyping and evaluating on robots. Moreover, I also have to design low-level software architecture, optimize code performance and write production ready clean code (primarily in C++)."
    },
    {
      institution: "Samsung R&D – Delhi (Samsung Research Institute India)",
      location:    "New Delhi, India",
      role:        "Engineer — Computer Vision & Robotics",
      start:       "July 2022",
      end:         "January 2025",
      description: `In Samsung R&D-Delhi, my role was to develop AI-related software for various 
            Samsung products such as Samsung TV, Samsung robot Ballie (a home companion) and 
            Robot Vacuum Cleaner (RVC). There I delivered two Reinforcement Learning-based 
            software (in Python and PyTorch) to automatically find out and reproduce Memory leaks and User 
            Interface reactivity delays respectively in Samsung TVs. Additionally, I also worked on devising 
            a Deep Contextual-bandit based recommendation system for assigning KONA issues to their respective 
            owners. Moreover, I also worked on developing various features of ballie (an automobile robot), 
            which includes the 'follow-me' feature (This feature was demonstrated in IFA'24), writing the core 
            managing module which establishes the communication between two different computation boards and the 
            'kidnap detection' feature. Along with that I also was a part of the core research team, where I worked on 
            certain research projects like RL-based adaptive coverage planning for robot vacuum cleaner (RVC). Additionally, 
            I also have worked on one Patent, which is under filing process.`
    },
    {
      institution: "UiT — The Arctic University of Norway",
      location:    "Tromsø, Norway",
      role:        "Undergraduate Research Intern",
      supervisor:  "Dr. Dilip K. Prasad",
      start:       "July 2020",
      end:         "April 2021",
      description: "Developed RRCNN, a 1D-CNN architecture for EEG-based motivation detection achieving 89% accuracy, and a deep learning pipeline for early-stage cardiac disease detection in Atlantic salmon embryos from video data (72% accuracy)."
    },
    {
      institution: "École de Technologie Supérieure (ÉTS)",
      location:    "Montréal, Canada",
      role:        "MITACS Global Research Intern",
      supervisor:  "Dr. Christian Desrosiers",
      start:       "June 2021",
      end:         "August 2021",
      description: "Developed a weakly-supervised GCN-based segmentation model for brain surface segmentation, mapping cortical data to the spectral domain to improve label-efficiency and spatial accuracy."
    }
  ]

};
