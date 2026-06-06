import { homeFix, OnlineStore, shopZone, toDolist } from "./image";

export const filters = ["HTML5", "CSS", "React", "Node.js", "Python", "SQL", "JavaScript", "Next.js"];


export const reactCards = [
  {
    id: 1,
    title: "ShopZone",
    description:
      "Build scalable and high-performance web applications using modern technologies and best practices.",
    image: shopZone,
    viewDemoLink: "https://shopzone-ecom.netlify.app/",
    githubLink: "https://github.com/sudeepzadav/shopZone321"
  },
  {
    id: 2,
    title: "Online Store",
    description:
      "Create seamless user experiences across all devices with clean, intuitive interfaces.",
    image: OnlineStore,
    viewDemoLink: "https://ekomart-web.onrender.com/",
    githubLink: "https://github.com/interncnw/HeyOrca"
  },
  {
    id: 3,
    title: "To-Do-List",
    description:
      "A to-do list app helps users organize, prioritize, and track tasks efficiently to stay productive and manage their time effectively.",
    image: toDolist,
    viewDemoLink: "/",
  },
  {
    id: 4,
    title: "Home Appliance",
    description:
      "Deliver fast, reliable, and optimized solutions that scale with your needs.",
    image: homeFix,
    viewDemoLink: "https://home-appliance-lfrs.onrender.com/",
    githubLink: "https://github.com/free-api/free-api.github.io/edit/master/README.md"
  },
];