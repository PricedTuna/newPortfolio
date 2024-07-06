import BaseText from "./BaseText";

interface Props {
  text: string;
}

function PageMiniText({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 200, fontSize: {xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "2rem"}}}  />
    // <Typography color="white" fontWeight={200} sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "2rem"}, textShadow: "2px 2px 2px black"}}>{text}</Typography>
  )
}

export default PageMiniText

