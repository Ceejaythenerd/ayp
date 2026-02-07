import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4 fade-in">
            <div className="text-center max-w-lg">
                {/* 404 Illustration */}
                <div className="relative mb-8">
                    <span className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-gold opacity-20">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-brand-navy/10 flex items-center justify-center">
                            <Search className="w-12 h-12 text-brand-navy" />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                    <NavLink
                        to="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
