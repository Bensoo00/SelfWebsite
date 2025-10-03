import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Activity, Code, Briefcase, Mail, Linkedin, TrendingUp, Cpu, Droplets, Sparkles, Sun, Cloud, Settings } from 'lucide-react';
import IntegratedTradingBot from './IntegratedTradingBot';
import BotControlPage from './BotControlPage';

export default function Portfolio() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  
  const [currentPage, setCurrentPage] = useState('home');
  const [osOutput, setOsOutput] = useState([
    '> Booting BenOS v1.0...',
    '> Loading kernel modules...',
    '> Initializing memory segmentation...',
    '> Setting up interrupt handlers...',
    '> System ready.'
  ]);
  const [osInput, setOsInput] = useState('');
  
  const osTerminalRef = useRef(null);

  // Auto-scroll OS terminal
  useEffect(() => {
    if (osTerminalRef.current) {
      osTerminalRef.current.scrollTop = osTerminalRef.current.scrollHeight;
    }
  }, [osOutput]);

  // OS Terminal command handler
  const handleOsCommand = () => {
    if (!osInput.trim()) return;

    const newOutput = [...osOutput, `$ ${osInput}`];
    
    if (osInput.toLowerCase() === 'help') {
      newOutput.push('Available commands: help, clear, about, mem, process');
    } else if (osInput.toLowerCase() === 'clear') {
      setOsOutput([]);
      setOsInput('');
      return;
    } else if (osInput.toLowerCase() === 'about') {
      newOutput.push('BenOS - Custom x86 Operating System built with C and Assembly');
    } else if (osInput.toLowerCase() === 'mem') {
      newOutput.push('Memory: 32MB allocated | Segmentation: Active | Pages: 8192');
    } else if (osInput.toLowerCase() === 'process') {
      newOutput.push('PID 1: kernel [running]', 'PID 2: scheduler [running]', 'PID 3: shell [running]');
    } else {
      newOutput.push(`Command not found: ${osInput}. Type 'help' for available commands.`);
    }

    setOsOutput(newOutput);
    setOsInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOsCommand();
    }
  };

  // Render different pages
  if (currentPage === 'bot-control') {
    return (
      <div>
        {/* Navigation Bar */}
        <nav className="relative z-10 backdrop-blur-md border-b shadow-lg" 
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
          }}>
          <div className="max-w-7xl mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
                  }}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Benjamin Nguyen
                </div>
              </div>
              
              <div className="flex gap-8">
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">Home</button>
                <button onClick={() => setCurrentPage('bot-control')} className="text-purple-600 font-semibold">Bot Control</button>
              </div>
            </div>
          </div>
        </nav>
        
        <BotControlPage />
      </div>
    );
  }

  return (
      <div
          className="min-h-screen relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
      >


      {/* Frutiger Aero Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-40" 
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(135,206,250,0.4))',
            filter: 'blur(60px)'
          }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(144,238,144,0.4))',
            filter: 'blur(50px)'
          }}></div>
        
        <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full opacity-60 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.9), rgba(173,216,230,0.3))',
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.5), 0 0 20px rgba(135,206,250,0.3)'
          }}></div>
        <div className="absolute top-60 right-1/3 w-24 h-24 rounded-full opacity-50 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.85), rgba(152,251,152,0.3))',
            boxShadow: 'inset 0 0 25px rgba(255,255,255,0.4), 0 0 15px rgba(144,238,144,0.3)',
            animationDelay: '1.5s'
          }}></div>

        <Droplets className="absolute top-32 left-1/2 w-8 h-8 text-cyan-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-1/3 left-20 w-6 h-6 text-yellow-300/50 animate-pulse" style={{ animationDelay: '1s' }} />
        <Sun className="absolute top-1/4 right-1/4 w-10 h-10 text-orange-300/30 animate-pulse" style={{ animationDelay: '2s' }} />
        <Cloud className="absolute bottom-1/2 right-1/3 w-12 h-12 text-white/40 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 backdrop-blur-md border-b shadow-lg" 
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.8)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
        }}>
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
                }}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Benjamin Nguyen
              </div>
            </div>
            
            <div className="flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">About</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">Experience</a>
              <button onClick={() => setCurrentPage('bot-control')} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Bot Control
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        
        {/* Hero Section */}
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-8 border" 
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            borderColor: 'rgba(255,255,255,0.9)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}>
          
          <div className="flex items-center gap-8 mb-8">
            <div className="w-36 h-36 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 10px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.3)'
              }}>
              <Code className="w-20 h-20 text-white relative z-10" />
              <div className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent)'
                }}></div>
            </div>
            
            <div>
              <h1 className="text-6xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Benjamin Nguyen
              </h1>
              <p className="text-2xl text-gray-700 font-semibold mb-4">Software Engineer | Systems Developer | Plant Enthusiast</p>
              
              <div className="flex gap-6">
                <a href="mailto:bennnguyen22@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                    color: '#667eea'
                  }}>
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/bennguyen04/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                    color: '#667eea'
                  }}>
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(135,206,250,0.3) 0%, rgba(173,216,230,0.2) 100%)',
                borderColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
              }}>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Programming</h3>
              <p className="text-gray-700">Python, GoLang, Java, C, Bash, SQL, Assembly</p>
            </div>
            
            <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(144,238,144,0.3) 0%, rgba(152,251,152,0.2) 100%)',
                borderColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
              }}>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Technologies</h3>
              <p className="text-gray-700">AWS, Git, Agile, Scrum, Jira</p>
            </div>
            
            <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(255,218,185,0.4) 0%, rgba(255,228,196,0.2) 100%)',
                borderColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
              }}>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Education</h3>
              <p className="text-gray-700">Drexel University - Software Engineering BS</p>
            </div>
          </div>
        </div>

        {/* Interactive Projects - OS Terminal + Trading Bot */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          
          {/* OS Terminal */}
          <div className="rounded-3xl shadow-2xl overflow-hidden border"
            style={{
              background: 'rgba(20,20,20,0.95)',
              borderColor: 'rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}>
            <div className="px-6 py-4 flex items-center gap-3 border-b"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>
              <Cpu className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">Custom x86 Operating System</h2>
            </div>
            
            <div 
              ref={osTerminalRef}
              className="p-6 h-96 overflow-y-auto font-mono text-sm text-green-400"
              style={{ background: 'rgba(0,0,0,0.8)' }}
            >
              {osOutput.map((line, i) => (
                <div key={i} className="mb-1">{line}</div>
              ))}
            </div>
            
            <div className="px-6 pb-6" style={{ background: 'rgba(0,0,0,0.8)' }}>
              <div className="flex gap-2 items-center">
                <span className="text-green-400 font-mono">$</span>
                <input
                  type="text"
                  value={osInput}
                  onChange={(e) => setOsInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-gray-900 text-green-400 font-mono px-3 py-2 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
                  placeholder="Type 'help' for commands"
                />
              </div>
            </div>
          </div>

          {/* Trading Bot - Now with real data */}
          <div className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
              borderColor: 'rgba(255,255,255,0.9)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
            }}>
            <div className="px-6 py-4 flex items-center justify-between border-b"
              style={{
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold text-white">AI Trading Bot</h2>
              </div>
              <button 
                onClick={() => setCurrentPage('bot-control')}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-semibold transition-all flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Control Panel
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Real-time AI trading bot using reinforcement learning. Click "Control Panel" to manage the bot and view detailed analytics.
              </p>
              <div className="text-center py-8">
                <Activity className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500 mb-4">Bot monitoring available in Control Panel</p>
                <button
                  onClick={() => setCurrentPage('bot-control')}
                  className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}
                >
                  Open Control Panel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real Trading Bot Integration - Full Width */}
        <div id="projects" className="mb-8">
          <IntegratedTradingBot />
        </div>

        {/* Experience Section */}
        <div id="experience" className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-8 border"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            borderColor: 'rgba(255,255,255,0.9)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <Briefcase className="w-10 h-10" style={{ color: '#667eea' }} />
            Experience
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl shadow-lg border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(135,206,250,0.25) 0%, rgba(173,216,230,0.15) 100%)',
                borderColor: 'rgba(255,255,255,0.7)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)'
              }}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Information Technology Specialist</h3>
                  <p className="text-gray-700 font-semibold">University of Pennsylvania School of Nursing</p>
                </div>
                <span className="text-sm text-gray-600 font-medium px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.6)' }}>March 2025 - September 2025</span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Provided Tier 1 technical support for Windows 10 and macOS environments with remote troubleshooting</li>
                <li>• Maintained classroom AV systems including Crestron hardware and integrated peripherals</li>
                <li>• Configured enterprise software platforms including Microsoft 365, SharePoint Online, Canvas LMS</li>
                <li>• Analyzed usage metrics to optimize system performance and inform upgrade recommendations</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(144,238,144,0.25) 0%, rgba(152,251,152,0.15) 100%)',
                borderColor: 'rgba(255,255,255,0.7)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)'
              }}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">IT/Tech Intern</h3>
                  <p className="text-gray-700 font-semibold">Lavner Education</p>
                </div>
                <span className="text-sm text-gray-600 font-medium px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.6)' }}>June 2024 - August 2024</span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Instructed students aged 6-12 in Python, LUA, and Scratch programming languages</li>
                <li>• Developed engaging curriculum that enhanced problem-solving skills and creativity</li>
                <li>• Provided technical support and troubleshooting for camp technology</li>
                <li>• Organized tech-related workshops promoting teamwork and collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 border"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            borderColor: 'rgba(255,255,255,0.9)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <Terminal className="w-10 h-10" style={{ color: '#667eea' }} />
            Other Projects
          </h2>
          
          <div className="p-6 rounded-2xl shadow-lg border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(221,160,221,0.25) 0%, rgba(255,182,193,0.15) 100%)',
              borderColor: 'rgba(255,255,255,0.7)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)'
            }}>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Twitch Bot Detection</h3>
            <p className="text-gray-700 mb-3 font-medium">Real-time chat analysis system using Python, Pandas, and NLP</p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Developed real-time Twitch chat logger connecting to multiple streams simultaneously</li>
              <li>• Preprocessed large volumes of chat data using NLP techniques including tokenization and sentiment analysis</li>
              <li>• Performed advanced feature extraction with TF-IDF vectors and lexical diversity metrics</li>
              <li>• Implemented sentiment analysis using NLTK Sentiment Intensity Analyzer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md border-t mt-16"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
          borderTop: '1px solid rgba(255,255,255,0.8)',
          boxShadow: '0 -4px 30px rgba(0,0,0,0.05)'
        }}>
        <div className="max-w-7xl mx-auto px-8 py-8 text-center text-gray-700">
          <p className="font-semibold text-lg">© 2025 Benjamin Nguyen</p>
          <p className="text-sm mt-2">Built with React and Frutiger Aero aesthetics</p>
          <p className="text-sm mt-1">267-836-3615 | bennnguyen22@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}