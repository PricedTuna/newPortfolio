import { Box } from "@mui/material";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import Project from "../components/projects/Project";
import BaseText from "../components/text/BaseText";

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
    "description": "A confidential project. This is a microservices architecture solution with a mobile, web and desktop apps, in development yet, this is a international level solution.",
    "allTechs": ["Stack web", "React", "React Native", "SQL database", "Microservices", "NestJs"],
    "mainTech": "Microservices",
    "github": "",
    "url": ""
  },
  {
    "title": "(CONFIDENTIAL) Balanza fizcal",
    "description": "A confidential project. This is a finance management and taxes calculator wich works in private enterprises and operate at national level (México)",
    "allTechs": ["Stack web", "React", "TypeScript"],
    "mainTech": "React",
    "github": "",
    "url": ""
  },
  {
    "title": "IS time clocker (frontend)",
    "description": "A page to registry the hourary for your employees, entry hour and aout hour with categories and excel reports.",
    "allTechs": ["React", "TypeScript", "Stack web"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/isfront",
    "url": ""
  },
  {
    "title": "IS time clocker (backend)",
    "description": "The backend for 'IS time clocker (back)'",
    "allTechs": ["NestJs", "TypeScript", "SQL database"],
    "mainTech": "NestJs",
    "github": "https://github.com/PricedTuna/rrhhback",
    "url": ""
  },
  {
    "title": "Uas documents",
    "description": "A page to simulate the digitalization and automatization the process to solicitate documents in all the university, you can registry and solicitate the aviable documents",
    "allTechs": ["Stack web", "TypeScript", "React", "NoSQL database"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/milipage",
    "url": "https://uas-documents.netlify.app/"
  },
  {
    "title": "Banchido (frontend)",
    "description": "A page to test 'Banchido', the digital bank for the 'Facultad de ingeniería' in the UAS, this is the frontend for all the project, you can do all the tasks like in any other digital bank",
    "allTechs": ["Stack web", "TypeScript", "React"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/banchido",
    "url": "https://banchido.netlify.app/"
  },
  {
    "title": "Banchido (backend)",
    "description": "The backend for the 'Banchido' project",
    "allTechs": ["NestJs", "NoSQL database", "TypeScript"],
    "mainTech": "NestJs",
    "github": "https://github.com/PricedTuna/banChidoBack",
    "url": ""
  },
  {
    "title": "Financeculator",
    "description": "A page to calculate all the finance operations to check the viability in the time for any project, this will help you to know if is a rentable and sustainable project",
    "allTechs": ["Stack web", "TypeScript", "React"],
    "mainTech": "React",
    "github": "https://github.com/PricedTuna/CalcIngFinanciera",
    "url": "https://financeculator.netlify.app/"
  },
  {
    "title": "Weathere cite",
    "description": "A simple weather cite to practice how to fetch an API and practice promises in Javascript, this page changes his bg color respect the temperature of the city fetched (blue: cold, yellow: hot)",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/werather_cite",
    "url": "https://animated-narwhal-dc6704.netlify.app/"
  },
  {
    "title": "Movie land",
    "description": "A page to save all your favorites movies (its saved in local storage) and search some movies",
    "allTechs": ["Stack web", "TypeScript"],
    "mainTech": "TypeScript",
    "github": "https://github.com/PricedTuna/MovieLand",
    "url": "https://fluffy-cactus-f13494.netlify.app/"
  },
  {
    "title": "Inguntos",
    "description": "A web page to test the 'Operaciones de conjuntos' in a simple way",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/conjuntosOperations",
    "url": "https://inguntos.netlify.app/"
  },
  {
    "title": "ToDoList (local storage)",
    "description": "A simple to do list with all tasks saved in local storage",
    "allTechs": ["Stack web", "TypeScript", "Bootstrap"],
    "mainTech": "TypeScript",
    "github": "https://github.com/PricedTuna/ToDoListWeb",
    "url": "https://local-todo-storaged.netlify.app/"
  },
  {
    "title": "ToDoList (cache)",
    "description": "A simple to do list with all tasks saved in cache",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://only-simple-todo.netlify.app/"
  },
  {
    "title": "frontend-mentor QR",
    "description": "A simple challenge from frontend-mentor",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://bright-rugelach-5f4838.netlify.app/"
  },
  {
    "title": "frontend-mentor Product card",
    "description": "A simple challenge from frontend-mentor",
    "allTechs": ["Stack web", "Bootstrap"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna",
    "url": "https://gregarious-selkie-0539ad.netlify.app/"
  },
  {
    "title": "Alura barber page",
    "description": "A simple page for a barber, created in the 'Alura Oracle Next Education' project.",
    "allTechs": ["Stack web"],
    "mainTech": "Stack web",
    "github": "https://github.com/PricedTuna/Alura-barber",
    "url": "https://fantastic-starlight-e1f938.netlify.app/"
  }
]

function ProjectsView() {
  return (
    <AnimateViewWrapper>
      <Box display="flex" flexDirection="column" gap={4.5}>
        <Box>
          <BaseText text="Some projects cannot be publicly displayed due to confidentiality agreements and privacy policies." sx={{fontWeight: "300", fontSize: "1rem", textAlign: "center"}} />
        </Box>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </Box>
    </AnimateViewWrapper>
  );
}

export default ProjectsView;
