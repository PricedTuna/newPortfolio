import { Box } from "@mui/material";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import Project from "../components/projects/Project";
import BaseText from "../components/text/BaseText";

export type TechType =
  | "Stack web"
  | "Bootstrap"
  | "React"
  | "React Native"
  | "NestJs"
  | "JavaScript"
  | "TypeScript"
  | "MongoDB"
  | "Spring boot"
  | "Laravel";

export interface ProjectInterface {
  title: string;
  github: string;
  url?: string;
  mainTech: TechType;
}

const projects: ProjectInterface[] = [
  {
    title: "ToDo laravel",
    github: "https://github.com/PricedTuna/todo-laravel",
    mainTech: "Laravel",
  },
  {
    title: "study cards (fastcards)",
    github: "https://github.com/PricedTuna/fastCard-spboot",
    mainTech: "Spring boot",
  },
  {
    title: "ToDo spring",
    github: "https://github.com/PricedTuna/spring-todo",
    mainTech: "Spring boot",
  },
  {
    title: "Banchido",
    github: "https://github.com/PricedTuna/banchido",
    url: "https://banchido.netlify.app/",
    mainTech: "React",
  },
  {
    title: "BanchidoBackend",
    github: "https://github.com/PricedTuna/banchido",
    url: "https://banchidoback-production.up.railway.app/api",
    mainTech: "NestJs",
  },
  {
    title: "BanchidoDB",
    github: "https://github.com/PricedTuna/banchido",
    url: "https://banchidoback-production.up.railway.app/api",
    mainTech: "MongoDB",
  },
  {
    title: "RNative Exercise",
    github: "https://github.com/PricedTuna/Unicorns-practice",
    mainTech: "React Native",
  },
  {
    title: "To Do Web CRUD",
    github: "https://github.com/PricedTuna/ToDoListWeb",
    url: "https://heroic-queijadas-174d27.netlify.app/",
    mainTech: "JavaScript",
  },
  {
    title: "Movie Land",
    github: "https://github.com/PricedTuna/MovieLand",
    url: "https://fluffy-cactus-f13494.netlify.app/",
    mainTech: "TypeScript",
  },
  {
    title: "Bootstrap exercise",
    github: "https://github.com/PricedTuna/NewsLetter",
    url: "https://taupe-raindrop-39c264.netlify.app/",
    mainTech: "Bootstrap",
  },
  {
    title: "Bootstrap exercise 2",
    github: "https://github.com/PricedTuna/product",
    url: "https://gregarious-selkie-0539ad.netlify.app/",
    mainTech: "Bootstrap",
  },
  {
    title: "Bootstrap exercise 3",
    github: "https://github.com/PricedTuna/qr-challenge",
    url: "https://bright-rugelach-5f4838.netlify.app/",
    mainTech: "Bootstrap",
  },
  {
    title: "Alura Barber",
    github: "https://github.com/PricedTuna/Alura-barber",
    url: "https://fantastic-starlight-e1f938.netlify.app/",
    mainTech: "Stack web",
  },
  {
    title: "Web Calculator",
    github: "https://github.com/PricedTuna/calculadora",
    url: "https://cheerful-pegasus-fad1b9.netlify.app/",
    mainTech: "JavaScript",
  },
  {
    title: "Weather cite",
    github: "https://github.com/PricedTuna/werather_cite",
    url: "https://animated-narwhal-dc6704.netlify.app/",
    mainTech: "JavaScript",
  },
];

function ProjectsView() {
  return (
    <AnimateViewWrapper>
      <Box display="flex" flexDirection="column" gap={4.5}>
        <Box>
          <BaseText text="Some projects cannot be publicly displayed due to confidentiality agreements and privacy policies." sx={{fontWeight: "300", fontSize: "1rem", textAlign: "center"}} />
        </Box>
        {projects.map(({ title, github, mainTech, url }) => (
          <Project title={title} github={github} mainTech={mainTech} url={url} />
        ))}
      </Box>
    </AnimateViewWrapper>
  );
}

export default ProjectsView;
