import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

function Background({children}: PropsWithChildren) {
  return (
    <Box
      sx={{
        backgroundImage: "url(assets/bg_video.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        maxheight: "100%",
      }}
    >
      {children}
    </Box>
  )
}

export default Background
