import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n";
import Router from "./router/Router";
import WelcomeOverlay from "./components/main/WelcomeOverlay/WelcomeOverlay.tsx";
import { useEffect, useState } from "react";

export const msTitleInScreen = 3000;
export const textAnimationDuration = 1.2;
export const secToSwapScreens = msTitleInScreen / 1000 + textAnimationDuration + 0.2;

function App() {
  const [titleInScreen, setTitleInScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTitleInScreen(false);
    }, msTitleInScreen);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <WelcomeOverlay
        secToSwapScreens={secToSwapScreens}
        textAnimationDuration={textAnimationDuration}
        titleInScreen={titleInScreen}
      />

      <Router />
    </I18nextProvider>
  );
}

export default App;
