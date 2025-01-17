import { Box, Button } from "@mui/material";
import { PropsWithChildren } from "react";
import PageText from "./text/PageText";

interface Props extends PropsWithChildren {
  title: string;
  link: string;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

function LinkButton({ link, title, children, color }: Props) {
  return (
    <Box display="flex" gap={1}>
      <PageText text={title} />
      <Button variant="contained" color={color} sx={{ m: 0, py: 0.5 }}>
        <a href={link} style={{ display: "flex", margin: 0, padding: 0 }}>
          {children}
        </a>
      </Button>
    </Box>
  );
}

export default LinkButton;
