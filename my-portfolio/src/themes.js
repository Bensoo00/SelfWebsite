// Per-route Frutiger Aero themes.
// `vars` are CSS custom properties read by VistaWindow (with blue fallbacks),
// so windows re-skin themselves based on which page they're rendered on.

export const themes = {
    '/': {
        background: "url('/future2.jpg')",
        ambient: 'sky',
        vars: {
            '--vista-titlebar-tint': 'linear-gradient(180deg, rgba(122,199,227,0.5) 0%, rgba(74,149,184,0.5) 100%)',
            '--vista-frame-bg': 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(190,225,245,0.22) 100%)',
            '--vista-btn': 'linear-gradient(180deg, #6db3d0 0%, #4a95b8 49%, #3d7ea0 50%, #2a6888 100%)',
        },
    },
    '/experience': {
        background: "url('/bg-experience.jpg')",
        ambient: 'grass',
        vars: {
            '--vista-titlebar-tint': 'linear-gradient(180deg, rgba(110,190,100,0.7) 0%, rgba(58,130,48,0.75) 100%)',
            '--vista-frame-bg': 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(198,240,190,0.24) 100%)',
            '--vista-btn': 'linear-gradient(180deg, #8ed684 0%, #55a84a 49%, #46903c 50%, #33702c 100%)',
        },
    },
    '/projects': {
        background: "url('/bg-projects.jpg')",
        ambient: 'water',
        vars: {
            '--vista-titlebar-tint': 'linear-gradient(180deg, rgba(50,180,200,0.7) 0%, rgba(18,110,140,0.75) 100%)',
            '--vista-frame-bg': 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(170,235,242,0.24) 100%)',
            '--vista-btn': 'linear-gradient(180deg, #54d0de 0%, #2094b2 49%, #197f9c 50%, #12617a 100%)',
        },
    },
    '/bot-control': {
        background: "url('/bg-botcontrol.jpg')",
        ambient: 'night',
        vars: {
            '--vista-titlebar-tint': 'linear-gradient(180deg, rgba(74,110,152,0.6) 0%, rgba(34,58,92,0.6) 100%)',
            '--vista-frame-bg': 'linear-gradient(180deg, rgba(180,210,240,0.3) 0%, rgba(60,90,130,0.25) 100%)',
            '--vista-btn': 'linear-gradient(180deg, #5a7ea8 0%, #3a5a84 49%, #2e4a70 50%, #203858 100%)',
        },
    },
};

export function themeForPath(pathname) {
    return themes[pathname] || themes['/'];
}
