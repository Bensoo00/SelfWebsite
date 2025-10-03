// VistaWindow.js
import React from 'react';
import { X, Minimize, Maximize2 } from 'lucide-react';

export default function VistaWindow({
                                        title = "Window",
                                        icon: Icon = null,
                                        children,
                                        className = "",
                                        style = {}
                                    }) {
    return (
        <div className={`vista-window ${className}`} style={style}>
            {/* Window Frame */}
            <div
                className="vista-frame"
                style={{
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '3px',
                    padding: '5px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Glass effect background */}
                <div
                    style={{
                        background: 'transparent',
                        borderRadius: '7px 7px 6px 6px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {/* Title Bar */}
                    <div
                        className="vista-titlebar"
                        style={{
                            background: `linear-gradient(180deg,
                            rgba(255, 255, 255, 0.03) 0%,
                            rgba(255, 255, 255, 0.01) 50%,
                            rgba(0, 0, 0, 0.2) 100%),
                            linear-gradient(180deg,
                            rgba(75, 158, 215, 0.05) 0%,
                            rgba(41, 112, 169, 0.05) 49%,
                            rgba(35, 90, 135, 0.05) 50%,
                            rgba(30, 77, 112, 0.05) 100%)`,
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 8px",
                            position: "relative",
                            cursor: "default",
                            userSelect: "none",
                        }}
                    >

                        {/* Left side - Icon and Title */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {Icon && <Icon style={{ width: '16px', height: '16px', color: 'white' }} />}
                            <span
                                style={{
                                    color: 'white',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                                    fontFamily: 'Segoe UI, Tahoma, sans-serif'
                                }}
                            >
                {title}
              </span>
                        </div>

                        {/* Right side - Window Controls */}
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {/* Minimize Button */}
                            <button
                                className="vista-control-btn"
                                style={{
                                    width: '24px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '3px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(180deg, #6db3d0 0%, #4a95b8 49%, #3d7ea0 50%, #2a6888 100%)',
                                    color: 'white',
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1)';
                                }}
                            >
                                <Minimize style={{ width: '12px', height: '12px' }} />
                            </button>

                            {/* Maximize Button */}
                            <button
                                className="vista-control-btn"
                                style={{
                                    width: '24px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '3px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(180deg, #84c6d9 0%, #5aa5c3 49%, #4a8fb0 50%, #36749a 100%)',
                                    color: 'white',
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1)';
                                }}
                            >
                                <Maximize2 style={{ width: '12px', height: '12px' }} />
                            </button>

                            {/* Close Button */}
                            <button
                                className="vista-control-btn"
                                style={{
                                    width: '45px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '3px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(180deg, #f5836b 0%, #e96850 49%, #dc4734 50%, #c43824 100%)',
                                    color: 'white',
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1.1)';
                                    e.currentTarget.style.background = 'linear-gradient(180deg, #ff9580 0%, #ff7560 49%, #ff5040 50%, #dc3824 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'brightness(1)';
                                    e.currentTarget.style.background = 'linear-gradient(180deg, #f5836b 0%, #e96850 49%, #dc4734 50%, #c43824 100%)';
                                }}
                            >
                                <X style={{ width: '12px', height: '12px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Window Content Area */}
                    <div
                        className="vista-content"
                        style={{
                            background: '#ffffff',
                            border: '1px solid #d1d1d1',
                            borderTop: 'none',
                            minHeight: '200px',
                            padding: '16px',
                            position: 'relative',
                        }}
                    >
                        {/* Subtle glass effect on content */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '100px',
                                background: 'linear-gradient(180deg, rgba(240,240,240,0.5) 0%, transparent 100%)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Content */}
                        <div style={{ position: 'relative' }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Usage example:
// <VistaWindow title="My Application" icon={FolderIcon}>
//   <p>Your content goes here</p>
// </VistaWindow>