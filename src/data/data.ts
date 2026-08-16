export interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  stack: string[];
}

const bemStack = ["HTML", "CSS", "BEM"];
const scssStack = ["HTML", "SCSS", "BEM", "Gulp"];

export const projects: Project[] = [
  {
    title: "E-commerce",
    description:
      "Maquetación de tienda online con catálogo de productos y carrito de compras.",
    image: "/projects/01-ecommerce.png",
    demoUrl: "https://proyecto-muebleria-monics.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/01-ecommerce",
    stack: bemStack,
  },
  {
    title: "Tienda de Audífonos",
    description:
      "Landing de producto para una tienda de audífonos gaming, con secciones de features y specs.",
    image: "/projects/02-audifonos.png",
    demoUrl: "https://techpro-gamers.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/02-audifonos",
    stack: bemStack,
  },
  {
    title: "Estudio de Arquitectura",
    description:
      "Sitio institucional para un estudio de arquitectura, con galería de proyectos y formulario de contacto.",
    image: "/projects/03-arquitectura.png",
    demoUrl: "https://proyecto-arquitectonico-pe.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/03-arquitectura",
    stack: bemStack,
  },
  {
    title: "Nucleus eWallet",
    description:
      "Landing page para una billetera digital, con secciones de beneficios y llamadas a la acción.",
    image: "/projects/04-nucleus-ewallet.png",
    demoUrl: "https://nucleus-ewallet-prox.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/04-nucleus-eWallet",
    stack: bemStack,
  },
  {
    title: "Cafetería",
    description:
      "Sitio para una cafetería con menú, presentación de productos y ubicación.",
    image: "/projects/05-cafeteria.png",
    demoUrl: "https://cafeteria-cafet.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/05-cafeteria",
    stack: scssStack,
  },
  {
    title: "Delivery App",
    description:
      "Landing de app de delivery de comida, con flujo de pedido y secciones de restaurantes destacados.",
    image: "/projects/06-deliveryapp.png",
    demoUrl: "https://app-comidos-plus.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/06-DeliveryApp",
    stack: scssStack,
  },
  {
    title: "Podcast App",
    description:
      "Interfaz de una app de podcasts, con reproductor, listado de episodios y perfiles de creadores.",
    image: "/projects/07-podcastapp.png",
    demoUrl: "https://podcasta-app.netlify.app/",
    repoUrl:
      "https://github.com/noldee/proyectos-html-css/tree/main/07-PodcastApp",
    stack: scssStack,
  },
];
