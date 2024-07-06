import BaseText from "./BaseText";

interface Props {
  text: string;
}

function PageText({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 300, fontSize: "1.5rem"}} />
    // <Typography color="white" fontWeight={300} sx={{fontSize: "1.5rem", textShadow: "2px 2px 2px black"}}>{text}</Typography>
  )
}

export default PageText
