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
  | "Laravel"
  | "Codeigniter"
  | "Mobile and web"
  | "Mobile, web and microservices";

export interface ProjectInterface {
  title: string;
  github?: string;
  url?: string;
  mainTech: TechType;
}

const projects: ProjectInterface[] = [
  {
    title: "Pear (CONFIDENTIAL)",
    github: "",
    mainTech: "Mobile, web and microservices",
  },
  {
    title: "FastDocs (CONFIDENTIAL)",
    github: "",
    mainTech: "Codeigniter",
  },
  {
    title: "EmpleaTracker (CONFIDENTIAL)",
    github: "",
    mainTech: "Mobile and web",
  },
  {
    title: "study cards (fastcards)",
    github: "https://github.com/PricedTuna/fastCard-spboot",
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
    title: "Movie Land",
    github: "https://github.com/PricedTuna/MovieLand",
    url: "https://fluffy-cactus-f13494.netlify.app/",
    mainTech: "TypeScript",
  },
  {
    title: "Alura Barber",
    github: "https://github.com/PricedTuna/Alura-barber",
    url: "https://fantastic-starlight-e1f938.netlify.app/",
    mainTech: "Stack web",
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
