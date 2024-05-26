import { Box, Grid, Typography } from "@mui/material";
import Tech from "./Tech";
import IconBxlReact from "./techIcons/IconBxlReact";
import IconHtml5 from "./techIcons/IconHtml5";
import IconCss3 from "./techIcons/IconCss3";
import IconJavascript from "./techIcons/IconJavascript";
import IconTypescript from "./techIcons/IconTypescript";
import IconNestjs from "./techIcons/IconNestjs";
import IconMongo from "./techIcons/IconMongo";
import IconMysql from "./techIcons/IconMysql";
import IconSqlServer from "./techIcons/IconSqlServer";
import IconCsharp from "./techIcons/IconCsharp";
import IconDotnet from "./techIcons/IconDotnet";
import IconBootstrap from "./techIcons/IconBootstrap";
import IconPhp from "./techIcons/IconPhp";
import IconCodeigniter from "./techIcons/IconCodeigniter";

interface tech {
  techName: string;
  techIcon: JSX.Element;
}

const technologies: tech[] = [
  {
    techName: "HTML",
    techIcon: <IconHtml5 />
  },
  {
    techName: "CSS",
    techIcon: <IconCss3 />
  },
  {
    techName: "Bootstrap",
    techIcon: <IconBootstrap />
  },
  {
    techName: "JavaScript",
    techIcon: <IconJavascript />
  },
  {
    techName: "Typescript",
    techIcon: <IconTypescript />
  },
  {
    techName: "React",
    techIcon: <IconBxlReact />
  },
  {
    techName: "NestJs",
    techIcon: <IconNestjs />
  },
  {
    techName: "C#",
    techIcon: <IconCsharp />
  },
  {
    techName: ".NET 8",
    techIcon: <IconDotnet />
  },
  {
    techName: "PHP",
    techIcon: <IconPhp />
  },
  {
    techName: "Codeigniter",
    techIcon: <IconCodeigniter />
  },
  {
    techName: "MongoDb",
    techIcon: <IconMongo />
  },
  {
    techName: "MySql",
    techIcon: <IconMysql />
  },
  {
    techName: "Sql server",
    techIcon: <IconSqlServer />
  },
]

function Technologies() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={12}
      marginBottom={12}
    >
      <Typography variant="h4" padding={3}>Tecnologias:</Typography>
      <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2}>
        {/* Put all the technologies */}
        {
          technologies.map((tech) => <Tech TechIcon={tech.techIcon} TechName={tech.techName} />)
        }
      </Grid>
    </Box>
  );
}

export default Technologies;
