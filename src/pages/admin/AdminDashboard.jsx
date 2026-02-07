import React from 'react';
import {
    FileText, Users, Eye, Download, TrendingUp,
    ArrowUpRight, ArrowDownRight, Bell, Mail
} from 'lucide-react';

// Stats Card Component
const StatsCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            {change && (
                <span className={`flex items-center text-sm font-medium ${changeType === 'up' ? 'text-green-600' : 'text-red-500'
                    }`}>
                    {changeType === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {change}%
                </span>
            )}
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
    </div>
);

// Recent Activity Item
const ActivityItem = ({ type, title, time, user }) => {
    const icons = {
        upload: FileText,
        subscribe: Users,
        view: Eye,
        download: Download,
    };
    const Icon = icons[type] || FileText;

    return (
        <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-grow">
                <p className="text-sm font-medium text-gray-800">{title}</p>
                <p className="text-xs text-gray-400">{user}</p>
            </div>
            <span className="text-xs text-gray-400">{time}</span>
        </div>
    );
};

const AdminDashboard = () => {
    // Mock data - will be replaced with Firebase data
    const stats = [
        { title: 'Total Documents', value: '1,247', change: 12, changeType: 'up', icon: FileText, color: 'bg-brand-navy' },
        { title: 'Total Views', value: '48.2K', change: 8, changeType: 'up', icon: Eye, color: 'bg-brand-cyan' },
        { title: 'Downloads', value: '12.8K', change: 5, changeType: 'up', icon: Download, color: 'bg-brand-gold' },
        { title: 'Subscribers', value: '3,891', change: 15, changeType: 'up', icon: Users, color: 'bg-green-500' },
    ];

    const recentActivity = [
        { type: 'upload', title: 'New policy brief uploaded', time: '2 min ago', user: 'Dr. Amara Okonkwo' },
        { type: 'subscribe', title: 'New newsletter subscriber', time: '15 min ago', user: 'user@example.com' },
        { type: 'download', title: 'Youth Employment Report downloaded', time: '1 hour ago', user: 'Anonymous' },
        { type: 'view', title: 'Climate Action paper viewed', time: '2 hours ago', user: '45 users' },
        { type: 'upload', title: 'Working paper submitted for review', time: '3 hours ago', user: 'Tendai Moyo' },
    ];

    return (
        <div className="fade-in">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening with your portal.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                        <button className="text-sm text-brand-cyan font-medium hover:underline">View All</button>
                    </div>
                    <div>
                        {recentActivity.map((activity, i) => (
                            <ActivityItem key={i} {...activity} />
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors">
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium">Upload Document</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-cyan text-brand-navy hover:bg-brand-cyan/90 transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="text-sm font-medium">Send Notification</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors">
                            <Mail className="w-5 h-5" />
                            <span className="text-sm font-medium">Send Newsletter</span>
                        </button>
                    </div>

                    {/* Pending Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-bold text-gray-700 mb-3">Pending Review</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Documents</span>
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">3</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Comments</span>
                                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
