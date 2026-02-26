import projects from '../content/projects.json';
import cv from '../content/cv.json';

export type ProjectImpact = {
  users: number;
  monthlyVisits: number;
  conversionRate: number;
  timeSavedHours: number;
  revenueUsd: number;
};

export type Project = {
  name: string;
  repoUrl: string;
  description: string;
  impact: ProjectImpact;
  stack: string[];
  highlights: string[];
  featured: boolean;
};

type ExperienceMetrics = {
  projectsDelivered: number;
  clientsServed: number;
  timeSavedHours: number;
  revenueInfluencedUsd: number;
};

type Experience = {
  metrics?: ExperienceMetrics;
};

type CV = {
  experience: Experience[];
};

const impactScore = (project: Project): number => {
  const { users, monthlyVisits, conversionRate, timeSavedHours, revenueUsd } = project.impact;

  return (
    users * 1 +
    monthlyVisits * 0.5 +
    conversionRate * 1000 +
    timeSavedHours * 8 +
    revenueUsd * 0.02
  );
};

export const getProjectsSortedByImpact = (): Project[] => {
  return [...(projects as Project[])].sort((a, b) => impactScore(b) - impactScore(a));
};

export const getFeaturedProjects = (): Project[] => {
  return getProjectsSortedByImpact().filter((project) => project.featured);
};

export type KeyAchievement = {
  title: string;
  value: string;
  description: string;
};

export const getKeyAchievements = (): KeyAchievement[] => {
  const projectList = projects as Project[];
  const cvData = cv as CV;

  const totalProjectHours = projectList.reduce((sum, project) => sum + project.impact.timeSavedHours, 0);
  const totalProjectRevenue = projectList.reduce((sum, project) => sum + project.impact.revenueUsd, 0);
  const totalProjectUsers = projectList.reduce((sum, project) => sum + project.impact.users, 0);

  const totalWorkHours = cvData.experience.reduce(
    (sum, exp) => sum + (exp.metrics?.timeSavedHours ?? 0),
    0
  );
  const totalWorkRevenue = cvData.experience.reduce(
    (sum, exp) => sum + (exp.metrics?.revenueInfluencedUsd ?? 0),
    0
  );
  const totalDelivered = cvData.experience.reduce(
    (sum, exp) => sum + (exp.metrics?.projectsDelivered ?? 0),
    0
  );

  return [
    {
      title: 'Horas ahorradas acumuladas',
      value: `${totalProjectHours + totalWorkHours}h`,
      description: 'Suma de optimizaciones reportadas en proyectos y experiencia profesional.'
    },
    {
      title: 'Ingresos impactados',
      value: `$${(totalProjectRevenue + totalWorkRevenue).toLocaleString('en-US')}`,
      description: 'Valor económico estimado entre iniciativas de producto y trabajo con clientes.'
    },
    {
      title: 'Proyectos entregados',
      value: `${totalDelivered}`,
      description: 'Total de implementaciones entregadas en experiencia laboral documentada.'
    },
    {
      title: 'Usuarios alcanzados',
      value: `${totalProjectUsers.toLocaleString('en-US')}+`,
      description: 'Base de usuarios estimada en proyectos del portafolio.'
    }
  ];
};
