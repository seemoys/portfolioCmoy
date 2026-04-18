import { motion } from 'framer-motion'
import { skillLanes, skills, skillSummaryCards } from '../../utils/skillsData'
import { getLaneGap, getLaneSkills } from '../../utils/skillsFunctions'
import '../../styles/skills.css'

function Skills() {
  const laneSkills = skillLanes.map((_, laneIndex) => getLaneSkills(skills, laneIndex))

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          My Stack
        </span>
        <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Skills Highway
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          A cleaner animated road where each lane carries a different part of my
          development workflow without any badge overlap.
        </p>
      </motion.div>

      <div className="skills-shell">
        <div className="skills-top">
          <span>Designing interfaces</span>
          <span>Building interactions</span>
          <span>Shipping products</span>
        </div>

        {skillLanes.map((lane, laneIndex) => {
          const items = laneSkills[laneIndex]
          const gap = getLaneGap(lane, items.length)

          return (
            <div key={lane.title} className="road-lane">
              <div
                className="lane-label"
                style={{ boxShadow: `0 0 0 1px ${lane.accent}22` }}
              >
                <strong style={{ color: lane.accent }}>{lane.title}</strong>
                <span>{lane.subtitle}</span>
              </div>

              {items.map((skill, skillIndex) => {
                const Icon = skill.icon

                return (
                  <div
                    key={skill.name}
                    className="skill-carrier"
                    style={{
                      animationDuration: `${lane.duration}s`,
                      animationDelay: `${skillIndex * gap}s`,
                    }}
                  >
                    <div className="skill-card">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[1.35rem]"
                        style={{
                          color: skill.color,
                          background: `radial-gradient(circle, ${skill.color}26 0%, rgba(6,12,18,0.94) 72%)`,
                          boxShadow: `0 0 24px ${skill.color}22`,
                        }}
                      >
                        <Icon />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-slate-100">
                          {skill.name}
                        </span>
                        <span className="block text-xs text-slate-400">
                          In active use
                        </span>
                      </span>

                      <span className="skill-wheel left" />
                      <span className="skill-wheel right" />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className="skills-summary">
          {skillSummaryCards.map((card) => (
            <div key={card.title} className="summary-card">
              <p>{card.title}</p>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
