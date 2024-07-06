import { Box } from "@mui/material";
import PageText from "../components/text/PageText";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";

function AboutView() {
  return (
    <AnimateViewWrapper>
      <Box>
        <PageText text="I'm a mexican software engineering student passionate about solving problems, I find a good place to do it in the beautiful world of code. With deep knowledge of architecture, databases, web development and experience in a lot of projects I can create the solution for your problem." />
      </Box>
    </AnimateViewWrapper>
  );
}

export default AboutView;
