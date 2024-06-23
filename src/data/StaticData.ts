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
];