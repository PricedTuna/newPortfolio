import { WelcomeTitle } from "./WelcomeTitle.tsx";
import { WelcomeWrapper } from "./WelcomeWrapper.tsx";

interface Props {
  secToSwapScreens: number,
  textAnimationDuration: number,
  titleInScreen: boolean,
}

function WelcomeOverlay({ secToSwapScreens, textAnimationDuration, titleInScreen }: Props) {
  return (
    <WelcomeWrapper secToSwapScreens={secToSwapScreens}>
      <WelcomeTitle
        titleInScreen={titleInScreen}
        textAnimationDuration={textAnimationDuration}
      />
    </WelcomeWrapper>
  )

}

export default WelcomeOverlay
