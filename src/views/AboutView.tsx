import { Box } from "@mui/material";
import PageText from "../components/text/PageText";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";

function AboutView() {
  return (
    <AnimateViewWrapper>
      <Box display={"flex"} flexDirection={"column"} gap={2} >
        <PageText text="I love three things in this world: pixel art, Pokémon games, and solving problems." />
        <PageText text="I'm Edgar Vega, a Mexican software engineer. I started my career at 15, learning algorithms with Python. Now, I am a full-stack software developer, specializing in web and mobile development with React and React Native on the front end, and NestJS and C# on the back end." />
        <PageText text="This page showcases all the projects I have worked on, from the beginning of my journey to today. Check them out and let me know what you think! :p" />
      </Box>
    </AnimateViewWrapper>
  );
}

export default AboutView;
