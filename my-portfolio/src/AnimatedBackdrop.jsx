import React from 'react';

// Theme-specific CSS motion overlays layered above the static JPG wallpaper.
export default function AnimatedBackdrop({ ambient }) {
    if (ambient === 'grass') {
        return (
            <div className="wallpaper-motion wallpaper-motion--grass" aria-hidden="true">
                <div className="wallpaper-grass-shimmer" />
                <div className="wallpaper-light-sweep" />
                <span className="wallpaper-sparkle" style={{ top: '18%', left: '22%', animationDelay: '0s' }} />
                <span className="wallpaper-sparkle" style={{ top: '42%', left: '68%', animationDelay: '1.2s' }} />
                <span className="wallpaper-sparkle" style={{ top: '72%', left: '35%', animationDelay: '2.4s' }} />
                <span className="wallpaper-sparkle" style={{ top: '55%', left: '82%', animationDelay: '3.6s' }} />
            </div>
        );
    }

    if (ambient === 'water') {
        return (
            <div className="wallpaper-motion wallpaper-motion--water" aria-hidden="true">
                <div className="wallpaper-caustics" />
                <div className="wallpaper-water-pulse" />
            </div>
        );
    }

    if (ambient === 'night') {
        return (
            <div className="wallpaper-motion wallpaper-motion--night" aria-hidden="true">
                <div className="wallpaper-aurora wallpaper-aurora--1" />
                <div className="wallpaper-aurora wallpaper-aurora--2" />
                <div className="wallpaper-horizon-glow" />
                <span className="wallpaper-star" style={{ top: '12%', left: '18%', animationDelay: '0s' }} />
                <span className="wallpaper-star" style={{ top: '8%', left: '45%', animationDelay: '0.8s' }} />
                <span className="wallpaper-star" style={{ top: '22%', left: '72%', animationDelay: '1.6s' }} />
                <span className="wallpaper-star" style={{ top: '15%', left: '88%', animationDelay: '2.2s' }} />
                <span className="wallpaper-star" style={{ top: '28%', left: '32%', animationDelay: '3s' }} />
                <span className="wallpaper-star" style={{ top: '6%', left: '60%', animationDelay: '3.8s' }} />
            </div>
        );
    }

    // Default: sky (Home)
    return (
        <div className="wallpaper-motion wallpaper-motion--sky" aria-hidden="true">
            <div className="wallpaper-sun-glow" />
            <div className="wallpaper-cloud wallpaper-cloud--1" />
            <div className="wallpaper-cloud wallpaper-cloud--2" />
            <div className="wallpaper-cloud wallpaper-cloud--3" />
        </div>
    );
}
