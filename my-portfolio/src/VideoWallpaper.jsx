import React, { useEffect, useRef } from 'react';

// Full-screen looping video wallpaper — Ken Burns on the route's existing JPG background.
export default function VideoWallpaper({ webm, mp4, poster }) {
    const ref = useRef(null);

    // Ensure playback starts after route/source changes (mobile browsers can be picky).
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.load();
        const play = el.play();
        if (play && typeof play.catch === 'function') {
            play.catch(() => {});
        }
    }, [webm, mp4]);

    return (
        <video
            ref={ref}
            className="wallpaper-video"
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            aria-hidden="true"
        >
            {webm && <source src={webm} type="video/webm" />}
            {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
    );
}
