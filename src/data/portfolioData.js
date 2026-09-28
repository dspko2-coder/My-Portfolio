export const profile = {
  name: "Dilekha Palihawadana",
  role: "Full Stack Developer",
  location: "Matara, Sri Lanka",
  subtitle:
    "I build responsive, full-stack web applications — from REST APIs and relational databases to the interfaces people actually use. Currently focused on the MERN stack and Next.js, with project experience extending into Spring Boot and Angular for enterprise-style systems.",
  availableForWork: true,
  email: "dilekhashakthi00@gmail.com",
  cvFileName: "Dilekha_Palihawadana_CV.pdf", // lives in /public
  social: {
    github: "https://github.com/dilekhashakthi",
    linkedin: "https://linkedin.com/in/dilekha-shakthi",
    // twitter: "https://twitter.com/dilekhadev",
  },
};

export const education = [
  {
    id: "edu-1",
    degree: "B.Sc. in Applied Science",
    institution: "Wayamba University of Sri Lanka",
    location: "Kuliyapitiya, Sri Lanka",
    period: "2022 — 2025",
    detail: "Graduated with Second Class Lower Division.",
  },
  {
    id: "edu-2",
    degree: "Software Engineering Certificate Course",
    institution: "iCET - Institute of Computer Engineering Technology",
    location: "Panadura, Sri Lanka",
    period: "2025 — Present",
  },
  {
    id: "edu-3",
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "St. Servatius' College",
    location: "Matara, Sri Lanka",
    period: "2017 — 2019",
    detail:
      "Combined Mathematics, Physics, Information and Communication Technology",
  },
];

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript"],
  frontend: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React.js",
    "Redux",
    "Next.js",
    "Angular",
  ],
  backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  databases: ["MySQL", "MongoDB"],
  cloud: [ "Git", "Docker"],
  mobile: ["Flutter"],
  tools: [
    "Postman",
    "VS Code",
    "IntelliJ IDEA",
    "MongoDB Compass",
  ],
};

export const experience = [
  {
    id: "exp-1",
    title: "Intern Full Stack Developer",
    company: "Syncrones (Pvt) Lmd",
    location: "Colombo, Sri Lanka (Remote)",
    period: "Jan 2026 - July 2026",
    points: [
      "Developed and maintained responsive UI components for multiple web applications using React, Next.js, and Tailwind CSS.",
      "Implemented state management and API integration with Redux Toolkit and RTK Query, connecting backend services to frontend components.",
      "Contributed to three client platforms: a hotel & villa booking system with customer, seller, and super-admin dashboards; an admin dashboard for a clothing e-commerce brand; and a furniture ordering platform with order and transaction tracking.",
      "Collaborated with designers, backend developers, and QA engineers to keep UI/UX consistent and integrations reliable across projects.",
      "Took part in client meetings to gather requirements and propose practical technical solutions aligned with project goals.",
    ],
    stack: ["React.js",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce platform using the MERN stack, following the MVC architecture to build a scalable and maintainable application. The platform features product browsing, category filtering, shopping cart management, secure user authentication, and role-based dashboards for customers and administrators. Integrated the Braintree payment gateway to enable secure online transactions and designed RESTful APIs for seamless communication between the frontend and backend.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=60",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Braintree",
      "REST APIs",
    ],
    github:
      "https://github.com/dilekhashakthi/bookmart-ecommerce-MERN-application.git",
    live: null,
  },
  {
    id: "proj-2",
    title: "Blog Web Application",
    description:
      "Built a responsive full-stack blog application using the MERN stack, enabling users to register, authenticate, and manage their accounts securely. Implemented complete CRUD functionality for blog posts, a commenting system for user engagement, and RESTful APIs to support efficient data communication. Designed the application with a clean, responsive interface using Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
    ],
    github: "https://github.com/dilekhashakthi/Blog-Website-MERN.git",
    live: null,
  },
  {
    id: "proj-3",
    title: "E-Commerce Shopping Application",
    description:
      "Built a modern e-commerce shopping application using Next.js with a focus on performance and responsive user experience. The application features secure user authentication, product browsing, purchasing functionality, product reviews, and an admin dashboard for managing products. Leveraged server-side rendering and dynamic routing to deliver a fast and SEO-friendly shopping experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github:
      "https://github.com/dilekhashakthi/NextJS-Ecommerce-Shopping-App..git",
    live: null,
  },
  {
    id: "proj-4",
    title: "Hotel Management System",
    description:
      "Developed a full-stack hotel management system using Spring Boot and Angular to streamline hotel operations. Implemented JWT-based authentication and role-based authorization, designed a relational MySQL database with complex entity relationships, and integrated Stripe for secure online payments. Automated email notifications using JavaMailSender and enhanced data security through client-side encryption with CryptoJS while exposing RESTful APIs for frontend integration.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=60",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "MySQL",
      "JWT",
      "Spring Security",
      "Stripe API",
      "JavaMailSender",
      "CryptoJS",
      "REST APIs",
    ],
    github: "https://github.com/dilekhashakthi/Hotel-Booking-Web-App.git",
    live: null,
  },
];

export const contactCopy = {
  heading: "Let's build something",
  body: "I'm open to full-stack roles, freelance projects, and interesting collaborations. If you have something in mind, send a message — I read every message.",
};
