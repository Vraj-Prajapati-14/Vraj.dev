export const portfolioData = {
  personal: {
    name: "Vraj Prajapati",
    title: "Full Stack Developer",
    email: "prajapativraj147@gmail.com",
    phone: "+91 9664860627",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://linkedin.com/in/vraj-prajapati-4b6130232",
    github: "https://github.com/vraj-prajapati",
    about: "Passionate Full Stack Developer with expertise in MERN stack, React, Node.js, and modern web technologies. I love building scalable applications and innovative solutions that make a difference.",
  },
  
  skills: {
    languages: ["C/C++ (Proficient)", "Python", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Redux", "TypeScript", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Nest.js"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    devops: ["Docker", "AWS"],
    tools: ["Git", "VS Code", "Postman"],
    integrations: ["Payment Integration (Razorpay, Stripe)", "WebSocket (Real-time Chat)", "Webhook"],
  },
  
  experience: [
    {
      title: "Full Stack Developer",
      company: "BACANCY Technologies",
      location: "Ahmedabad, Gujarat",
      period: "JAN 2025 - Current",
      description: [
        "Designed and developed full-stack applications using MongoDB, Express.js, React.js, and Node.js, delivering scalable and performant solutions with clean, reusable front-end components powered by React and state tools like Redux Toolkit and React Query.",
        "Engineered secure and efficient RESTful APIs, integrated third-party services, and implemented robust JWT-based authentication/authorization, ensuring data integrity and enhancing application functionality across user flows.",
        "Optimized database design using both MongoDB and PostgreSQL, while deploying applications on platforms like AWS, Render, and Vercel, leveraging CI/CD pipelines for smooth and automated deployments."
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
      degree: "BTech (Computer Science and Engineering)",
      institution: "Chandubhai S Patel Institute of Technology (CHARUSAT), Anand",
      year: "2025",
      cgpa: "9.33",
      coursework: ["Data Structure", "Design and Analysis of Algorithms", "Operating System", "DBMS"]
    },
    {
      degree: "Higher Secondary",
      institution: "Sardar Vallabhbhai Vidyalaya, Vadodara, India",
      year: "2021",
      percentage: "90.1%"
    }
  ],
  
  projects: [
   
    {
      title: 'SocioFeed',
      description: 'SocioFeed is an Instagram-style social media platform built with the MERN stack and PostgreSQL, enabling users to create posts, like, comment, follow, and engage in real-time chat. The responsive frontend, developed with React.js and MUI, features post feeds, user profiles, and interactive components. The backend, powered by Node.js, Express.js, and Prisma ORM, ensures efficient relational data modeling and optimized SQL queries. Real-time messaging via Socket.IO.',
      image: '/Sociofeed.jpg', // Place this image in public/projects/sociofeed.png
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "MUI", "Redux Toolkit", "TanStack Query", "React Router", "JWT", "React Hook Form", "Yup", "Git", "Postman"],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Virtual Wheels',
      description: 'Virtual Wheels is a 3D car browsing and purchasing platform built with the MERN stack, designed for an immersive user experience. The responsive frontend, crafted with React.js and Tailwind CSS, offers dynamic filtering, 3D car model previews, and smooth UI transitions. The backend, built with Node.js, Express.js, and MongoDB with Mongoose, supports secure JWT-based authentication, role-based access control (RBAC), and scalable data storage for car models and user data.',
      image: '/VirtualWheels.png',
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "React Router", "JWT", "React Hook Form", "Tailwind CSS", "Git"],
      github: 'https://github.com/yourusername/task-app',
      live: 'https://task-app-demo.vercel.app',
      featured: false,
    },
    {
      title: 'EStore',
      description: 'EStore is a full-featured e-commerce platform built with MERN stack, offering a seamless shopping experience and robust admin management. The responsive frontend, developed with MUI and Redux Toolkit, supports product browsing, search, filtering, and cart management. The backend uses a normalized PostgreSQL schema with RESTful APIs for products, users, carts, and orders, integrated with Cloudinary for media and Node Mailer for notifications.',
      image: '/Estore.png',
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Redux Toolkit", "TanStack Query", "MUI", "Cloudinary", "Node Mailer", "React Query", "Axios"],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-dashboard.vercel.app',
      featured: true,
    },
    {
      title: 'Online Voting and Volunteering System',
      description: 'Online Voting and Volunteering System is a web application built with PHP and MySQL to facilitate secure online voting and volunteer management. The system supports user registration, secure voting with result tracking, and volunteer task assignment. The frontend, styled with Bootstrap, ensures a responsive and user-friendly experience. The backend, developed with PHP and MySQL, handles secure data storage, vote tallying, and user role management.',
      image: '/Voting.png',
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript", "jQuery", "Git"],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://vraj-prajapati.dev',
      featured: false,
    },
    {
      title: 'Fake News Detection',
      description: 'Fake News Detection is a machine learning-based application that identifies misleading news articles using web scraping and natural language processing. Built with Python, BeautifulSoup, and scikit-learn, the system scrapes news articles from websites, preprocesses text data, and applies ML algorithms (e.g., Logistic Regression, Naive Bayes) to classify articles as fake or legitimate. The frontend, developed with Flask, provides a simple interface.',
      image: '/FakeNews.png',
      technologies: ["Python", "BeautifulSoup", "scikit-learn", "Flask", "Pandas", "NumPy", "NLTK", "Git", "Jupyter Notebook"],
      github: 'https://github.com/yourusername/blog-platform',
      live: 'https://blog-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Job Portal',
      description: 'Job Portal is a full-stack web application, designed to connect job seekers and employers. The platform features user authentication, job posting, application submission, and advanced search with filtering capabilities. The responsive frontend, developed with React.js and Tailwind CSS, provides an intuitive interface for browsing jobs and managing profiles. The backend, powered by Node.js, Express.js, and MongoDB with Mongoose.',
      image: '/JobPortal.png',
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "React Router", "React Hook Form"],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-app-demo.vercel.app',
      featured: true,
    },
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
        live: "#"
  
    }
  ],
  awards: [
    {
      title: "NPTEL Certification",
      items: ["Programming in Modern C++", "Data Structure and Algorithms"]
    }
  ]
} 