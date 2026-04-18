import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import {
  getProjectCardTransition,
  getProjectMedia,
  hasValidProjectLink,
} from '../../utils/projectFunctions'
import type { Project } from '../../utils/projectsData'

type Props = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: Props) {
  const media = getProjectMedia(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={getProjectCardTransition(index)}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40"
    >
      <div className="relative h-52 overflow-hidden">
        {media.isVideo ? (
          <video
            src={media.src}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={media.src}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-lg font-bold leading-tight text-transparent">
          {project.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-5 md:text-base">
          {project.desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2 py-0.5 text-[12px] text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 border-t border-white/10 pt-1">
          {hasValidProjectLink(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition hover:text-cyan-400"
            >
              <FaGithub className="text-sm" /> Code
            </a>
          )}

          {hasValidProjectLink(project.live) && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition hover:text-cyan-400"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
