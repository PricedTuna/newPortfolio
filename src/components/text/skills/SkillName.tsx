import BaseText from '../BaseText'

interface Props {
  text: string;
}

function SkillName({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 300, fontSize: "1.2rem"}} />
  )
}

export default SkillName
