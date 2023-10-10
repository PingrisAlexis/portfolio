 import html5 from '../src/assets/skills/html5.svg'
 import css3 from '../src/assets/skills/css3.svg'
 import sass from '../src/assets/skills/sass.svg'
 import bootstrap from '../src/assets/skills/bootstrap.svg'
 import tailwind from '../src/assets/skills/tailwind.svg'
 import javascript from '../src/assets/skills/javascript.svg'
 import typescript from '../src/assets/skills/typescript.svg'
 import react from '../src/assets/skills/react.svg'
 import vue from '../src/assets/skills/vue.svg'
 import node from '../src/assets/skills/node.svg'
 import express from '../src/assets/skills/express.svg'
 import java from '../src/assets/skills/java.svg'
 import mongodb from '../src/assets/skills/mongodb.svg'
 import mysql from '../src/assets/skills/mysql.svg'
 import git from '../src/assets/skills/git.svg'
 import bash from '../src/assets/skills/bash.svg'
 import figma from '../src/assets/skills/figma.svg'
 import jquery from '../src/assets/skills/jquery.svg'
 import jest from '../src/assets/skills/jest.svg'
 import redux from '../src/assets/skills/redux.svg'

 import kasa from '../src/assets/projects/kasa.png'
 import sopeckoko from '../src/assets/projects/sopeckoko.png'
 import sportsee from '../src/assets/projects/sportsee.svg'
 import les_petits_plats from '../src/assets/projects/les_petits_plats.png'
 import groupomania from '../src/assets/projects/groupomania.png'
 import learn_at_home from '../src/assets/projects/learn_at_home.png' 
 import fisheye from '../src/assets/projects/fisheye.png' 
 import hrnet from '../src/assets/projects/hrnet.png' 
 import billed from '../src/assets/projects/billed.png'
 import argentbank from '../src/assets/projects/argentbank.png'
 import gameon from '../src/assets/projects/gameon.png'
 import la_chouette_agence from '../src/assets/projects/la_chouette_agence.png'

 export  const SKILLS_DATA = [ 
    {
        "name": "HTML 5",
        "src": html5          
    },
    {
        "name": "CSS 3",
        "src": css3  
    },
    {
        "name": "SASS",
        "src": sass  
    },
    {
        "name": "Bootstrap",
        "src": bootstrap  
    },
    {
        "name": "Tailwind",
        "src": tailwind  
    },
    {
        "name": "JavaScript",
        "src": javascript  
    },
    {
        "name": "jQuery",
        "src": jquery  
    },
    {
        "name": "TypeScript",
        "src": typescript  
    },
    {
        "name": "React",
        "src": react  
    },
    {
        "name": "Vue",
        "src": vue  
    },
    {
        "name": "NodeJS",
        "src": node  
    },
    {
        "name": "Express",
        "src": express  
    },
    {
        "name": "Java",
        "src": java  
    },
    {
        "name": "MongoDB",
        "src": mongodb  
    },
    {
        "name": "MySQL",
        "src": mysql  
    },
    {
        "name": "Git",
        "src": git  
    },
    {
        "name": "Bash",
        "src": bash  
    },
];

export  const PROJECTS_DATA = [ 
    {
        "name": "Kasa",
        "stacks": [{
            "name": "React",
            "src": react  
        },
        {
            "name": "Sass",
            "src": sass  
        }], 
        "src": kasa,
        "github": "https://github.com/PingrisAlexis/Kasa",
        "url": "https://pingrisalexis-kasa.netlify.app/",
        "alt": "Kasa",
        "isHost": true,     
    },
    {
        "name": "SoPekocko",
        "stacks": [ {
            "name": "NodeJS",
            "src": node  
        },
        {
            "name": "express",
            "src": express  
        },
        {
            "name": "MongoDB",
            "src": mongodb  
        }], 
        "src": sopeckoko,
        "github": "https://github.com/PingrisAlexis/SoPeckoko",
        "url": "",
        "alt": "SoPekocko",
        "isHost": false,     
    },
    {
        "name": "SportSee",
        "stacks": [{
            "name": "React",
            "src": react  
        },
        {
            "name": "Sass",
            "src": sass  
        }], 
        "src": sportsee,
        "github": "https://github.com/PingrisAlexis/SportSee",
        "url": "https://pingrisalexis-sportsee.netlify.app/user/12",
        "alt": "SportSee",
        "isHost": true,     
        },
        {
        "name": "les_petits_plats",
        "stacks": [{
            "name": "JavaScript",
            "src": javascript  
        },
        {
        "name": "Bootstrap",
        "src": bootstrap  
        }], 
        "src": les_petits_plats,
        "github": "https://github.com/PingrisAlexis/Les-Petits-Plats/tree/algorithm_1",
        "url": "https://pingrisalexis-les-petits-plats.netlify.app/",
        "alt": "Les Petits Plats",
        "isHost": true,     
    },
    {
        "name": "groupomania",
        "stacks": [{
            "name": "VueJS",
            "src": vue  
        },
        {
            "name": "NodeJS",
            "src": node  
        },
        {
            "name": "Express",
            "src": express  
        },
        {
            "name": "MySQL",
            "src": mysql  
        }],
        "src": groupomania,
        "github": "https://github.com/PingrisAlexis/Groupomania",
        "url": "",
        "alt": "Groupomania",
        "isHost": false,     
        },
        {
        "name": "learn_at_home",
        "stacks": [{
            "name": "Figma",
            "src": figma  
        }], 
        "src": learn_at_home,
        "github": "https://github.com/PingrisAlexis/Learn-at-Home",
        "url": "https://www.figma.com/file/odVgC9TotKUgraThMntoFN/Dev4U-projet-Learn%40Home?type=design&node-id=28-89&mode=design&t=5KkwzY4Auh0KSakN-0",
        "alt": "Learn@Home",
        "isHost": true,     
    },
    {
        "name": "fisheye",
        "stacks": [{
            "name": "HTML 5",
            "src": html5  
        },
        {
            "name": "CSS 3",
            "src": css3  
        },
        {
            "name": "JavaScript",
            "src": javascript  
        }],
        "src": fisheye,
        "github": "https://github.com/PingrisAlexis/FishEye",
        "url": "https://pingrisalexis-fisheye.netlify.app/",
        "alt": "Learn@Home",
        "isHost": true,     
    },
    {
        "name": "hrnet",
        "stacks": [{
            "name": "jQuery",
            "src": jquery  
        },
        {
            "name": "React",
            "src": react  
        },
        {
            "name": "TypeScript",
            "src": typescript  
        }],
        "src": hrnet,
        "github": "https://github.com/PingrisAlexis/HRnet-part1",
        "url": "https://pingrisalexis-hrnet.netlify.app/",
        "alt": "HRnet",
        "isHost": true,     
    },
    {
        "name": "billed",
        "stacks": [{
            "name": "Jest",
            "src": jest  
        }],
        "src": billed,
        "github": "https://github.com/PingrisAlexis/Billed",
        "url": "",
        "alt": "HRnet",
        "isHost": false,     
    },
    {
        "name": "argentbank",
        "stacks": [{
            "name": "React",
            "src": react  
        },
        {
            "name": "Redux",
            "src": redux  
        }],
        "src": argentbank,
        "github": "https://github.com/PingrisAlexis/ArgentBank",
        "url": "",
        "alt": "Argent Bank",
        "isHost": false,     
    },
    {
        "name": "gameon",
        "stacks": [{
            "name": "HTML 5",
            "src": html5  
        },
        {
            "name": "CSS 3",
            "src": css3  
        },
        {
            "name": "JavaScript",
            "src": javascript  
        }],
        "src": gameon,
        "github": "https://github.com/PingrisAlexis/GameOn",
        "url": "https://pingrisalexis-gameon.netlify.app/",
        "alt": "Game On",
        "isHost": true,     
    },
    {
        "name": "la_chouette_agence",
        "stacks": [{
            "name": "HTML 5",
            "src": html5  
        },
        {
            "name": "CSS 3",
            "src": css3  
        },
        {
            "name": "JavaScript",
            "src": javascript  
        }],
        "src": la_chouette_agence,
        "github": "https://github.com/PingrisAlexis/La-Chouette-Agence",
        "url": "https://pingrisalexis-la-chouette-agence.netlify.app/",
        "alt": "La Chouette Agence",
        "isHost": true,     
    }
];