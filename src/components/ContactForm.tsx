'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // In a real application, you would send this data to your API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch {
      setSubmitError('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We&apos;ve received your message and will get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {submitError}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md 
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}