import React from 'react';
import { Users, Globe, BookOpen, Award, Heart, Target } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: BookOpen, value: '10,000+', label: 'Research Documents' },
        { icon: Users, value: '500+', label: 'Contributing Authors' },
        { icon: Globe, value: '54', label: 'African Countries' },
        { icon: Award, value: '50K+', label: 'Monthly Visitors' },
    ];

    const team = [
        { name: 'Dr. Amara Okonkwo', role: 'Director', image: null },
        { name: 'Kwame Asante', role: 'Research Lead', image: null },
        { name: 'Fatima El-Amin', role: 'Content Manager', image: null },
        { name: 'Tendai Moyo', role: 'Youth Coordinator', image: null },
    ];

    const values = [
        { icon: Target, title: 'Youth-Centric', desc: 'Designed by and for young Africans' },
        { icon: Globe, title: 'Pan-African', desc: 'Connecting voices across the continent' },
        { icon: Heart, title: 'Accessible', desc: 'Open access research for all' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 fade-in">
            {/* Hero Section */}
            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                    About Africa Youth Portal
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A dynamic platform amplifying youth voices across Africa through research,
                    analysis, and community. Developed by SAIIA with support from the Mastercard Foundation.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="mb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-brand-navy text-white rounded-3xl p-10">
                        <h2 className="text-3xl font-bold mb-4 text-brand-gold">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To transform the Africa Portal into a vibrant, youth-centric knowledge hub
                            that serves as a leading open-access research repository, featuring youth voices,
                            commentary, and connecting young African researchers and change-makers.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-gold/20 rounded-3xl p-10 border border-brand-cyan/30">
                        <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A future where young Africans lead the conversation on policy, innovation,
                            and development. Where research is accessible, voices are amplified, and
                            communities are connected across the continent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-brand-navy">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-brand-cyan/30 transition-all"
                        >
                            <stat.icon className="w-10 h-10 mx-auto mb-4 text-brand-cyan" />
                            <p className="text-4xl font-bold text-brand-navy mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-brand-navy">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <div
                            key={i}
                            className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-100"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-4">
                                <value.icon className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-brand-navy">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="text-center group"
                        >
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-navy to-brand-cyan flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="font-bold text-brand-navy">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partners */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold text-center mb-10 text-brand-navy">Our Partners</h2>
                <div className="flex justify-center items-center gap-12 flex-wrap">
                    <div className="h-16 px-8 bg-brand-navy/10 rounded-xl flex items-center text-brand-navy font-bold">
                        SAIIA
                    </div>
                    <div className="h-16 px-8 bg-brand-gold/20 rounded-xl flex items-center text-brand-navy font-bold">
                        Mastercard Foundation
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
