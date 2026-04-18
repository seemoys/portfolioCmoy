import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { Mail, Phone, Send, Sparkles, UserRound } from 'lucide-react'
import { contactCards, initialContactForm } from '../../utils/contactData'
import {
  sendContactMail,
  trimContactForm,
  validateContactForm,
} from '../../utils/contactFunctions'

function Contact() {
  const [form, setForm] = useState(initialContactForm)
  const [loading, setLoading] = useState(false)

  const updateField = (field: keyof typeof initialContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = trimContactForm(form)
    const validationError = validateContactForm(trimmed)

    if (validationError) {
      toast.error(validationError)
      return
    }

    setLoading(true)

    try {
      await sendContactMail(trimmed)
      toast.success('Message sent successfully.')
      setForm(initialContactForm)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  const inputClassName =
    'w-full rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]'

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_28%)]" />
      <div className="absolute left-[-6rem] top-24 -z-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-4rem] -z-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
          Contact Me
        </span>
        <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Let&apos;s Turn Ideas Into Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Reach out for freelance work, full-time roles, collaborations, or product ideas.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,28,0.94),rgba(8,13,21,0.98))] p-6 shadow-[0_30px_90px_-50px_rgba(34,211,238,0.45)] sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_34%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles size={14} />
              Open For Opportunities
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-[1.5rem]">
              Let&apos;s build something sharp, useful, and memorable.
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Whether you need a polished frontend, a full-stack build, or a reliable
              developer to help ship faster, I&apos;d love to hear what you&apos;re
              working on.
            </p>

            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon

                return (
                  <div
                    key={card.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.iconClass}`}
                      >
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          {card.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-100 sm:text-base">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,15,0.72),rgba(8,14,22,0.94))] p-6 shadow-[0_30px_90px_-50px_rgba(168,85,247,0.35)] backdrop-blur-xl sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Send Message
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Start the conversation
              </h3>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 sm:flex">
              <Send size={18} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                <UserRound size={16} className="text-cyan-300" />
                Name
              </span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Your full name"
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                <Phone size={16} className="text-cyan-300" />
                Phone Number
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="Your phone number"
                inputMode="tel"
                className={inputClassName}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
              <Mail size={16} className="text-cyan-300" />
              Email Address
            </span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="yourmail@example.com"
              autoComplete="email"
              className={inputClassName}
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 text-sm font-medium text-slate-200">Mail Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              placeholder="Project enquiry / Collaboration / Hiring"
              className={inputClassName}
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 text-sm font-medium text-slate-200">Email Content</span>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              placeholder="Tell me about your project, idea, or message..."
              minLength={11}
              className={`${inputClassName} min-h-[150px] resize-none rounded-[1.4rem]`}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[1.2rem] border border-cyan-400/30 bg-cyan-500/15 px-5 py-3.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/25 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={17} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
