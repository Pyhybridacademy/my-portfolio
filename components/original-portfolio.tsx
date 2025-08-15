"use client"
\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edike Ifeanyi Samuel - Python/Django Developer</title>
    <meta name="description" content="Professional portfolio of Edike Ifeanyi Samuel, a skilled Python/Django web developer specializing in backend development, REST APIs, and modern web applications.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- React CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <style>
        :root
{
  \
            --primary: #2563eb
  \
            --primary-dark: #1d4ed8
  \
            --secondary: #059669
  \
            --accent: #dc2626
  \
            --background: #0f172a
  \
            --surface: #1e293b
  \
            --surface-light: #334155
  \
            --text-primary: #f8fafc
  \
            --text-secondary: #cbd5e1
  \
            --text-muted: #94a3b8
  \
            --border: #475569
  \
            --gradient-primary: linear-gradient(135deg, #2563eb, #059669)
  \
            --gradient-accent: linear-gradient(135deg, #dc2626, #ea580c)
}

\
        *
{
  margin: 0
  padding: 0
  \
            box-sizing: border-box
}

\
        body
{
  \
            font-family: 'DM Sans', sans-serif
  \
            background:
  var(--background);
  \
            color:
  var(--text-primary);
  \
            line-height: 1.6
  \
            overflow-x: hidden
}

\
        .font-space-grotesk
{
  \
            font-family: 'Space Grotesk', sans-serif
}

\
        .gradient-text
{
  \
            background:
  var(--gradient-primary);
  \
            -webkit-background-clip: text
  \
            -webkit-text-fill-color: transparent
  \
            background-clip: text
}

\
        .gradient-bg
{
  background: var(--gradient-primary);
}

.gradient-accent-bg
{
  background: var(--gradient-accent);
}

/* Updated animations for classical feel */
@keyframes
fadeInUp
{
  from
  opacity: 0
  transform: translateY(30px)
  to
  opacity: 1
  transform: translateY(0)
}

@keyframes
slideInLeft
{
  from
  opacity: 0
  transform: translateX(-100px)
  to
  opacity: 1
  transform: translateX(0)
}

@keyframes
slideInRight
{
  from
  opacity: 0
  transform: translateX(50px)
  to
  opacity: 1
  transform: translateX(0)
}

@keyframes
float
{
  0%, 100% { transform: translateY(0px);
}
50% { transform: translateY(-8px);
}
        }

@keyframes
pulse
{
  0%, 100% { transform: scale(1);
}
50% { transform: scale(1.02);
}
        }

@keyframes
glow
{
  0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
}
50% { box-shadow: 0 0 30px rgba(37, 99, 235, 0.5);
}
        }

/* Added mobile menu slide animation */
@keyframes
slideInFromLeft
{
  from
  opacity: 0
  transform: translateX(-100%);
  to
  opacity: 1
  transform: translateX(0)
}

.animate-fade-in-up
{
  animation: fadeInUp
  0.8s ease-out forwards
}

.animate-slide-in-left
{
  animation: slideInLeft
  0.8s ease-out forwards
}

.animate-slide-in-right
{
  animation: slideInRight
  0.8s ease-out forwards
}

.animate-float
{
  animation: float
  4s ease-in-out infinite
}

.animate-pulse-slow
{
  animation: pulse
  3s ease-in-out infinite
}

.animate-glow
{
  animation: glow
  2s ease-in-out infinite
}

/* Added mobile menu animation class */
.animate-slide-from-left
{
  animation: slideInFromLeft
  0.3s ease-out forwards
}

.animate-delay-200
{
  animation - delay
  : 0.2s
}
.animate-delay-400
{
  animation - delay
  : 0.4s
}
.animate-delay-600
{
  animation - delay
  : 0.6s
}
.animate-delay-800
{
  animation - delay
  : 0.8s
}

/* Updated hover effects for classical style */
.hover-lift
{
  transition: all
  0.4s cubic-bezier(0.4, 0, 0.2, 1)
}

.hover-lift:hover
{
  transform: translateY(-5px)
  box - shadow
  : 0 20px 40px -12px rgba(37, 99, 235, 0.25)
}

.hover-glow:hover
{
  box - shadow
  : 0 0 25px rgba(37, 99, 235, 0.4)
}

/* Glass morphism effect */
.glass
{
  background: rgba(30, 41, 59, 0.8)
  backdrop - filter
  : blur(12px)
  border:
  1px solid rgba(255, 255, 255, 0.1)
}

/* Added floating elements styles */
.floating-hire
{
  position: fixed
  top: 50%;
  right:
  20px
  transform: translateY(-50%)
  z - index
  : 40
  animation: float
  3s ease-in-out infinite
}

.floating-whatsapp
{
  position: fixed
  bottom:
  100px
  right:
  20px
  z - index
  : 40
  animation: pulse
  2s ease-in-out infinite
}

.back-to-top
{
  position: fixed
  bottom:
  20px
  right:
  20px
  z - index
  : 40
  opacity: 0
  visibility: hidden
  transition: all
  0.3s ease
}

.back-to-top.visible
{
  opacity: 1
  visibility: visible
}

/* Custom scrollbar */
::-webkit-scrollbar
{
  width:
  8px
}

::-webkit-scrollbar-track
{
  background: var(--background);
}

::-webkit-scrollbar-thumb
{
  background: var(--primary);
  border - radius
  : 4px
}

::-webkit-scrollbar-thumb:hover
{
  background: var(--primary-dark);
}

/* Smooth scroll */
html
{
  scroll - behavior
  : smooth
}

/* Particle background */
.particles
{
  position: fixed
  top: 0
  left: 0
  width: 100%;
  height: 100%;
  pointer - events
  : none
  z - index
  : -1
}

.particle
{
  position: absolute
  width:
  2px
  height:
  2px
  background:
  var(--primary);
  border - radius
  : 50%
  opacity: 0.4
  animation: float
  8s ease-in-out infinite
}

/* Responsive utilities */
@media (max-width: 768px)
{
  .text-6xl
  font - size
  : 3rem
  .text-5xl
  font - size
  : 2.5rem
  .text-4xl
  font - size
  : 2rem

  .floating-hire
  right:
  10px
    top: 40%

  .floating-whatsapp
  bottom:
  80px
    right:
    10px
}
</style>
</head>
<body>
    <!-- Particle Background -->
    <div
class="particles" id="particles"></div>
    
    <!-- Added floating hire indicator -->
    <div class="floating-hire">
        <div class="glass rounded-full px-4 py-2 text-sm font-semibold text-white border-2 border-green-500">
            <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for Hire
            </div>
        </div>
    </div>

    <!-- Added floating WhatsApp button -->
    <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" class="floating-whatsapp">
        <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
        </div>
    </a>

    <!-- Added back to top button -->
    <button id="backToTop" class="back-to-top w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
        <i data-lucide="arrow-up" class="w-5 h-5"></i>
    </button>
    
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect }
= React

// Particle system
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 8 + "s"
    particle.style.animationDuration = Math.random() * 4 + 4 + "s"
    particlesContainer.appendChild(particle)
  }
}

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    createParticles()

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      setShowBackToTop(window.scrollY > 300)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", level: 90, icon: "code" },
    { name: "Django", level: 85, icon: "server" },
    { name: "REST API (DRF)", level: 80, icon: "globe" },
    { name: "MySQL", level: 75, icon: "database" },
    { name: "SQLite", level: 80, icon: "database" },
    { name: "Tailwind CSS", level: 85, icon: "palette" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution built with Django and REST API. Features user authentication, product management, and payment integration.",
      tech: ["Django", "Python", "MySQL", "REST API"],
      image: "/modern-ecommerce-dashboard.png",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, CRUD operations, and real-time updates using Django REST Framework.",
      tech: ["Django", "DRF", "SQLite", "Python"],
      image: "/task-management-api-dashboard.png",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles with smooth animations and mobile-first approach.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "/modern-portfolio-website.png",
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-space-grotesk font-bold text-xl gradient-text animate-pulse-slow">EIS</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400 font-medium border-b-2 border-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <i data-lucide="x" className="w-6 h-6"></i>
              ) : (
                <i data-lucide="menu" className="w-6 h-6"></i>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass border-t border-gray-700 animate-slide-from-left">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base capitalize w-full text-left transition-colors duration-200 ${
                    activeSection === item ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mt-20 opacity-0 animate-fade-in-up">
            <img
              src="/placeholder-4knj9.png"
              alt="Edike Ifeanyi Samuel"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 animate-float hover-glow"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-200">
            <span className="gradient-text">Edike Ifeanyi Samuel</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in-up animate-delay-400">
            Transforming Ideas into Digital Solutions
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-600">
            Python/Django Developer specializing in backend development, REST APIs, and scalable web applications. Ready
            to bring your vision to life with clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-800">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 gradient-bg text-white font-semibold rounded-lg hover-lift hover-glow transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover-lift transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I am a passionate Python/Django developer with a knack for creating seamless web applications. My
                journey in web development has equipped me with strong skills in backend development, database
                management, and API design.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I specialize in building robust, scalable applications using Django and Django REST Framework, with
                experience in both MySQL and SQLite databases. I also have a keen eye for frontend design using Tailwind
                CSS to create responsive, user-friendly interfaces.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently seeking remote opportunities where I can contribute to innovative projects and collaborate
                with talented teams to build exceptional digital experiences.
              </p>
            </div>

            <div className="opacity-0 animate-slide-in-right animate-delay-400">
              <img src="/developer-coding.png" alt="Developer at work" className="rounded-lg shadow-2xl hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass rounded-lg p-6 hover-lift opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <i data-lucide={skill.icon} className="w-8 h-8 text-blue-400 mr-3"></i>
                  <h3 className="font-space-grotesk font-semibold text-white">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass rounded-lg overflow-hidden hover-lift opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-space-grotesk font-bold text-xl mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center">
                      <i data-lucide="github" className="w-4 h-4 mr-2"></i>
                      Code
                    </button>
                    <button className="flex-1 px-4 py-2 gradient-bg text-white rounded-lg hover-glow transition-all duration-200 flex items-center justify-center">
                      <i data-lucide="external-link" className="w-4 h-4 mr-2"></i>
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-6 gradient-text">
            Ready to Collaborate?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing teams. Let's connect and build
            something incredible together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="px-8 py-3 gradient-bg text-white font-semibold rounded-lg hover-lift hover-glow transition-all duration-300 flex items-center">
              <i data-lucide="mail" className="w-5 h-5 mr-2"></i>
              your.email@example.com
            </button>

            <div className="flex gap-4">
              <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover-lift transition-all duration-300 flex items-center">
                <i data-lucide="github" className="w-5 h-5 mr-2"></i>
                GitHub
              </button>

              <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover-lift transition-all duration-300 flex items-center">
                <i data-lucide="linkedin" className="w-5 h-5 mr-2"></i>
                LinkedIn
              </button>
            </div>
          </div>

          <div className="max-w-md mx-auto glass rounded-lg p-8 hover-lift">
            <h3 className="font-space-grotesk font-bold text-xl mb-4 text-white">Let's Work Together</h3>
            <p className="text-gray-300 mb-6">
              Available for remote opportunities and freelance projects. Ready to start immediately!
            </p>
            <button className="w-full px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover-glow transition-all duration-300">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Edike Ifeanyi Samuel. Built with passion and modern web technologies.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top visible w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <i data-lucide="arrow-up" className="w-5 h-5"></i>
        </button>
      )}
    </div>
  )
}

// Initialize Lucide icons after component mounts
function initializeLucideIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }
}

// Render the app
ReactDOM.render(<Portfolio />, document.getElementById("root"))

// Initialize icons after a short delay to ensure DOM is ready
setTimeout(initializeLucideIcons, 100)
</script>
</body>
</html>
