export const TAGS = {
  HTML: {
    name: "HTML",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
        <path
          fill="#ecedee"
          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
        />
        <path
          fill="#fff"
          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
      </svg>
      `,
  },
  CSS: {
    name: "CSS",
    icon: "",
  },
  TAILWIND: {
    name: "Tailwind",
    icon: "",
  },
  REACT: {
    name: "React",
    icon: "",
  },
  NODEJS: {
    name: "NodeJS",
    icon: "",
  },
};

export const projects = [
  {
    title: "Context Extension",
    imgUrl:
      "https://i.pinimg.com/originals/3a/31/dc/3a31dc8ba646dc1797829617d739d538.jpg",
    text: "Extensión de chrome que guarda las páginas que el usuario desee y las abre al mismo tiempo.",
    stack: [TAGS.HTML, TAGS.CSS, TAGS.REACT, TAGS.NODEJS, TAGS.TAILWIND],
    projectUrl: "http://www.google.com.ar",
    githubUrl: "http://www.github.com",
  },
  {
    title: "Keyboard game",
    imgUrl:
      "https://i.pinimg.com/originals/3a/31/dc/3a31dc8ba646dc1797829617d739d538.jpg",
    text: "Juego clásico de teclado, marca la cantidad de palabras por segundos que el usuario es capaz de escribir y tiene un sistema de scores que solo muestra los primeros tres.",
    stack: [TAGS.HTML],
    projectUrl: "http://www.google.com.ar",
    githubUrl: "http://www.github.com",
  },
];
