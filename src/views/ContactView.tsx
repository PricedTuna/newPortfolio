import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import AnimateViewWrapper from "../components/animation/AnimateViewWrapper";
import LinkButton from "../components/LinkButton";

function ContactView() {
  return (
    <AnimateViewWrapper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="end"
        justifyContent="space-around"
        gap={3}
      >
        <LinkButton
          color="inherit"
          title="Linkedin"
          link="https://linkedin.com/in/edgarvegaruiz"
        >
          <LinkedInIcon style={{ color: "black" }} />
        </LinkButton>
        <LinkButton
          color="inherit"
          title="Github"
          link="https://github.com/PricedTuna"
        >
          <GitHubIcon style={{ color: "black" }} />
        </LinkButton>
        <LinkButton
          color="inherit"
          title="email"
          link="mailto:edgarevegar04@gmail.com"
        >
          <AlternateEmailIcon style={{ color: "black" }} />
        </LinkButton>
      </Box>
    </AnimateViewWrapper>
  );
}

export default ContactView;
