import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Terminal,
    Activity,
    TrendingUp,
    Mountain,
    Github,
    Store,
    Globe,
    FolderOpen,
    Check,
    Clock,
    Lightbulb,
} from 'lucide-react';
import VistaWindow from '../VistaWindow';
import IntegratedTradingBot from '../IntegratedTradingBot';

const metricStyle = {
    background: 'linear-gradient(135deg, rgba(84,208,222,0.25) 0%, rgba(32,148,178,0.15) 100%)',
    border: '1px solid rgba(32,148,178,0.35)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
};

const tagStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(170,235,242,0.55) 100%)',
    border: '1px solid rgba(32,148,178,0.25)',
};

const conceptStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(200,245,250,0.45) 100%)',
    border: '1px solid rgba(50,180,200,0.3)',
};

function MetricBadge({ value, label }) {
    return (
        <div className="rounded-xl px-3 py-2 text-center min-w-[5.5rem]" style={metricStyle}>
            <p className="text-base font-bold text-cyan-900 leading-tight">{value}</p>
            <p className="text-[10px] font-semibold text-cyan-800 mt-0.5">{label}</p>
        </div>
    );
}

const projects = [
    {
        id: 'hiking-gear',
        title: 'Hiking Gear Recommender',
        icon: Mountain,
        duration: 'Ongoing',
        period: '2025 – Present',
        tech: ['Flask', 'React', 'PostgreSQL', 'Claude API', 'OpenWeather'],
        concepts: ['Full-stack', 'LLM integration', 'Weather-aware recommendations', 'REST APIs'],
        summary:
            'Full-stack gear recommendation app — enter trip parameters and get a ranked kit based on destination, duration, and live weather.',
        bullets: [
            'Built a Flask backend with PostgreSQL for gear catalogs and trip profiles',
            'Integrated the Claude API to rank and explain gear choices from natural-language trip inputs',
            'Pulled live weather data to weight recommendations by forecast conditions',
            'React frontend for trip planning flows and shareable packing lists',
        ],
        links: [
            {
                label: 'View Code',
                href: 'https://github.com/Bensoo00/HikingGearRecommendations',
                icon: Github,
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        ],
    },
    {
        id: 'twitch-bot',
        title: 'Twitch Bot Detection System',
        icon: Terminal,
        duration: '~8 weeks',
        period: 'Academic / research',
        tech: ['Python', 'Pandas', 'NLTK', 'Twitch API', 'scikit-learn'],
        concepts: ['NLP', 'Real-time streaming', 'Feature engineering', 'Sentiment analysis'],
        summary: 'Real-time chat analysis system that ingests Twitch chat, extracts linguistic features, and flags bot-like behavior.',
        bullets: [
            'Developed a real-time Twitch chat logger connecting to multiple streams simultaneously',
            'Preprocessed large chat volumes with tokenization, normalization, and sentiment scoring',
            'Extracted TF-IDF vectors and lexical diversity metrics for classifier features',
            'Implemented sentiment analysis using NLTK Sentiment Intensity Analyzer',
        ],
    },
    {
        id: 'trading-bot',
        title: 'AI Trading Bot',
        icon: TrendingUp,
        duration: 'Ongoing',
        period: '2025 – Present',
        tech: ['Python', 'Reinforcement learning', 'FastAPI', 'React', 'Render'],
        concepts: ['RL agents', 'Live market data', 'Model serving', 'Cold-start APIs'],
        summary:
            'Real-time AI trading bot using reinforcement learning — with a dedicated control panel for strategy tuning and analytics.',
        bullets: [
            'Trained and deployed RL-based trading agents against live market feeds',
            'Built a FastAPI backend hosted on Render with health checks and graceful cold starts',
            'React control panel for starting/stopping runs and inspecting performance metrics',
            'Mock trading API for safe experimentation without real capital',
        ],
        links: [
            {
                label: 'Open Control Panel',
                onClick: 'bot-control',
                icon: Activity,
                gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            },
            {
                label: 'View Code',
                href: 'https://github.com/Bensoo00/Mock-Trading-API',
                icon: Github,
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        ],
        showAnalytics: true,
    },
    {
        id: 'vendor-buddy',
        title: 'Vendor Buddy',
        icon: Store,
        duration: 'Ongoing',
        period: '2025 – Present',
        tech: ['React', 'Flask', 'PostgreSQL', 'Stripe', 'Tesseract.js', 'TCGPlayer API'],
        concepts: ['Inventory management', 'OCR scanning', 'Offline sync', 'P&L tracking'],
        summary:
            'Full-stack inventory and pricing platform for trading card vendors — live market prices, show planning, and quick-sale flows.',
        bullets: [
            'Built inventory management with live TCGPlayer market prices and eBay sold comps, cached for fast lookups',
            'Designed a card show calendar tracking booth and travel costs with per-event profit and loss',
            'Created quick sale and trade flows for selling at shows, with idempotent offline sync',
            'Added camera-based OCR card scanning (Tesseract.js) to add inventory in seconds',
        ],
        links: [
            {
                label: 'Visit Site',
                href: 'https://vendor-buddy.com',
                icon: Globe,
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        ],
    },
];

export default function ProjectsPage() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const active = projects[activeIndex];

    const handleLink = (link) => {
        if (link.onClick === 'bot-control') {
            navigate('/bot-control');
        }
    };

    return (
        <div className="space-y-6">
            <VistaWindow title="Projects" icon={FolderOpen}>
                <p className="text-sm text-gray-700">
                    Four builds spanning full-stack apps, NLP pipelines, and production tooling —
                    select a node on the timeline to explore each one.
                </p>
            </VistaWindow>

            <div className="projects-timeline-section mx-auto w-full max-w-4xl px-2 sm:px-4">
                {/* Horizontal timeline — balls + project names */}
                <div
                    className="projects-timeline-rail relative pt-2 pb-1"
                    role="tablist"
                    aria-label="Project timeline"
                >
                    <div className="projects-timeline-line" aria-hidden="true" />

                    <div className="projects-timeline-stops relative flex justify-between items-start gap-1 sm:gap-2">
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls="project-detail-panel"
                                    id={`project-tab-${project.id}`}
                                    onClick={() => setActiveIndex(index)}
                                    className={`projects-timeline-stop group flex flex-col items-center flex-1 min-w-0 ${
                                        isActive ? 'projects-timeline-stop--active' : ''
                                    }`}
                                >
                                    <span
                                        className={`projects-timeline-dot ${isActive ? 'projects-timeline-dot--active' : ''}`}
                                        aria-hidden="true"
                                    />
                                    <span className="projects-timeline-label mt-2 text-center leading-tight">
                                        {project.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Detail panel — spans full timeline width */}
                <div
                    id="project-detail-panel"
                    role="tabpanel"
                    aria-labelledby={`project-tab-${active.id}`}
                    className="projects-detail-panel mt-5 w-full"
                >
                    <VistaWindow title={active.title} icon={active.icon}>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                <p className="text-sm text-gray-700 flex-1">{active.summary}</p>
                                <span
                                    className="self-start text-xs font-semibold text-cyan-900 px-3 py-1.5 rounded-full whitespace-nowrap"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(84,208,222,0.35) 0%, rgba(32,148,178,0.2) 100%)',
                                        border: '1px solid rgba(32,148,178,0.3)',
                                    }}
                                >
                                    {active.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <MetricBadge value={active.duration} label="time invested" />
                                <MetricBadge value={String(active.tech.length)} label="technologies" />
                                <MetricBadge value={String(active.concepts.length)} label="concepts" />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wide text-cyan-800 mb-1.5 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Tech stack
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {active.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-semibold text-cyan-900 px-2 py-0.5 rounded-full"
                                            style={tagStyle}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wide text-cyan-800 mb-1.5 flex items-center gap-1">
                                    <Lightbulb className="w-3 h-3" />
                                    Concepts
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {active.concepts.map((concept) => (
                                        <span
                                            key={concept}
                                            className="text-[10px] font-semibold text-teal-900 px-2 py-0.5 rounded-full"
                                            style={conceptStyle}
                                        >
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {active.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex gap-2.5 text-sm text-gray-700 p-2.5 rounded-xl"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(210,245,250,0.45) 100%)',
                                            border: '1px solid rgba(100,200,220,0.35)',
                                        }}
                                    >
                                        <Check className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            {active.links && active.links.length > 0 && (
                                <div className="flex flex-wrap gap-3 pt-1">
                                    {active.links.map((link) => {
                                        const LinkIcon = link.icon;
                                        const className =
                                            'inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:scale-105';
                                        const style = {
                                            background: link.gradient,
                                            boxShadow: '0 4px 15px rgba(32, 148, 178, 0.35)',
                                        };

                                        if (link.href) {
                                            return (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={className}
                                                    style={style}
                                                >
                                                    <LinkIcon className="w-5 h-5" />
                                                    {link.label}
                                                </a>
                                            );
                                        }

                                        return (
                                            <button
                                                key={link.label}
                                                type="button"
                                                onClick={() => handleLink(link)}
                                                className={className}
                                                style={style}
                                            >
                                                <LinkIcon className="w-5 h-5" />
                                                {link.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {active.showAnalytics && (
                                <div className="pt-2 border-t border-cyan-200/50">
                                    <p className="text-xs font-semibold text-cyan-800 mb-3">Live analytics</p>
                                    <IntegratedTradingBot />
                                </div>
                            )}
                        </div>
                    </VistaWindow>
                </div>
            </div>
        </div>
    );
}
