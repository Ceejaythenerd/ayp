import React, { useState } from 'react';
import {
    LayoutDashboard, FileText, Users, Bell, Settings,
    LogOut, Upload, TrendingUp, Eye, Download, Plus,
    Search, Filter, MoreVertical, Edit, Trash2, CheckCircle
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

// Sidebar Navigation Items
const sidebarItems = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/admin/documents', label: 'Documents', icon: FileText },
    { to: '/admin/users', label: 'Subscribers', icon: Users },
    { to: '/admin/notifications', label: 'Notifications', icon: Bell },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
];

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className="p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-cyan flex items-center justify-center font-bold text-brand-navy">
                            AYP
                        </div>
                        {sidebarOpen && (
                            <div>
                                <p className="font-bold text-sm">Africa Youth Portal</p>
                                <p className="text-xs text-white/60">Admin Panel</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow p-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-white/10 text-brand-cyan'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5 shrink-0" />
                            {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* User / Logout */}
                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition-all w-full">
                        <LogOut className="w-5 h-5" />
                        {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
