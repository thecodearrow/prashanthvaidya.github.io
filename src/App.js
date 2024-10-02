import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Code, Mail, Download, ExternalLink, Youtube } from 'lucide-react';
import profilePicture1 from './images/me1.png';
import profilePicture2 from './images/me2.png';
import attendance from "./images/attendance.webp";
import quizzapp from "./images/quizapp.png";
import running from "./images/running.webp";
import gratitudegenie from "./images/gratitude-genie.webp";

export default function Portfolio() {
  const projects = [
    {
      title: "Gratitude Genie",
      description: "A conversational Gratitude Journal mobile app improving mental health through journaling, mood tracking, and daily inspiration.",
      tech: "React Native, Redux Persist, wit.ai, Async Storage",
      image: gratitudegenie,
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.balloffocus.gratitudegenie" },
        { label: "App Store", url: "https://apps.apple.com/us/app/id1525095220" }
      ]
    },
    {
      title: "The Running Genie",
      description: "AI-powered running coach that provides personalized, actionable insights from user activities recorded on platforms like Strava or smartwatches.",
      tech: "ReactNative, Redux Persist, ChatGPT APIs,Strava APIs",
      image: running,
      links: [
        { label: "COMING SOON", url: "" }
      ]
    },
    {
      title: "Classroom Attendance 2.0",
      description: "Real-time event creation and attendance management system for universities, reducing attendance-taking to under a minute.",
      tech: "Near Sound Data Transfer, Keystroke Dynamics, React, Next.js, Material-UI, Firebase",
      image: attendance,
      links: [
        { label: "GitHub", url: "https://github.com/thecodearrow/Event-Creation-and-Presence-Validation-System-using-NSDT-and-Keystroke-Dynamics" }
      ]
    },

    // {
    //   title: "Study Notes Quiz App",
    //   description: "An app that generates questions and answers in real-time from uploaded study notes for efficient revision.",
    //   tech: "NLP, DL, ReactJS, React Native, Redux Persist, spaCy, HuggingFace",
    //   image: quizzapp,
    //   links: [
    //     { label: "Web App", url: "https://ballofquestions.web.app/" },
    //     { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ballofwisdom.ballofquestions" },
    //     { label: "GitHub", url: "https://github.com/thecodearrow/StudyNotesQuizApp" }
    //   ]
    // }
  ];

  const highlights = [
    { icon: "🚀", title: "Product Maker & Aspiring Indie-hacker", description: "Built apps with 1k+ downloads and 4.7-star ratings" },
    { icon: "🎓", title: "Masters at IIT Hyderabad", description: "Earned my Master's degree in Computer Science at Indian Institute of Technology, Hyderabad, deepening my expertise in computer science fundamentals." },
    { icon: "💻", title: "Passionate about Teaching",
     description: "I've created multiple Computer Science Youtube videos and volunteered with NGOs like U&I for nearly a year.",
     link: {
      url: "https://www.youtube.com/@prashanthvaidya",
      icon: <Youtube className="w-5 h-5" />
    } 
    },
    { icon: "🏃‍♂️", title: "Passionate about Running",
     description: "While I am not coding/ drinking coffee, you'll find me running around the country like Forrest Gump!", 
     link: {
      url: "https://www.strava.com/athletes/112006595",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
      </svg>
    }
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PV</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-purple-200 transition duration-300">Projects</a>
            <a href="#highlights" className="hover:text-purple-200 transition duration-300">Highlights</a>
            <a href="#contact" className="hover:text-purple-200 transition duration-300">Contact</a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
            <h1 className="text-5xl font-bold mb-4">Prashanth Vaidya</h1>
            <p className="text-xl mb-8">Highly Driven & Curious Engineer 🚀 | Aspiring Indie-hacker 🤠 | Long-distance runner 🏃‍♂️ </p>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold inline-flex items-center hover:bg-indigo-100 transition duration-300"
            >
              <Download className="mr-2" /> Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center space-x-4 animate-scaleIn">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition duration-300">
              <img src={profilePicture1} alt="Tech" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition duration-300">
              <img src={profilePicture2} alt="Running" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fadeInUp"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 p-6 flex items-center justify-center bg-indigo-100">
                    <div className="w-64 h-auto relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <h3 className="text-2xl font-semibold mb-3 text-indigo-600">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-indigo-500 mb-4">
                      <span className="font-semibold">Technologies:</span> {project.tech}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" /> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                <p className="text-gray-600 text-center mb-4">{highlight.description}</p>
                {highlight.link && (
                  <div className="text-center">
                    <a 
                      href={highlight.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 transition duration-300"
                    >
                      {highlight.link.icon}
                      <span className="ml-2">View Details</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-8 text-gray-600 text-lg">
              Feel free to contact me for feedback or work opportunities via email. <br/>
              Also, I'm always up for a chat about anything tech or running! 🤠
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              {[
                { icon: <Mail className="w-8 h-8" />, href: "mailto:prashanthvaidya.r@gmail.com", color: "text-red-500 hover:text-red-600" },
                { icon: <Github className="w-8 h-8" />, href: "https://github.com/thecodearrow", color: "text-gray-700 hover:text-gray-900" },
                { icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/prashanthvaidyar/", color: "text-blue-600 hover:text-blue-700" },
                { icon: <Twitter className="w-8 h-8" />, href: "https://twitter.com/thecodemarathon", color: "text-blue-400 hover:text-blue-500" },
                { icon: <Instagram className="w-8 h-8" />, href: "https://www.instagram.com/prashanth_vaidya/", color: "text-pink-600 hover:text-pink-700" },
                { icon: <Youtube className="w-8 h-8" />, href: "https://www.youtube.com/@prashanthvaidya", color: "text-red-600 hover:text-red-700" },
                { icon: <Code className="w-8 h-8" />, href: "https://www.stopstalk.com/user/profile/thecodearrow", color: "text-green-600 hover:text-green-700" },
                { 
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
                    </svg>
                  ), 
                  href: "https://www.strava.com/athletes/112006595", 
                  color: "text-orange-500 hover:text-orange-600" 
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} transition duration-300 transform hover:scale-110`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">Made with ❤️ by PV</p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
}