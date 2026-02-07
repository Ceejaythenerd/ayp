import React from 'react';
import { Eye, Ear, Hand, Monitor } from 'lucide-react';

const Accessibility = () => {
    const features = [
        {
            icon: Eye,
            title: 'Visual Accessibility',
            items: ['High contrast color ratios', 'Scalable fonts and text', 'Alt text for all images', 'Clear visual hierarchy'],
        },
        {
            icon: Hand,
            title: 'Motor Accessibility',
            items: ['Full keyboard navigation', 'Large clickable areas', 'No time-limited interactions', 'Skip navigation links'],
        },
        {
            icon: Ear,
            title: 'Hearing Accessibility',
            items: ['Transcripts for audio content', 'Captions for videos', 'Visual notifications', 'No audio-only information'],
        },
        {
            icon: Monitor,
            title: 'Technical Standards',
            items: ['WCAG 2.1 AA compliance', 'Screen reader compatible', 'Semantic HTML structure', 'ARIA labels and roles'],
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-gold">
                    Accessibility Statement
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    We're committed to making the Africa Youth Portal accessible to everyone, including people with disabilities.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-8">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Our Commitment</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    The Africa Youth Portal is committed to ensuring digital accessibility for people with disabilities.
                    We continually improve the user experience for everyone and apply relevant accessibility standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines
                    explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                                <feature.icon className="w-5 h-5 text-brand-cyan" />
                            </div>
                            <h3 className="font-bold text-brand-navy">{feature.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {feature.items.map((item, j) => (
                                <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="bg-brand-gold/10 rounded-2xl p-6">
                <h3 className="font-bold text-brand-navy mb-2">Feedback</h3>
                <p className="text-gray-600 text-sm">
                    We welcome your feedback on the accessibility of the Africa Youth Portal. If you encounter any barriers,
                    please contact us at{' '}
                    <a href="mailto:accessibility@africayouthportal.org" className="text-brand-cyan hover:underline">
                        accessibility@africayouthportal.org
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Accessibility;
