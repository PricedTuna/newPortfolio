import { Button, Link } from "@mui/material";

interface Props {
  LinkTo: string;
}

function GithubBtn({LinkTo}: Props) {
  return (
    <Button variant="contained" size="medium" color="inherit" sx={{margin: 1}}>
      <Link href={LinkTo} color="inherit" underline="none" >Github</Link>
    </Button>
  );
}

export default GithubBtn;
