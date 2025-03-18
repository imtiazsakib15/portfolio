import rideEasy from "../assets/ride-easy.png";
import nexTechy from "../assets/nexTechy.png";
import medCampHub from "../assets/med-camp-hub.png";
import electra from "../assets/electra.png";

export const PROJECTS = [
  {
    name: "RideEasy",
    subtitle: "Full-stack Rental Management System",
    img: rideEasy,
    features: [
      "Role-based authentication (User/Admin)",
      "Bike management dashboard with CRUD operations",
      "Interactive booking system with payment integration",
      "Admin user management system",
      "Bike return calculation functionality",
    ],
    tech: ["React", "Redux", "Express.js", "MongoDB", "React Hook Form"],
    live: "https://ride-easy-lemon.vercel.app",
    client: "https://github.com/imtiazsakib15/bike-rental-service-client",
    server: "https://github.com/imtiazsakib15/bike-rental-service-server",
  },
  {
    name: "NexTechy",
    subtitle: "Blogging Platform",
    img: nexTechy,
    features: [
      "Advanced search functionality",
      "Wishlist management",
      "Interactive comment system",
    ],
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    live: "https://nextechy-97707.web.app",
    client: "https://github.com/imtiazsakib15/nexTechy-client",
    server: "https://github.com/imtiazsakib15/nexTechy-server",
  },
  {
    name: "MedCamp Hub",
    subtitle: "Medical Camp Management System",
    img: medCampHub,
    features: [
      "Real-time chat support integration",
      "Camp registration system",
      "Participant management dashboard",
    ],
    tech: ["React", "Tailwind CSS", "React Hook Form", "Express.js", "MongoDB"],
    live: "https://med-camp-hub.web.app",
    client: "https://github.com/imtiazsakib15/med-camp-hub-client",
    server: "https://github.com/imtiazsakib15/med-camp-hub-server",
  },
  {
    name: "Electra",
    subtitle: "E-commerce Platform",
    img: electra,
    features: [
      "Product search and filtering",
      "Shopping cart functionality",
      "Order tracking system",
    ],
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    live: "https://electra-2351c.web.app",
    client: "https://github.com/imtiazsakib15/electra-client",
    server: "https://github.com/imtiazsakib15/electra-server",
  },
];
