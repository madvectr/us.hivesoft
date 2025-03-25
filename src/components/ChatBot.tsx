'use client'
import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ConversationState {
  stage: 'initial' | 'needs' | 'timeline' | 'budget' | 'contact'
  context: {
    needs?: string[]
    timeline?: string
    budget?: string
  }
}

const predefinedResponses = {
  initial: {
    greeting: "Hi! I'm Buzz, your AI assistant. I can help you explore our fintech solutions. What brings you here today?",
    options: [
      "Trading Systems",
      "Data Analytics",
      "AI Solutions",
      "Data Conversion"
    ]
  },
  needs: {
    trading: "Great! Let's talk about your trading system needs. What's your current trading volume?",
    analytics: "Perfect! What kind of data analytics are you looking for?",
    ai: "Interesting! What specific AI solutions are you interested in?",
    conversion: "I understand you need data conversion. What's the volume of data you're working with?"
  },
  timeline: {
    question: "What's your preferred timeline for implementation?",
    options: ["Immediate", "1-3 months", "3-6 months", "6+ months"]
  },
  budget: {
    question: "What's your budget range for this project?",
    options: ["$50k-$100k", "$100k-$250k", "$250k-$500k", "$500k+"]
  },
  contact: {
    question: "Would you like to schedule a call with our team to discuss this further?",
    options: ["Yes, schedule a call", "No, thanks"]
  }
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [conversationState, setConversationState] = useState<ConversationState>({
    stage: 'initial',
    context: {}
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    // Add initial bot message
    if (messages.length === 0) {
      addMessage("Hi! I'm Buzz, your AI assistant. I can help you explore our fintech solutions. What brings you here today?", false)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { 
      id: Math.random().toString(36).substr(2, 9),
      text, 
      isUser, 
      timestamp: new Date() 
    }])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    addMessage(userMessage, true)
    setIsTyping(true)

    // Simulate bot response delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsTyping(false)

    // Process user input and generate response
    const response = generateBotResponse(userMessage, conversationState)
    addMessage(response, false)
    
    // Update conversation state
    setConversationState(prev => {
      switch (prev.stage) {
        case 'initial':
          return { stage: 'needs', context: { ...prev.context } }
        case 'needs':
          return { stage: 'timeline', context: { ...prev.context } }
        case 'timeline':
          return { stage: 'budget', context: { ...prev.context } }
        case 'budget':
          return { stage: 'contact', context: { ...prev.context } }
        default:
          return prev
      }
    })
  }

  const generateBotResponse = (userInput: string, state: ConversationState): string => {
    switch (state.stage) {
      case 'initial':
        const needs = predefinedResponses.initial.options.find(option => 
          userInput.toLowerCase().includes(option.toLowerCase())
        )
        if (needs) {
          return predefinedResponses.needs[needs.toLowerCase().replace(' ', '') as keyof typeof predefinedResponses.needs]
        }
        return "I'm not sure I understand. Could you please specify which of our solutions you're interested in?"

      case 'needs':
        return predefinedResponses.timeline.question

      case 'timeline':
        const timeline = predefinedResponses.timeline.options.find(option =>
          userInput.toLowerCase().includes(option.toLowerCase())
        )
        if (timeline) {
          return predefinedResponses.budget.question
        }
        return "Could you please specify your preferred timeline?"

      case 'budget':
        const budget = predefinedResponses.budget.options.find(option =>
          userInput.toLowerCase().includes(option.toLowerCase())
        )
        if (budget) {
          return predefinedResponses.contact.question
        }
        return "Could you please specify your budget range?"

      case 'contact':
        if (userInput.toLowerCase().includes('yes')) {
          return "Great! Please fill out the contact form on the page and our team will reach out to schedule a call within 24 hours."
        }
        return "No problem! Feel free to reach out if you have any more questions."

      default:
        return "I'm not sure I understand. Could you please rephrase that?"
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
        </div>
        <div>
          <h3 className="text-white font-semibold">Buzz</h3>
          <p className="text-white/80 text-sm">AI Assistant</p>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Options */}
      {conversationState.stage === 'initial' && (
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600">
          <div className="flex flex-wrap gap-2">
            {predefinedResponses.initial.options.map((option) => (
              <button
                key={option}
                onClick={(e) => {
                  e.preventDefault()
                  setInput(option)
                  handleSubmit(new Event('submit') as unknown as React.FormEvent)
                }}
                className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
} 