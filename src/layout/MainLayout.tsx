import { Box } from "@mui/material";
import Background from "../components/main/Background";
import MainContainer from "../components/main/MainContainer";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";

function MainLayout() {
  return (
    <AnimateViewWrapper>
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
    </AnimateViewWrapper>
  );
}

export default MainLayout;
