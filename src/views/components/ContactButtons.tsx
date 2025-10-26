import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
import AnimateViewWrapper from "../../components/animation/AnimateViewWrapper.tsx";
import LinkButton from "../../components/LinkButton.tsx";

function ContactButtons() {
  return (
    <AnimateViewWrapper>
      <Box display="flex" alignItems={"center"} gap={2}>
        <LinkButton link="https://linkedin.com/in/edgarvegaruiz">
          <LinkedInIcon style={{ color: "white" }} />
        </LinkButton>

        <LinkButton link="https://github.com/PricedTuna">
          <GitHubIcon style={{ color: "white" }} />
        </LinkButton>

        <LinkButton link="mailto:edgarevegar04@gmail.com">
          <Box display="flex" gap={1} alignItems={"center"} justifyContent="center">
            <AlternateEmailIcon style={{ color: "white" }} />
            <Typography fontSize={'medium'} color={'whitesmoke'}>edgarevegar04@gmail.com</Typography>
          </Box>
        </LinkButton>
      </Box>
    </AnimateViewWrapper>
  );
}

export default ContactButtons;
