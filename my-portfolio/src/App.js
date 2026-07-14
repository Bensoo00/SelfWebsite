import React, { useState } from 'react';
import { Terminal, Activity, Code, Briefcase, Mail, Linkedin, TrendingUp, Droplets, Sparkles, Sun, Cloud, Settings, User, GraduationCap, Mountain, FileText, Github, Store, FolderOpen, Bot } from 'lucide-react';

import IntegratedTradingBot from './IntegratedTradingBot';
import BotControlPage from './BotControlPage';
import VistaWindow from './VistaWindow';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';

const navItems = [
    { label: 'About', icon: User, href: '#about' },
    { label: 'Experience', icon: Briefcase, href: '#experience' },
    { label: 'Projects', icon: FolderOpen, href: '#projects' },
    { label: 'Bot Control', icon: Bot, page: 'bot-control' },
];

export default function Portfolio() {
    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div
            className="relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/future2.jpg')",
                backgroundSize: "cover",       // Ensures the image covers the whole div
                backgroundPosition: "center",  // Centers the image
                backgroundRepeat: "no-repeat", // Prevent tiling
                minHeight: "100vh"
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

            {/* Floating Dock Navigation — fixed bottom-center, follows scroll */}
            <nav className="fixed left-1/2 -translate-x-1/2 z-50"
                 style={{
                     fontFamily: 'Segoe UI, Tahoma, sans-serif',
                     bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
                 }}>
                <div className="relative flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-3xl"
                     style={{
                         background: 'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(190,225,245,0.4) 55%, rgba(122,199,227,0.4) 100%)',
                         border: '1px solid rgba(255,255,255,0.85)',
                         boxShadow: '0 12px 40px rgba(20,60,100,0.3), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.9)',
                         backdropFilter: 'blur(14px)',
                         WebkitBackdropFilter: 'blur(14px)',
                     }}>
                    {/* Glossy aero highlight over the top half */}
                    <div className="absolute inset-x-1 top-0.5 h-1/2 rounded-t-3xl pointer-events-none"
                         style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.05) 100%)' }} />

                    {/* Logo — back to top / home */}
                    <button
                        onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        aria-label="Home"
                        className="relative flex flex-col items-center gap-0.5 px-1.5 sm:px-2 py-1 rounded-2xl transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                    >
                        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-lg block relative"
                              style={{ boxShadow: '0 3px 10px rgba(20,60,100,0.35), inset 0 0 6px rgba(255,255,255,0.5)' }}>
                            <img src="/vista.jpg" alt="bennguyen.net logo" className="w-full h-full object-cover" />
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Home</span>
                    </button>

                    <div className="w-px h-8 sm:h-10 mx-0.5 sm:mx-1" style={{ background: 'linear-gradient(180deg, transparent, rgba(30,90,140,0.35), transparent)' }} />

                    {navItems.map(({ label, icon: ItemIcon, href, page }) => {
                        const isActive = page ? currentPage === page : false;
                        const classes = `relative flex flex-col items-center gap-0.5 px-1.5 sm:px-2.5 py-1 rounded-2xl transition-all duration-200 hover:scale-110 hover:-translate-y-1 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`;
                        const inner = (
                            <>
                                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
                                      style={{
                                          background: isActive
                                              ? 'linear-gradient(180deg, #84c6d9 0%, #4a95b8 49%, #3d7ea0 50%, #2a6888 100%)'
                                              : 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,230,245,0.8) 100%)',
                                          border: '1px solid rgba(255,255,255,0.8)',
                                          boxShadow: '0 3px 10px rgba(20,60,100,0.25), inset 0 1px 0 rgba(255,255,255,0.8)',
                                      }}>
                                    <ItemIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-sky-700'}`} />
                                </span>
                                <span className="text-[10px] sm:text-xs font-semibold">{label}</span>
                            </>
                        );
                        return page ? (
                            <button key={label} onClick={() => setCurrentPage(page)} className={classes} aria-label={label}>
                                {inner}
                            </button>
                        ) : (
                            <a key={label} href={href} onClick={() => setCurrentPage('home')} className={classes} aria-label={label}>
                                {inner}
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* Main Content */}
            {currentPage === 'bot-control' ? (
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-12">
                    <BotControlPage />
                </div>
            ) : (
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-12">

                {/* About Me Section */}
                <div id="about" className="mb-8 scroll-mt-6">
                    <VistaWindow title="About Me" icon={User}>
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 text-center md:text-left">
                            <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                                 style={{
                                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                     boxShadow: '0 10px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.3)'
                                 }}>
                                <img src="/bear.jpg" alt="Benjamin Nguyen" className="relative z-10" style={{
                                    height: '120%',
                                    width: '120%',
                                    position: 'absolute',
                                }}/>
                                <div className="absolute inset-0 opacity-30"></div>
                            </div>

                            <div>
                                <h1 className="text-4xl md:text-6xl text-gray-700 font-bold mb-2" style={{
                                    fontFamily: "Segoe UI",
                                }}>
                                    Benjamin Nguyen
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4 px-1" style={{
                                    fontFamily: "Segoe UI",
                                }}>
                                    Software Engineer | Systems Developer | Plant Enthusiast
                                    </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                                       className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105 text-white font-semibold"
                                       style={{
                                           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                           boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
                                       }}>
                                        <FileText className="w-5 h-5" />
                                        <span>Resume</span>
                                    </a>
                                    <a href="https://github.com/Bensoo00" target="_blank" rel="noopener noreferrer"
                                       className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                                       style={{
                                           background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                                           color: '#667eea'
                                       }}>
                                        <Github className="w-5 h-5" />
                                        <span className="font-semibold">GitHub</span>
                                    </a>
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <VistaWindow title="Programming" icon={Code}>
                                <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm">
                                    <p className="text-gray-700">Python, GoLang, Java, C, Bash, SQL, Assembly</p>
                                </div>
                            </VistaWindow>

                            <VistaWindow title="Tools" icon={Settings}>
                                <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm">
                                    <p className="text-gray-700">AWS, Git, Agile, Scrum, Jira</p>
                                </div>
                            </VistaWindow>

                            <VistaWindow title="Education" icon={GraduationCap}>
                                <div className="p-5 rounded-2xl shadow-lg border backdrop-blur-sm">
                                    <p className="text-gray-700">Drexel University - Software Engineering BS</p>
                                </div>
                            </VistaWindow>
                        </div>
                    </VistaWindow>
                </div>

                {/* Experience Section */}
                <div id="experience" className="mb-8 scroll-mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        <VistaWindow title="System Administrator - PJM Interconnection (via Yoh)" icon={Briefcase} className="lg:col-span-7">
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                                    <h3 className="text-lg font-bold text-gray-800">PJM Interconnection</h3>
                                    <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                    March 2026 - September 2026
                  </span>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Automated repeatable infrastructure workflows across 30+ RHEL 8/9 hosts using Ansible Automation Platform</li>
                                    <li>• Integrated Cherwell ITSM and Halo APIs with AAP via Python for dynamic inventory updates</li>
                                    <li>• Developed YAML-based Ansible playbooks for configuration management, improving deployment efficiency by ~25%</li>
                                    <li>• Validated 30+ production hosts against PJM's internal Ansible collection for idempotency and reliability</li>
                                </ul>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="Information Technology Specialist - UPenn School of Nursing" icon={Briefcase} className="lg:col-span-5 lg:mt-10">
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
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

                        <VistaWindow title="IT/Tech Intern - Lavner Education" icon={Briefcase} className="lg:col-span-8 lg:col-start-3">
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
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
                <div id="projects" className="mb-8 scroll-mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        {/* Hiking Gear Recommender */}
                        <VistaWindow title="Hiking Gear Recommender" icon={Mountain} className="lg:col-span-5 lg:mt-6">
                            <div className="text-center py-8 md:py-12">
                                <Mountain className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                <p className="text-gray-600 mb-6">
                                    Full-stack gear recommendation app built with Flask, React, PostgreSQL, and the Claude API.
                                    <br />
                                    Enter trip parameters and get a ranked kit based on destination, duration, and live weather.
                                </p>
                                <a
                                    href="https://github.com/Bensoo00/HikingGearRecommendations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                                    }}
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            </div>
                        </VistaWindow>

                        {/* Trading Bot */}
                        <VistaWindow title="AI Trading Bot" icon={TrendingUp} className="lg:col-span-7">
                            <div className="text-center py-8 md:py-12">
                                <Activity className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                <p className="text-gray-600 mb-6">
                                    Real-time AI trading bot using reinforcement learning.
                                    <br />
                                    Click below to manage the bot and view detailed analytics.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    <button
                                        onClick={() => setCurrentPage('bot-control')}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                                        style={{
                                            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                            boxShadow: '0 4px 15px rgba(17, 153, 142, 0.4)'
                                        }}
                                    >
                                        Open Control Panel
                                    </button>
                                    <a
                                        href="https://github.com/Bensoo00/Mock-Trading-API"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                                        style={{
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                                        }}
                                    >
                                        <Github className="w-5 h-5" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </VistaWindow>

                        {/* Trading Bot Integration */}
                        <VistaWindow title="Trading Bot Analytics" icon={Activity} className="lg:col-span-12">
                            <IntegratedTradingBot />
                        </VistaWindow>

                        {/* Vendor Buddy */}
                        <VistaWindow title="Vendor Buddy" icon={Store} className="lg:col-span-7">
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">
                                Full-stack inventory and pricing platform for trading card vendors — React, Flask, PostgreSQL, Stripe
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Built inventory management with live TCGPlayer market prices and eBay sold comps, cached for fast lookups</li>
                                <li>• Designed a card show calendar tracking booth and travel costs with per-event profit and loss</li>
                                <li>• Created quick sale and trade flows for selling at shows, with idempotent offline sync</li>
                                <li>• Added camera-based OCR card scanning (Tesseract.js) to add inventory in seconds</li>
                            </ul>
                        </div>
                        </VistaWindow>

                        {/* Other Projects */}
                        <VistaWindow title="Twitch Bot Detection System" icon={Terminal} className="lg:col-span-5 lg:mt-8">
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
            </div>
            )}

            {/* Footer */}
            <footer className="relative z-10 backdrop-blur-md border-t mt-16"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                        borderTop: '1px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 -4px 30px rgba(0,0,0,0.05)'
                    }}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-28 md:pb-32 text-center text-gray-700">
                    <p className="font-semibold text-lg">© 2026 Benjamin Nguyen</p>
                    <p className="text-sm mt-2">Built with React and Windows Vista aesthetics</p>
                    <p className="text-sm mt-1">bennnguyen22@gmail.com</p>
                </div>
            </footer>
            <SpeedInsights />
        </div>
    );
}