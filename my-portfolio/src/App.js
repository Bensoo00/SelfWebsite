import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Activity, Code, Briefcase, Mail, Linkedin, TrendingUp, Cpu, Droplets, Sparkles, Sun, Cloud, Settings, User } from 'lucide-react';
import IntegratedTradingBot from './IntegratedTradingBot';
import BotControlPage from './BotControlPage';
import VistaWindow from './VistaWindow';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Portfolio() {
    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const [currentPage, setCurrentPage] = useState('home');
    const [osOutput, setOsOutput] = useState([
        '> Currently Attempting to implement a working version of my OS into this window.',
        '> Dummy commands are implemented, System ready.'
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
                         background: 'transparent',
                         borderBottom: '1px solid rgba(255,255,255,0.8)',
                         boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                         borderRadius: '7px 7px 6px 6px',                     }}>
                    <div className="max-w-7xl mx-auto px-8 py-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-36 h-36 rounded-full overflow-hidden relative shadow-2xl"
                                    style={{
                                        boxShadow: '0 10px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.3)',
                                    }}
                                >
                                    <img
                                        src="/pibb.jpg"
                                        alt="Logo"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                {/* Optional overlay icon */}
                                    <Code className="w-6 h-6 text-white absolute" />
                                </div>

                                <div className="text-2xl font-bold" style={{
                                    background: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontFamily: "Segoe UI-MONOSPACE",
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
            className="relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/future2.jpg')",
                backgroundSize: "cover",       // Ensures the image covers the whole div
                backgroundPosition: "center",  // Centers the image
                backgroundRepeat: "no-repeat"  // Prevent tiling
                    }}
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
                     background: 'transparent',
                     borderBottom: '1px solid rgba(255,255,255,0.8)',
                     boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                     overflow: 'hidden',
                     borderRadius: '7px 7px 6px 6px',
                     position: 'relative',
                 }}>
                <div className="max-w-7xl mx-auto px-8 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                                 style={{
                                 }}>

                                <img src="/vista.jpg" alt="Logo" className="w-25 h-25 relative z-10" style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',

                                }}/>
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-gray-700 font-semibold hover:text-blue-500 transition-colors" style={{
                                WebkitBackgroundClip: 'text',
                                fontFamily: "Segoe UI",
                                fontSize: '1.4rem',
                            }}>
                                bennguyen.net
                            </div>
                        </div>

                        <div className="flex gap-8"style={{
                            WebkitBackgroundClip: 'text',
                            fontFamily: "Segoe UI",
                            fontSize: '1.35rem',
                        }}>
                            <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors font-semibold">About</a>
                            <a href="#experience" className="text-gray-700 hover:text-blue-500 transition-colors font-semibold">Experience</a>
                            <a href="#projects" className="text-gray-700 hover:text-blue-500 transition-colors font-semibold">Projects</a>
                            <button onClick={() => setCurrentPage('bot-control')} className="text-gray-700 hover:text-blue-500 transition-colors font-semibold flex items-center gap-2">
                                Bot Control
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">

                {/* About Me Section */}
                <div id="about" className="mb-8">
                    <VistaWindow title="About Me" icon={User}>
                        <div className="flex items-center gap-8 mb-8">
                            <div className="w-36 h-36 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                                 style={{
                                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                     boxShadow: '0 10px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.3)'
                                 }}>
                                <img src="/pibb.jpg" alt="Logo" className="w-20 h-20 relative z-10" style={{
                                    height: '120%',
                                    width: '120%',
                                    position: 'absolute',

                                }}/>
                                <div className="absolute inset-0 opacity-30"></div>
                            </div>

                            <div>
                                <h1 className="text-6xl text-gray-700 font-bold mb-2 " style={{
                                    WebkitBackgroundClip: 'text',
                                    fontFamily: "Segoe UI",
                                }}>
                                    Benjamin Nguyen
                                </h1>
                                <p className="text-2xl text-gray-700 font-semibold mb-2 px-1" style={{
                                    fontFamily: "Segoe UI",
                                }}>
                                    Software Engineer | Systems Developer | Plant Enthusiast
                                    </p>

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
                            <VistaWindow>
                                <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(144,238,144,0.3) 0%, rgba(152,251,152,0.2) 100%)',
                                        borderColor: 'rgba(255,255,255,0.6)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
                                    }}>
                                    <h3 className="font-bold text-gray-800 mb-2 text-lg">Technologies</h3>
                                    <p className="text-gray-700">AWS, Git, Agile, Scrum, Jira</p>
                                </div>
                            </VistaWindow>

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
                    </VistaWindow>
                </div>

                {/* Experience Section */}
                <div id="experience" className="mb-8">
                    <div className="space-y-6">
                        <VistaWindow title="Information Technology Specialist - UPenn School of Nursing" icon={Briefcase}>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-gray-800">University of Pennsylvania School of Nursing</h3>
                                    <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                    March 2025 - September 2025
                  </span>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Provided Tier 1 technical support for Windows 10 and macOS environments with remote troubleshooting</li>
                                    <li>• Maintained classroom AV systems including Crestron hardware and integrated peripherals</li>
                                    <li>• Configured enterprise software platforms including Microsoft 365, SharePoint Online, Canvas LMS</li>
                                    <li>• Analyzed usage metrics to optimize system performance and inform upgrade recommendations</li>
                                </ul>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="IT/Tech Intern - Lavner Education" icon={Briefcase}>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-gray-800">Lavner Education</h3>
                                    <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                    June 2024 - August 2024
                  </span>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Instructed students aged 6-12 in Python, LUA, and Scratch programming languages</li>
                                    <li>• Developed engaging curriculum that enhanced problem-solving skills and creativity</li>
                                    <li>• Provided technical support and troubleshooting for camp technology</li>
                                    <li>• Organized tech-related workshops promoting teamwork and collaboration</li>
                                </ul>
                            </div>
                        </VistaWindow>
                    </div>
                </div>

                {/* Projects Section */}
                <div id="projects" className="mb-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {/* OS Terminal */}
                        <VistaWindow title="Custom x86 Operating System" icon={Cpu}>
                            <div className="terminal-screen" ref={osTerminalRef}
                                 style={{
                                     background: '#000000',
                                     padding: '16px',
                                     height: '350px',
                                     overflowY: 'auto',
                                     fontFamily: 'Consolas, Monaco, monospace',
                                     fontSize: '13px',
                                     color: '#00ff00',
                                     borderRadius: '4px'
                                 }}
                            >
                                {osOutput.map((line, i) => (
                                    <div key={i} className="mb-1">{line}</div>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-2 items-center">
                                <span className="text-green-500 font-mono">$</span>
                                <input
                                    type="text"
                                    value={osInput}
                                    onChange={(e) => setOsInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="flex-1 bg-gray-900 text-green-400 font-mono px-3 py-2 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
                                    placeholder="Type 'help' for commands"
                                />
                            </div>
                        </VistaWindow>

                        {/* Trading Bot */}
                        <VistaWindow title="AI Trading Bot" icon={TrendingUp}>
                            <div className="text-center py-12">
                                <Activity className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                <p className="text-gray-600 mb-6">
                                    Real-time AI trading bot using reinforcement learning.
                                    <br />
                                    Click below to manage the bot and view detailed analytics.
                                </p>
                                <button
                                    onClick={() => setCurrentPage('bot-control')}
                                    className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                        boxShadow: '0 4px 15px rgba(17, 153, 142, 0.4)'
                                    }}
                                >
                                    Open Control Panel
                                </button>
                            </div>
                        </VistaWindow>
                    </div>

                    {/* Trading Bot Integration */}
                    <VistaWindow title="Trading Bot Analytics" icon={Activity}>
                        <IntegratedTradingBot />
                    </VistaWindow>

                    {/* Other Projects */}
                    <VistaWindow title="Twitch Bot Detection System" icon={Terminal}>
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">
                                Real-time chat analysis system using Python, Pandas, and NLP
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Developed real-time Twitch chat logger connecting to multiple streams simultaneously</li>
                                <li>• Preprocessed large volumes of chat data using NLP techniques including tokenization and sentiment analysis</li>
                                <li>• Performed advanced feature extraction with TF-IDF vectors and lexical diversity metrics</li>
                                <li>• Implemented sentiment analysis using NLTK Sentiment Intensity Analyzer</li>
                            </ul>
                        </div>
                    </VistaWindow>
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
                    <p className="text-sm mt-2">Built with React and Windows Vista aesthetics</p>
                    <p className="text-sm mt-1">267-836-3615 | bennnguyen22@gmail.com</p>
                </div>
            </footer>
        </div>
    );
}