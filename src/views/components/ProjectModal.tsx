import { Box, Button, Chip, IconButton, Modal, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { ProjectInterface } from '../ProjectsView.tsx';
import { useTranslate } from '../../hooks/useTranslate.ts';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  project?: ProjectInterface;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: Props) => {
  const { getTranslation } = useTranslate();
  return (
    <Modal open={isOpen} onClose={onClose} sx={{ color: 'white' }}>
      <Box sx={{
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
      }}>
        <IconButton
          aria-label="close modal"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.25)'
            }
          }}
        >
          <CloseIcon/>
        </IconButton>
        <Typography variant="h5" gutterBottom>
          {project?.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {getTranslation('projectKey.mainTech')}: {project?.mainTech}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {project ? getTranslation(project.description) : ''}
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
