import { Box, Button } from "@mui/material";
import { ProjectInterface } from "../../views/ProjectsView";
import BaseText from "../text/BaseText";

interface Props {
  project: ProjectInterface;
  onCLickProject: (project: ProjectInterface) => void;
}

function Project({ project, onCLickProject }: Props) {
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => onCLickProject(project)}
        sx={{
          borderColor: "white",
          color: "white",
          "&:hover": {
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <BaseText sx={{ fontWeight: 300, fontSize: "1.5rem" }} text={project.title}/>
          <BaseText
            sx={{ fontWeight: 200, fontSize: "1rem" }}
            text={project.mainTech}
          />
        </Box>
      </Button>
    </>
  );
}

export default Project;
