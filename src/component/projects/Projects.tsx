import { motion } from 'framer-motion'
import ProjectCard from './ProjectsCards'
import { projects } from '../../utils/projectsData'

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          My Work
        </span>
        <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          A selection of things I&apos;ve built from full-stack apps to games and
          automation tools.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-[68rem] grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
