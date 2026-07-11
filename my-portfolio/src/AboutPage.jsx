import React from 'react';
import { Mail, Linkedin, User } from 'lucide-react';
import VistaWindow from './VistaWindow';

export default function AboutPage() {
    return (
        <VistaWindow title="About Me" icon={User}>
            <div className="flex items-center gap-8 mb-8">
                <div className="w-36 h-36 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                     style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                         boxShadow: '0 10px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.3)'
                     }}>
                    <img src="/pibb.jpg" alt="Logo" className="w-20 h-20 relative z-10" />
                </div>

                <div>
                    <h1 className="text-6xl font-bold mb-2" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Benjamin Nguyen
                    </h1>
                    <p className="text-2xl text-gray-700 font-semibold mb-4">
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
        </VistaWindow>
    );
}
