import { Box } from '@mui/material';
import AnimateViewWrapper from '../components/animation/AnimateViewWrapper';
import Project from '../components/projects/Project';
import BaseText from '../components/text/BaseText';
import { useTranslate } from '../hooks/useTranslate';
import { useState } from 'react';
import { ProjectModal } from './components/ProjectModal.tsx';
import { LanguageLastKeys } from '../language/i18n.ts';

export type TechType =
  | 'Stack web'
  | 'Bootstrap'
  | 'React'
  | 'NestJs'
  | 'JavaScript'
  | 'TypeScript'
  | 'NoSQL database'
  | 'SQL database'
  | 'Microservices'
  | 'React Native'
  | 'PHP'
  | 'Python'
  | '';

export interface ProjectInterface {
  title: string;
  github?: string;
  url?: string;
  mainTech: TechType;
  allTechs: TechType[];
  description: LanguageLastKeys;
  isConfidential?: boolean;
}

const projects: ProjectInterface[] = [
  {
    'title': 'Prestamos',
    'description': 'projects.Prestamos',
    'allTechs': ['Stack web', 'React', 'NoSQL database'],
    'mainTech': 'React',
    'github': '',
    'url': '',
    'isConfidential': true
  },
  {
    'title': 'DocuTalk',
    'description': 'projects.DocuTalk',
    'allTechs': ['Python'],
    'mainTech': 'Python',
    'github': 'https://github.com/PricedTuna/docuTalk',
    'url': ''
  },
  {
    'title': 'Evidence processor',
    'description': 'projects.Evidence processor',
    'allTechs': ['Python'],
    'mainTech': 'Python',
    'github': 'https://github.com/PricedTuna/evidence_processor',
    'url': ''
  },
  {
    'title': 'MedicLife',
    'description': 'projects.MedicLife',
    'allTechs': ['Stack web', 'NestJs', 'PHP'],
    'mainTech': 'PHP',
    'github': 'https://github.com/PricedTuna/newMedicLife',
    'url': ''
  },
  {
    'title': 'Pear',
    'description': 'projects.Pear',
    'allTechs': ['Stack web', 'React', 'React Native', 'SQL database', 'Microservices', 'NestJs'],
    'mainTech': 'Microservices',
    'github': '',
    'url': '',
    'isConfidential': true
  },
  {
    'title': 'Balanza fizcal',
    'description': 'projects.Balanza fizcal',
    'allTechs': ['Stack web', 'React', 'TypeScript'],
    'mainTech': 'React',
    'github': '',
    'url': '',
    'isConfidential': true
  },
  {
    'title': 'IS time clocker (frontend)',
    'description': 'projects.IS time clocker (frontend)',
    'allTechs': ['React', 'TypeScript', 'Stack web'],
    'mainTech': 'React',
    'github': 'https://github.com/PricedTuna/isfront',
    'url': ''
  },
  {
    'title': 'IS time clocker (backend)',
    'description': 'projects.IS time clocker (backend)',
    'allTechs': ['NestJs', 'TypeScript', 'SQL database'],
    'mainTech': 'NestJs',
    'github': 'https://github.com/PricedTuna/rrhhback',
    'url': ''
  },
  {
    'title': 'Uas documents',
    'description': 'projects.Uas documents',
    'allTechs': ['Stack web', 'TypeScript', 'React', 'NoSQL database'],
    'mainTech': 'React',
    'github': 'https://github.com/PricedTuna/milipage',
    'url': 'https://uas-documents.netlify.app/'
  },
  {
    'title': 'Banchido (frontend)',
    'description': 'projects.Banchido (frontend)',
    'allTechs': ['Stack web', 'TypeScript', 'React'],
    'mainTech': 'React',
    'github': 'https://github.com/PricedTuna/banchido',
    'url': 'https://banchido.netlify.app/'
  },
  {
    'title': 'Banchido (backend)',
    'description': 'projects.Banchido (backend)',
    'allTechs': ['NestJs', 'NoSQL database', 'TypeScript'],
    'mainTech': 'NestJs',
    'github': 'https://github.com/PricedTuna/banChidoBack',
    'url': ''
  },
  {
    'title': 'Financeculator',
    'description': 'projects.Financeculator',
    'allTechs': ['Stack web', 'TypeScript', 'React'],
    'mainTech': 'React',
    'github': 'https://github.com/PricedTuna/CalcIngFinanciera',
    'url': 'https://financeculator.netlify.app/'
  },
  {
    'title': 'Inguntos',
    'description': 'projects.Inguntos',
    'allTechs': ['Stack web'],
    'mainTech': 'Stack web',
    'github': 'https://github.com/PricedTuna/conjuntosOperations',
    'url': 'https://inguntos.netlify.app/'
  },
  {
    'title': 'Movie land',
    'description': 'projects.Movie land',
    'allTechs': ['Stack web', 'TypeScript'],
    'mainTech': 'TypeScript',
    'github': 'https://github.com/PricedTuna/MovieLand',
    'url': 'https://fluffy-cactus-f13494.netlify.app/'
  },
  {
    'title': 'Weathere cite',
    'description': 'projects.Weathere cite',
    'allTechs': ['Stack web'],
    'mainTech': 'Stack web',
    'github': 'https://github.com/PricedTuna/werather_cite',
    'url': 'https://animated-narwhal-dc6704.netlify.app/'
  },
  {
    'title': 'Alura barber page',
    'description': 'projects.Alura barber page',
    'allTechs': ['Stack web'],
    'mainTech': 'Stack web',
    'github': 'https://github.com/PricedTuna/Alura-barber',
    'url': 'https://fantastic-starlight-e1f938.netlify.app/'
  }
];

function ProjectsView() {
  const { getTranslation } = useTranslate();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState<ProjectInterface>();

  const handleOnClose = () => setIsProjectModalOpen(false);

  const handleOnClickProject = (project: ProjectInterface) => {
    setProjectSelected(project);
    setIsProjectModalOpen(true);
  };

  return (
    <AnimateViewWrapper>
      <Box display="flex" flexDirection="column">
        <Box>
          <BaseText
            text={getTranslation('projectKey.confidentialText')}
            sx={{ fontWeight: '300', fontSize: '1rem', textAlign: 'center' }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {projects.map((project) => (
            <Project project={project} onCLickProject={handleOnClickProject}/>
          ))}
        </Box>
      </Box>

      <ProjectModal project={projectSelected} isOpen={isProjectModalOpen} onClose={handleOnClose}/>
    </AnimateViewWrapper>
  );
}

export default ProjectsView;
