import { Box } from "@mui/material";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import Project from "../components/projects/Project";
import BaseText from "../components/text/BaseText";
import { useTranslate } from "../hooks/useTranslate";
import { useState } from "react";
import { ProjectModal } from "./components/ProjectModal.tsx";

export type TechType =
  | "Stack web"
  | "Bootstrap"
  | "React"
  | "NestJs"
  | "JavaScript"
  | "TypeScript"
  | "NoSQL database"
  | "SQL database"
  | "Microservices"
  | "React Native"
  | "";

export interface ProjectInterface {
  title: string;
  github?: string;
  url?: string;
  mainTech: TechType;
  allTechs: TechType[];
  description: string;
}

const projects: ProjectInterface[] = [
  {
    "title": "(CONFIDENTIAL) Pear",
    "description": "(CONFIDENTIAL) Pear",
    "allTechs": ["Stack web", "React", "React Native", "SQL database", "Microservices", "NestJs"],
    "mainTech": "Microservices",
    "github": "",
    "url": ""
  },
  {
    "title": "(CONFIDENTIAL) Balanza fizcal",
    "description": "(CONFIDENTIAL) Balanza fizcal",
    "allTechs": ["Stack web", "React", "TypeScript"],
    "mainTech": "React",
    "github": "",
    "url": ""
  },
  {
    "title": "IS time clocker (frontend)",
    "description": "IS time clocker (frontend)",
    "allTechs": ["React", "TypeScript", "Stack web"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/isfront",
    "url": ""
  },
  {
    "title": "IS time clocker (backend)",
    "description": "IS time clocker (backend)",
    "allTechs": ["NestJs", "TypeScript", "SQL database"],
    "mainTech": "NestJs",
    "github": "https://github.com/PricedTuna/rrhhback",
    "url": ""
  },
  {
    "title": "Uas documents",
    "description": "Uas documents",
    "allTechs": ["Stack web", "TypeScript", "React", "NoSQL database"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/milipage",
    "url": "https://uas-documents.netlify.app/"
  },
  {
    "title": "Banchido (frontend)",
    "description": "Banchido (frontend)",
    "allTechs": ["Stack web", "TypeScript", "React"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/banchido",
    "url": "https://banchido.netlify.app/"
  },
  {
    "title": "Banchido (backend)",
    "description": "Banchido (backend)",
    "allTechs": ["NestJs", "NoSQL database", "TypeScript"],
    "mainTech": "NestJs",
    "github": "https://github.com/PricedTuna/banChidoBack",
    "url": ""
  },
  {
    "title": "Financeculator",
    "description": "Financeculator",
    "allTechs": ["Stack web", "TypeScript", "React"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/CalcIngFinanciera",
    "url": "https://financeculator.netlify.app/"
  },
  {
    "title": "Weathere cite",
    "description": "Weathere cite",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/werather_cite",
    "url": "https://animated-narwhal-dc6704.netlify.app/"
  },
  {
    "title": "Movie land",
    "description": "Movie land",
    "allTechs": ["Stack web", "TypeScript"],
    "mainTech": "TypeScript",
    "github": "https://github.com/PricedTuna/MovieLand",
    "url": "https://fluffy-cactus-f13494.netlify.app/"
  },
  {
    "title": "Inguntos",
    "description": "Inguntos",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/conjuntosOperations",
    "url": "https://inguntos.netlify.app/"
  },
  {
    "title": "ToDoList (local storage)",
    "description": "ToDoList (local storage)",
    "allTechs": ["Stack web", "TypeScript", "Bootstrap"],
    "mainTech": "TypeScript",
    "github": "https://github.com/PricedTuna/ToDoListWeb",
    "url": "https://local-todo-storaged.netlify.app/"
  },
  {
    "title": "ToDoList (cache)",
    "description": "ToDoList (cache)",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://only-simple-todo.netlify.app/"
  },
  {
    "title": "frontend-mentor QR",
    "description": "frontend-mentor QR",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://bright-rugelach-5f4838.netlify.app/"
  },
  {
    "title": "frontend-mentor Product card",
    "description": "frontend-mentor Product card",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://gregarious-selkie-0539ad.netlify.app/"
  },
  {
    "title": "Alura barber page",
    "description": "Alura barber page",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/Alura-barber",
    "url": "https://fantastic-starlight-e1f938.netlify.app/"
  }
]

function ProjectsView() {
  const { getTranslation } = useTranslate();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState<ProjectInterface>()

  const handleOnClose = () => setIsProjectModalOpen(false);

  const handleOnClickProject = (project: ProjectInterface) => {
    setProjectSelected(project);
    setIsProjectModalOpen(true);
  }

  return (
    <AnimateViewWrapper>
      <Box display="flex" flexDirection="column">
        <Box>
          <BaseText
            text={getTranslation("projectKey.confidentialText")}
            sx={{ fontWeight: "300", fontSize: "1rem", textAlign: "center" }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {projects.map((project) => (
            <Project project={project} onCLickProject={handleOnClickProject}/>
          ))}
        </Box>
      </Box>

      <ProjectModal project={projectSelected} isOpen={isProjectModalOpen} onClose={handleOnClose}/>
    </AnimateViewWrapper>
  );
}

export default ProjectsView;
