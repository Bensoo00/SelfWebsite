import React from 'react';
import { Cpu, Terminal, TrendingUp } from 'lucide-react';
import VistaWindow from './VistaWindow';

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <VistaWindow title="Custom x86 Operating System" icon={Cpu}>
                <p className="text-gray-700">
                    Built with C and Assembly. Features include memory segmentation, paging, and custom shell.
                </p>
            </VistaWindow>

            <VistaWindow title="AI Trading Bot" icon={TrendingUp}>
                <p className="text-gray-700">
                    Real-time trading bot leveraging reinforcement learning with live market data integration.
                </p>
            </VistaWindow>

            <VistaWindow title="Twitch Bot Detection System" icon={Terminal}>
                <p className="text-gray-700">
                    Real-time chat analysis using Python, Pandas, and NLP to detect spam bots in Twitch streams.
                </p>
            </VistaWindow>
        </div>
    );
}
