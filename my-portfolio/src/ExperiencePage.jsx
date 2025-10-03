import React from 'react';
import { Briefcase } from 'lucide-react';
import VistaWindow from './VistaWindow';

export default function ExperiencePage() {
    return (
        <div className="space-y-6">
            <VistaWindow title="Information Technology Specialist - UPenn School of Nursing" icon={Briefcase}>
                <ul className="space-y-2 text-gray-700">
                    <li>• Provided Tier 1 technical support for Windows 10 and macOS environments</li>
                    <li>• Maintained classroom AV systems including Crestron hardware</li>
                    <li>• Configured enterprise software platforms like Microsoft 365 & Canvas LMS</li>
                    <li>• Analyzed usage metrics to optimize performance and upgrades</li>
                </ul>
            </VistaWindow>

            <VistaWindow title="IT/Tech Intern - Lavner Education" icon={Briefcase}>
                <ul className="space-y-2 text-gray-700">
                    <li>• Instructed students in Python, LUA, and Scratch</li>
                    <li>• Developed curriculum enhancing problem-solving and creativity</li>
                    <li>• Provided technical support for camp technology</li>
                    <li>• Organized workshops promoting collaboration</li>
                </ul>
            </VistaWindow>
        </div>
    );
}
