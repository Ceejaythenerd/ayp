import React, { useState } from 'react';
import { Play, Mic, BookOpen, User, Calendar, Clock, ArrowRight, Filter, Share2 } from 'lucide-react';
import ShareButtons from '../components/common/ShareButtons';

// Sample blog/commentary articles
const sampleArticles = [
    {
        id: 1,
        title: 'Why Young Africans Are Leading the Climate Conversation',
        author: { name: 'Tendai Moyo', role: 'Climate Activist', avatar: null },
        date: '2026-02-01',
        readTime: 8,
        category: 'Climate',
        type: 'Opinion',
        excerpt: 'From Nairobi to Lagos, young Africans are not waiting for permission to tackle the climate crisis. We are innovating, organizing, and demanding action.',
        featured: true,
    },
    {
        id: 2,
        title: 'The Rise of AfroTech: How African Startups Are Going Global',
        author: { name: 'Kwame Asante', role: 'Tech Analyst', avatar: null },
        date: '2026-01-28',
        readTime: 12,
        category: 'Technology',
        type: 'Analysis',
        excerpt: 'African startups raised over $5 billion in 2025, with fintech leading the way. But the real story is about the ecosystem that made it possible.',
        featured: false,
    },
    {
        id: 3,
        title: 'Breaking Barriers: Women in African Politics',
        author: { name: 'Dr. Amina Diallo', role: 'Political Scientist', avatar: null },
        date: '2026-01-25',
        readTime: 10,
        category: 'Governance',
        type: 'Interview',
        excerpt: 'An interview with three young women parliamentarians on navigating male-dominated political spaces and their vision for inclusive governance.',
        featured: false,
    },
    {
        id: 4,
        title: 'From University to Unemployment: Is Higher Education Failing African Youth?',
        author: { name: 'Oluwaseun Adeyemi', role: 'Education Researcher', avatar: null },
        date: '2026-01-20',
        readTime: 15,
        category: 'Education',
        type: 'Deep Dive',
        excerpt: 'Millions of African graduates struggle to find employment. Is the problem with the curriculum, the economy, or both?',
        featured: true,
    },
    {
        id: 5,
        title: 'Mental Health Matters: Ending the Silence Among African Youth',
        author: { name: 'Fatima El-Amin', role: 'Mental Health Advocate', avatar: null },
        date: '2026-01-15',
        readTime: 7,
        category: 'Health',
        type: 'Personal Essay',
        excerpt: 'For too long, mental health has been taboo in African communities. It is time we talk openly about what we are all going through.',
        featured: false,
    },
    {
        id: 6,
        title: 'The Podcast Revolution: African Stories, African Voices',
        author: { name: 'Chioma Eze', role: 'Media Producer', avatar: null },
        date: '2026-01-10',
        readTime: 6,
        category: 'Culture',
        type: 'Feature',
        excerpt: 'From true crime to politics, African podcasters are creating content that resonates with local audiences and global listeners alike.',
        featured: false,
    },
];

const categories = ['All', 'Climate', 'Technology', 'Governance', 'Education', 'Health', 'Culture'];

const Voices = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredArticles = sampleArticles.filter(
        article => selectedCategory === 'All' || article.category === selectedCategory
    );

    const featuredArticle = sampleArticles.find(a => a.featured);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 fade-in">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-gold to-brand-cyan">
                    Youth Voices
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Commentary, analysis, and perspectives from young Africans shaping the continent's future.
                </p>
            </div>

            {/* Featured Article */}
            {featuredArticle && (
                <div className="mb-12 bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                        <div className="flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-navy text-sm font-bold mb-4 w-fit">
                                Featured
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-gray-300 mb-6">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {featuredArticle.author.name}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {featuredArticle.readTime} min read
                                </span>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-cyan text-brand-navy font-bold w-fit hover:bg-brand-gold transition-colors">
                                Read Article
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-cyan/30 to-brand-gold/30 flex items-center justify-center">
                                <BookOpen className="w-32 h-32 text-white/30" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Filter */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                            ? 'bg-brand-navy text-white shadow-lg'
                            : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-navy'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.filter(a => !a.featured || selectedCategory !== 'All').map((article) => (
                    <article
                        key={article.id}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-cyan/30 transition-all group"
                    >
                        {/* Article Thumbnail */}
                        <div className="h-48 bg-gradient-to-br from-brand-navy/80 to-brand-cyan/60 flex items-center justify-center relative">
                            <BookOpen className="w-16 h-16 text-white/30" />
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-brand-navy text-xs font-bold">
                                {article.type}
                            </span>
                        </div>

                        {/* Article Content */}
                        <div className="p-5">
                            <span className="text-xs font-medium text-brand-cyan">{article.category}</span>
                            <h3 className="text-lg font-bold text-brand-navy mt-1 mb-2 group-hover:text-brand-cyan transition-colors cursor-pointer line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-navy text-xs font-bold">
                                        {article.author.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{article.author.name}</p>
                                        <p className="text-xs text-gray-400">{article.readTime} min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Empty State */}
            {filteredArticles.length === 0 && (
                <div className="text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No articles in this category</h3>
                    <p className="text-gray-500">Check back soon for new content!</p>
                </div>
            )}

            {/* Podcast Section Teaser */}
            <section className="mt-16 bg-gradient-to-r from-brand-gold/20 to-brand-cyan/20 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                        <Mic className="w-12 h-12 text-brand-gold" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-bold text-brand-navy mb-2">Africa Youth Podcast</h3>
                        <p className="text-gray-600 mb-4">
                            Weekly conversations with young leaders, researchers, and change-makers across the continent.
                        </p>
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors">
                            <Play className="w-5 h-5" />
                            Listen Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Voices;
