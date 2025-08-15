"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { FloatingElements } from "@/components/floating-elements"
import {
  Menu,
  X,
  Code,
  Server,
  Globe,
  Database,
  Palette,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Download,
  ChevronDown,
  Star,
  Award,
  Users,
  Coffee,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      const AOS = (window as any).AOS
      if (AOS) {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
          offset: 100,
        })
      }
    }

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", level: 90, icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "Django", level: 85, icon: Server, color: "from-green-500 to-green-600" },
    { name: "REST API (DRF)", level: 80, icon: Globe, color: "from-purple-500 to-purple-600" },
    { name: "MySQL", level: 75, icon: Database, color: "from-orange-500 to-orange-600" },
    { name: "SQLite", level: 80, icon: Database, color: "from-yellow-500 to-yellow-600" },
    { name: "Tailwind CSS", level: 85, icon: Palette, color: "from-cyan-500 to-cyan-600" },
  ]

  const experiences = [
    {
      title: "Senior Python Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Leading backend development for enterprise applications using Django and REST APIs. Mentoring junior developers and architecting scalable solutions.",
      achievements: ["Improved API performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipelines"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Developed and maintained web applications using Django, React, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: ["Built 3 major features from scratch", "Reduced load times by 60%", "Integrated payment systems"],
    },
    {
      title: "Junior Python Developer",
      company: "WebSolutions Inc",
      period: "2021 - 2022",
      location: "Lagos, Nigeria",
      description:
        "Worked on various client projects, focusing on backend development and API integration. Gained experience in agile development methodologies.",
      achievements: [
        "Completed 15+ client projects",
        "Learned Django REST Framework",
        "Improved code quality standards",
      ],
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution built with Django and REST API. Features user authentication, product management, and payment integration with modern UI/UX design.",
      tech: ["Django", "Python", "MySQL", "REST API", "Tailwind CSS"],
      image: "/modern-ecommerce-dashboard.png",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, CRUD operations, and real-time updates using Django REST Framework.",
      tech: ["Django", "DRF", "SQLite", "Python", "WebSocket"],
      image: "/task-management-dashboard.png",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles with smooth animations and mobile-first approach.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      image: "/modern-portfolio-website.png",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Blog Management System",
      description:
        "Content management system with rich text editor, category management, and SEO optimization features.",
      tech: ["Django", "PostgreSQL", "Redis", "Celery"],
      image: "/blog-management-system.png",
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content:
        "Edike delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content:
        "Working with Edike was a pleasure. He understood our requirements perfectly and delivered a robust API solution ahead of schedule.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer at WebSolutions",
      content:
        "Edike's Django expertise helped us scale our application efficiently. His code quality and documentation are outstanding.",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Award, label: "Projects Completed", value: "25+" },
    { icon: Users, label: "Happy Clients", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: Star, label: "GitHub Stars", value: "100+" },
  ]

  return (
    <div className="min-h-screen font-sans">
      <AnimatedBackground />
      <ScrollIndicator />
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gradient animate-shimmer">EIS</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "skills", "projects", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-primary relative ${
                    activeSection === item ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent animate-shimmer" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "experience", "skills", "projects", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base capitalize w-full text-left transition-colors duration-200 ${
                    activeSection === item ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
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
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mt-20" data-aos="fade-up">
            <img
              src="/professional-developer-portrait.png"
              alt="Edike Ifeanyi Samuel"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-primary animate-float shadow-2xl animate-glow"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="200">
            <span className="text-gradient">Edike Ifeanyi Samuel</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="400">
            Transforming Ideas into Digital Solutions
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="600">
            Python/Django Developer specializing in backend development, REST APIs, and scalable web applications. Ready
            to bring your vision to life with clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift animate-shimmer"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift transition-all duration-300 glass-card"
            >
              Get In Touch
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center hover-lift glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient" data-aos="fade-up">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a passionate Python/Django developer with a knack for creating seamless web applications. My
                journey in web development has equipped me with strong skills in backend development, database
                management, and API design.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in building robust, scalable applications using Django and Django REST Framework, with
                experience in both MySQL and SQLite databases. I also have a keen eye for frontend design using modern
                frameworks to create responsive, user-friendly interfaces.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Currently seeking remote opportunities where I can contribute to innovative projects and collaborate
                with talented teams to build exceptional digital experiences.
              </p>

              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div data-aos="fade-left" data-aos-delay="400">
              <img
                src="/developer-coding.png"
                alt="Developer at work"
                className="rounded-lg shadow-2xl hover-lift glass-card p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient" data-aos="fade-up">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className="hover-lift glass-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient" data-aos="fade-up">
            Skills & Technologies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover-lift glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  </div>

                  <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out animate-shimmer`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient" data-aos="fade-up">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden hover-lift glass-card ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent">Featured</Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient" data-aos="fade-up">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="hover-lift glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient" data-aos="fade-up">
            Ready to Collaborate?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            I'm always excited to work on new projects and collaborate with amazing teams. Let's connect and build
            something incredible together!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift"
            >
              <Mail className="w-5 h-5 mr-2" />
              your.email@example.com
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="hover-lift bg-transparent">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>

              <Button variant="outline" size="lg" className="hover-lift bg-transparent">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          <Card className="max-w-md mx-auto glass hover-lift" data-aos="fade-up" data-aos-delay="600">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-4 text-foreground">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                Available for remote opportunities and freelance projects. Ready to start immediately!
              </p>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border glass">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Edike Ifeanyi Samuel. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  )
}
