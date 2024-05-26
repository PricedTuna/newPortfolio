import { Box, Button, Stack, Typography } from "@mui/material";

function ProjectText() {

  return (
    <>
      <Box mb={1}>
      <Typography variant="h4" textAlign="center" mb={1} >Este es el titulo del proyecto</Typography>
      <Typography variant="subtitle1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        molestiae ducimus iure? Consectetur earum soluta sapiente nostrum est
        quisquam, laboriosam perspiciatis molestiae voluptatem fugiat sunt, quis
        recusandae repellat voluptate facilis?
      </Typography>
      </Box>
      <Stack spacing={1} direction="row">
      <Button variant="contained" size="medium" color="inherit">Github</Button>
      <Button variant="contained" size="medium" color="primary">Site</Button>
      </Stack>
      </>
  );
}

export default ProjectText;
