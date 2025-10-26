import { Box } from "@mui/material";
import MainName from "../../components/main/MainName";
import NavItems from "../../components/nav/NavItems";
import { Outlet } from "react-router-dom";
import AnimateViewWrapper from "../../components/animation/AnimateViewWrapper";

function MainContainer() {
  return (
    <Box
      p={1}
      display="flex"
      justifyContent="space-between"
      flexDirection={{
        xs: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
      bgcolor="rgba(0,0,0,0.3)"
      border="2px solid gray"
      sx={{
        height: "100%",
        maxheight: "100%",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box
        display="flex"
        flexDirection={{
          xs: "row",
          sm: "row",
          md: "column",
          lg: "column",
          xl: "column",
        }}
        flex="1"
        gap={5}
      >
        <Box display="flex" flexDirection="column" mb={3} ml={2}>
          <MainName />
        </Box>
        <Box
          p={1}
          ml={{
            xs: 0,
            sm: 0,
            md: 0,
            lg: 4,
            xl: 4,
          }}
          display="flex"
          justifyContent={{
            xs: "start",
            sm: "start",
            md: "start",
            lg: "start",
            xl: "start",
          }}
          flex="1"
        >
          <NavItems />
        </Box>
      </Box>
      
      <Box
        alignSelf="center"
        maxWidth={{
          xs: "100%",
          sm: "100%",
          md: "50%",
          lg: "50%",
          xl: "50%",
        }}
        maxHeight="100%"
        overflow="auto"
        p={3}
        
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <AnimateViewWrapper>
          <Outlet />
        </AnimateViewWrapper>
      </Box>
    </Box>
  );
}

export default MainContainer;
