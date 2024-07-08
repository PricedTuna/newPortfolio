import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  secToSwapScreens: number,
  textAnimationDuration: number,
  titleInScreen: boolean,
}

function MainTitle({secToSwapScreens, textAnimationDuration, titleInScreen}: Props) {
  return (
    <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{ duration: secToSwapScreens }}
      >
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: titleInScreen ? "fit-content" : "0%" }}
            exit={{ width: "0%" }}
            transition={{ duration: textAnimationDuration }}
            style={{color: "white", fontWeight: "100", fontSize: "2rem", whiteSpace: "nowrap", overflow: "hidden", borderRight: "1px solid white"}}
          >
            Edgar Vega
          </motion.span>
        </Box>
      </motion.div>
  )
}

export default MainTitle
