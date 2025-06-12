import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Brain,
  Database,
  Cloud,
  Zap,
  Target,
  BarChart,
  Cpu,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Workflow,
  Users,
  TrendingUp
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python & Machine Learning', level: 95, icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { name: 'MLOps & Deployment', level: 90, icon: Cloud, color: 'from-green-500 to-teal-500' },
    { name: 'Deep Learning & AI', level: 92, icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { name: 'Docker & Kubernetes', level: 88, icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'Cloud Platforms (AWS/GCP)', level: 85, icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Data Engineering', level: 87, icon: BarChart, color: 'from-indigo-500 to-blue-500' }
  ];

  const projects = [
    {
      title: "Simplifying Office Workflows",
      description: "An intelligent platform that automates routine business processes such as task assignment, reporting, data entry, and internal communications—empowering office staff to focus on high-value work.",
      tech: ["Python", "Flask", "AI/ML", "MongoDB", "Docker"],
      featured: true
    },
    {
      title: "Customer Retention System",
      description: "Designed and deployed a churn prediction pipeline using Kubernetes-managed containers, integrating data batching, ML model inference, and targeted email generation.",
      tech: ["Kubernetes", "Docker", "scikit-learn", "Python", "Redis"]
    },
    {
      title: "Real-time Query Assistant",
      description: "Developed an AI-powered quick-response system at Provarex HR that significantly improved customer engagement through intelligent automation.",
      tech: ["NLP", "Transformers", "Python", "Flask", "MongoDB"]
    }
  ];

  const AnimatedSkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), index * 200);
      return () => clearTimeout(timer);
    }, [index]);

    return (
      <div className="mb-6 group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <skill.icon className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
          <span className="text-blue-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              boxShadow: isVisible ? `0 0 20px rgba(59, 130, 246, 0.5)` : 'none'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Godwin Olagunju
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400 rotate-12 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Godwin Olagunju
            </h1>
            <div className="text-xl md:text-2xl text-blue-400 font-semibold mb-4 animate-slide-up">
              AI/MLOps Engineer
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Transforming businesses through intelligent automation and scalable machine learning solutions
            </p>
          </div>

          {/* Enhanced Pitch Section */}
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 mb-12 max-w-5xl mx-auto animate-slide-up hover:bg-slate-800/70 transition-all duration-500 group" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Innovation Spotlight</h3>
            </div>
            
            <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              "Simplifying Office Workflows"
            </h4>
            
            <div className="text-left space-y-4 mb-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="text-red-400 font-semibold">The Problem:</span> Office staff are buried under repetitive, low-impact tasks—manual reporting, 
                task delegation, data entry, and endless back-and-forth communications. These processes are time-consuming, error-prone, and demotivating.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="text-green-400 font-semibold">Our Innovation:</span> Rather than just digitizing processes, we <span className="text-cyan-400 font-semibold">abstract and automate them</span>. 
                Using intelligent workflow mapping, the system understands daily business patterns and turns them into smart, automated flows.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                It's like having a <span className="text-blue-400 font-semibold">digital operations assistant</span> working behind the scenes—reducing clutter, 
                preventing delays, and empowering staff to focus on strategic tasks that truly drive business value.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <Workflow className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-white font-semibold">Modular</span>
                </div>
                <p className="text-gray-400 text-sm">Easy to adapt for any business type or department</p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-white font-semibold">Non-technical</span>
                </div>
                <p className="text-gray-400 text-sm">Office staff can set up flows without coding</p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-white font-semibold">Context-aware</span>
                </div>
                <p className="text-gray-400 text-sm">Learns patterns to suggest better workflows</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-400/20">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-white font-bold text-lg">The Vision</span>
              </div>
              <p className="text-cyan-100 text-center font-medium">
                We're not just building another office tool. We're giving businesses an <span className="text-cyan-400 font-semibold">internal nervous system</span>—agile, intelligent, and responsive.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
            >
              Let's Discuss This Innovation
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="#projects"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate and results-driven AI Developer with <span className="text-blue-400 font-semibold">over 3 years of experience</span> building 
                and deploying scalable machine learning and deep learning solutions. My work spans various domains including 
                <span className="text-cyan-400 font-semibold"> computer vision, natural language processing, and transformer-based models</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in end-to-end model development, from data preprocessing to deploying models at scale using 
                cloud platforms such as <span className="text-blue-400 font-semibold">AWS and GCP</span>. 
                Strong backend development skills using Python and Flask, with production experience using MongoDB and Redis.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Expertise in <span className="text-cyan-400 font-semibold">containerization (Docker), orchestration (Kubernetes), and CI/CD workflows</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <Code className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
                <p className="text-gray-400 text-sm">Python, Flask, MongoDB, Redis</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <Brain className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">AI/ML Expertise</h4>
                <p className="text-gray-400 text-sm">Computer Vision, NLP, Transformers</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <Cloud className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">Cloud Platforms</h4>
                <p className="text-gray-400 text-sm">AWS, GCP, Scalable Deployment</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <Database className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">DevOps</h4>
                <p className="text-gray-400 text-sm">Docker, Kubernetes, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {skills.slice(0, 3).map((skill, index) => (
                <AnimatedSkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            <div>
              {skills.slice(3).map((skill, index) => (
                <AnimatedSkillBar key={skill.name} skill={skill} index={index + 3} />
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Transformers',
                'Flask', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
                'AWS', 'GCP', 'Git', 'GitHub Actions', 'SQL'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 group ${
                  project.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="ml-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Innovation Focus
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Additional projects include:</p>
            <p className="text-gray-300">
              <span className="font-semibold text-blue-400">Closed-System Hydropower Plant:</span> Led design and testing of a closed-loop Pelton wheel turbine system with mechanical and electrical integration
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">godwin.olagunju@email.com</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400">View my code</p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
            <p className="text-gray-300 mb-6 text-lg">
              <span className="font-semibold text-blue-400">Education:</span> Bachelor's Degree in Engineering with final year focus on hydropower system design and performance testing.
            </p>
            <p className="text-gray-400">
              Open to collaboration on innovative AI/ML projects and consulting opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Godwin Olagunju. Empowering businesses through intelligent automation.
          </p>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}

export default App;