import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ProjectInterface } from '../../views/ProjectsView';
import BaseText from '../text/BaseText';
import { useTranslate } from '../../hooks/useTranslate';

interface Props {
  project: ProjectInterface;
  onCLickProject: (project: ProjectInterface) => void;
}

function Project({ project, onCLickProject }: Props) {
  const { getTranslation } = useTranslate();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: project.isConfidential ? '1px solid rgba(255, 215, 82, 0.6)' : '1px solid rgba(255,255,255,0.15)',
        backgroundColor: project.isConfidential ? 'rgba(56, 44, 7, 0.6)' : 'rgba(18,18,18,0.85)',
        color: 'white',
      }}
    >
      <CardActionArea
        onClick={() => onCLickProject(project)}
        sx={{ p: 2.5 }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <BaseText sx={{ fontWeight: 500, fontSize: '1.3rem' }} text={project.title}/>
            <BaseText
              sx={{ fontWeight: 300, fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}
              text={getTranslation(project.description)}
            />
          </Box>

          {project.isConfidential && (
            <Chip
              icon={<LockOutlinedIcon fontSize="small"/>}
              label="Confidencial"
              color="error"
              variant="filled"
              sx={{
                bgcolor: 'rgba(255, 209, 82, 0.2)',
                color: 'white',
                fontWeight: 500,
                '.MuiChip-icon': { color: 'white' },
              }}
            />
          )}
        </Stack>

        <CardContent sx={{ px: 0, pb: '0 !important', mt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
              {project.mainTech}
            </Typography>
            <ArrowForwardIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.6)' }}/>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              {project.allTechs.join(' • ')}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Project;
