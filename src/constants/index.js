
import {
  webflow,
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  wordpress,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web & Mobile App Development",
    icon: web,
  },
  {
    title: "Social Media Management",
    icon: mobile,
  },
  {
    title: "Graphic Design",
    icon: backend,
  },
  {
    title: "SEO (on-page & off-page)",
    icon: creator,
  },
  {
    title: "Ui UX Design",
    icon: web,
  },
  {
    title: "Google & Meta Ads",
    icon: mobile,
  },
  {
    title: "Conversion Rate Optimization",
    icon: backend,
  },
  {
    title: "Email Marketing",
    icon: creator,
  },
  {
    title: "Analytics & Reporting",
    icon: web,
  },
  {
    title: "Copywriting & Content Creation",
    icon: mobile,
  },
  {
    title: "CRM Automation",
    icon: backend,
  },
  {
    title: "GRO (Generative Engine Optimization)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },


  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },

  {
    name: "webflow",
    icon: webflow,


  }


];

const experiences = [
  {
    title: "Nova Protocol's Journey",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2016 - Present",
    points: [
      "Nova began its journey in 2016 under the umbrella of Devsofts, operating initially under a different name. What started as a small, dedicated team focused on delivering quality web development solutions has evolved into a full-fledged, independent brand.",
      "Over the years, Nova has grown steadily—earning trust through consistent delivery, innovation, and a client-first approach.",
      "Today, Nova stands proudly with its own identity, backed by years of experience, a diverse portfolio, and a strong foundation built during its formative years under Devsofts."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nova was instrumental in launching our online store. The team was responsive, creative, and delivered exactly what we envisioned—on time and within budget.",
    name: "Sam L.",
    designation: "eCommerce Business Owner",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "We’ve worked with several developers in the past, but Nova stands out for their professionalism and attention to detail. Highly recommended!",
    name: "James T.",
    designation: "Marketing Director",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "From design to development, the entire process was smooth. Nova really took the time to understand our goals and delivered a website that performs beautifully.",
    name: "Mark K.",
    designation: "CEO Tech Startup",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
