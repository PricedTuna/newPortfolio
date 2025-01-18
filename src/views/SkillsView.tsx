import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import { Box, List, ListItem } from "@mui/material";
import SkillName from "../components/text/skills/SkillName";
import SkillCategory from "../components/text/skills/SkillCategory";
import SquareIcon from "@mui/icons-material/Square";

interface skill {
  title: string;
}

interface category {
  name: string;
  skills: skill[];
}

const skillsCategorys: category[] = [
  {
    name: "Backend",
    skills: [
      {
        title: "NestJs",
      },
      {
        title: "C#",
      },
      {
        title: ".NET",
      },
      {
        title: "Keycloak",
      },
      {
        title: "TypeScript",
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        title: "React",
      },
      {
        title: "React Native",
      },
      {
        title: "Bootstrap",
      },
      {
        title: "Tailwind",
      },
      {
        title: "TypeScript",
      },
      {
        title: "HTML",
      },
      {
        title: "CSS",
      },
      {
        title: "JavaScript",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        title: "MongoDB",
      },
      {
        title: "Firebase",
      },
      {
        title: "MySql",
      },
      {
        title: "PostgreSql",
      },
      {
        title: "SqlServer",
      },
    ],
  },
];

function SkillsView() {
  return (
    <AnimateViewWrapper>
      <Box>
        {skillsCategorys.map(({ name, skills }) => (
          <Box key={name}>
            <Box display="flex" alignItems="center" gap={1}>
              <SquareIcon style={{ color: "rgba(255,255,255, 0.6)" }} />
              <SkillCategory text={name} />
            </Box>
            <List>
              {skills.map((skill) => (
                <ListItem>
                  <SkillName text={skill.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </AnimateViewWrapper>
  );
}

export default SkillsView;
