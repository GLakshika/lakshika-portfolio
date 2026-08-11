import resourcePlatformImage from "../assets/projects/resource-platform.png";
import swmsSystemImage from "../assets/projects/swms.png";
import brightBuyImage from "../assets/projects/brightbuy.png";
import gpaSystemImage from "../assets/projects/gpa-system.png";
import expenseTrackerImage from "../assets/projects/expense-tracker.png";

export const projects = [
  {
    id: 1,
    title: "Resource Coordination Platform for Community Resilience",
    description:
      "A microservices-based web and mobile platform designed to coordinate community requests, volunteers, donations and resources during disaster situations.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
    ],
    category: "Full Stack / Microservices",
    image: resourcePlatformImage,
    github: "https://github.com/orgs/CRP-semester-5/repositories",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Smart Waste Management System",

    description:
      "An IoT-enabled smart waste management platform designed to monitor waste levels, manage collection activities and provide real-time notifications for efficient waste collection.",

    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "MQTT",
      "EMQX",
      "ESP32",
      "Raspberry Pi",
      "Firebase",
    ],

    category: "IoT / Full Stack",

    image: swmsSystemImage,

    github: "YOUR_GITHUB_LINK",
    demo: "#",

    featured: true,
  
  },

  {
    id: 3,
    title: "BrightBuy E-Commerce Platform",
    description:
      "An e-commerce application designed to provide users with a simple and intuitive online shopping experience.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
    ],
    category: "Web Application",
    image: brightBuyImage,
    github: "https://github.com/GLakshika/ecommerce-project",
    demo: "#",
    featured: false,
  },

  {
    id: 4,
    title: "Semester GPA Management System",
    description:
      "A web-based application for managing student academic records, calculating semester and cumulative GPAs, and analyzing academic performance.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],
    category: "Web Application",
    image: gpaSystemImage,
    github: "https://github.com/GLakshika/student-gradebook",
    demo: "#",
    featured: false,
  },

  {
    id: 5,
    title: "Smart Expense Tracker",
    description:
      "A full-stack expense management application that allows users to securely manage expenses, search transactions, organize categories and view spending summaries.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],
    category: "Full Stack",
    image: expenseTrackerImage,
    github: "https://github.com/GLakshika/smart-expense-tracker",
    demo: "#",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    period: "Jul 2026 — Present",
    title: "Resource Coordination Platform for Community Resilience1",
    organization: "University of Moratuwa",
    type: "Software Engineering Project",

    description:
      "Developing a microservices-based web and mobile platform for disaster response, enabling real-time coordination of requests, volunteers, donations and resources.",

    responsibilities: [
      "Developing secure REST APIs using Node.js and TypeScript.",
      "Designing PostgreSQL database schemas for scalable data management.",
      "Implementing event-driven communication using Apache Kafka.",
      "Working with JWT-based authentication and role-based access control.",
      "Using Docker and Kubernetes concepts for service deployment and scalability.",
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
];