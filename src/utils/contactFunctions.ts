import type { ContactFormData } from './contactData'

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const phonePattern = /^[+]?[0-9\s-]{10,15}$/

export const trimContactForm = (form: ContactFormData): ContactFormData => ({
  name: form.name.trim(),
  phone: form.phone.trim(),
  email: form.email.trim(),
  subject: form.subject.trim(),
  message: form.message.trim(),
})

export const validateContactForm = (form: ContactFormData) => {
  if (!form.name || !form.phone || !form.email || !form.subject || !form.message) {
    return 'Please fill in all fields before sending.'
  }

  if (!emailPattern.test(form.email)) {
    return 'Please enter a valid email address.'
  }

  if (!phonePattern.test(form.phone)) {
    return 'Please enter a valid phone number.'
  }

  if (form.message.length <= 10) {
    return 'Message must be more than 10 characters.'
  }

  return null
}

export const sendContactMail = async (form: ContactFormData) => {
  const res = await fetch('/.netlify/functions/sendMail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Failed to send message')
  }

  return data
}
