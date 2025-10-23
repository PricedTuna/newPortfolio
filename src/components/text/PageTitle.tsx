import BaseText from './BaseText';

interface Props {
  text: string;
}

function PageTitle({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 300, fontSize: {xs: "3rem", sm: "3rem", md: "4rem", lg: "4rem", xl: "5rem"}}} />
  )
}

export default PageTitle
