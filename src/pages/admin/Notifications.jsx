import React, { useState } from 'react';
import {
    Bell, Send, Plus, Clock, CheckCircle, Users,
    Trash2, Edit, MoreVertical
} from 'lucide-react';

// Mock notifications data
const mockNotifications = [
    { id: 1, title: 'New Policy Brief Published', message: 'Youth Unemployment report is now available', type: 'publication', sent: '2026-02-05', recipients: 3891, status: 'sent' },
    { id: 2, title: 'Weekly Research Digest', message: 'Your weekly summary of new research', type: 'newsletter', sent: '2026-02-03', recipients: 3500, status: 'sent' },
    { id: 3, title: 'Event Reminder', message: 'Pan-African Dev Con starts tomorrow', type: 'event', sent: '2026-02-01', recipients: 1200, status: 'sent' },
    { id: 4, title: 'February Newsletter', message: 'Draft newsletter for February', type: 'newsletter', sent: null, recipients: 0, status: 'draft' },
];

const typeColors = {
    publication: 'bg-brand-cyan text-brand-navy',
    newsletter: 'bg-brand-gold text-brand-navy',
    event: 'bg-purple-100 text-purple-700',
    alert: 'bg-red-100 text-red-700',
};

const Notifications = () => {
    const [notifications, setNotifications] = useState(mockNotifications);
    const [showComposeModal, setShowComposeModal] = useState(false);

    return (
        <div className="fade-in">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
                    <p className="text-gray-500">Send alerts and newsletters to subscribers</p>
                </div>
                <button
                    onClick={() => setShowComposeModal(true)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    New Notification
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Total Sent</p>
                    <p className="text-2xl font-bold text-gray-900">{notifications.filter(n => n.status === 'sent').length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Drafts</p>
                    <p className="text-2xl font-bold text-yellow-600">{notifications.filter(n => n.status === 'draft').length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Total Recipients</p>
                    <p className="text-2xl font-bold text-brand-cyan">{notifications.reduce((sum, n) => sum + n.recipients, 0).toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Active Subscribers</p>
                    <p className="text-2xl font-bold text-green-600">3,891</p>
                </div>
            </div>

            {/* Notifications List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-900">Recent Notifications</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    {notifications.map((notif) => (
                        <div key={notif.id} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center shrink-0">
                                    <Bell className="w-5 h-5 text-brand-navy" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-medium text-gray-900">{notif.title}</h3>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[notif.type]}`}>
                                            {notif.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">{notif.message}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                        {notif.status === 'sent' ? (
                                            <>
                                                <span className="flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    Sent {notif.sent}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-3 h-3" />
                                                    {notif.recipients.toLocaleString()} recipients
                                                </span>
                                            </>
                                        ) : (
                                            <span className="flex items-center gap-1 text-yellow-600">
                                                <Clock className="w-3 h-3" />
                                                Draft
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {notif.status === 'draft' && (
                                        <button className="px-3 py-1.5 rounded-lg bg-brand-cyan text-brand-navy text-sm font-medium hover:bg-brand-cyan/80 transition-colors">
                                            Send
                                        </button>
                                    )}
                                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compose Modal */}
            {showComposeModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 animate-fadeIn">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">New Notification</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none">
                                    <option>Publication Alert</option>
                                    <option>Newsletter</option>
                                    <option>Event Reminder</option>
                                    <option>General Alert</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none"
                                    placeholder="Notification title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none resize-none"
                                    rows={4}
                                    placeholder="Write your notification message..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
                                <div className="flex gap-2">
                                    <button className="flex-1 px-4 py-2 rounded-xl border border-brand-cyan bg-brand-cyan/10 text-brand-navy text-sm font-medium">
                                        All Subscribers
                                    </button>
                                    <button className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
                                        Select Groups
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowComposeModal(false)}
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors">
                                Save Draft
                            </button>
                            <button className="flex-1 px-4 py-3 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                Send Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
