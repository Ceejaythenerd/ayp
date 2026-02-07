import React, { useState } from 'react';
import {
    LayoutDashboard, FileText, Users, Bell, Settings,
    LogOut, Search, Menu, ChevronLeft, HelpCircle, Sun, Moon
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

// Sidebar Navigation Items - Main Menu
const menuItems = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/admin/documents', label: 'Documents', icon: FileText },
    { to: '/admin/users', label: 'Subscribers', icon: Users },
    { to: '/admin/notifications', label: 'Notifications', icon: Bell },
];

// General Items
const generalItems = [
    { to: '/admin/settings', label: 'Settings', icon: Settings },
    { to: '/admin/help', label: 'Help', icon: HelpCircle },
];

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(true); // Default to dark mode
    const location = useLocation();

    // Theme classes
    const theme = {
        bg: darkMode ? 'bg-gray-900' : 'bg-slate-50',
        sidebar: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        header: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        text: darkMode ? 'text-white' : 'text-gray-900',
        textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
        textLight: darkMode ? 'text-gray-500' : 'text-gray-400',
        navActive: darkMode ? 'bg-brand-cyan text-brand-navy' : 'bg-brand-navy text-white',
        navInactive: darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-brand-navy',
        input: darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-700 placeholder-gray-400',
        card: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100',
        border: darkMode ? 'border-gray-700' : 'border-gray-200',
    };

    return (
        <div className={`min-h-screen ${theme.bg} flex transition-colors duration-300`}>
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} ${theme.sidebar} border-r transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className={`p-4 border-b ${theme.border}`}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                            <img src="/assets/logo.png" alt="AYP" className="w-8 h-8 object-contain" />
                        </div>
                        {sidebarOpen && (
                            <div>
                                <p className={`font-bold text-sm ${theme.text}`}>Africa Youth Portal</p>
                                <p className={`text-xs ${theme.textLight}`}>Admin Panel</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Menu Section */}
                <div className="flex-grow p-4">
                    {sidebarOpen && <p className={`text-xs font-semibold ${theme.textLight} uppercase tracking-wider mb-3 px-4`}>Menu</p>}
                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? theme.navActive : theme.navInactive}`
                                }
                            >
                                <item.icon className="w-5 h-5 shrink-0" />
                                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                            </NavLink>
                        ))}
                    </nav>

                    {/* General Section */}
                    {sidebarOpen && <p className={`text-xs font-semibold ${theme.textLight} uppercase tracking-wider mt-8 mb-3 px-4`}>General</p>}
                    <nav className="space-y-1 mt-4">
                        {generalItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? theme.navActive : theme.navInactive}`
                                }
                            >
                                <item.icon className="w-5 h-5 shrink-0" />
                                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Logout */}
                <div className={`p-4 border-t ${theme.border}`}>
                    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl ${theme.navInactive} hover:bg-red-500/10 hover:text-red-500 transition-all w-full`}>
                        <LogOut className="w-5 h-5" />
                        {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col">
                {/* Top Header Bar */}
                <header className={`${theme.header} border-b ${theme.border} px-6 py-4 flex items-center justify-between transition-colors duration-300`}>
                    {/* Left Side - Toggle & Search */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                        >
                            {sidebarOpen ? <ChevronLeft className={`w-5 h-5 ${theme.textMuted}`} /> : <Menu className={`w-5 h-5 ${theme.textMuted}`} />}
                        </button>
                        <div className={`flex items-center gap-2 ${theme.input} rounded-xl px-4 py-2 w-64`}>
                            <Search className={`w-4 h-4 ${theme.textLight}`} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none text-sm w-full"
                            />
                            <span className={`text-xs ${theme.textLight} ${darkMode ? 'bg-gray-600' : 'bg-white'} px-2 py-1 rounded-md border ${theme.border}`}>⌘F</span>
                        </div>
                    </div>

                    {/* Right Side - Theme Toggle, Notifications & User */}
                    <div className="flex items-center gap-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} transition-all hover:scale-105`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button className={`relative p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                            <Bell className={`w-5 h-5 ${theme.textMuted}`} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className={`flex items-center gap-3 pl-4 border-l ${theme.border}`}>
                            <div className="w-9 h-9 rounded-full bg-brand-cyan flex items-center justify-center text-brand-navy font-bold text-sm">
                                AD
                            </div>
                            <div className="text-right">
                                <p className={`text-sm font-medium ${theme.text}`}>Admin User</p>
                                <p className={`text-xs ${theme.textLight}`}>admin@ayp.org</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content - Pass theme as context */}
                <main className="flex-grow p-6 overflow-auto">
                    <Outlet context={{ darkMode, theme }} />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
