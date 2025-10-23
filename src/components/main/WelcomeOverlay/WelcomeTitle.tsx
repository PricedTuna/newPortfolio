import { motion } from "framer-motion";
import { Typography } from "@mui/material";

interface Props {
  titleInScreen: boolean,
  textAnimationDuration: number,
}

export const WelcomeTitle = ({ titleInScreen, textAnimationDuration }: Props) => {
  return (
    <motion.span
      initial={{ width: "0%" }}
      animate={{ width: titleInScreen ? "fit-content" : "0%" }}
      exit={{ width: "0%" }}
      transition={{ duration: textAnimationDuration }}
      style={{
        color: "white",
        fontWeight: "100",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "1px solid white"
      }}
    >
      <Typography fontWeight={'initial'} fontSize={'2rem'}>Portfolio of Edgar Vega</Typography>
    </motion.span>
  )
}