import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import heroImg1 from '../assets/heroImg1.png'
import heroImg2 from '../assets/heroImg2.png'

export const heroContent = {
  greeting: 'Hi, I am',
  name: 'Seemoy Shome Sanu',
  summary:
    'React.js Developer with 3+ years of experience building scalable, high-performance web applications using React, Node.js, Express, PHP, and MySQL-focused on performance optimization and real-world impact.',
  highlights: [
    'Currently working on: Full-stack apps with React & Node.js',
    '3+ Years Experience',
    'Real-world Projects',
    'Clean Code Focus',
  ],
}

export const heroTypeSequence = [
  'Turning ideas into products.',
  1500,
  'Building fast & scalable apps.',
  1500,
  'Optimizing performance & UX.',
  1500,
  'Creating real-world solutions.',
  1500,
]

export const heroSocials = [
  {
    icon: FaGithub,
    href: 'https://github.com/seemoys',
    label: 'GitHub',
    color: 'hover:text-white',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/seemoy-shome-016613243/',
    label: 'LinkedIn',
    color: 'hover:text-sky-400',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/9525953344',
    label: 'WhatsApp',
    color: 'hover:text-green-400',
  },
]

export const heroImages = {
  main: heroImg1,
  front: heroImg2,
}
