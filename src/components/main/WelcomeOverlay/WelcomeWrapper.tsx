import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface Props extends PropsWithChildren {
  secToSwapScreens: number;
}

export const WelcomeWrapper = ({ secToSwapScreens, children }: Props) => {
  const fadeDuration = 1;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        zIndex: 1000,
        background: "#000",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: secToSwapScreens,
        duration: fadeDuration,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        const el = document.querySelector(".welcome-wrapper");
        if (el) (el as HTMLElement).style.display = "none";
      }}
      className="welcome-wrapper"
    >
      <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
        {children}
      </Box>
    </motion.div>
  );
};
