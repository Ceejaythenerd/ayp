import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import MasonryGrid from '../components/home/MasonryGrid';
import { BookOpen, Users, Globe, TrendingUp } from 'lucide-react';

const categories = ['All', 'Trending', 'Policy', 'Culture', 'Tech'];

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    // Impact stats data
    const stats = [
        { icon: BookOpen, value: '10,000+', label: 'Research Documents' },
        { icon: Users, value: '500+', label: 'Contributing Authors' },
        { icon: Globe, value: '54', label: 'African Countries' },
        { icon: TrendingUp, value: '50K+', label: 'Monthly Visitors' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 pt-8">
            <Hero />

            {/* Filter Tabs */}
            <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFilter === cat
                                ? 'bg-brand-navy text-white shadow-lg transform scale-105'
                                : 'bg-white border border-gray-100 text-gray-500 hover:border-brand-cyan hover:text-brand-navy'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <MasonryGrid filter={activeFilter} />

            {/* Impact Stats Section */}
            <section className="mt-20 mb-12">
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

            {/* Newsletter CTA */}
            <section className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-3xl p-8 md:p-12 text-center text-white mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                    Get the latest research, analysis, and youth voices delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-brand-cyan outline-none"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-brand-gold text-brand-navy font-bold hover:bg-brand-cyan transition-colors whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Home;
