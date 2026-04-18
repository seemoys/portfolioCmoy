import type { IconType } from 'react-icons'
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { SiExpress, SiFramer, SiMongodb, SiMysql, SiRedux, SiTailwindcss } from 'react-icons/si'

export type Skill = {
  name: string
  icon: IconType
  color: string
  lane: number
}

export type SkillLane = {
  title: string
  subtitle: string
  accent: string
  duration: number
}

export const skills: Skill[] = [
  { name: 'React', icon: FaReact, color: '#22d3ee', lane: 0 },
  { name: 'HTML5', icon: FaHtml5, color: '#f97316', lane: 0 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#38bdf8', lane: 0 },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#67e8f9', lane: 0 },
  { name: 'Figma', icon: FaFigma, color: '#f87171', lane: 0 },
  { name: 'JavaScript', icon: FaJsSquare, color: '#facc15', lane: 1 },
  { name: 'Redux', icon: SiRedux, color: '#a78bfa', lane: 1 },
  { name: 'Framer Motion', icon: SiFramer, color: '#f472b6', lane: 1 },
  { name: 'React Router', icon: FaReact, color: '#60a5fa', lane: 1 },
  { name: 'Context API', icon: FaReact, color: '#22d3ee', lane: 1 },
  { name: 'Node.js', icon: FaNodeJs, color: '#4ade80', lane: 2 },
  { name: 'Express', icon: SiExpress, color: '#d1d5db', lane: 2 },
  { name: 'MongoDB', icon: SiMongodb, color: '#34d399', lane: 2 },
  { name: 'MySQL', icon: SiMysql, color: '#60a5fa', lane: 2 },
  { name: 'GitHub', icon: FaGithub, color: '#e5e7eb', lane: 2 },
]

export const skillLanes: SkillLane[] = [
  {
    title: 'Frontend Lane',
    subtitle: 'Interfaces and responsive UI',
    accent: '#22d3ee',
    duration: 15,
  },
  {
    title: 'Logic Lane',
    subtitle: 'State, styling and interaction',
    accent: '#a78bfa',
    duration: 20,
  },
  {
    title: 'Backend Lane',
    subtitle: 'Data, tooling and shipping',
    accent: '#4ade80',
    duration: 15,
  },
]

export const skillSummaryCards = [
  {
    title: 'Frontend',
    text: 'React, HTML, CSS, Tailwind and Figma for building modern, responsive and visually engaging user interfaces.',
  },
  {
    title: 'Logic',
    text: 'JavaScript, Redux, Context API, React Router and Framer Motion for handling state, routing and smooth interactive experiences.',
  },
  {
    title: 'Backend',
    text: 'Node.js, Express, MySQL, MongoDB and GitHub for backend logic, database management and efficient project workflow.',
  },
]
