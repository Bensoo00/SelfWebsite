import React, { useState, useEffect } from 'react';

const gadgetShell = {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(200,230,245,0.45) 100%)',
    border: '1px solid rgba(255,255,255,0.85)',
    boxShadow: '0 8px 25px rgba(20,60,100,0.25), inset 0 1px 0 rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
};

function ClockGadget({ now }) {
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourDeg = hours * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;

    const hand = (deg, length, width, color) => ({
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        width: `${width}px`,
        height: `${length}px`,
        background: color,
        borderRadius: '2px',
        transformOrigin: '50% 100%',
        transform: `translateX(-50%) rotate(${deg}deg)`,
    });

    return (
        <div className="rounded-2xl p-3 flex flex-col items-center" style={gadgetShell}>
            <div className="relative w-24 h-24 rounded-full"
                 style={{
                     background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(190,225,245,0.7))',
                     border: '2px solid rgba(255,255,255,0.9)',
                     boxShadow: 'inset 0 2px 8px rgba(20,60,100,0.2), 0 2px 8px rgba(20,60,100,0.15)',
                 }}>
                {[0, 90, 180, 270].map((deg) => (
                    <span key={deg} className="absolute w-1 h-2 bg-sky-800/50 rounded"
                          style={{
                              left: '50%',
                              top: '3px',
                              transformOrigin: '50% 45px',
                              transform: `translateX(-50%) rotate(${deg}deg)`,
                          }} />
                ))}
                <span style={hand(hourDeg, 24, 3, '#1e5a8c')} />
                <span style={hand(minuteDeg, 34, 2, '#2a7ab0')} />
                <span style={hand(secondDeg, 38, 1, '#dc4734')} />
                <span className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-900" />
            </div>
            <p className="text-xs font-semibold text-gray-700 mt-2">
                {now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
            </p>
        </div>
    );
}

function CalendarGadget({ now }) {
    return (
        <div className="rounded-2xl overflow-hidden text-center" style={gadgetShell}>
            <div className="py-1 text-xs font-bold text-white"
                 style={{ background: 'var(--vista-btn, linear-gradient(180deg, #6db3d0 0%, #2a6888 100%))', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                {now.toLocaleDateString([], { month: 'long' })}
            </div>
            <div className="py-2">
                <p className="text-3xl font-bold text-gray-800 leading-none">{now.getDate()}</p>
                <p className="text-xs font-semibold text-gray-600 mt-1">
                    {now.toLocaleDateString([], { weekday: 'long' })}
                </p>
            </div>
        </div>
    );
}

function ProfileGadget() {
    return (
        <div className="rounded-2xl p-3 flex flex-col items-center text-center" style={gadgetShell}>
            <span className="w-12 h-12 rounded-full overflow-hidden mb-1.5"
                  style={{ boxShadow: '0 3px 10px rgba(20,60,100,0.3), inset 0 0 6px rgba(255,255,255,0.5)' }}>
                <img src="/bear.jpg" alt="Benjamin Nguyen" className="w-full h-full object-cover" />
            </span>
            <p className="text-xs font-bold text-gray-800">Ben Nguyen</p>
            <p className="text-[10px] font-semibold text-green-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Open to opportunities
            </p>
        </div>
    );
}

// Vista Sidebar-style gadget column pinned to the right edge on very wide screens.
export default function SidebarGadgets() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hidden min-[1660px]:flex fixed right-5 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 w-36 p-2.5 rounded-3xl"
             style={{
                 fontFamily: 'Segoe UI, Tahoma, sans-serif',
                 background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(150,200,230,0.15) 100%)',
                 border: '1px solid rgba(255,255,255,0.4)',
                 backdropFilter: 'blur(8px)',
                 WebkitBackdropFilter: 'blur(8px)',
             }}>
            <ClockGadget now={now} />
            <CalendarGadget now={now} />
            <ProfileGadget />
        </div>
    );
}
