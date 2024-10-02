import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Code, Mail, Download,ExternalLink, Youtube } from 'lucide-react';
import profilePicture1 from './assets/me1.png';
import profilePicture2 from './assets/me2.png';

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
    { icon: "🚀", title: "Product Maker & Aspiring Indie-hacker", description: "Built apps with 1k+ downloads and 4.7-star ratings" },
    { icon: "🎓", title: "Masters at IIT Hyderabad", description: "Completed my M.Tech in Computer Science at Indian Institute of Technology, Hyderabad" },
    { icon: "💻", title: "Passionate about Teaching", description: "I have made several videos related to Computer Science on Youtube. Have also volunteered to teach in NGOs like U&I for close to a year.  " },
    { icon: "🏃‍♂️", title: "Passionate about Running", description: "While I am not coding, you'll find me running around like Forest Gump! " }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Circular Thumbnail */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PV</h1>
          <div className="space-x-4">
            <a href="#projects" className="hover:text-purple-200">Projects</a>
            <a href="#highlights" className="hover:text-purple-200">Highlights</a>
            <a href="#contact" className="hover:text-purple-200">Contact</a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-24 flex items-center">
          <div className="w-2/3">
            <h1 className="text-5xl font-bold mb-4">Prashanth Vaidya R</h1>
            <p className="text-xl mb-8">Highly Driven & Curious Engineer 🚀 | Aspiring Indie-hacker 🤠 | Long-distance runner 🏃‍♂️ </p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-purple-100 transition duration-300">
              <Download className="mr-2" /> Download Resume
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center space-x-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={profilePicture1} alt="Tech" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={profilePicture2} alt="Running" className="w-full h-full object-cover" />
            </div>
          </div>
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
                      className="inline-flex items-center px-3 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 transition duration-300"
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
                <div className="text-4xl mb-4 text-center">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{highlight.title}</h3>
                <p className="text-gray-600 text-center">{highlight.description}</p>
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
            Feel free to contact me for feedback or work opportunities via email. <br/>
            Also, I’m always up for a chat about anything tech or running! 🤠
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="mailto:prashanthvaidya.r@gmail.com" className="text-purple-700 hover:text-purple-900 transition duration-300">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/thecodearrow" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/prashanthvaidyar/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/thecodemarathon" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://www.strava.com/athletes/112006595" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
              </svg>
            </a>
            <a href="https://www.instagram.com/prashanth_vaidya/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition duration-300">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@prashanthvaidya" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition duration-300">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="https://www.stopstalk.com/user/profile/thecodearrow" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
              <Code className="w-8 h-8" />
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