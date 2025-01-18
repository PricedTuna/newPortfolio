import { Box } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n";
import Router from "./router/Router";

function App() {
  return (
    <Box>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </Box>
  );
}

export default App;
