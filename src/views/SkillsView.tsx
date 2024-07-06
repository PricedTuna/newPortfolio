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
    name: "Frontend",
    skills: [
      {
        title: "HTML",
      },
      {
        title: "CSS",
      },
      {
        title: "JavaScript",
      },
      {
        title: "TypeScript",
      },
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
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        title: "Keycloak",
      },
      {
        title: "TypeScript",
      },
      {
        title: "NestJs",
      },
      {
        title: "Express",
      },
      {
        title: "C#",
      },
      {
        title: ".NET",
      },
      {
        title: "PHP",
      },
      {
        title: "Codeigniter",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        title: "MySql",
      },
      {
        title: "MariaDb",
      },
      {
        title: "SqlServer",
      },
      {
        title: "MongoDb",
      },
    ],
  },
  {
    name: "Soft skills",
    skills: [
      {
        title: "Teamwork",
      },
      {
        title: "Communication",
      },
      {
        title: "Problem-solving",
      },
      {
        title: "Adaptability",
      },
      {
        title: "Critical thinking",
      },
      {
        title: "Collaboration",
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
