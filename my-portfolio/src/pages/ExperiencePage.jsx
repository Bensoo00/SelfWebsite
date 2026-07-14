import React from 'react';
import { Briefcase } from 'lucide-react';
import VistaWindow from '../VistaWindow';

export default function ExperiencePage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            <VistaWindow title="System Administrator - PJM Interconnection (via Yoh)" icon={Briefcase} className="lg:col-span-7">
                <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <h3 className="text-base font-bold text-gray-800">PJM Interconnection</h3>
                        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                            March 2026 - September 2026
                        </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                        <li>• Automated repeatable infrastructure workflows across 30+ RHEL 8/9 hosts using Ansible Automation Platform</li>
                        <li>• Integrated Cherwell ITSM and Halo APIs with AAP via Python for dynamic inventory updates</li>
                        <li>• Developed YAML-based Ansible playbooks for configuration management, improving deployment efficiency by ~25%</li>
                        <li>• Validated 30+ production hosts against PJM's internal Ansible collection for idempotency and reliability</li>
                    </ul>
                </div>
            </VistaWindow>

            <VistaWindow title="Information Technology Specialist - UPenn School of Nursing" icon={Briefcase} className="lg:col-span-5">
                <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <h3 className="text-base font-bold text-gray-800">University of Pennsylvania School of Nursing</h3>
                        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                            March 2025 - September 2025
                        </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                        <li>• Provided Tier 1 technical support for Windows 10 and macOS environments with remote troubleshooting</li>
                        <li>• Maintained classroom AV systems including Crestron hardware and integrated peripherals</li>
                        <li>• Configured enterprise software platforms including Microsoft 365, SharePoint Online, Canvas LMS</li>
                        <li>• Analyzed usage metrics to optimize system performance and inform upgrade recommendations</li>
                    </ul>
                </div>
            </VistaWindow>

            <VistaWindow title="IT/Tech Intern - Lavner Education" icon={Briefcase} className="lg:col-span-12">
                <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <h3 className="text-base font-bold text-gray-800">Lavner Education</h3>
                        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                            June 2024 - August 2024
                        </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-700 text-sm">
                        <li>• Instructed students aged 6-12 in Python, LUA, and Scratch programming languages</li>
                        <li>• Developed engaging curriculum that enhanced problem-solving skills and creativity</li>
                        <li>• Provided technical support and troubleshooting for camp technology</li>
                        <li>• Organized tech-related workshops promoting teamwork and collaboration</li>
                    </ul>
                </div>
            </VistaWindow>
        </div>
    );
}
