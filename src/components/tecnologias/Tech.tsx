import { Box, Grid, Typography } from '@mui/material';

interface Props {
  TechName: string;
  TechIcon: JSX.Element
}

function Tech({ TechName, TechIcon }: Props) {

  return (
    <Grid xs={6} md={3}>
      <Box textAlign="center" padding={2} margin={1}>
          {TechIcon}
          <Typography variant='subtitle1'>{TechName}</Typography>
      </Box>
    </Grid>
  );
}

export default Tech;
