import { Button, Link } from '@mui/material'

interface Props {
  LinkTo: string;
}

function SiteBtn({LinkTo}: Props) {
  return (
    <Button variant="contained" size="medium" color="primary" sx={{margin: 1}}>
      <Link href={LinkTo} color="black" underline="none" >Site</Link>
    </Button>
  )
}

export default SiteBtn
