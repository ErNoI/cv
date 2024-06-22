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

import { skillProps } from '@/components/SkillList';

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
  Me
}

export const skillData: skillProps[] = [
  {
    imgPath: Images.Net,
    skillName: ".Net",
  },
  {
    imgPath: Images.Js,
    skillName: "JavaScript",
  },
  {
    imgPath: Images.Html,
    skillName: "Html",
  },
  {
    imgPath: Images.Css2,
    skillName: "Css",
  },  
  {
    imgPath: Images.Git,
    skillName: "Git",
  },  
  {
    imgPath: Images.TS,
    skillName: "TypeScript",
  },  
  {
    imgPath: Images.Devops,
    skillName: "Devops",
  },
  {
    imgPath: Images.React,
    skillName: "React",
  },
  {
    imgPath: Images.Postgres,
    skillName: "Postgres",
  },
];