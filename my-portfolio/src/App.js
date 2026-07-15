import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Briefcase, User, FolderOpen, Bot, Droplets, Sparkles, Sun, Cloud, Leaf, Flower2, Moon, Star } from 'lucide-react';

import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import BotControlPage from './BotControlPage';
import DesktopIcons from './DesktopIcons';
import SidebarGadgets from './SidebarGadgets';
import AnimatedBackdrop from './AnimatedBackdrop';
import VideoWallpaper from './VideoWallpaper';
import { themeForPath } from './themes';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';

const navItems = [
    { label: 'About', icon: User, to: '/' },
    { label: 'Experience', icon: Briefcase, to: '/experience' },
    { label: 'Projects', icon: FolderOpen, to: '/projects' },
    { label: 'Bot Control', icon: Bot, to: '/bot-control' },
];

// Short synthesized aero-style startup chime (avoids shipping Microsoft's
// copyrighted Vista sound). Four soft notes rising, ~1.6s total.
function playStartupChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const master = ctx.createGain();
        master.gain.value = 0.22;
        master.connect(ctx.destination);

        const notes = [
            { freq: 329.63, start: 0.0 },   // E4
            { freq: 493.88, start: 0.22 },  // B4
            { freq: 659.25, start: 0.44 },  // E5
            { freq: 830.61, start: 0.66 },  // G#5
        ];
        notes.forEach(({ freq, start }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            const t = ctx.currentTime + start;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(1, t + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
            osc.connect(gain);
            gain.connect(master);
            osc.start(t);
            osc.stop(t + 1.1);
        });
        setTimeout(() => ctx.close(), 2200);
    } catch {
        // Audio is a nicety; never let it break the page.
    }
}

function AmbientEffects({ ambient }) {
    if (ambient === 'grass') {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-40"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(144,238,144,0.4))', filter: 'blur(60px)' }}></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-30"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(190,240,140,0.4))', filter: 'blur(50px)' }}></div>
                <Leaf className="absolute top-32 left-1/3 w-8 h-8 text-green-500/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Leaf className="absolute bottom-1/3 right-24 w-6 h-6 text-lime-500/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
                <Droplets className="absolute top-1/2 left-16 w-7 h-7 text-emerald-400/40 animate-pulse" style={{ animationDelay: '1s' }} />
                <Flower2 className="absolute top-1/4 right-1/4 w-9 h-9 text-yellow-300/40 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
        );
    }
    if (ambient === 'water') {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-24 right-24 w-96 h-96 rounded-full opacity-35"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(64,200,220,0.4))', filter: 'blur(60px)' }}></div>
                <div className="absolute bottom-16 left-12 w-80 h-80 rounded-full opacity-30"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(30,150,190,0.4))', filter: 'blur(50px)' }}></div>
                {/* Rising bubbles */}
                <span className="aero-bubble" style={{ left: '12%', width: '18px', height: '18px', animationDuration: '11s', animationDelay: '0s' }} />
                <span className="aero-bubble" style={{ left: '28%', width: '10px', height: '10px', animationDuration: '14s', animationDelay: '3s' }} />
                <span className="aero-bubble" style={{ left: '55%', width: '14px', height: '14px', animationDuration: '12s', animationDelay: '6s' }} />
                <span className="aero-bubble" style={{ left: '74%', width: '22px', height: '22px', animationDuration: '10s', animationDelay: '1.5s' }} />
                <span className="aero-bubble" style={{ left: '88%', width: '12px', height: '12px', animationDuration: '15s', animationDelay: '4.5s' }} />
            </div>
        );
    }
    if (ambient === 'night') {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full opacity-25"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(120,200,220,0.5), rgba(30,60,110,0.3))', filter: 'blur(70px)' }}></div>
                <div className="absolute bottom-20 right-16 w-80 h-80 rounded-full opacity-20"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(90,220,180,0.4), rgba(20,40,80,0.3))', filter: 'blur(60px)' }}></div>
                <Moon className="absolute top-20 right-1/4 w-10 h-10 text-blue-200/40 animate-pulse" style={{ animationDelay: '1s' }} />
                <Star className="absolute top-1/3 left-20 w-5 h-5 text-cyan-200/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Star className="absolute top-1/2 right-32 w-4 h-4 text-teal-200/40 animate-pulse" style={{ animationDelay: '2s' }} />
                <Sparkles className="absolute bottom-1/3 left-1/3 w-6 h-6 text-emerald-300/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
        );
    }
    // Default: sky
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-40"
                 style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(135,206,250,0.4))', filter: 'blur(60px)' }}></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-30"
                 style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(144,238,144,0.4))', filter: 'blur(50px)' }}></div>
            <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full opacity-60 animate-pulse"
                 style={{
                     background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.9), rgba(173,216,230,0.3))',
                     boxShadow: 'inset 0 0 30px rgba(255,255,255,0.5), 0 0 20px rgba(135,206,250,0.3)'
                 }}></div>
            <Droplets className="absolute top-32 left-1/2 w-8 h-8 text-cyan-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute bottom-1/3 left-20 w-6 h-6 text-yellow-300/50 animate-pulse" style={{ animationDelay: '1s' }} />
            <Sun className="absolute top-1/4 right-1/4 w-10 h-10 text-orange-300/30 animate-pulse" style={{ animationDelay: '2s' }} />
            <Cloud className="absolute bottom-1/2 right-1/3 w-12 h-12 text-white/40 animate-pulse" style={{ animationDelay: '2.5s' }} />
        </div>
    );
}

export default function Portfolio() {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = themeForPath(location.pathname);

    // Toggle between CSS living wallpapers and video loops (same JPGs, Ken Burns) for local evaluation.
    // Start with ?wallpaper=video in the URL, or use the on-screen switcher (persists in localStorage).
    const [wallpaperMode, setWallpaperMode] = useState(() => {
        if (typeof window === 'undefined') return 'css';
        const fromUrl = new URLSearchParams(window.location.search).get('wallpaper');
        if (fromUrl === 'video' || fromUrl === 'css') return fromUrl;
        return localStorage.getItem('wallpaperMode') || 'css';
    });

    const toggleWallpaperMode = () => {
        setWallpaperMode((prev) => {
            const next = prev === 'css' ? 'video' : 'css';
            localStorage.setItem('wallpaperMode', next);
            return next;
        });
    };

    const posterSrc = theme.background.match(/url\(['"]?([^'"]+)/)?.[1];

    // Vista-style boot screen shown on load: 'booting' -> 'fading' -> 'done'.
    // Skipped entirely for users who prefer reduced motion.
    const [bootStage, setBootStage] = useState(() =>
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'done'
            : 'booting'
    );

    useEffect(() => {
        if (bootStage !== 'booting') return;
        const fadeTimer = setTimeout(() => setBootStage('fading'), 2400);
        return () => clearTimeout(fadeTimer);
    }, [bootStage]);

    useEffect(() => {
        if (bootStage !== 'fading') return;
        const doneTimer = setTimeout(() => setBootStage('done'), 800);
        return () => clearTimeout(doneTimer);
    }, [bootStage]);

    const skipBoot = () => {
        playStartupChime();
        setBootStage('fading');
    };

    // Start each page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div
            className="relative overflow-hidden min-h-screen"
            style={theme.vars}
        >
            {/* Wallpaper: CSS living layers OR AI video loops */}
            <div className="wallpaper-stack" aria-hidden="true">
                {wallpaperMode === 'video' ? (
                    <VideoWallpaper
                        key={location.pathname}
                        webm={theme.video}
                        mp4={theme.videoMp4}
                        poster={posterSrc}
                    />
                ) : (
                    <>
                        <div
                            className="wallpaper-base"
                            style={{ backgroundImage: theme.background }}
                        />
                        <AnimatedBackdrop ambient={theme.ambient} />
                    </>
                )}
            </div>

            {/* Dev preview toggle — compare CSS vs video wallpapers locally */}
            <button
                type="button"
                onClick={toggleWallpaperMode}
                className="fixed left-3 z-[60] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg transition-all hover:scale-105"
                style={{
                    bottom: 'calc(4.5rem + env(safe-area-inset-bottom, 0px))',
                    fontFamily: 'Segoe UI, Tahoma, sans-serif',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(200,230,245,0.7) 100%)',
                    border: '1px solid rgba(255,255,255,0.9)',
                    color: '#334155',
                    backdropFilter: 'blur(10px)',
                }}
                title="Toggle between CSS overlays and Ken Burns video (same background images)"
            >
                Wallpaper: {wallpaperMode === 'css' ? 'CSS' : 'Video'}
            </button>

            {/* Vista Boot Screen */}
            {bootStage !== 'done' && (
                <div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-pointer select-none"
                    style={{
                        fontFamily: 'Segoe UI, Tahoma, sans-serif',
                        transition: 'opacity 0.8s ease',
                        opacity: bootStage === 'fading' ? 0 : 1,
                    }}
                    onClick={skipBoot}
                    title="Click to start"
                >
                    <div className="boot-orb w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-12">
                        <img src="/vista.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="boot-track">
                        <div className="boot-blocks">
                            <span className="boot-block" />
                            <span className="boot-block" />
                            <span className="boot-block" />
                        </div>
                    </div>
                    <p className="text-gray-300 mt-8 text-sm tracking-wider">Starting bennguyen.net...</p>
                    <p className="text-gray-500 mt-2 text-xs">Click anywhere for sound</p>
                    <p className="absolute bottom-8 text-gray-600 text-xs">&copy; 2026 Benjamin Nguyen</p>
                </div>
            )}

            {/* Frutiger Aero Background Effects (CSS mode only — keeps video preview clean) */}
            {wallpaperMode === 'css' && (
            <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
                <AmbientEffects ambient={theme.ambient} />
            </div>
            )}

            {/* Wide-screen side decorations */}
            <DesktopIcons />
            <SidebarGadgets />

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

                    {/* Logo — home */}
                    <button
                        onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

                    {navItems.map(({ label, icon: ItemIcon, to }) => (
                        <NavLink
                            key={label}
                            to={to}
                            end={to === '/'}
                            aria-label={label}
                            className={({ isActive }) =>
                                `relative flex flex-col items-center gap-0.5 px-1.5 sm:px-2.5 py-1 rounded-2xl transition-all duration-200 hover:scale-110 hover:-translate-y-1 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
                                          style={{
                                              background: isActive
                                                  ? 'var(--vista-btn, linear-gradient(180deg, #84c6d9 0%, #4a95b8 49%, #3d7ea0 50%, #2a6888 100%))'
                                                  : 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,230,245,0.8) 100%)',
                                              border: '1px solid rgba(255,255,255,0.8)',
                                              boxShadow: '0 3px 10px rgba(20,60,100,0.25), inset 0 1px 0 rgba(255,255,255,0.8)',
                                          }}>
                                        <ItemIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-sky-700'}`} />
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-semibold">{label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* Main Content — keyed by path so each page plays its open animation */}
            <main key={location.pathname} className="page-open relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-12">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/bot-control" element={<BotControlPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>

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
                </div>
            </footer>
            <SpeedInsights />
        </div>
    );
}
