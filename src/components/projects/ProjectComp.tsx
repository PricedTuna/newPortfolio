import { Grid } from "@mui/material";
import ProjectText from "./ProjectText";
import ProjectImage, { mainTechs } from "./ProjectImage";

interface Props {
  textFirst?: boolean;
  projectTitle: string;
  projectContent: string;
  technologies: JSX.Element[];
  githubLink: string;
  siteLink: string;
  imageSrc: string;
  mainTech: mainTechs;
}

function ProjectComp({
  textFirst = false,
  projectTitle,
  projectContent,
  technologies,
  githubLink,
  siteLink,
  imageSrc,
  mainTech,
}: Props) {
  return (
    <Grid container spacing={4} margin={2}>
      <Grid
        xs={12}
        md={6}
        mb={2}
        order={{xs: 1, sm: 1, md: textFirst ? 1 : 2}}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <ProjectText
          projectTitle={projectTitle}
          projectContent={projectContent}
          technologies={technologies}
          githubLink={githubLink}
          siteLink={siteLink}
          alignItemsEnd={textFirst}
        />
      </Grid>
      <Grid xs={12} md={6} textAlign="center" order={{xs: 2, sm: 2, md: textFirst ? 2 : 1}}>
        <ProjectImage mainTech={mainTech} imageSrc={imageSrc} />
      </Grid>
    </Grid>
  );
}

export default ProjectComp;
