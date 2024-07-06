import BaseText from './BaseText';

interface Props {
  text: string;
}

function PageTitle({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 100, fontSize: {xs: "3rem", sm: "3rem", md: "4rem", lg: "4rem", xl: "5rem"}}} />
    // <Typography color="white" fontWeight={100} sx={{fontSize: {xs: "3rem", sm: "3rem", md: "4rem", lg: "4rem", xl: "5rem"}, textShadow: "2px 2px 2px black"}}>{text}</Typography>
  )
}

export default PageTitle
