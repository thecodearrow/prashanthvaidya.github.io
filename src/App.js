import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram, Code, Mail, Download, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Gratitude Genie",
      description: "A conversational Gratitude Journal mobile app improving mental health through journaling, mood tracking, and daily inspiration.",
      tech: "React Native, Redux Persist, wit.ai, Async Storage",
      image: "/api/placeholder/600/400",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.balloffocus.gratitudegenie" },
        { label: "App Store", url: "https://apps.apple.com/us/app/id1525095220" }
      ]
    },
    {
      title: "Classroom Attendance 2.0",
      description: "Real-time event creation and attendance management system for universities, reducing attendance-taking to under a minute.",
      tech: "Near Sound Data Transfer, Keystroke Dynamics, React, Next.js, Material-UI, Firebase",
      image: "/api/placeholder/600/400",
      links: [
        { label: "GitHub", url: "https://github.com/thecodearrow/Event-Creation-and-Presence-Validation-System-using-NSDT-and-Keystroke-Dynamics" }
      ]
    },
    {
      title: "Study Notes Quiz App",
      description: "An app that generates questions and answers in real-time from uploaded study notes for efficient revision.",
      tech: "NLP, DL, ReactJS, React Native, Redux Persist, spaCy, HuggingFace",
      image: "/api/placeholder/600/400",
      links: [
        { label: "Web App", url: "https://ballofquestions.web.app/" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ballofwisdom.ballofquestions" },
        { label: "GitHub", url: "https://github.com/thecodearrow/StudyNotesQuizApp" }
      ]
    }
  ];

  const highlights = [
    { icon: "🚀", title: "Product Maker", description: "Built apps with 800+ downloads and 4.6-star ratings" },
    { icon: "🎓", title: "Masters at IIT Hyderabad", description: "Pursuing MS in Computer Science. BTech with 88.86%" },
    { icon: "⭐", title: "Competitive Programmer", description: "4 stars on CodeChef, CCDSAP Certified, ranked #138/15000" },
    { icon: "💻", title: "Problem Solver", description: "700+ problems solved across coding platforms" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PV</h1>
          <div className="space-x-4">
            <a href="#projects" className="hover:text-purple-200">Projects</a>
            <a href="#highlights" className="hover:text-purple-200">Highlights</a>
            <a href="#contact" className="hover:text-purple-200">Contact</a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">Prashanth Vaidya R</h1>
          <p className="text-xl mb-8">Problem solver and maker of products. An ambitious geek. Full-time learner. Occasional writer.</p>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-purple-100">
            <Download className="mr-2" /> Download Resume
          </button>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-purple-600 mb-4">{project.tech}</p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-8 text-gray-600">
            If you'd like to leave any kind of feedback or would like to contact me regarding any work opportunities,
            please feel free to do so through my email. I'll get back to you at the earliest. 🤠
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="mailto:prashanthvaidya.r@gmail.com" className="text-purple-700 hover:text-purple-900">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/thecodearrow" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/prashanthvaidyar/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/lordvaidya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/PrashanthVaidyaR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/prashanth_vaidya/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.stopstalk.com/user/profile/thecodearrow" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>Made with ❤️ by PV</p>
        </div>
      </footer>
    </div>
  );
}