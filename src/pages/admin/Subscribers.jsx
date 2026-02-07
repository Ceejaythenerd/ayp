import React, { useState } from 'react';
import {
    Users, Search, Mail, Download, Trash2,
    CheckCircle, XCircle, Filter, MoreVertical
} from 'lucide-react';

// Mock subscribers data
const mockSubscribers = [
    { id: 1, email: 'amara.okonkwo@example.com', name: 'Amara Okonkwo', date: '2026-01-15', status: 'active', interests: ['Policy', 'Economics'] },
    { id: 2, email: 'tendai.moyo@example.com', name: 'Tendai Moyo', date: '2026-01-10', status: 'active', interests: ['Climate', 'Activism'] },
    { id: 3, email: 'fatima.elamin@example.com', name: 'Fatima El-Amin', date: '2026-01-08', status: 'active', interests: ['Technology', 'Education'] },
    { id: 4, email: 'kwame.asante@example.com', name: 'Kwame Asante', date: '2026-01-05', status: 'unsubscribed', interests: ['Technology'] },
    { id: 5, email: 'chioma.eze@example.com', name: 'Chioma Eze', date: '2026-01-01', status: 'active', interests: ['Culture', 'Media'] },
];

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState(mockSubscribers);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);

    const filteredSubscribers = subscribers.filter(sub =>
        sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeCount = subscribers.filter(s => s.status === 'active').length;

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredSubscribers.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredSubscribers.map(s => s.id));
        }
    };

    return (
        <div className="fade-in">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscribers</h1>
                    <p className="text-gray-500">{activeCount} active subscribers</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors">
                        <Mail className="w-4 h-4" />
                        Send Newsletter
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Total Subscribers</p>
                    <p className="text-2xl font-bold text-gray-900">{subscribers.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Active</p>
                    <p className="text-2xl font-bold text-green-600">{activeCount}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Unsubscribed</p>
                    <p className="text-2xl font-bold text-gray-400">{subscribers.length - activeCount}</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-6">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search subscribers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent outline-none flex-grow text-sm"
                    />
                </div>
            </div>

            {/* Subscribers Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4">
                                <input
                                    type="checkbox"
                                    checked={selectedIds.length === filteredSubscribers.length && filteredSubscribers.length > 0}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4 rounded border-gray-300"
                                />
                            </th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subscriber</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Interests</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subscribed</th>
                            <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredSubscribers.map((sub) => (
                            <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(sub.id)}
                                        onChange={() => {
                                            setSelectedIds(prev =>
                                                prev.includes(sub.id)
                                                    ? prev.filter(id => id !== sub.id)
                                                    : [...prev, sub.id]
                                            );
                                        }}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium text-gray-900">{sub.name}</p>
                                        <p className="text-sm text-gray-500">{sub.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-1 flex-wrap">
                                        {sub.interests.map((interest, i) => (
                                            <span key={i} className="px-2 py-1 rounded-full bg-brand-cyan/10 text-brand-navy text-xs font-medium">
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-1 text-sm ${sub.status === 'active' ? 'text-green-600' : 'text-gray-400'
                                        }`}>
                                        {sub.status === 'active' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                        {sub.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">{sub.date}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscribers;
