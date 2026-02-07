import React from 'react';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Content items with categories for filtering
const contentItems = [
    {
        id: 1,
        type: 'research',
        category: 'Policy',
        title: 'The Gig Economy: A Nairobi Case Study',
        author: 'K. Mensah',
        tag: 'Economics',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        height: 'h-64',
        trending: true,
    },
    {
        id: 2,
        type: 'opinion',
        category: 'Culture',
        title: 'Why I marched for climate justice in Kampala',
        author: 'Sarah O.',
        tag: 'Activism',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        height: 'h-96',
        trending: true,
    },
    {
        id: 3,
        type: 'event',
        category: 'Tech',
        title: 'Pan-African Dev Con 2025',
        author: 'Live Tomorrow',
        tag: 'event',
        dark: true,
        trending: false,
    },
    {
        id: 4,
        type: 'research',
        category: 'Policy',
        title: 'Digital Governance Frameworks',
        author: 'Dr. A. Nyerere',
        tag: 'Policy',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        height: 'h-64',
        trending: false,
    },
    {
        id: 5,
        type: 'podcast',
        category: 'Culture',
        title: 'Ep 4: The Future of Afro-Beats',
        author: '45 min',
        tag: 'Culture',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        height: 'h-80',
        hasPlay: true,
        trending: true,
    },
    {
        id: 6,
        type: 'research',
        category: 'Policy',
        title: 'Youth Charter Review 2026',
        author: 'Policy Unit',
        tag: 'Governance',
        gradient: true,
        trending: false,
    },
];

const MasonryGrid = ({ filter = 'All' }) => {
    const navigate = useNavigate();

    // Filter items based on active filter
    const filteredItems = contentItems.filter(item => {
        if (filter === 'All') return true;
        if (filter === 'Trending') return item.trending;
        return item.category === filter;
    });

    // If no items match, show a message
    if (filteredItems.length === 0) {
        return (
            <div className="text-center py-20 fade-in">
                <p className="text-gray-500">No content found for this filter. Try another category!</p>
            </div>
        );
    }

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 fade-in">
            {filteredItems.map((item) => {
                // Dark card (event style)
                if (item.dark) {
                    return (
                        <div
                            key={item.id}
                            className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group bg-brand-navy text-white shadow-sm border border-brand-navy/80 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{item.type}</span>
                                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-brand-cyan transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 leading-tight text-white">{item.title}</h3>
                                <div className="text-sm font-medium text-white/80">{item.author}</div>
                            </div>
                        </div>
                    );
                }

                // Gradient card (text only)
                if (item.gradient) {
                    return (
                        <div
                            key={item.id}
                            onClick={() => navigate('/research')}
                            className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group bg-gradient-to-br from-brand-cyan/10 to-brand-gold/10 p-8 border border-brand-cyan/20 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.type}</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-brand-cyan transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 leading-tight text-brand-navy">{item.title}</h3>
                            <div className="text-sm font-medium text-gray-500 mb-4">{item.author}</div>
                            <span className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy border border-brand-cyan/20">
                                {item.tag}
                            </span>
                        </div>
                    );
                }

                // Image card with optional play button
                return (
                    <div
                        key={item.id}
                        onClick={() => navigate(item.type === 'podcast' ? '/voices' : '/research')}
                        className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group bg-white shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className={`relative overflow-hidden ${item.height}`}>
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {item.hasPlay && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                        <Play className="w-5 h-5 text-white fill-current" />
                                    </div>
                                </div>
                            )}
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-navy border border-white/50">
                                    {item.tag}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.type}</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-brand-cyan transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 leading-tight text-brand-navy">{item.title}</h3>
                            <div className="text-sm font-medium text-gray-500">{item.author}</div>
                        </div>
                    </div>
                );
            })}

            {/* Call to Action Card - always shown */}
            <div
                onClick={() => navigate('/contribute')}
                className="break-inside-avoid rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy/80 text-white p-8 text-center relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-brand-gold opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Sparkles className="w-8 h-8 mx-auto mb-4 text-brand-gold" />
                <h3 className="text-2xl font-bold mb-2">Your Voice Matters</h3>
                <p className="text-gray-300 mb-6 text-sm">Join 500+ young researchers contributing to the portal.</p>
                <button className="bg-white text-brand-navy px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                    Start Writing
                </button>
            </div>
        </div>
    );
};

export default MasonryGrid;
