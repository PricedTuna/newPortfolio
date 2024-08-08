import { Box } from "@mui/material";
import Background from "../components/main/Background";
import MainContainer from "../components/main/MainContainer";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainTitle from "../components/main/MainTitle";

function MainLayout() {
  const [titleInScreen, setTitleInScreen] = useState(true);
  const textAnimationDuration = 0.8;
  const msTitleInScreen = 3000;
  const secToSwapScreens = msTitleInScreen / 1000 + textAnimationDuration + 0.2;

  useEffect(() => {
    setTimeout(() => {
      setTitleInScreen(false);
    }, msTitleInScreen);
  }, []);

  return (
    <AnimatePresence>
      <MainTitle
        secToSwapScreens={secToSwapScreens}
        textAnimationDuration={textAnimationDuration}
        titleInScreen={titleInScreen}
      />

      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, delay: secToSwapScreens }}
      >
        <Background>
          <Box
            p={3}
            bgcolor="rgba(0, 0, 0, 0.6)"
            sx={{ height: "100vh", backdropFilter: "blur(20px)" }}
          >
            <Background>
              <MainContainer />
            </Background>
          </Box>
        </Background>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainLayout;
