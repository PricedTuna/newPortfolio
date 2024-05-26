import { Box, Stack, Typography } from "@mui/material";
import GithubBtn from "./GithubBtn";
import SiteBtn from "./SiteBtn";

interface Props {
  projectTitle: string;
  projectContent: string;
  technologies: JSX.Element[];
  githubLink: string;
  siteLink: string;
  alignItemsEnd: boolean;
}

function ProjectText({
  projectContent,
  projectTitle,
  technologies,
  githubLink,
  siteLink,
  alignItemsEnd
}: Props) {
  return (
    <>
      <Box mb={1} padding={1}>
        <Typography variant="h5" textAlign="center" mb={1}>
          {projectTitle}
        </Typography>
        <Typography variant="subtitle1" textAlign={{sx: "center", sm: "center", md: "center"}}>{projectContent}</Typography>
      </Box>
      <Stack spacing={1} direction="column" alignItems={{ xs: "center", sm: "center", md: "center", lg: alignItemsEnd ? "end" : "start" }}>
      <Box>{technologies.map((tech) => tech)}</Box>
        <Box>
          <GithubBtn LinkTo={githubLink} />
          <SiteBtn LinkTo={siteLink} />
        </Box>
      </Stack>
    </>
  );
}

export default ProjectText;
