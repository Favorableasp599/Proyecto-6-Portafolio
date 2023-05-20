import {
  Settings,
  CropRotate,
  PieChart,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "Hola!",
    name: "Mi nombre es Gibran",
    post: "Y soy",
    design: "Desarrollador Web Full Stack",
    desc: "",
  },
];
export const about = [
  {
    desc: "",
    desc1: "",
    cover: "./images/man.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Desarrollador front-end",
    desc: "Lenguajes de programacion que manejo: HTML,CSS,JavaScript,Git Herramientas de desarrollo: Bootstrap,Github,React,Chrome DevTool,Figma,MongoDB,NodeJS",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Código Limpio",
    desc: "Yo manejo la  filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender.",
  },
  {
    id: 3,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Manejo la biblioteca de componentes de interfaz de usuario para React, diseñada para ayudar a los desarrolladores a construir aplicaciones web modernas, siguiendo los principios de Material Design, el sistema de diseño creado por Google",
  },
];

export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
    githubLink: "https://github.com/Favorableasp599/PROYECTO_1",
    link: "https://lucky-rabanadas-d3bfa3.netlify.app",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
    githubLink: "https://github.com/Favorableasp599/PROYECTO-2-Aplicacion-CRUD",
    link: "https://dynamic-centaur-180699.netlify.app",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
    githubLink: "https://github.com/Favorableasp599/Proyecto-3-Dashboard",
    link: "https://tranquil-macaron-d430fe.netlify.app/",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
    githubLink:
      "https://github.com/Favorableasp599/PROYECTO-4-Aplicaci-n-Restaurante-",
    link: "https://Favorableasp599.github.io/PROYECTO-4-Aplicaci-n-Restaurante-",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
    githubLink:
      "https://github.com/Favorableasp599/PROYECTO-5-Aplicacion-de-Comercio-Electronico",
    link: "https://witty-ruby-alligator.cyclic.app",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
    githubLink: "https://github.com/Favorableasp599/Proyecto-6-Portafolio",
    link: "https://dulcet-cocada-868247.netlify.app/",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
