import { Box } from "@mui/material";
import PageText from "../components/text/PageText";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import { useTranslate } from "../hooks/useTranslate";

function AboutView() {
  const { getTranslation } = useTranslate();

  return (
    <AnimateViewWrapper>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <PageText text={getTranslation("about.text1")} />
        <PageText text={getTranslation("about.text2")} />
        <PageText text={getTranslation("about.text3")} />
      </Box>
    </AnimateViewWrapper>
  );
}

export default AboutView;
