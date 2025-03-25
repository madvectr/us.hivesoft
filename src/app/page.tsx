'use client'
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import ChatBot from '@/components/ChatBot'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling for hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link?.hash) {
        e.preventDefault()
        const element = document.querySelector(link.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleHashClick)
    return () => document.removeEventListener('click', handleHashClick)
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
      <Features />
      <CTA />
      
      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred way to connect with us. Chat with our AI assistant for instant answers, 
              or fill out the form for a detailed response from our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Chat Bot */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-indigo-600 text-white">
                <h3 className="font-semibold">Chat with AI Assistant</h3>
                <p className="text-sm text-indigo-100">Get instant answers about our solutions</p>
              </div>
              <ChatBot />
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-indigo-600 text-white">
                <h3 className="font-semibold">Contact Form</h3>
                <p className="text-sm text-indigo-100">Get a detailed response from our team</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}