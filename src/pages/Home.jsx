import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import MasonryGrid from '../components/home/MasonryGrid';
import { BookOpen, Users, Globe, TrendingUp } from 'lucide-react';

const Home = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    // Impact stats data
    const stats = [
        { icon: BookOpen, value: '10,000+', label: 'Research Documents' },
        { icon: Users, value: '500+', label: 'Contributing Authors' },
        { icon: Globe, value: '54', label: 'African Countries' },
        { icon: TrendingUp, value: '50K+', label: 'Monthly Visitors' },
    ];

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubscribed(true);
        setEmail('');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 pt-8">
            <Hero />

            {/* Filterable Feed */}
            <MasonryGrid />

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
            <section id="newsletter" className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-3xl p-8 md:p-12 text-center text-white mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                    Get the latest research, analysis, and youth voices delivered to your inbox.
                </p>
                {subscribed ? (
                    <div className="flex items-center justify-center gap-2 text-brand-gold font-medium animate-fadeIn">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thanks for subscribing! Check your inbox for confirmation.
                    </div>
                ) : (
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-brand-cyan outline-none"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-3 rounded-full bg-brand-gold text-brand-navy font-bold hover:bg-brand-cyan transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
};

export default Home;

