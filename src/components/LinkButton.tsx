import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import PageText from "./text/PageText";

interface Props extends PropsWithChildren {
  title?: string;
  link: string;
}

function LinkButton({ link, title, children }: Props) {
  return (
    <Box display="flex" alignItems={'center'} gap={1}>
      <a href={link} style={{ display: "flex", margin: 0, padding: 0 }}>
        {children}
      </a>
      {title && <PageText text={title}/>}
    </Box>
  );
}

export default LinkButton;
