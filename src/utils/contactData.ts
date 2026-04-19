import { BriefcaseBusiness, Mail, MapPin, Phone } from 'lucide-react'

export type ContactFormData = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export const initialContactForm: ContactFormData = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

export const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    text: import.meta.env.VITE_EMAIL_USER as string,
    iconClass: 'bg-cyan-400/10 text-cyan-300',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Best For',
    text: 'Freelance projects, collaborations, and hiring conversations',
    iconClass: 'bg-emerald-400/10 text-emerald-300',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    text: '+91 9525953344',
    iconClass: 'bg-violet-400/10 text-violet-300',
  },
  {
    icon: MapPin,
    title: 'Work Style',
    text: 'Remote-friendly and focused on clean communication',
    iconClass: 'bg-amber-400/10 text-amber-300',
  },
] as const
