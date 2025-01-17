import { Box } from "@mui/material";
import PageText from "../components/text/PageText";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";

function AboutView() {
  return (
    <AnimateViewWrapper>
      <Box display={"flex"} flexDirection={"column"} gap={2} >
        <PageText text="I love three things in this world, pixel art, pokemon games and solve problems." />
        <PageText text="I'm Edgar Vega, a Mexican software engineer, I start my career at the 15yo learning algorythms with python, and now, I am a fullstack software developer, specialized in web and mobile with React and React Native in the front and NestJs and C# in the backend." />
        <PageText text="This page has the purpose to expose all the projects where I have been worked, since I started until today, check them and tell me what do you think :p" />
      </Box>
    </AnimateViewWrapper>
  );
}

export default AboutView;
