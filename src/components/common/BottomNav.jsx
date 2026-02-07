import React, { useEffect, useState } from 'react';
import { Sparkles, Layers, Mic2, User } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

const BottomNav = () => {

    // Base classes for nav items
    const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300";
    const activeClasses = "bg-gray-900 text-white shadow-lg scale-105";
    const inactiveClasses = "text-gray-500 hover:bg-gray-100 hover:text-gray-900";

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl shadow-purple-900/10 rounded-full px-2 py-2 flex gap-1">

                <NavLink
                    to="/"
                    className={({ isActive }) => cn(baseClasses, isActive ? activeClasses : inactiveClasses)}
                >
                    <Sparkles className="w-5 h-5" />
                    <span className={cn("font-bold text-sm", "hidden md:block")}>Feed</span>
                    {/* Show text on active state logic can be handled via CSS or conditional rendering if strictly needed per original design */}
                    {/* Original Design: Text hidden on mobile UNLESS active. To keep it simple React Router Logic: */}
                    <style>{`
                 .active .nav-text { display: block !important; }
             `}</style>
                </NavLink>

                <NavLink
                    to="/research"
                    className={({ isActive }) => cn(baseClasses, isActive ? activeClasses : inactiveClasses)}
                >
                    <Layers className="w-5 h-5" />
                    <span className="font-bold text-sm hidden md:block">Research</span>
                </NavLink>

                <NavLink
                    to="/voices"
                    className={({ isActive }) => cn(baseClasses, isActive ? activeClasses : inactiveClasses)}
                >
                    <Mic2 className="w-5 h-5" />
                    <span className="font-bold text-sm hidden md:block">Voices</span>
                </NavLink>

                <NavLink
                    to="/contribute"
                    className={({ isActive }) => cn(baseClasses, isActive ? activeClasses : inactiveClasses)}
                >
                    <User className="w-5 h-5" />
                    <span className="font-bold text-sm hidden md:block">Profile</span>
                </NavLink>

            </div>
        </div>
    );
};

export default BottomNav;
