import { Box, Chip, Stack } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../../hooks/useTranslate";
import PageMiniText from "../text/PageMiniText";
import PageTitle from "../text/PageTitle";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

function MainName() {
  const { getTranslation } = useTranslate();

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <>
      <Box>
        <PageTitle text="Edgar Vega" />
        <PageMiniText text={getTranslation("subTitle")} />
      </Box>
      <Box mt={2}>
        <Stack
          direction={{
            xs: "row",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
          sx={{ marginBottom: 2 }}
        >
          {languages.map((lang) => (
            <Chip
              key={lang.code}
              label={lang.label}
              clickable
              sx={{
                backgroundColor:
                  selectedLanguage === lang.code ? "#fff" : "transparent", // Verde y gris
                color: selectedLanguage === lang.code ? "#000" : "#fff", // Texto blanco o negro
                fontWeight: "normal", // Negrita para el seleccionado
                "&:hover": {
                  backgroundColor:
                    selectedLanguage === lang.code ? "#888" : "#333", // Efecto hover
                },
                borderRadius: "16px", // Bordes redondeados estilo "pill"
                padding: "4px 8px", // Espaciado interno personalizado
              }}
              onClick={() => handleLanguageChange(lang.code)}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default MainName;
