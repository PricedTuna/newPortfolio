import { Box, Grid } from '@mui/material'
import ProjectText from './ProjectText'
import ProjectImage from './ProjectImage'

interface Props {
  textFirst?: boolean;
  projectTitle: string;
  projectContent: string;
  technologies: string;
  githubLink: string;
  siteLink: string;
}

function ProjectComp({textFirst = false}: Props) {
  return (
    <Grid container spacing={2} margin={2}>
      <Grid xs={6} md={6} order={ (textFirst ? 1 : 2) } display="flex" flexDirection="column" justifyContent="center">
        <ProjectText />
      </Grid>
      <Grid xs={6} md={6} textAlign="center" order={ (textFirst ? 2 : 1) }>
          <ProjectImage />
      </Grid>
    </Grid>
  )
}

export default ProjectComp
