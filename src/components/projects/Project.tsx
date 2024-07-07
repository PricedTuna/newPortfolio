import { Box, Button } from "@mui/material";
import { ProjectInterface } from "../../views/ProjectsView";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import BaseText from "../text/BaseText";

function Project({ github, mainTech, title, url }: ProjectInterface) {
  return (
    <Box
      key={title}
      display="flex"
      flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}}
      alignItems="center"
      justifyContent="start"
      gap={1}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <BaseText sx={{ fontWeight: 100, fontSize: "1rem" }} text={mainTech} />
        <BaseText sx={{ fontWeight: 300, fontSize: "1.5rem" }} text={title} />
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Button
          variant="contained"
          color="inherit"
          sx={{ bgcolor: "darkgray", m: 0, py: 0.5 }}
        >
          <a href={github} style={{ display: "flex", margin: 0, padding: 0 }}>
            <GitHubIcon sx={{ color: "black", m: 0, p: 0 }} />
          </a>
        </Button>
        {url ? (
          <Button
            variant="contained"
            sx={{ bgcolor: "#101861", m: 0, py: 0.5 }}
          >
            <a href={url} style={{ display: "flex", margin: 0, padding: 0 }}>
              <WebIcon sx={{ color: "lightgray", m: 0, p: 0 }} />
            </a>
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Project;
