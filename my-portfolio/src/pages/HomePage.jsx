import React from 'react';
import { Code, Settings, User, GraduationCap, FileText, Github, Mail, Linkedin, Monitor, Cloud, Briefcase, Flower2 } from 'lucide-react';
import VistaWindow from '../VistaWindow';

const linkStyle = {
    background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
    color: '#667eea',
};

export default function HomePage() {
    return (
        <>
            {/* About Me Section */}
            <div className="mb-6">
                <VistaWindow title="About Me" icon={User}>
                    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6 mb-6 text-center md:text-left">
                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
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
                            <h1 className="text-3xl md:text-5xl text-gray-700 font-bold mb-2" style={{
                                fontFamily: "Segoe UI",
                            }}>
                                Benjamin Nguyen
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 font-semibold mb-3 px-1" style={{
                                fontFamily: "Segoe UI",
                            }}>
                                Software Engineer | Systems Developer | Plant Enthusiast
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-sm">
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
                                   style={linkStyle}>
                                    <Github className="w-5 h-5" />
                                    <span className="font-semibold">GitHub</span>
                                </a>
                                <a href="mailto:bennnguyen22@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                                   style={linkStyle}>
                                    <Mail className="w-5 h-5" />
                                    <span className="font-semibold">Email</span>
                                </a>
                                <a href="https://www.linkedin.com/in/bennguyen04/" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                                   style={linkStyle}>
                                    <Linkedin className="w-5 h-5" />
                                    <span className="font-semibold">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <VistaWindow title="IT Support" icon={Monitor}>
                            <div className="p-3 rounded-2xl shadow-lg border backdrop-blur-sm">
                                <p className="text-gray-700 text-sm">macOS, Windows 10/11, System Imaging &amp; Deployment, Microsoft 365, Crestron AV, TCP/IP, Cherwell/Halo ITSM</p>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="Automation & Scripting" icon={Code}>
                            <div className="p-3 rounded-2xl shadow-lg border backdrop-blur-sm">
                                <p className="text-gray-700 text-sm">Python, Bash, YAML, SQL, Ansible &amp; Ansible Automation Platform (AAP)</p>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="Cloud & Systems" icon={Cloud}>
                            <div className="p-3 rounded-2xl shadow-lg border backdrop-blur-sm">
                                <p className="text-gray-700 text-sm">AWS, Red Hat Enterprise Linux (RHEL), GitHub CI/CD</p>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="Collaboration" icon={Settings}>
                            <div className="p-3 rounded-2xl shadow-lg border backdrop-blur-sm">
                                <p className="text-gray-700 text-sm">Google Workspace, Slack, Jira, Confluence (Atlassian)</p>
                            </div>
                        </VistaWindow>

                        <VistaWindow title="Education" icon={GraduationCap} className="md:col-span-2">
                            <div className="p-3 rounded-2xl shadow-lg border backdrop-blur-sm">
                                <p className="text-gray-700 text-sm">
                                    Drexel University — B.S. Computer Science (Sept 2022 – Sept 2026)
                                    <br />
                                    Relevant coursework: Data Structures, Systems Programming, Databases, Artificial Intelligence
                                </p>
                            </div>
                        </VistaWindow>
                    </div>
                </VistaWindow>
            </div>

            {/* Currently + Beyond the Code */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
                <VistaWindow title="Currently" icon={Briefcase} className="lg:col-span-7">
                    <div className="p-1 space-y-2 text-sm text-gray-700">
                        <p>
                            <span className="font-bold text-gray-800">System Administrator co-op</span> at PJM Interconnection (via Yoh),
                            automating RHEL infrastructure with Ansible and Python.
                        </p>
                        <p>
                            Finishing my <span className="font-bold text-gray-800">B.S. in Computer Science at Drexel University</span> (September 2026).
                        </p>
                        <p className="text-gray-600">
                            Open to full-time software engineering and systems roles starting late 2026.
                        </p>
                    </div>
                </VistaWindow>

                <VistaWindow title="Beyond the Code" icon={Flower2} className="lg:col-span-5">
                    <div className="p-1 space-y-2 text-sm text-gray-700">
                        <p>Houseplant collector with a growing jungle of them.</p>
                        <p>Hiker — the reason the gear recommendation app exists.</p>
                        <p>Trading card vendor on weekends, which inspired Vendor Buddy.</p>
                    </div>
                </VistaWindow>
            </div>

            {/* Get in Touch */}
            <div className="mb-6">
                <VistaWindow title="Get in Touch" icon={Mail}>
                    <div className="text-center py-4 md:py-6">
                        <p className="text-gray-700 mb-4 text-sm md:text-base">
                            I'm always open to new opportunities, collaborations, or a chat about software and systems.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm">
                            <a href="mailto:bennnguyen22@gmail.com"
                               className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105 text-white font-semibold"
                               style={{
                                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                   boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
                               }}>
                                <Mail className="w-5 h-5" />
                                <span>Email Me</span>
                            </a>
                            <a href="https://www.linkedin.com/in/bennguyen04/" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                               style={linkStyle}>
                                <Linkedin className="w-5 h-5" />
                                <span className="font-semibold">LinkedIn</span>
                            </a>
                            <a href="https://github.com/Bensoo00" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                               style={linkStyle}>
                                <Github className="w-5 h-5" />
                                <span className="font-semibold">GitHub</span>
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                               style={linkStyle}>
                                <FileText className="w-5 h-5" />
                                <span className="font-semibold">Resume</span>
                            </a>
                        </div>
                    </div>
                </VistaWindow>
            </div>
        </>
    );
}
