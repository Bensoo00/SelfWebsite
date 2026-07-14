import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Activity, TrendingUp, Mountain, Github, Store } from 'lucide-react';
import VistaWindow from '../VistaWindow';
import IntegratedTradingBot from '../IntegratedTradingBot';

export default function ProjectsPage() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Hiking Gear Recommender */}
            <VistaWindow title="Hiking Gear Recommender" icon={Mountain} className="lg:col-span-5">
                <div className="text-center py-5 md:py-8">
                    <Mountain className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-600 mb-4 text-sm">
                        Full-stack gear recommendation app built with Flask, React, PostgreSQL, and the Claude API.
                        <br />
                        Enter trip parameters and get a ranked kit based on destination, duration, and live weather.
                    </p>
                    <a
                        href="https://github.com/Bensoo00/HikingGearRecommendations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                        }}
                    >
                        <Github className="w-5 h-5" />
                        View Code
                    </a>
                </div>
            </VistaWindow>

            {/* Trading Bot */}
            <VistaWindow title="AI Trading Bot" icon={TrendingUp} className="lg:col-span-7">
                <div className="text-center py-5 md:py-8">
                    <Activity className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-600 mb-4 text-sm">
                        Real-time AI trading bot using reinforcement learning.
                        <br />
                        Click below to manage the bot and view detailed analytics.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => navigate('/bot-control')}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                boxShadow: '0 4px 15px rgba(17, 153, 142, 0.4)'
                            }}
                        >
                            Open Control Panel
                        </button>
                        <a
                            href="https://github.com/Bensoo00/Mock-Trading-API"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                            }}
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </a>
                    </div>
                </div>
            </VistaWindow>

            {/* Trading Bot Integration */}
            <VistaWindow title="Trading Bot Analytics" icon={Activity} className="lg:col-span-12">
                <IntegratedTradingBot />
            </VistaWindow>

            {/* Vendor Buddy */}
            <VistaWindow title="Vendor Buddy" icon={Store} className="lg:col-span-7">
                <div className="space-y-3">
                    <h3 className="text-base font-bold text-gray-800 mb-2">
                        Full-stack inventory and pricing platform for trading card vendors — React, Flask, PostgreSQL, Stripe
                    </h3>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                        <li>• Built inventory management with live TCGPlayer market prices and eBay sold comps, cached for fast lookups</li>
                        <li>• Designed a card show calendar tracking booth and travel costs with per-event profit and loss</li>
                        <li>• Created quick sale and trade flows for selling at shows, with idempotent offline sync</li>
                        <li>• Added camera-based OCR card scanning (Tesseract.js) to add inventory in seconds</li>
                    </ul>
                </div>
            </VistaWindow>

            {/* Twitch Bot Detection */}
            <VistaWindow title="Twitch Bot Detection System" icon={Terminal} className="lg:col-span-5">
                <div className="space-y-3">
                    <h3 className="text-base font-bold text-gray-800 mb-2">
                        Real-time chat analysis system using Python, Pandas, and NLP
                    </h3>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                        <li>• Developed real-time Twitch chat logger connecting to multiple streams simultaneously</li>
                        <li>• Preprocessed large volumes of chat data using NLP techniques including tokenization and sentiment analysis</li>
                        <li>• Performed advanced feature extraction with TF-IDF vectors and lexical diversity metrics</li>
                        <li>• Implemented sentiment analysis using NLTK Sentiment Intensity Analyzer</li>
                    </ul>
                </div>
            </VistaWindow>
        </div>
    );
}
