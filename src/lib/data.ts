import projectPortal from '../../public/project subsmission.png';
import Swiggy from "../../public/swiggy.png";
import Trello from "../../public/trello.png";
import Shopmart from "../../public/shopmart.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    tag:"Sigtuple Technologies",
    title: "Software Engineer",
    description: "I developed annotation tools that enabled doctors to efficiently annotate image patches, thereby streamlining diagnostic workflows. In collaboration with the QA team, I actively participated in the bug-fixing cycle to ensure the stability of the product. Additionally, I created detailed PDF reports for PBS analysis from scratch, providing comprehensive documentation and insights. As the manager of the PBS project, I oversaw the examination of sample images at 100x and 40x magnifications, ensuring precise and accurate analysis. I also implemented an event-driven architecture to enhance system responsiveness and scalability. Furthermore, I managed the integration of DICOM PACS, facilitating the effective handling and storage of medical imaging data",
    date: "Jan 2024-present",
  },
  {
    tag: "MountBlue Technologies",
    title: "Software Engineer Trainee",
    description: "Completed a software engineering bootcamp with a specialization in the MERN stack at Mountblue. Successfully designed and implemented various projects using MongoDB, Express.js, React, and Node.js. Demonstrated strong expertise in MongoDB, PostgreSQL, Express.js, React, Angular, and Node.js",
    date: "Oct 2023 - Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Swiggy Project",
    description: "This platform allows restaurants 🍽️ to easily manage their details, menus, and items, while offering consumers 🛍️ a seamless experience to explore, browse, and place orders. With features like menu customization and an intuitive ordering system, both restaurant owners 🍴 and customers enjoy a hassle-free process.",
    tags: ["React", "CSS", "Firebase","Redux Toolkit", "MongoDB", "MUI"],
    imageUrl: Swiggy,
    link:"https://swiggy-project-rho.vercel.app/",
    GithubLink:"https://github.com/anilmaurya61/Swiggy-project",
  }, 
  {
    title: "ShopMart",
    description: "This eCommerce project allows users to browse products 🛍️, select items for purchase, and easily add them to the cart 🛒. ",
    tags: ["React", "CSS", "API"],
    imageUrl: Shopmart,
    link:"https://trello-app-ebon.vercel.app/",
    GithubLink:"https://github.com/anilmaurya61/Trello-App",
  },
  {
    title: "Trello-App",
    description: "The project replicates Trello’s user-centric features, including user authentication 🔑, board creation 📝, and card management 📋. It enables seamless creation, customization, and organization of boards, lists, and cards for efficient project tracking 📊. Implemented features allow users to manage tasks with comments 💬, to-do lists ✅, and dynamic card movements within lists 🔄",
    tags: ["React", "CSS", "Firebase","Redux Toolkit"],
    imageUrl: Trello,
    link:"https://trello-app-ebon.vercel.app/",
    GithubLink:"https://github.com/anilmaurya61/Trello-App",
  },
  {
    title: "Node JS Github Issues Sync Data Project",
    description: "A Node.js application to synchronize GitHub issues with a MongoDB database using the GitHub API 🐙, Express ⚡, and Mongoose 🐱. Implemented a synchronization endpoint for batch-fetching and updating GitHub issues 🔄, including validation ✅ and error handling ⚠️. Created RESTful APIs for managing issue details 📝 with rate-limiting ⏱️ and concurrency controls ⚙️ to optimize performance, while enhancing security 🔒 with Passport.js for secure authentication.",
    tags: ["Node Js", "Express", "MongoDB", "Passport JS", "Github API", "MongoDB"],
    imageUrl: "",
    link:"https://github.com/anilmaurya61/github-issues-project",
    GithubLink:"https://github.com/anilmaurya61/github-issues-project",
  },
  
] as const;

export const skillsData = [
  "JavaScript", 
  "TypeScript",
  "Python",
  "C/C++",
  "ReactJs",
  "Angular", 
  "NodeJs", 
  "ExpressJs", 
  "Redux Toolkit",
  "HTML", 
  "CSS", 
  "SQL", 
  "PostGreSQL",
  "Competitive programming",
  "Problem Solving Skills",
  "Docker", 
  "Linux"
] as const;