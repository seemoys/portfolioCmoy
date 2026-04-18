import type { Skill, SkillLane } from './skillsData'

export const getLaneSkills = (items: Skill[], laneIndex: number) =>
  items.filter((skill) => skill.lane === laneIndex)

export const getLaneGap = (lane: SkillLane, itemsLength: number) =>
  lane.duration / itemsLength
