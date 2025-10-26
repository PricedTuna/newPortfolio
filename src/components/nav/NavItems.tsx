import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

type listOptionsType = {
  title: string;
  path: string;
}[];

const listOptions: listOptionsType = [
  {
    title: "AboutMe",
    path: "/about",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];



function NavItems() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "column",
        }}
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {listOptions.map((option) => (
          <Link
            to={option.path}
            className={`navItem ${
              location.pathname === option.path ? "navFocus" : ""
            }`}
            key={option.path}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.3rem",
                },
                textShadow: "2px 2px 2px black",
              }}
            >
              {t(`sections.${option.title}`)}
            </Typography>
          </Link>
        ))}
      </Stack>
    </nav>
  );
}

export default NavItems;
