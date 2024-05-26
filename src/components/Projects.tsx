import { Box, Typography } from '@mui/material'
import ProjectComp from './projects/ProjectComp'

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
      <Typography variant="h4" padding={3}>Proyectos:</Typography>
      <ProjectComp textFirst />
    </Box>
  )
}

export default Projects
