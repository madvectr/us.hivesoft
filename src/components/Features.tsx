export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/20 to-blue-300/20 dark:from-indigo-900/20 dark:to-blue-800/20 blur-3xl rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
            Why Choose HiveSoft
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our infrastructure is purpose-built for financial institutions with strict security, 
            compliance, and reliability requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M19.5 12H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2.5 12H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 4.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 21.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Ultra-Low Latency",
              description: "Our enterprise-grade infrastructure is colocated inside exchange datacenters, enabling sub-millisecond execution across multiple markets."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10.417C3 8.92979 3 8.18618 3.30152 7.58283C3.56896 7.05458 3.97629 6.62495 4.47752 6.3342C5.05516 6 5.79703 6 7.28078 6H16.7192C18.203 6 18.9448 6 19.5225 6.3342C20.0237 6.62495 20.431 7.05458 20.6985 7.58283C21 8.18618 21 8.92979 21 10.417V13.583C21 15.0702 21 15.8138 20.6985 16.4172C20.431 16.9454 20.0237 17.375 19.5225 17.6658C18.9448 18 18.203 18 16.7192 18H7.28078C5.79703 18 5.05516 18 4.47752 17.6658C3.97629 17.375 3.56896 16.9454 3.30152 16.4172C3 15.8138 3 15.0702 3 13.583V10.417Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14.5 6V5C14.5 3.89543 13.6046 3 12.5 3H11.5C10.3954 3 9.5 3.89543 9.5 5V6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Enterprise Grade Security",
              description: "Multi-layered security architecture with end-to-end encryption, key management, and advanced fraud detection systems."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14C15.866 14 19 11.3137 19 8C19 4.68629 15.866 2 12 2C8.13401 2 5 4.68629 5 8C5 11.3137 8.13401 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C5.79086 14 4 15.7909 4 18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18C20 15.7909 18.2091 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11V8M12 8H10M12 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Global Financial Cloud",
              description: "Dedicated, bare-metal infrastructure hosted across 15+ regions worldwide to meet your regulatory and latency requirements."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2806 10.7104C19.3327 10.7104 18.5613 9.95005 18.5613 9.01533C18.5613 8.08061 17.79 7.3202 16.8424 7.3202C15.8949 7.3202 15.1235 8.08061 15.1235 9.01533C15.1235 9.95005 14.3522 10.7104 13.4046 10.7104C12.4571 10.7104 11.6857 11.4708 11.6857 12.4055C11.6857 13.3403 12.4571 14.1007 13.4046 14.1007C14.3522 14.1007 15.1235 14.8611 15.1235 15.7958C15.1235 16.7306 15.8949 17.491 16.8424 17.491C17.79 17.491 18.5613 16.7306 18.5613 15.7958C18.5613 14.8611 19.3327 14.1007 20.2802 14.1007C21.2278 14.1007 21.9991 13.3403 21.9991 12.4055C21.9996 11.4708 21.2282 10.7104 20.2806 10.7104Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.59913 9.01533V13.3941C6.59913 13.6348 6.70794 13.8646 6.89924 14.0144C7.09055 14.1643 7.34514 14.2228 7.59329 14.1743L10.5945 13.5368" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 11.3199V5.95977C2 5.59951 2.18335 5.2661 2.47238 5.06724C2.76141 4.86837 3.1252 4.83112 3.45198 4.96896L6.59913 6.22063" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Institutional Liquidity",
              description: "Tap into deep liquidity pools via our direct connections to tier-1 exchanges, ECNs, dark pools, and market makers."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 9.95998C9 10.51 8.55228 10.96 8 10.96C7.44772 10.96 7 10.51 7 9.95998C7 9.40996 7.44772 8.95998 8 8.95998C8.55228 8.95998 9 9.40996 9 9.95998Z" fill="currentColor"/>
                  <path d="M9 16.96C9 17.51 8.55228 17.96 8 17.96C7.44772 17.96 7 17.51 7 16.96C7 16.41 7.44772 15.96 8 15.96C8.55228 15.96 9 16.41 9 16.96Z" fill="currentColor"/>
                  <path d="M9 6.95998C9 7.51 8.55228 7.95998 8 7.95998C7.44772 7.95998 7 7.51 7 6.95998C7 6.40996 7.44772 5.95998 8 5.95998C8.55228 5.95998 9 6.40996 9 6.95998Z" fill="currentColor"/>
                  <path d="M9 13.96C9 14.51 8.55228 14.96 8 14.96C7.44772 14.96 7 14.51 7 13.96C7 13.41 7.44772 12.96 8 12.96C8.55228 12.96 9 13.41 9 13.96Z" fill="currentColor"/>
                  <path d="M12 9H18C18.55 9 19 9.45 19 10V11C19 11.55 18.55 12 18 12H13C12.45 12 12 11.55 12 11V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H18C18.55 17 19 16.55 19 16V15C19 14.45 18.55 14 18 14H13C12.45 14 12 14.45 12 15V17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H18C18.55 7 19 6.55 19 6V5C19 4.45 18.55 4 18 4H13C12.45 4 12 4.45 12 5V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 22.0001H21V21.0001C21 20.4501 20.55 20.0001 20 20.0001H4C3.45 20.0001 3 20.4501 3 21.0001V22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 2H21V3C21 3.55 20.55 4 20 4H4C3.45 4 3 3.55 3 3V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Regulatory Compliance",
              description: "Built-in controls for AML, KYC, trade surveillance, and reporting to ensure compliance in all operating jurisdictions."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7956 10.2145L21.4257 14.1721H3.57483L3.85745 12.271L20.7956 10.2145Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.99992 2.5C9.99992 2.224 9.77592 2 9.49992 2H9.00042C7.34352 2 6.00042 3.343 6.00042 5V18.748C6.00042 19.858 6.89642 20.754 8.00642 20.754H19.0064C20.1154 20.754 21.0114 19.858 21.0114 18.748V12M14.9999 2.5C14.9999 2.224 14.7769 2 14.4999 2H11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M15.5 16.2539C16.3249 16.2539 16.9961 15.5828 16.9961 14.7578C16.9961 13.9329 16.3249 13.2617 15.5 13.2617C14.675 13.2617 14.0039 13.9329 14.0039 14.7578C14.0039 15.5828 14.675 16.2539 15.5 16.2539Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 18.7539H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "99.99% Uptime SLA",
              description: "Fault-tolerant architecture with automatic failover, redundant systems, and 24/7 monitoring for mission-critical reliability."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all p-6 rounded-xl border border-gray-100 dark:border-gray-700 group relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-indigo-100 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-tl-full opacity-70 transition-opacity group-hover:opacity-100"></div>
              
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mr-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 