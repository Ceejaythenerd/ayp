import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Download, Bookmark, Eye, ChevronDown, X, Share2 } from 'lucide-react';
import ShareButtons from '../components/common/ShareButtons';

// Sample research documents data
const sampleDocuments = [
    {
        id: 1,
        title: 'Youth Unemployment in Sub-Saharan Africa: Policy Responses and Pathways Forward',
        authors: ['Dr. Amara Okonkwo', 'Prof. Kwame Asante'],
        organization: 'SAIIA',
        date: '2026-01-15',
        category: 'Policy Brief',
        topic: 'Employment',
        abstract: 'This policy brief examines the structural causes of youth unemployment across Sub-Saharan Africa and proposes evidence-based policy interventions...',
        downloads: 2450,
        views: 8900,
    },
    {
        id: 2,
        title: 'Digital Economy and Youth Entrepreneurship: Opportunities in East Africa',
        authors: ['Fatima El-Amin'],
        organization: 'African Development Bank',
        date: '2026-01-10',
        category: 'Report',
        topic: 'Technology',
        abstract: 'An analysis of how digital platforms are creating new opportunities for young entrepreneurs in Kenya, Tanzania, and Uganda...',
        downloads: 1820,
        views: 6200,
    },
    {
        id: 3,
        title: 'Climate Action and Youth Activism: Voices from the Frontlines',
        authors: ['Tendai Moyo', 'Chioma Eze'],
        organization: 'African Youth Climate Hub',
        date: '2025-12-20',
        category: 'Working Paper',
        topic: 'Climate',
        abstract: 'Documenting the rise of youth-led climate movements across Africa and their impact on national and regional policy...',
        downloads: 890,
        views: 3400,
    },
    {
        id: 4,
        title: "Education Technology Post-COVID: Lessons from Africa's Digital Classrooms",
        authors: ['Dr. Nadia Bouazizi'],
        organization: 'UNESCO Africa',
        date: '2025-12-15',
        category: 'Report',
        topic: 'Education',
        abstract: 'Evaluating the effectiveness of EdTech solutions deployed during the pandemic and their lasting impact on educational access...',
        downloads: 3100,
        views: 11500,
    },
    {
        id: 5,
        title: 'Youth Political Participation in Nigeria: Barriers and Enablers',
        authors: ['Oluwaseun Adeyemi', 'Dr. Grace Mwangi'],
        organization: 'Afrobarometer',
        date: '2025-11-28',
        category: 'Policy Brief',
        topic: 'Governance',
        abstract: 'Survey-based research exploring why young Nigerians are increasingly engaging in political processes and what obstacles remain...',
        downloads: 1650,
        views: 5800,
    },
    {
        id: 6,
        title: 'Mental Health Among Young Africans: Breaking the Stigma',
        authors: ['Dr. Amina Diallo'],
        organization: 'WHO Africa',
        date: '2025-11-15',
        category: 'Report',
        topic: 'Health',
        abstract: 'A comprehensive study on mental health challenges facing African youth and recommendations for culturally-sensitive interventions...',
        downloads: 2200,
        views: 7600,
    },
];

const categories = ['All', 'Policy Brief', 'Report', 'Working Paper'];
const topics = ['All', 'Employment', 'Technology', 'Climate', 'Education', 'Governance', 'Health'];
const years = ['All', '2026', '2025', '2024', '2023', '2022'];

const Research = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [selectedYear, setSelectedYear] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    // Initialize search from URL query params
    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    // Filter documents based on search and filters
    const filteredDocs = sampleDocuments.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
        const matchesTopic = selectedTopic === 'All' || doc.topic === selectedTopic;
        const docYear = new Date(doc.date).getFullYear().toString();
        const matchesYear = selectedYear === 'All' || docYear === selectedYear;
        return matchesSearch && matchesCategory && matchesTopic && matchesYear;
    });

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
        setSelectedTopic('All');
        setSelectedYear('All');
    };

    const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTopic !== 'All' || selectedYear !== 'All';

    return (
        <main id="main-content" className="max-w-7xl mx-auto px-4 py-12 fade-in" role="main">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
                    Research Repository
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore youth-focused policy briefs, reports, and academic work from across Africa.
                </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-grow relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by title, author, or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                        />
                    </div>

                    {/* Filter Toggle Button (Mobile) */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="md:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"
                    >
                        <Filter className="w-5 h-5" />
                        Filters
                        {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>}
                    </button>

                    {/* Desktop Filters */}
                    <div className="hidden md:flex gap-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-cyan outline-none cursor-pointer"
                            aria-label="Filter by document type"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === 'All' ? 'All Types' : cat}</option>
                            ))}
                        </select>
                        <select
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-cyan outline-none cursor-pointer"
                            aria-label="Filter by topic"
                        >
                            {topics.map(topic => (
                                <option key={topic} value={topic}>{topic === 'All' ? 'All Topics' : topic}</option>
                            ))}
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-cyan outline-none cursor-pointer"
                            aria-label="Filter by year"
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Mobile Filters Dropdown */}
                {showFilters && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                            aria-label="Filter by document type"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === 'All' ? 'All Types' : cat}</option>
                            ))}
                        </select>
                        <select
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                            aria-label="Filter by topic"
                        >
                            {topics.map(topic => (
                                <option key={topic} value={topic}>{topic === 'All' ? 'All Topics' : topic}</option>
                            ))}
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                            aria-label="Filter by year"
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Active Filters Display */}
                {hasActiveFilters && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-gray-500">Active filters:</span>
                        {searchQuery && (
                            <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-navy text-sm flex items-center gap-1">
                                "{searchQuery}"
                                <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                            </span>
                        )}
                        {selectedCategory !== 'All' && (
                            <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-brand-navy text-sm flex items-center gap-1">
                                {selectedCategory}
                                <button onClick={() => setSelectedCategory('All')}><X className="w-3 h-3" /></button>
                            </span>
                        )}
                        {selectedTopic !== 'All' && (
                            <span className="px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm flex items-center gap-1">
                                {selectedTopic}
                                <button onClick={() => setSelectedTopic('All')}><X className="w-3 h-3" /></button>
                            </span>
                        )}
                        <button
                            onClick={clearFilters}
                            className="text-sm text-gray-500 hover:text-brand-navy underline ml-2"
                        >
                            Clear all
                        </button>
                    </div>
                )}
            </div>

            {/* Results Count */}
            <p className="text-gray-500 mb-6">
                Showing <span className="font-bold text-brand-navy">{filteredDocs.length}</span> of {sampleDocuments.length} documents
            </p>

            {/* Results Grid */}
            <div className="grid gap-6">
                {filteredDocs.map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-brand-cyan/30 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Document Thumbnail */}
                            <div className="w-full md:w-32 h-40 md:h-auto bg-gradient-to-br from-brand-navy to-brand-cyan rounded-xl flex items-center justify-center text-white shrink-0">
                                <span className="text-4xl font-bold opacity-50">PDF</span>
                            </div>

                            {/* Document Info */}
                            <div className="flex-grow">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <div>
                                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-brand-gold/20 text-brand-navy">
                                            {doc.category}
                                        </span>
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 ml-2">
                                            {doc.topic}
                                        </span>
                                    </div>
                                    <button className="text-gray-400 hover:text-brand-gold transition-colors">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-cyan transition-colors cursor-pointer">
                                    {doc.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-3">
                                    {doc.authors.join(', ')} • {doc.organization}
                                </p>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {doc.abstract}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {doc.views.toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Download className="w-4 h-4" />
                                            {doc.downloads.toLocaleString()}
                                        </span>
                                        <span>{new Date(doc.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                    </div>

                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy text-white text-sm font-bold hover:bg-brand-navy/90 transition-colors">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredDocs.length === 0 && (
                <div className="text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <Search className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No documents found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters</p>
                    <button
                        onClick={clearFilters}
                        className="mt-4 px-6 py-2 rounded-full bg-brand-cyan text-white font-bold"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </main>
    );
};

export default Research;
