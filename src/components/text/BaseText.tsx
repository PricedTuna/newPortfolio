import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material"

interface Props {
  text: string;
  sx?: SxProps<Theme> | undefined
}

function BaseText({text, sx}: Props) {
  return (
    <Typography fontWeight={'normal'} color="white" sx={{textShadow: "2px 2px 2px black", ...sx}}>{text}</Typography>
  )
}

export default BaseText
