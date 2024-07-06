import BaseText from '../BaseText'

interface Props {
  text: string;
}

function SkillCategory({text}: Props) {
  return (
    <BaseText text={text} sx={{fontWeight: 100, fontSize: "2rem"}} />
  )
}

export default SkillCategory
