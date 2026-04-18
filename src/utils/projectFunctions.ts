import type { Project } from './projectsData'

export const getProjectCardTransition = (index: number) => ({
  duration: 0.5,
  delay: index * 0.1,
})

export const hasValidProjectLink = (link: string) => Boolean(link && link !== '#')

export const getProjectMedia = (project: Project) => ({
  src: project.video || project.img,
  isVideo: Boolean(project.video),
})
