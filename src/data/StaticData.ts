import { skillProps } from "@/Sections/Skills";
import { AssignmentProps } from "@/components/Assignment";

export const skillData: skillProps[] = [
  { skillName: "JavaScript", level: 3, category: "Frontend" },
  { skillName: "Html", level: 3, category: "Frontend" },
  { skillName: "CSS", level: 3, category: "Frontend" },
  { skillName: "Blazor", level: 1, category: "Frontend" },
  { skillName: ".Net", level: 2, category: "Backend" },
  { skillName: "Git", level: 3, category: "DevOps / Tools" },
  { skillName: "TypeScript", level: 3, category: "Frontend" },
  { skillName: "Devops", level: 3, category: "DevOps / Tools" },
  { skillName: "React", level: 3, category: "Frontend" },
  { skillName: "C#", level: 3, category: "Backend" },
  { skillName: "Postgres", level: 2, category: "Backend" },
  { skillName: "Mongodb", level: 1, category: "Backend" },
  { skillName: "NodeJS", level: 3, category: "Backend" },
  { skillName: "TailwindCSS", level: 2, category: "Frontend" },
  { skillName: "GraphQL", level: 3, category: "Backend" },
  { skillName: "Microservices", level: 3, category: "Backend" },
  { skillName: "Nest.Js", level: 3, category: "Backend" },
  { skillName: "Prisma", level: 2, category: "Backend" },
  { skillName: "Docker", level: 2, category: "DevOps / Tools" },
  { skillName: "CI/CD", level: 3, category: "DevOps / Tools" },
  { skillName: "SQL", level: 2, category: "Backend" },
  { skillName: "Azure", level: 3, category: "DevOps / Tools" },
  { skillName: "Service Fabric", level: 2, category: "Backend" },
  { skillName: "C++", level: 1, category: "Backend" },
  { skillName: "Agile", level: 3, category: "DevOps / Tools" },
  { skillName: "Jira", level: 2, category: "DevOps / Tools" },
];

export const assignmentData: AssignmentProps[] = [
  {
    company: "Tromb",
    role: "Fullstack Developer / Consultant Volvo",
    description:
      "At VGCS I joined a new team that was assigned the development of a new microservice to address material related challenges within a quarry. The core focus of this assignment was to create a microservice that would provide solutions to the material problems faced by the quarry. These material challenges might include optimizing material extraction, tracking material inventory, monitoring material quality, and ensuring efficient logistics within the quarry",
    year: "Now",
    tags: [
      "React",
      "TypeScript",
      "Nest.Js",
      "Prisma",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "Devops",
      "Microservice",
      "CI/CD",
    ],
  },
  {
    company: "Friday",
    role: "Fullstack Developer",
    description:
      "I worked with the development of an accounting system that was designed to simplify the financial part of a company. The goal of the system was to support users with alarms, reminders and guidance to make accounting easier and more structured. The system handled different accounting flows and helped users keep track of important events and deadlines. The focus was to make the system easy to use and clear even for users without deeper accounting knowledge.",
    year: "2022",
    tags: ["React", ".Net", "PostgreSQL", "Trello", "REST API"],
  },
  {
    company: "Toyota Material Handling",
    role: "Backend Developer",
    description:
      "At Toyota I worked in the telematics department to further develop Toyotas existing systems. The system was a way for customers to improve their warehouse in every possible way. Gathered a lot of data from the forklifts to provide the customer with statistics which offered an easy way to find improvements. During the time at Toyota a migration was started, the goal of the migration was to turn the current system into cloud-based microservice architecture. This work also included feature flags so the customers were able to work undisturbed without getting interrupted with the new releases. The teams were involved in the whole flow from building the new system parallel to maintaining the old system with responsibility of tasks working with both new development and testing.",
    year: "2021",
    tags: [
      ".NET Core",
      "C#",
      "CSS",
      "SQL",
      "JavaScript",
      "Azure",
      "HTML",
      "GIT",
      "React",
      "MongoDB",
      "Service Fabric",
      "Jira",
      "CI/CD",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    company: "Visit Group",
    role: "Internship",
    description:
      "At Visit Group, I worked as an Intern with mainly focus on front-end development. The team I was assigned to worked closely with customers to offer a unique website. This was done using a CMS system called drupal.",
    year: "2019",
    tags: ["HTML", "CSS", "JavaScript", "Drupal", "PHP", "GIT"],
  },
  {
    company: ".Net",
    role: "Student / Lexicon Gothenburg",
    description:
      "The education covered everything from C# to the .NET framework. We focused a lot on test-driven development, learning how to write tests to guide our coding. Agile methods were a big part of the course too, helping us understand effective project management. I also got hands-on experience with SQL for working with databases.",
    year: "2018",
    tags: ["C#", ".NET", "SQL", "Agile"],
  },
  {
    company: "Game development",
    role: "Student / Örebros University",
    description:
      "Included various programming languages such as C, C++, C#, Python, and Java, as well as some database technology. In addition to this, I got to use Unity as a game engine and worked with models in Blender. I have also animated and created textures in Photoshop.",
    year: "2016",
    tags: ["C#", "C++", "Java", "Unity", "Blender", "Photoshop"],
  },
  {
    company: "",
    role: "",
    description: "",
    year: "2013",
    tags: [],
  },
];
