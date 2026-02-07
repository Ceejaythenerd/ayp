import React, { useState } from 'react';
import {
    Settings as SettingsIcon, Bell, Mail, Shield,
    Database, Globe, Save, CheckCircle
} from 'lucide-react';

const Settings = () => {
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        siteName: 'Africa Youth Portal',
        siteDescription: 'Amplifying youth voices across Africa',
        adminEmail: 'admin@africayouthportal.org',
        enableNotifications: true,
        enableNewsletters: true,
        autoPublish: false,
        requireApproval: true,
        analyticsId: 'G-XXXXXXXXXX',
        mailchimpKey: '',
    });

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="fade-in max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-500">Configure your portal settings</p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-6">
                {/* General Settings */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-gray-500" />
                            <h2 className="font-bold text-gray-900">General</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                            <input
                                type="text"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                            <textarea
                                value={settings.siteDescription}
                                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none resize-none"
                                rows={2}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                            <input
                                type="email"
                                value={settings.adminEmail}
                                onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none"
                            />
                        </div>
                    </div>
                </section>

                {/* Notification Settings */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center gap-2">
                            <Bell className="w-5 h-5 text-gray-500" />
                            <h2 className="font-bold text-gray-900">Notifications</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <label className="flex items-center justify-between cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Push Notifications</p>
                                <p className="text-sm text-gray-500">Send browser push notifications for new content</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.enableNotifications}
                                onChange={(e) => setSettings({ ...settings, enableNotifications: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-brand-cyan focus:ring-brand-cyan"
                            />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Email Newsletters</p>
                                <p className="text-sm text-gray-500">Enable email newsletter distribution</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.enableNewsletters}
                                onChange={(e) => setSettings({ ...settings, enableNewsletters: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-brand-cyan focus:ring-brand-cyan"
                            />
                        </label>
                    </div>
                </section>

                {/* Content Settings */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-gray-500" />
                            <h2 className="font-bold text-gray-900">Content Moderation</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <label className="flex items-center justify-between cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Require Approval</p>
                                <p className="text-sm text-gray-500">All submissions require admin approval before publishing</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.requireApproval}
                                onChange={(e) => setSettings({ ...settings, requireApproval: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-brand-cyan focus:ring-brand-cyan"
                            />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Auto-publish Trusted Authors</p>
                                <p className="text-sm text-gray-500">Automatically publish content from verified authors</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.autoPublish}
                                onChange={(e) => setSettings({ ...settings, autoPublish: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-brand-cyan focus:ring-brand-cyan"
                            />
                        </label>
                    </div>
                </section>

                {/* Integration Settings */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center gap-2">
                            <Database className="w-5 h-5 text-gray-500" />
                            <h2 className="font-bold text-gray-900">Integrations</h2>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                            <input
                                type="text"
                                value={settings.analyticsId}
                                onChange={(e) => setSettings({ ...settings, analyticsId: e.target.value })}
                                placeholder="G-XXXXXXXXXX"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mailchimp API Key</label>
                            <input
                                type="password"
                                value={settings.mailchimpKey}
                                onChange={(e) => setSettings({ ...settings, mailchimpKey: e.target.value })}
                                placeholder="Enter your Mailchimp API key"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${saved
                            ? 'bg-green-500 text-white'
                            : 'bg-brand-navy text-white hover:bg-brand-navy/90'
                        }`}
                >
                    {saved ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save className="w-5 h-5" />
                            Save Settings
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Settings;
