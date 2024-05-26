import { Box } from '@mui/material'

export type mainTechs = "react" | "nestjs" | "net" | "bootstrap" | "html" | "javascript" | "typescript"

interface Props {
  imageSrc: string,
  mainTech: mainTechs
}

function ProjectImage({imageSrc, mainTech}: Props) {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img loading='lazy' width={550} className={`project ${mainTech}`} src={imageSrc} />
      </Box>
    </Box>
  )
}

export default ProjectImage
