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
    desc: "Mi nombre es Gibran Cambron Garrido naci en la ciudad de mexico y como un graduado de la Universidad del Valle de Mexico, con un título de en ingeniería Mecatronica, he realizado prácticas y trabajos en diferentes sectores de la comuninad industrial , comunidad mercantil y hotelera como la cadena de hoteles grupo posadas y en la industria de la cerveza grupo modelo. Estos puestos no solo me han permitido desarrollar experiencia en diferentes campos, sino también un número de habilidades valiosas en diferentes sectores. Durante mi tiempo de estudio siempre me llamo la atencion la programacion y su mundo de ahí el porque empeze a volver a estudiar y completar un bootcamp sobre ser desarrollador Full-Stack",
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
    name: "Proyecto-1",
    category: "desing",
    title: "Primera Pagina Web",
    githubLink: "https://github.com/Favorableasp599/PROYECTO_1",
    link: "https://lucky-rabanadas-d3bfa3.netlify.app",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Proyecto-2",
    category: "development",
    title: "CRUD",
    githubLink: "https://github.com/Favorableasp599/PROYECTO-2-Aplicacion-CRUD",
    link: "https://dynamic-centaur-180699.netlify.app",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Proyecto-3",
    category: "development",
    title: "Dashboard",
    githubLink: "https://github.com/Favorableasp599/Proyecto-3-Dashboard",
    link: "https://tranquil-macaron-d430fe.netlify.app/",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Proyecto-4",
    category: "marketing",
    title: "Aplicacion Restaurante",
    githubLink:
      "https://github.com/Favorableasp599/PROYECTO-4-Aplicaci-n-Restaurante-",
    link: "https://Favorableasp599.github.io/PROYECTO-4-Aplicaci-n-Restaurante-",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Proyecto-5",
    category: "marketing",
    title: "Ecommerce App",
    githubLink:
      "https://github.com/Favorableasp599/PROYECTO-5-Aplicacion-de-Comercio-Electronico",
    link: "https://witty-ruby-alligator.cyclic.app",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Proyecto-6",
    category: "design",
    title: "Portafolio",
    githubLink: "https://github.com/Favorableasp599/Proyecto-6-Portafolio",
    link: "https://aquamarine-hamster-cd0c78.netlify.app",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Vergel de Coyoacán, Tlalpan,",
    text2: "Ciudad de México, CDMX",
  },
  {
    icon: <PhoneIphone />,
    text1: "55-86-17-17-06",
  },
  {
    icon: <EmailOutlined />,
    text1: "gibrangc10@gmail.com",
  },
];
export const social = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/gibran.cambron/",
  },
  {
    icon: <Twitter />,
    link: " https://twitter.com/Favorable_XP",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/camgibran/",
  },
  {
    icon: <YouTube />,
    link: "https://www.youtube.com/channel/UCpQRxp_aGw5dRm_lqidnUgQ",
  },
];
