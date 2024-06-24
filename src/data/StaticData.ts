import Html from "@assets/HTML.png";
import Js from "@/assets/JSlogo.png";
import Css2 from "@/assets/CSS.png";
import Net from "@/assets/Net.png";
import Git from "@/assets/Git.png";
import TS from "@/assets/TS.png";
import Devops from "@/assets/Devops.png";
import React from "@/assets/React.png";
import Postgres from "@/assets/postgres.png";
import Me from "@/assets/Me.png";
import Mongo from "@/assets/Mongo.png";

import { skillProps } from "@/sections/Skills";
import { AssignmentProps } from "@/components/Assignment";

export const Images = {
  Html,
  Js,
  Css2,
  Net,
  Git,
  TS,
  Devops,
  React,
  Postgres,
  Me,
  Mongo,
};

export const skillData: skillProps[] = [
  {
    imgPath: Images.Net,
    skillName: ".Net",
    percentage: 60,
  },
  {
    imgPath: Images.Js,
    skillName: "JavaScript",
    percentage: 80,
  },
  {
    imgPath: Images.Html,
    skillName: "Html",
    percentage: 90,
  },
  {
    imgPath: Images.Css2,
    skillName: "CSS",
    percentage: 80,
  },
  {
    imgPath: Images.Git,
    skillName: "Git",
    percentage: 80,
  },
  {
    imgPath: Images.TS,
    skillName: "TypeScript",
    percentage: 80,
  },
  {
    imgPath: Images.Devops,
    skillName: "Devops",
    percentage: 70,
  },
  {
    imgPath: Images.React,
    skillName: "React",
    percentage: 80,
  },
  {
    imgPath: Images.Postgres,
    skillName: "Postgres",
    percentage: 40,
  },
  {
    imgPath: Images.Mongo,
    skillName: "Mongodb",
    percentage: 30,
  },
  {
    imgPath: "",
    skillName: "NodeJS",
    percentage: 60,
  },
  {
    imgPath: "",
    skillName: "TailwindCSS",
    percentage: 70,
  },
  {
    imgPath: "",
    skillName: "RestAPI",
    percentage: 60,
  },
  {
    imgPath: "",
    skillName: "Microservices",
    percentage: 70,
  },
];

export const assignmentData: AssignmentProps[] = [
  {
    company: "Tromb",
    role: "Fullstack Developer / Consultant Volvo",
    description:
      "At VGCS I joined a new team that was assigned the development of a new microservice to address material related challenges within a quarry. The core focus of this assignment was to create a microservice that would provide solutions to the material problems faced by the quarry. These material challenges might include optimizing material extraction, tracking material inventory, monitoring material quality, and ensuring efficient logistics within the quarry. Technical keywords: React, Nest.Js, Prisma, GraphQL, PostgresQL, Docker, Devops, Microservice",
    year: "2024",
  },
  {
    company: "Friday",
    role: "Game Developer",
    description:
      "At Friday I started working with a new multiplayer horror VR game in Unreal engine 4. The team was developing the whole game logic from the ground - up close together with potential users. The work also involved developing AI functionalities and balanced maps to create good user experiences. I focused on developing the UI and world content, inviting users to really feel the game coming to life through the VR glasses.",
    year: "2021",
  },
  {
    company: "Toyota Material Handling",
    role: "Backend Developer",
    description:
      "At Toyota I worked in the telematics department to further develop Toyotas existing systems. The system was a way for customers to improve their warehouse in every possible way. Gathered a lot of data from the forklifts to provide the customer with statistics which offered an easy way to find improvements. During the time at Toyota a migration was started, the goal of the migration was to turn the current system into cloud-based microservice architecture. This work also included feature flags so the customers were able to work undisturbed without getting interrupted with the new releases. The teams were involved in the whole flow from building the new system parallel to maintaining the old system with responsibility of tasks working with both new development and testing.",
    year: "2019",
  },
  {
    company: "Visit-group",
    role: "Internship",
    description:
      "At Visit Group, I worked as an Intern with mainly focus on front-end development. The team I was assigned to worked closely with customers to offer a unique website. This was done using a CMS system called drupal.",
    year: "2018",
  },
  {
    company: ".Net",
    role: "Student / Lexicon Gothenburg",
    description:
      "The education covered everything from C# to the .NET framework. We focused a lot on test-driven development, learning how to write tests to guide our coding. Agile methods were a big part of the course too, helping us understand effective project management. I also got hands-on experience with SQL for working with databases.",
    year: "2016",
  },
  {
    company: "Game-development",
    role: "Student / Örebros University",
    description:
      "Included various programming languages such as C, C++, C#, Python, and Java, as well as some database technology. In addition to this, I got to use Unity as a game engine and worked with models in Blender. I have also animated and created textures in Photoshop.",
    year: "2013",
  },
];
