// VistaWindow.js
// Draggable, free-floating Frutiger Aero window.
// - Drag by the title bar (mouse only; touch devices scroll normally)
// - Double-click the title bar to snap the window back home
// - Minimize/close collapse the window content, maximize restores it
// - Idle "bobbing on water" float, randomized per window so they drift out of sync
// - Windows keep their slot in the page layout, so structure is preserved
import React, { useState, useRef } from 'react';
import { X, Minimize, Maximize2 } from 'lucide-react';

// Shared counter so the most recently touched window floats above the others
let topZ = 10;

// On touch-first devices dragging would hijack page scrolling, so keep it mouse-only
const isCoarsePointer = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches;

export default function VistaWindow({
                                        title = "Window",
                                        icon: Icon = null,
                                        children,
                                        className = "",
                                        style = {}
                                    }) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [zIndex, setZIndex] = useState(1);
    const [collapsed, setCollapsed] = useState(false);
    const dragStart = useRef({ px: 0, py: 0, ox: 0, oy: 0 });
    const touchDevice = useRef(isCoarsePointer());

    // Randomize the idle float per window instance so the page feels alive,
    // not like everything is bolted to one metronome.
    const float = useRef({
        dur: (6 + Math.random() * 5).toFixed(2) + 's',
        delay: (-Math.random() * 8).toFixed(2) + 's',
    });

    const bringToFront = () => {
        topZ += 1;
        setZIndex(topZ);
    };

    const handlePointerDown = (e) => {
        // Only left click / primary touch, and don't steal drags from nested windows
        if (e.button !== undefined && e.button !== 0) return;
        if (touchDevice.current || e.pointerType === 'touch') return;
        e.stopPropagation();
        bringToFront();
        setDragging(true);
        dragStart.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;
        setOffset({
            x: dragStart.current.ox + (e.clientX - dragStart.current.px),
            y: dragStart.current.oy + (e.clientY - dragStart.current.py),
        });
    };

    const handlePointerUp = (e) => {
        setDragging(false);
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* already released */ }
    };

    // Double-click the title bar: bubble back home with a springy snap
    const handleDoubleClick = (e) => {
        e.stopPropagation();
        setOffset({ x: 0, y: 0 });
    };

    const stopDrag = (e) => e.stopPropagation();

    return (
        <div
            className={`vista-window ${dragging ? 'vista-dragging' : ''} ${className}`}
            style={{
                ...style,
                position: 'relative',
                zIndex,
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                transition: dragging ? 'none' : 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                willChange: 'transform',
            }}
            onPointerDown={bringToFront}
        >
            {/* Floating frame — the idle bob lives on this element so it
                composes cleanly with the drag translate on the wrapper */}
            <div
                className="vista-frame vista-float"
                style={{
                    '--float-dur': float.current.dur,
                    '--float-delay': float.current.delay,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--vista-frame-bg, linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(190,225,245,0.22) 100%))',
                    borderRadius: '18px',
                    padding: '5px',
                    border: '1px solid rgba(255,255,255,0.55)',
                    boxShadow: dragging
                        ? '0 30px 70px rgba(20, 60, 100, 0.4), 0 0 0 1px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.6)'
                        : '0 14px 45px rgba(20, 60, 100, 0.25), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'box-shadow 0.3s ease',
                }}
            >
                <div
                    style={{
                        borderRadius: '13px',
                        overflow: 'hidden',
                        position: 'relative',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Title Bar — the drag handle */}
                    <div
                        className="vista-titlebar"
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        onDoubleClick={handleDoubleClick}
                        title="Drag me around — double-click to snap back"
                        style={{
                            background: `linear-gradient(180deg,
                            rgba(255, 255, 255, 0.35) 0%,
                            rgba(255, 255, 255, 0.08) 49%,
                            rgba(30, 90, 140, 0.25) 50%,
                            rgba(20, 70, 115, 0.3) 100%),
                            var(--vista-titlebar-tint, linear-gradient(180deg,
                            rgba(122, 199, 227, 0.5) 0%,
                            rgba(74, 149, 184, 0.5) 100%))`,
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            height: "28px",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 10px",
                            position: "relative",
                            cursor: dragging ? "grabbing" : "grab",
                            userSelect: "none",
                            touchAction: touchDevice.current ? "auto" : "none",
                        }}
                    >
                        {/* Left side - Icon and Title */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none', minWidth: 0, flex: 1, marginRight: '8px' }}>
                            {Icon && <Icon style={{ width: '16px', height: '16px', color: 'white', flexShrink: 0, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }} />}
                            <span
                                title={title}
                                style={{
                                    color: 'white',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.65), 0 0 8px rgba(0, 0, 0, 0.25)',
                                    fontFamily: 'Segoe UI, Tahoma, sans-serif',
                                    minWidth: 0,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                {title}
              </span>
                        </div>

                        {/* Right side - Window Controls (they shouldn't start a drag) */}
                        <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }} onPointerDown={stopDrag}>
                            {/* Minimize Button */}
                            <button
                                className="vista-control-btn"
                                aria-label={`Minimize ${title}`}
                                onClick={() => setCollapsed(true)}
                                style={{
                                    width: '24px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--vista-btn, linear-gradient(180deg, #6db3d0 0%, #4a95b8 49%, #3d7ea0 50%, #2a6888 100%))',
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
                                aria-label={`Restore ${title}`}
                                onClick={() => setCollapsed(false)}
                                style={{
                                    width: '24px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--vista-btn, linear-gradient(180deg, #84c6d9 0%, #5aa5c3 49%, #4a8fb0 50%, #36749a 100%))',
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

                            {/* Close Button (collapses too — nothing on a portfolio should truly vanish) */}
                            <button
                                className="vista-control-btn"
                                aria-label={`Collapse ${title}`}
                                onClick={() => setCollapsed(prev => !prev)}
                                style={{
                                    width: '45px',
                                    height: '18px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '6px',
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
                            background: 'rgba(255, 255, 255, 0.94)',
                            border: '1px solid rgba(255,255,255,0.7)',
                            borderTop: 'none',
                            flex: collapsed ? 'none' : 1,
                            minHeight: collapsed ? '0' : '60px',
                            padding: collapsed ? '0 12px' : '12px',
                            maxHeight: collapsed ? '0' : 'none',
                            overflow: collapsed ? 'hidden' : 'visible',
                            position: 'relative',
                        }}
                    >
                        {/* Glossy aero highlight sweeping across the top */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '100px',
                                background: 'linear-gradient(180deg, rgba(225,243,252,0.55) 0%, transparent 100%)',
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
