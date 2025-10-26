import { Box, Button, Chip, Modal, Typography } from '@mui/material';
import { LanguageLastKeys } from '../../language/i18n.ts';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { ProjectInterface } from '../ProjectsView.tsx';
import { useTranslate } from '../../hooks/useTranslate.ts';

interface Props {
  project?: ProjectInterface;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: Props) => {
  const { getTranslation } = useTranslate();
  return (
    <Modal open={isOpen} onClose={onClose} sx={{ color: 'white' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#3b3b3b',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          color: 'white'
        }}
      >
        <Typography variant="h5" gutterBottom>
          {project?.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {getTranslation('projectKey.mainTech')}: {project?.mainTech}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(`${project?.description}` as LanguageLastKeys)}
        </Typography>
        <Box mt={2}>
          <Typography variant="subtitle2">{getTranslation('projectKey.technologies')}:</Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            {project?.allTechs.map((tech, index) => (
              <Chip
                color="info"
                key={index}
                label={tech}
                variant="outlined"
              />
            ))}
          </Box>
        </Box>

        <Box display="flex" gap={1} mt={3}>
          {project?.github && (
            <Button
              variant="contained"
              color="inherit"
              sx={{ bgcolor: 'darkgray' }}
              fullWidth
              href={project?.github}
              target="_blank"
            >
              <GitHubIcon sx={{ color: 'black' }}/>
            </Button>
          )}
          {project?.url && (
            <Button
              variant="contained"
              sx={{ bgcolor: '#101861' }}
              fullWidth
              href={project?.url}
              target="_blank"
            >
              <WebIcon sx={{ color: 'lightgray' }}/>
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};
