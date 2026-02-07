import React, { useState } from 'react';
import { Search, Menu, X, Home, BookOpen, MessageSquare, PenTool, Info } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/research', label: 'Research', icon: BookOpen },
    { to: '/voices', label: 'Voices', icon: MessageSquare },
    { to: '/contribute', label: 'Contribute', icon: PenTool },
    { to: '/about', label: 'About', icon: Info },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/research?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all" role="banner">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 cursor-pointer shrink-0" aria-label="Africa Youth Portal Home">
                        <img
                            src="/assets/logo.png"
                            alt="Africa Youth Portal"
                            className="h-16 md:h-20 w-auto"
                        />
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive
                                        ? 'bg-brand-navy text-white'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-brand-navy'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Language Selector - Desktop */}
                        <div className="hidden md:block">
                            <LanguageSelector />
                        </div>

                        {/* Search Bar - Desktop */}
                        <form onSubmit={handleSearch} className="hidden md:flex bg-gray-100/80 rounded-full px-4 py-2 items-center gap-2 border border-transparent focus-within:border-brand-cyan focus-within:bg-white transition-all">
                            <Search className="w-4 h-4 text-gray-400" aria-hidden="true" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent outline-none text-sm w-32 lg:w-48 placeholder-gray-400"
                                aria-label="Search the portal"
                            />
                        </form>

                        {/* Submit Button - Desktop */}
                        <NavLink
                            to="/contribute"
                            className="hidden sm:block bg-brand-navy hover:bg-brand-navy/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-brand-cyan/20"
                        >
                            Submit
                        </NavLink>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="flex bg-gray-100 rounded-xl px-4 py-3 items-center gap-2 mb-4">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search the portal..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent outline-none text-sm flex-grow placeholder-gray-400"
                            />
                        </form>

                        {/* Mobile Nav Links */}
                        <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                                            ? 'bg-brand-cyan/10 text-brand-navy'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile Language & Submit */}
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                            <LanguageSelector />
                            <NavLink
                                to="/contribute"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex-grow text-center bg-brand-navy hover:bg-brand-navy/90 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all"
                            >
                                Submit Research
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
