'use client'

import { useState, FormEvent } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    features: [] as string[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter(f => f !== value)
        : [...prev.features, value]
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)
    setShowError(false)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', features: [] })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>F</div>
          <div className={styles.logoText}>Flourish</div>
        </div>
        <h1 className={styles.title}>Where Women with PCOS Thrive</h1>
        <p className={styles.subtitle}>
          The first holistic PCOS companion designed for whole-person wellness, not just symptom management.
        </p>
      </header>

      <div className={styles.missionCard}>
        <p>
          While Flo and Clue offer symptom tracking and Cysterhood pushes weight loss, <strong>Flourish is the first PCOS app designed for whole-person wellness.</strong> We combine evidence-based education, personalized symptom tracking, actionable lifestyle guidance, and genuine community support—all in a beautiful, calm interface that makes managing PCOS feel <strong>empowering, not overwhelming.</strong>
        </p>
      </div>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <div className={styles.featureTitle}>{feature.title}</div>
              <div className={styles.featureDesc}>{feature.description}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.signupSection}>
        <h2 className={styles.signupTitle}>Be the First to Know</h2>
        <p className={styles.signupIntro}>
          Join our early access list and help shape the future of PCOS management. Plus, get exclusive launch benefits.
        </p>

        {showSuccess && (
          <div className={`${styles.message} ${styles.success}`}>
            ✓ Thank you! You&apos;re on the list. We&apos;ll be in touch soon with updates.
          </div>
        )}

        {showError && (
          <div className={`${styles.message} ${styles.error}`}>
            Something went wrong. Please try again or email us at hello@flourishpcos.com
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>What features would you want most in Flourish? (Select all that apply)</label>
            <div className={styles.checkboxGroup}>
              {featureOptions.map((option) => (
                <label key={option.value} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={formData.features.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                  />
                  <span className={styles.checkboxLabel}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>
      </div>

      <footer className={styles.footer}>
        <p>Flourish © 2025 · Empowering women with PCOS to thrive</p>
      </footer>
    </div>
  )
}

const features = [
  {
    title: 'Personalized Tracking',
    description: 'Track symptoms, cycles, and patterns that matter to you—not just what we think you should track.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    )
  },
  {
    title: 'Mental Health Focus',
    description: 'The first PCOS app that prioritizes your emotional wellbeing alongside physical symptoms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    title: 'Real Community',
    description: 'Connect with women who understand, share experiences, and support each other.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  {
    title: 'Actionable Guidance',
    description: 'No more information overload. Get clear, personalized steps you can take today.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  }
]

const featureOptions = [
  { value: 'Symptom tracking', label: 'Easy symptom tracking' },
  { value: 'Meal planning', label: 'Meal planning & nutrition guidance' },
  { value: 'Mental health', label: 'Mental health & mood support' },
  { value: 'Community', label: 'Community forums & peer support' },
  { value: 'Cycle tracking', label: 'Cycle & fertility tracking' },
  { value: 'Workout plans', label: 'PCOS-friendly workout plans' },
  { value: 'Expert access', label: 'Access to PCOS experts (RD, therapist, etc.)' }
]
