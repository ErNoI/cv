import Html from '@assets/HTML.png';
import Js from '@/assets/JSlogo.png';
import Css2 from '@/assets/CSS.png';
import Net from '@/assets/Net.png';
import Git from '@/assets/Git.png';
import TS from '@/assets/TS.png';
import Devops from '@/assets/Devops.png';
import React from '@/assets/React.png';
import Postgres from '@/assets/postgres.png';
import Me from '@/assets/Me.png';
import Mongo from '@/assets/Mongo.png';

import { skillProps } from '@/sections/Skills';
import { AssignmentProps } from '@/components/Assignment';

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
  Mongo
}

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
    role: "Fullstack Developer",
    description:
      "Lorem Ipsum is simply dummy text of the ping industryke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2024",
  },
  {
    company: "Friday",
    role: "Fullstack Developer",
    description:
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2021",
  },
  {
    company: "Toyota Material Handling",
    role: "Backend Developer",
    description:
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2019",
  },
  {
    company: "Visit-group",
    role: "Internship",
    description:
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2018",
  },
  {
    company: ".Net",
    role: "student / Lexicon Gothenburg",
    description:
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2016",
  },
  {
    company: "Game-development",
    role: "student / Örebros University",
    description:
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    year: "2013",
  },
  
];
