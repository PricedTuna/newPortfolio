import { Box } from "@mui/material";
import Background from "../components/main/Background";
import MainContainer from "../components/main/MainContainer";
import { AnimatePresence, motion } from "framer-motion";

function MainLayout() {
  return (
    <AnimatePresence>
      <motion.div>
        <Background>
          <Box
            p={3}
            bgcolor="rgba(0, 0, 0, 0.6)"
            sx={{ height: "100vh" }}
          >
            <MainContainer />
          </Box>
        </Background>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainLayout;
