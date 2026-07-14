import React from 'react';
import { Briefcase, Server, Monitor, GraduationCap, MapPin, Check } from 'lucide-react';
import VistaWindow from '../VistaWindow';

const metricStyle = {
    background: 'linear-gradient(135deg, rgba(144,238,144,0.3) 0%, rgba(152,251,152,0.18) 100%)',
    border: '1px solid rgba(100,180,90,0.35)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
};

const tagStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(210,240,200,0.6) 100%)',
    border: '1px solid rgba(100,160,90,0.25)',
};

function MetricBadge({ value, label }) {
    return (
        <div className="rounded-xl px-3 py-2 text-center min-w-[5.5rem]" style={metricStyle}>
            <p className="text-base font-bold text-green-800 leading-tight">{value}</p>
            <p className="text-[10px] font-semibold text-green-700 mt-0.5">{label}</p>
        </div>
    );
}

const roles = [
    {
        title: 'System Administrator — PJM (via Yoh)',
        icon: Server,
        company: 'PJM Interconnection',
        location: 'Valley Forge, PA',
        employer: 'Yoh, A Day & Zimmerman Company',
        dates: 'March 2026 – September 2026',
        metrics: [
            { value: '30+', label: 'RHEL hosts' },
            { value: '~25%', label: 'faster deploys' },
            { value: 'Python', label: 'API integrations' },
        ],
        tags: ['Ansible AAP', 'Python', 'RHEL 8/9', 'Cherwell', 'Halo', 'YAML'],
        bullets: [
            'Automated repeatable infrastructure workflows across 30+ RHEL 8/9 hosts using Ansible Automation Platform',
            'Integrated Cherwell ITSM and Halo APIs with AAP via Python for dynamic inventory updates',
            'Developed YAML-based Ansible playbooks for configuration management, improving deployment efficiency by ~25%',
            'Validated 30+ production hosts against PJM\'s internal Ansible collection for idempotency and reliability',
        ],
    },
    {
        title: 'IT Specialist — UPenn School of Nursing',
        icon: Monitor,
        company: 'University of Pennsylvania School of Nursing',
        location: 'Philadelphia, PA',
        dates: 'March 2025 – September 2025',
        metrics: [
            { value: '50+', label: 'tickets / week' },
            { value: '<2 hr', label: 'avg resolution' },
            { value: '~15%', label: 'fewer repeats' },
        ],
        tags: ['macOS', 'Windows 11', 'Crestron AV', 'Microsoft 365', 'Python', 'SQL'],
        bullets: [
            'Served as frontline IT support, resolving 50+ Tier 1 hardware, software, and network incidents per week across macOS and Windows 10/11',
            'Supported live instructional and event AV on Crestron systems, reducing classroom downtime by an estimated 20%',
            'Standardized device imaging and deployment workflows, reducing re-imaging errors by ~30%',
            'Analyzed 5,000+ service ticket records with Python (Pandas) and SQL to cut repeat incidents by ~15%',
        ],
    },
    {
        title: 'IT/Tech Intern — Lavner Education',
        icon: GraduationCap,
        company: 'Lavner Education',
        location: 'Philadelphia, PA',
        dates: 'June 2024 – August 2024',
        metrics: [
            { value: '6–12', label: 'student ages' },
            { value: '3', label: 'languages taught' },
        ],
        tags: ['Python', 'LUA', 'Scratch', 'Curriculum', 'Workshops'],
        bullets: [
            'Instructed students aged 6–12 in Python, LUA, and Scratch programming languages',
            'Developed engaging curriculum that enhanced problem-solving skills and creativity',
            'Provided technical support and troubleshooting for camp technology',
            'Organized tech-related workshops promoting teamwork and collaboration',
        ],
    },
];

function RoleCard({ role }) {
    const RoleIcon = role.icon;
    return (
        <VistaWindow title={role.title} icon={RoleIcon}>
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                        <h3 className="text-base font-bold text-gray-800">{role.company}</h3>
                        {role.employer && (
                            <p className="text-xs text-gray-500 mt-0.5">via {role.employer}</p>
                        )}
                        <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            {role.location}
                        </p>
                    </div>
                    <span className="self-start text-xs font-semibold text-green-800 px-3 py-1.5 rounded-full whitespace-nowrap"
                          style={{
                              background: 'linear-gradient(135deg, rgba(144,238,144,0.4) 0%, rgba(120,200,110,0.25) 100%)',
                              border: '1px solid rgba(100,160,90,0.3)',
                          }}>
                        {role.dates}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {role.metrics.map((m) => (
                        <MetricBadge key={m.label} value={m.value} label={m.label} />
                    ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-green-800 px-2 py-0.5 rounded-full"
                              style={tagStyle}>
                            {tag}
                        </span>
                    ))}
                </div>

                <ul className="space-y-2">
                    {role.bullets.map((bullet) => (
                        <li key={bullet}
                            className="flex gap-2.5 text-sm text-gray-700 p-2.5 rounded-xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(230,248,225,0.5) 100%)',
                                border: '1px solid rgba(180,220,170,0.35)',
                            }}>
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </VistaWindow>
    );
}

export default function ExperiencePage() {
    return (
        <div className="space-y-6">
            {/* Page intro */}
            <VistaWindow title="Work History" icon={Briefcase}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <p className="text-sm text-gray-700 flex-1">
                        Three co-ops spanning systems administration, enterprise IT support, and tech education —
                        with a through-line of automation, scripting, and making infrastructure more reliable.
                    </p>
                    <div className="flex gap-3 flex-shrink-0">
                        <MetricBadge value="3" label="co-ops" />
                        <MetricBadge value="2+" label="years experience" />
                        <MetricBadge value="IT + SysAdmin" label="focus areas" />
                    </div>
                </div>
            </VistaWindow>

            {/* Vertical timeline */}
            <div className="experience-timeline relative pl-0 md:pl-2">
                <div className="hidden md:block experience-timeline-line" aria-hidden="true" />

                <div className="space-y-8 md:space-y-10">
                    {roles.map((role) => (
                        <div key={role.title} className="experience-timeline-entry relative md:pl-10">
                            <div className="hidden md:flex experience-timeline-node absolute left-0 top-8"
                                 aria-hidden="true">
                                <span className="experience-timeline-dot" />
                            </div>
                            <RoleCard role={role} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
