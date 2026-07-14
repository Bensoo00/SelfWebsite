import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const shortcuts = [
    { label: 'Resume', icon: FileText, href: '/resume.pdf' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/Bensoo00' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/bennguyen04/' },
    { label: 'Email', icon: Mail, href: 'mailto:bennnguyen22@gmail.com' },
];

// Vista desktop-style shortcut icons pinned to the left edge on very wide screens.
export default function DesktopIcons() {
    return (
        <div className="hidden min-[1660px]:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-5"
             style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
            {shortcuts.map(({ label, icon: Icon, href }) => (
                <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1.5 w-20 transition-transform duration-200 hover:scale-110"
                >
                    <span className="w-14 h-14 rounded-2xl flex items-center justify-center transition-shadow"
                          style={{
                              background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(200,230,245,0.5) 100%)',
                              border: '1px solid rgba(255,255,255,0.85)',
                              boxShadow: '0 6px 20px rgba(20,60,100,0.25), inset 0 1px 0 rgba(255,255,255,0.9)',
                              backdropFilter: 'blur(10px)',
                              WebkitBackdropFilter: 'blur(10px)',
                          }}>
                        <Icon className="w-7 h-7 text-sky-700 group-hover:text-blue-600 transition-colors" />
                    </span>
                    <span className="text-xs font-semibold text-white text-center px-1.5 py-0.5 rounded"
                          style={{
                              textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                              background: 'rgba(20,50,80,0.25)',
                              backdropFilter: 'blur(4px)',
                          }}>
                        {label}
                    </span>
                </a>
            ))}
        </div>
    );
}
