import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Globe } from 'lucide-react';

const openPositions = [
    {
        id: 1,
        title: 'Research Analyst',
        department: 'Research',
        location: 'Johannesburg, South Africa',
        type: 'Full-time',
        description: 'Join our research team to analyze youth policy and development trends across Africa.',
    },
    {
        id: 2,
        title: 'Content Editor',
        department: 'Editorial',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help shape the narrative by editing and curating youth voices and research publications.',
    },
    {
        id: 3,
        title: 'Digital Marketing Intern',
        department: 'Communications',
        location: 'Remote',
        type: 'Internship',
        description: 'Support our outreach efforts and help amplify African youth voices on social media.',
    },
];

const benefits = [
    { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in Africa' },
    { icon: Heart, title: 'Wellness', desc: 'Mental health support and flexible hours' },
    { icon: Users, title: 'Community', desc: 'Join a passionate pan-African team' },
];

const Careers = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-gold to-brand-cyan">
                    Join Our Team
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Help us amplify youth voices across Africa. We're building a team as diverse as the continent we serve.
                </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {benefits.map((benefit, i) => (
                    <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                            <benefit.icon className="w-7 h-7 text-brand-cyan" />
                        </div>
                        <h3 className="font-bold text-brand-navy mb-1">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm">{benefit.desc}</p>
                    </div>
                ))}
            </div>

            {/* Open Positions */}
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Open Positions</h2>
            <div className="space-y-4">
                {openPositions.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-brand-cyan/30 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-brand-gold/20 text-brand-navy">
                                        {job.department}
                                    </span>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                        {job.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-cyan transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                                <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                </p>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors whitespace-nowrap">
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Fit CTA */}
            <div className="mt-12 text-center bg-brand-navy/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Don't see the right fit?</h3>
                <p className="text-gray-600 mb-4">
                    We're always looking for passionate individuals. Send us your CV and we'll keep you in mind.
                </p>
                <a
                    href="mailto:careers@africayouthportal.org"
                    className="inline-flex items-center gap-2 text-brand-cyan font-medium hover:underline"
                >
                    Send your CV
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default Careers;
