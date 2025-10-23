import BaseText from "./BaseText";

interface Props {
  text: string;
}

function PageMiniText({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 300, fontSize: {xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "2rem"}}}  />
  )
}

export default PageMiniText

