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
 import space_tourism from '../src/assets/projects/space_tourism.png'
 import portfolio from '../src/assets/projects/portfolio.png' 
 import ip_address_tracker from '../src/assets/projects/ip_address_tracker.png'

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
        "name": "TypeScript",
        "src": typescript  
    },
    {
        "name": "ReactJS",
        "src": react  
    },
    {
        "name": "VueJS",
        "src": vue  
    },
    {
        "name": "jQuery",
        "src": jquery  
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

 export const PROJECTS_DATA = [ 
    {
        "name": "space_tourism",
        "type": "Front-End",
        "stacks": [{
            "name": "VueJS",
            "src": vue  
        },
        {
            "name": "TypeScript",
            "src": typescript  
        },
        {
            "name": "Sass",
            "src": sass  
        },
        ], 
        "src": space_tourism,
        "github": "https://github.com/PingrisAlexis/space-tourism",
        "url": "https://pingrisalexis-space-tourism.netlify.app/",
        "alt": "Space Tourism",
        "isHost": true,
        "isPersonnalProject": true
    },
    {
        "name": "portfolio",
        "type": "Front-End",
        "stacks": [{
            "name": "ReactJS",
            "src": react  
        },
        {
            "name": "Sass",
            "src": sass  
        },
        ], 
        "src": portfolio,
        "github": "https://github.com/PingrisAlexis/portfolio",
        "url": "https://pingrisalexis-portfolio.netlify.app/",
        "alt": "Portfolio",
        "isHost": true,
        "isPersonnalProject": true
    },
    {
        "name": "ip_address_tracker",
        "type": "Front-End",
        "stacks": [{
            "name": "VueJS",
            "src": vue  
        },
        {
            "name": "TypeScript",
            "src": typescript  
        },
        {
            "name": "Sass",
            "src": sass  
        },
        ], 
        "src": ip_address_tracker,
        "github": "https://github.com/PingrisAlexis/ip-address-tracker",
        "url": "https://pingrisalexis-ip-address-tracker.netlify.app/",
        "alt": "IP Address Tracker",
        "isHost": true, 
        "isPersonnalProject": true
    }
    ,
    {
        "name": "Kasa",
        "type": "Front-End",
        "stacks": [{
            "name": "ReactJS",
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
        "isPersonnalProject": false
    },
    {
        "name": "SoPekocko",
        "type": "Back-End",
        "stacks": [ {
            "name": "NodeJS",
            "src": node  
        },
        {
            "name": "Express",
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
        "isPersonnalProject": false     
    },
    {
        "name": "SportSee",
        "type": "Front-End",
        "stacks": [{
            "name": "ReactJS",
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
        "isPersonnalProject": false   
        },
        {
            "name": "fisheye",
            "type": "Front-End",
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
            "isPersonnalProject": false  
        },
        {
        "name": "les_petits_plats",
        "type": "Front-End",
        "stacks": [{
                "name": "HTML 5",
                "src": html5  
            },
            {
                "name": "Bootstrap",
                "src": bootstrap

            },
            {
                "name": "JavaScript",
                "src": javascript    
        }], 
        "src": les_petits_plats,
        "github": "https://github.com/PingrisAlexis/Les-Petits-Plats/tree/algorithm_1",
        "url": "https://pingrisalexis-les-petits-plats.netlify.app/",
        "alt": "Les Petits Plats",
        "isHost": true,  
        "isPersonnalProject": false
    },
    {
        "name": "groupomania",
        "type": "Full-Stack",
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
        "isPersonnalProject": false    
        },
        {
        "name": "learn_at_home",
        "type": "Design",
        "stacks": [{
            "name": "Figma",
            "src": figma  
        }], 
        "src": learn_at_home,
        "github": "https://github.com/PingrisAlexis/Learn-at-Home",
        "url": "https://www.figma.com/file/odVgC9TotKUgraThMntoFN/Dev4U-projet-Learn%40Home?type=design&node-id=28-89&mode=design&t=5KkwzY4Auh0KSakN-0",
        "alt": "Learn@Home",
        "isHost": true,  
        "isPersonnalProject": false   
    },
    {
        "name": "hrnet",
        "type": "Front-End",
        "stacks": [{
            "name": "jQuery",
            "src": jquery  
        },
        {
            "name": "TypeScript",
            "src": typescript  
        },
        {
            "name": "ReactJS",
            "src": react  
        },
        ],
        "src": hrnet,
        "github": "https://github.com/PingrisAlexis/HRnet-part1",
        "url": "https://pingrisalexis-hrnet.netlify.app/",
        "alt": "HRnet",
        "isHost": true,     
    },
    {
        "name": "billed",
        "type": "Front-End",
        "stacks": [{
            "name": "Jest",
            "src": jest  
        }],
        "src": billed,
        "github": "https://github.com/PingrisAlexis/Billed",
        "url": "",
        "alt": "billed",
        "isHost": false,    
        "isPersonnalProject": false 
    },
    {
        "name": "argentbank",
        "type": "Front-End",
        "stacks": [{
            "name": "ReactJS",
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
        "isPersonnalProject": false  
    },
    {
        "name": "gameon",
        "type": "Front-End",
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
        "isPersonnalProject": false  
    },
    {
        "name": "la_chouette_agence",
        "type": "SEO",
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
        "isPersonnalProject": false    
    }
];