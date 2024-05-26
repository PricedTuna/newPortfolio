import { Box, Typography } from "@mui/material";
import ProjectComp from "./projects/ProjectComp";
import IconBootstrap from "./tecnologias/techIcons/IconBootstrap";
import { mainTechs } from "./projects/ProjectImage";
import IconJavascript from "./tecnologias/techIcons/IconJavascript";
import IconHtml5 from "./tecnologias/techIcons/IconHtml5";
import IconCss3 from "./tecnologias/techIcons/IconCss3";
import IconTypescript from "./tecnologias/techIcons/IconTypescript";

interface Project {
  textFirst?: boolean;
  projectTitle: string;
  projectContent: string;
  technologies: JSX.Element[];
  githubLink: string;
  siteLink: string;
  imageSrc: string;
  mainTech: mainTechs;
}

const projectIconSize: string = "3rem"

const stackWeb: JSX.Element[] = [
  <IconHtml5 height={projectIconSize} />,
  <IconCss3 height={projectIconSize} />,
  <IconJavascript height={projectIconSize} />,
]

const projects: Project[] = [
  {
    projectTitle: "To Do Web CRUD",
    projectContent: "To Do List básico web con las aplicaciones completas de un sistema CRUD utilizando el local storage y manipulación del DOM por medio de JavaScript",
    technologies: [
      ...stackWeb,
      <IconBootstrap height={projectIconSize} />,
    ],
    githubLink: "https://github.com/PricedTuna/ToDoListWeb",
    siteLink:   "https://heroic-queijadas-174d27.netlify.app/",
    imageSrc:   "src/assets/projectsImages/ToDoCRUD.png",
    mainTech:   "javascript"
  },
  {
    projectTitle: "Movie Land",
    projectContent: "Página que simula un CRUD de películas con funciones extras como la búsqueda de las tareas agregadas, presentación con tarjetas y completamente responsiva.",
    technologies: [
      ...stackWeb,
      <IconBootstrap height={projectIconSize} />,
      <IconTypescript height={projectIconSize} />,
    ],
    githubLink: "https://github.com/PricedTuna/MovieLand",
    siteLink: "https://fluffy-cactus-f13494.netlify.app/",
    imageSrc: "src/assets/projectsImages/movieLand.png",
    mainTech: "typescript"
  },
  {
    projectTitle: "Ejercicio bootstrap",
    projectContent: "Página de un ejercicio de Frontend Mentor implementado con Bootstrap para el diseño responsivo.",
    technologies: [
      ...stackWeb,
      <IconBootstrap height={projectIconSize} />,
    ],
    githubLink: "https://github.com/PricedTuna/NewsLetter",
    siteLink: "https://taupe-raindrop-39c264.netlify.app/",
    imageSrc: "src/assets/projectsImages/frontendMentor.png",
    mainTech: "bootstrap"
  },
  {
    projectTitle: 'Pagina "Alura Barber"',
    projectContent: 'Página para "Alura Barber" donde se dan a conocer sus servicios y productos (pagina web basica).',
    technologies: [
      <IconHtml5 height={projectIconSize} />,
      <IconCss3 height={projectIconSize} />,
    ],
    githubLink: "https://github.com/PricedTuna/Alura-barber",
    siteLink: "https://fantastic-starlight-e1f938.netlify.app/",
    imageSrc: "src/assets/projectsImages/barber.png",
    mainTech: "html"
  },
];

function Projects() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={12}
      marginBottom={12}
    >
      <Typography variant="h3" padding={3}>
        Proyectos:
      </Typography>
      {projects.map((project, index) => (
        <ProjectComp
          projectTitle={project.projectTitle}
          projectContent={project.projectContent}
          technologies={project.technologies}
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          imageSrc={project.imageSrc}
          mainTech={project.mainTech}
          textFirst={index % 2 === 0}
        />
      ))}
    </Box>
  );
}

export default Projects;
