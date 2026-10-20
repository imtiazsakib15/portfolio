import rideEasy from "../assets/ride-easy.png";
import nexTechy from "../assets/nextechy.png";
import medCampHub from "../assets/med-camp-hub.png";
import electra from "../assets/electra.png";

export const PROJECTS = [
  {
    name: "Talentra",
    category: "Recruitment platform",
    description:
      "A full-stack recruitment platform connecting companies with potential candidates through a structured, role-aware hiring workflow.",
    features: [
      "Search and filter candidate profiles",
      "Company and candidate accounts",
      "Interest requests with accept and decline workflows",
      "Role-based access for admins, companies, and candidates",
    ],
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
    live: "https://talentra-client.vercel.app",
    client: "https://github.com/imtiazsakib15/talentra-client",
    server: "https://github.com/imtiazsakib15/talentra-server",
    preview: "workflow",
  },
  {
    name: "RideEasy",
    category: "Bike rental platform",
    description:
      "A practical rental application for browsing bikes and coordinating inventory, rental processing, and user management.",
    features: [
      "Browse and search available bikes",
      "Rental and inventory management",
      "User and administrator workflows",
      "Payment-related functionality",
    ],
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Express.js",
      "Mongoose",
      "JWT",
    ],
    img: rideEasy,
    live: "https://ride-easy-lemon.vercel.app",
    client: "https://github.com/imtiazsakib15/bike-rental-service-client",
    server: "https://github.com/imtiazsakib15/bike-rental-service-server",
  },
  {
    name: "NexTechy",
    category: "Technology publication",
    description:
      "A content-focused platform for discovering technology articles, exploring categories, and interacting with a reading community.",
    features: [
      "Browse and search articles by title or category",
      "Read article details",
      "Save articles to a wishlist",
      "Comment on articles",
    ],
    tech: [
      "React",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
    ],
    img: nexTechy,
    live: "https://nextechy-97707.web.app",
    client: "https://github.com/imtiazsakib15/nexTechy-client",
    server: "https://github.com/imtiazsakib15/nexTechy-server",
  },
  {
    name: "MedCamp Hub",
    category: "Medical camp management",
    description:
      "A medical camp management application with registration and participant administration workflows.",
    features: [
      "Camp registration system",
      "Participant management dashboard",
      "Real-time chat support integration",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "React Hook Form",
      "Express.js",
      "MongoDB",
    ],
    img: medCampHub,
    live: "https://med-camp-hub.web.app",
    client: "https://github.com/imtiazsakib15/med-camp-hub-client",
    server: "https://github.com/imtiazsakib15/med-camp-hub-server",
  },
  {
    name: "Electra",
    category: "E-commerce platform",
    description:
      "An online shopping experience with product discovery, cart management, and order tracking.",
    features: [
      "Product search and filtering",
      "Shopping cart functionality",
      "Order tracking system",
    ],
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    img: electra,
    live: "https://electra-2351c.web.app",
    client: "https://github.com/imtiazsakib15/electra-client",
    server: "https://github.com/imtiazsakib15/electra-server",
  },
];
