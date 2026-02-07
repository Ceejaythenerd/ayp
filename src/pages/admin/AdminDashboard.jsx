import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    FileText, Users, Eye, Download, TrendingUp, Plus,
    ArrowUpRight, ArrowDownRight, Bell, Mail, Calendar,
    Clock, Video, CheckCircle, Circle, MoreVertical
} from 'lucide-react';

// Stats Card Component
const StatsCard = ({ title, value, change, changeType, isActive, darkMode }) => {
    const cardBg = isActive
        ? 'bg-brand-cyan'
        : darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
    const textColor = isActive ? 'text-brand-navy' : darkMode ? 'text-white' : 'text-gray-900';
    const mutedColor = isActive ? 'text-brand-navy/70' : darkMode ? 'text-gray-400' : 'text-gray-500';

    return (
        <div className={`rounded-2xl p-6 transition-all border ${cardBg}`}>
            <div className="flex justify-between items-start mb-4">
                <p className={`text-sm font-medium ${mutedColor}`}>{title}</p>
                <button className={`p-1 rounded-lg ${isActive ? 'hover:bg-brand-navy/10' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <ArrowUpRight className={`w-4 h-4 ${mutedColor}`} />
                </button>
            </div>
            <p className={`text-4xl font-bold mb-2 ${textColor}`}>{value}</p>
            {change && (
                <div className="flex items-center gap-2">
                    <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${changeType === 'up'
                            ? isActive ? 'bg-green-600/20 text-green-700' : darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                            : isActive ? 'bg-red-600/20 text-red-700' : darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                        }`}>
                        {changeType === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {change}%
                    </span>
                    <span className={`text-xs ${mutedColor}`}>from last month</span>
                </div>
            )}
        </div>
    );
};

// Task Item Component
const TaskItem = ({ title, dueDate, status, color, darkMode }) => (
    <div className={`flex items-center gap-3 py-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} last:border-0`}>
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <div className="flex-grow">
            <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Due date: {dueDate}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${status === 'completed' ? darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600' :
                status === 'in-progress' ? darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600' :
                    darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
            }`}>
            {status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
        </span>
    </div>
);

// Team Member Item
const TeamMemberItem = ({ name, task, status, avatar, darkMode }) => (
    <div className={`flex items-center gap-3 py-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} last:border-0`}>
        <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-brand-cyan/20' : 'bg-brand-navy/10'} flex items-center justify-center ${darkMode ? 'text-brand-cyan' : 'text-brand-navy'} font-bold text-sm`}>
            {avatar}
        </div>
        <div className="flex-grow">
            <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Working on <span className={`${darkMode ? 'text-brand-cyan' : 'text-brand-navy'} font-medium`}>{task}</span></p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${status === 'completed' ? darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600' :
                status === 'in-progress' ? darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600' :
                    darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
            }`}>
            {status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
        </span>
    </div>
);

const AdminDashboard = () => {
    const { darkMode } = useOutletContext() || { darkMode: true };

    // Theme helpers
    const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
    const textClass = darkMode ? 'text-white' : 'text-gray-900';
    const mutedClass = darkMode ? 'text-gray-400' : 'text-gray-500';
    const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

    // Stats data
    const stats = [
        { title: 'Total Documents', value: '1,247', change: 12, changeType: 'up', isActive: true },
        { title: 'Published', value: '892', change: 8, changeType: 'up', isActive: false },
        { title: 'Pending Review', value: '24', change: 5, changeType: 'up', isActive: false },
        { title: 'Subscribers', value: '3,891', change: 15, changeType: 'up', isActive: false },
    ];

    const tasks = [
        { title: 'Review Climate Policy Brief', dueDate: 'Feb 10, 2026', status: 'in-progress', color: 'bg-blue-500' },
        { title: 'Publish Youth Employment Report', dueDate: 'Feb 12, 2026', status: 'pending', color: 'bg-yellow-500' },
        { title: 'Update EDU Tech Analysis', dueDate: 'Feb 15, 2026', status: 'completed', color: 'bg-green-500' },
        { title: 'Send Newsletter Digest', dueDate: 'Feb 8, 2026', status: 'in-progress', color: 'bg-blue-500' },
    ];

    const teamMembers = [
        { name: 'Amara Okonkwo', task: 'Policy Brief Review', status: 'completed', avatar: 'AO' },
        { name: 'Tendai Moyo', task: 'Research Upload', status: 'in-progress', avatar: 'TM' },
        { name: 'Fatima El-Amin', task: 'Newsletter Draft', status: 'pending', avatar: 'FE' },
        { name: 'Kwame Asante', task: 'Document Metadata', status: 'in-progress', avatar: 'KA' },
    ];

    return (
        <div className="fade-in">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className={`text-3xl font-bold ${textClass} mb-1`}>Dashboard</h1>
                    <p className={mutedClass}>Plan, prioritize, and manage your content with ease.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-cyan text-brand-navy rounded-xl font-medium hover:bg-brand-cyan/90 transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Document
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-200'} border rounded-xl font-medium hover:opacity-80 transition-colors`}>
                        Import Data
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <StatsCard key={i} {...stat} darkMode={darkMode} />
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Analytics Chart */}
                    <div className={`${cardClass} rounded-2xl p-6 border`}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className={`text-lg font-bold ${textClass}`}>Document Analytics</h2>
                            <select className={`text-sm ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600'} border-0 rounded-lg px-3 py-2`}>
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                            </select>
                        </div>
                        {/* Chart Bars */}
                        <div className="flex items-end justify-between gap-4 h-48">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <div
                                        className={`w-full rounded-t-lg transition-all ${i === 3 ? 'bg-brand-cyan' : darkMode ? 'bg-brand-cyan/30' : 'bg-brand-navy/20'}`}
                                        style={{ height: `${[40, 55, 70, 95, 60, 45, 35][i]}%` }}
                                    >
                                        {i === 3 && (
                                            <div className="text-xs text-brand-navy font-bold text-center pt-2">74%</div>
                                        )}
                                    </div>
                                    <span className={`text-xs ${mutedClass}`}>{day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Collaboration */}
                    <div className={`${cardClass} rounded-2xl p-6 border`}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className={`text-lg font-bold ${textClass}`}>Team Collaboration</h2>
                            <button className={`text-sm ${darkMode ? 'text-brand-cyan border-brand-cyan/30' : 'text-brand-navy border-brand-navy/20'} font-medium px-3 py-1.5 border rounded-lg hover:opacity-80`}>
                                + Add Member
                            </button>
                        </div>
                        <div>
                            {teamMembers.map((member, i) => (
                                <TeamMemberItem key={i} {...member} darkMode={darkMode} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Reminders */}
                    <div className={`${cardClass} rounded-2xl p-6 border`}>
                        <h2 className={`text-lg font-bold ${textClass} mb-4`}>Reminders</h2>
                        <div className="bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-xl p-4 text-white">
                            <h3 className="font-bold mb-1">Weekly Review Meeting</h3>
                            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                                <Clock className="w-4 h-4" />
                                <span>02:00 pm - 04:00 pm</span>
                            </div>
                            <button className="flex items-center gap-2 bg-brand-cyan text-brand-navy px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-cyan/90 transition-colors">
                                <Video className="w-4 h-4" />
                                Start Meeting
                            </button>
                        </div>
                    </div>

                    {/* Pending Tasks */}
                    <div className={`${cardClass} rounded-2xl p-6 border`}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className={`text-lg font-bold ${textClass}`}>Pending Tasks</h2>
                            <button className={`text-sm ${darkMode ? 'text-brand-cyan border-brand-cyan/30' : 'text-brand-navy border-brand-navy/20'} font-medium px-3 py-1.5 border rounded-lg hover:opacity-80`}>
                                + New
                            </button>
                        </div>
                        <div>
                            {tasks.map((task, i) => (
                                <TaskItem key={i} {...task} darkMode={darkMode} />
                            ))}
                        </div>
                    </div>

                    {/* Progress Ring */}
                    <div className={`${cardClass} rounded-2xl p-6 border`}>
                        <h2 className={`text-lg font-bold ${textClass} mb-4`}>Monthly Progress</h2>
                        <div className="flex items-center justify-center">
                            <div className="relative w-36 h-36">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="72" cy="72" r="60" stroke={darkMode ? '#374151' : '#E5E7EB'} strokeWidth="12" fill="none" />
                                    <circle cx="72" cy="72" r="60" stroke="#00D1FF" strokeWidth="12" fill="none"
                                        strokeDasharray={`${0.72 * 377} 377`} strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className={`text-3xl font-bold ${textClass}`}>72%</span>
                                    <span className={`text-xs ${mutedClass}`}>Completed</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-brand-cyan"></span>
                                <span className={mutedClass}>Done</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                                <span className={mutedClass}>In Progress</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></span>
                                <span className={mutedClass}>Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
