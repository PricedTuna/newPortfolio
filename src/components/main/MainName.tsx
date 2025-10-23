import { Box, Chip, Stack } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../../hooks/useTranslate";
import PageMiniText from "../text/PageMiniText";
import PageTitle from "../text/PageTitle";
import ContactButtons from "../../views/components/ContactButtons.tsx";

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
      <Box display={'flex'} flexDirection={'column'}>
        <Box>
          <PageTitle text="Edgar Vega"/>
          <PageMiniText text={getTranslation("subTitle")}/>
        </Box>
        <ContactButtons/>
      </Box>

      <Box mt={8}>
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
                  selectedLanguage === lang.code ? "#fff" : "transparent",
                color: selectedLanguage === lang.code ? "#000" : "#fff",
                fontWeight: "normal",
                "&:hover": {
                  backgroundColor:
                    selectedLanguage === lang.code ? "#888" : "#333",
                },
                borderRadius: "16px",
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
