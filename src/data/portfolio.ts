export const portfolioData = {
  personal: {
    name: "Vraj Prajapati",
    title: "Software Engineer | Full-Stack Developer",
    email: "prajapativraj147@gmail.com",
    phone: "+91 9664860627",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://linkedin.com/in/vraj-prajapati",
    github: "https://github.com/vraj-prajapati",
    about: "Full-Stack Software Engineer with 2 years of experience delivering production-grade web applications using Node.js, React.js, NestJS, PostgreSQL, and AWS. Shipped 3 end-to-end platforms — healthcare, e-commerce, and edtech — handling API design, database architecture, payment integrations, and cloud deployment. Comfortable owning features independently from requirements through deployment in Agile teams.",
  },
  
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C/C++"],
    frontend: ["React.js", "Redux", "HTML5", "CSS3", "Responsive Web Design"],
    backend: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "GraphQL"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "Indexing"],
    devops: ["AWS (EC2, S3)", "Docker", "CI/CD Pipelines", "Render", "Vercel"],
    security: ["JWT", "OAuth2", "AWS Cognito", "RBAC", "Role-Based Authorization"],
    tools: ["Git", "GitHub", "Agile/Scrum", "Postman", "VS Code", "Code Review"],
    integrations: ["Stripe", "Payment Gateways", "Webhooks", "Background Job Queues"],
  },
  
  experience: [
    {
      title: "Software Engineer",
      company: "BACANCY Technologies",
      location: "Ahmedabad, Gujarat",
      period: "JAN 2025 - Present",
      description: [
        "Architected and shipped 3 production full-stack applications using the MERN stack, each supporting 5+ distinct user roles with separate permission levels and access control.",
        "Engineered 20+ RESTful API endpoints with JWT authentication and RBAC, cutting unauthorized access attempts.",
        "Spearheaded integration of Stripe payment gateway and webhook automation, processing subscription billing events and reducing manual payment handling by over 80%.",
        "Reduced average PostgreSQL query response time by 35% by redesigning table schemas, adding composite indexes, and eliminating N+1 query patterns across 4 core modules.",
        "Delivered sprint features on time across 6+ Agile sprints, conducting peer code reviews and maintaining test coverage on critical API modules."
      ]
    },
    {
      title: "PHP Software Developer",
      company: "Pooja Infotech",
      location: "Vadodara, Gujarat",
      period: "MAY-JUNE, 2023",
      description: [
        "Built responsive, user-friendly interfaces using HTML5, CSS3, and JavaScript, improving front-end performance and enhancing overall user experience.",
        "Designed and managed relational database structures using MySQL, contributing to reliable and scalable backend systems.",
        "Engineered and deployed a new web application integrated with existing software infrastructure, streamlining user workflows and improving accessibility."
      ]
    }
  ],
  
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Chandubhai S Patel Institute of Technology (CSPIT), Charusat University, Anand, Gujarat",
      year: "2021 - 2025",
      cgpa: "9.33 / 10",
      coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming", "Design & Analysis of Algorithms"]
    },
    {
      degree: "Higher Secondary Education — Science",
      institution: "Sardar Vallabhbhai Vidyalaya, Vadodara, Gujarat",
      year: "2021",
      percentage: "90.1%"
    }
  ],
  
  projects: [
    {
      title: 'Lucidium World – Metaphysical Life-Simulation Platform',
      description: 'Launched a full-stack life-simulation platform with AI guidance, tarot, astrology, and gamified engagement supporting 6 user roles (admin, advisor, client, guest, moderator, AI trainer). Authored 40+ modular NestJS API endpoints with PostgreSQL, covering booking, scheduling, notifications, and subscription management across 8 feature modules.',
      image: '/LucidiumWorld.png',
      technologies: ["MERN", "NestJS", "PostgreSQL", "AWS", "Stripe", "Webhooks", "CI/CD"],
      github: 'https://github.com/vraj-prajapati',
      live: '#',
      featured: true,
    },
    {
      title: 'Mens – Healthcare Consultation Platform',
      description: 'Constructed a HIPAA-conscious backend for doctor-patient consultations handling encrypted chat, video calls, and digital prescriptions for 2 user types. Secured all patient data endpoints using JWT + RBAC, restricting 100% of sensitive medical records to authorized roles only. Automated Stripe subscription billing lifecycle.',
      image: '/MensHealthcare.png',
      technologies: ["Node.js", "NestJS", "PostgreSQL", "AWS", "Stripe", "JWT", "RBAC"],
      github: 'https://github.com/vraj-prajapati',
      live: '#',
      featured: true,
    },
    {
      title: 'Snot – Pet Learning & Social Platform',
      description: 'Designed a pet social platform with community feeds, short-form video reels, and stories, supporting 4 content types with moderation workflows. Formulated a Tree/BFS-based hierarchical course structure (Module -> Session -> Lesson) enabling trainers to manage 100+ lessons across nested learning paths.',
      image: '/SnotPetPlatform.png',
      technologies: ["Node.js", "GraphQL", "React.js", "AWS", "Cognito", "CloudFront", "S3"],
      github: 'https://github.com/vraj-prajapati',
      live: '#',
      featured: true,
    }
  ],
  research: [
    {
        title: "Research (Drug Sentiment Analysis)",
        description: "Developed sentiment analysis models using prominent NLP-based deep learning algorithms including BI-LSTM, CNN, GRU, Logistic Regression, and Random Forest.",
        highlights: [
          "Explored frameworks like TensorFlow, Keras, and Transformer",
          "Performed algorithmic comparisons and sentiment analysis",
          "Achieved a notable accuracy of 93% with BI-LSTM, which is 9% more than previous result"
        ],
        tech: ["Python", "TensorFlow", "Keras", "NLP", "Deep Learning"],
        github: "#",
        live: "#"
  
    }
  ],
  awards: [
    {
      title: "Certifications",
      items: ["NPTEL – Programming in Modern C++ | IIT Kharagpur", "NPTEL – Data Structures and Algorithms | IIT Kharagpur"]
    }
  ]
} 