import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import { Box, Button, Chip, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslate } from "../../hooks/useTranslate";
import { LanguageLastKeys } from "../../language/i18n";
import { ProjectInterface } from "../../views/ProjectsView";
import BaseText from "../text/BaseText";

interface Props {
  project: ProjectInterface;
}

function Project({
  project: { allTechs, description, mainTech, title, github, url },
}: Props) {
  const { getTranslation } = useTranslate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          borderColor: "white", // Cambia el color del borde
          color: "white", // Cambia el color del texto si es necesario
          "&:hover": {
            borderColor: "white", // Mantén el color del borde en el hover
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo opcional al hacer hover
          },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <BaseText sx={{ fontWeight: 300, fontSize: "1.5rem" }} text={title} />
          <BaseText
            sx={{ fontWeight: 100, fontSize: "1rem" }}
            text={mainTech}
          />
        </Box>
      </Button>

      <Modal open={open} onClose={handleClose} sx={{ color: "white" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#3b3b3b",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            color: "white",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {getTranslation("projectKey.mainTech")}: {mainTech}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {getTranslation(`projects.${description}` as LanguageLastKeys)}
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle2">{getTranslation("projectKey.technologies")}:</Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
              {allTechs.map((tech, index) => (
                <Chip
                  color="info"
                  key={index}
                  label={tech}
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>

          <Box display="flex" gap={1} mt={3}>
            {github && (
              <Button
                variant="contained"
                color="inherit"
                sx={{ bgcolor: "darkgray" }}
                fullWidth
                href={github}
                target="_blank"
              >
                <GitHubIcon sx={{ color: "black" }} />
              </Button>
            )}
            {url && (
              <Button
                variant="contained"
                sx={{ bgcolor: "#101861" }}
                fullWidth
                href={url}
                target="_blank"
              >
                <WebIcon sx={{ color: "lightgray" }} />
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Project;
