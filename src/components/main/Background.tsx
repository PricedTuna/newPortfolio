import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { keyframes } from '@emotion/react';

// Definir la animación para el background
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Background({children}: PropsWithChildren) {
  return (
    <Box
      sx={{
        backgroundImage: "url(./bg_video.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        maxheight: "100%",
        animation: `${fadeIn} 2s ease-in-out`, // Aplica la animación
      }}
    >
      {children}
    </Box>
  )
}

export default Background
