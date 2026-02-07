import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="max-w-xl mx-auto px-4 py-20 text-center fade-in">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-brand-navy mb-4">Message Sent!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We'll get back to you within 2-3 business days.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors"
                >
                    Return Home
                </a>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-gold to-brand-cyan">
                    Contact Us
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Have questions or want to collaborate? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-brand-cyan" />
                        </div>
                        <h3 className="font-bold text-brand-navy mb-2">Email</h3>
                        <a href="mailto:info@africayouthportal.org" className="text-gray-600 hover:text-brand-cyan transition-colors">
                            info@africayouthportal.org
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-brand-gold" />
                        </div>
                        <h3 className="font-bold text-brand-navy mb-2">Address</h3>
                        <p className="text-gray-600">
                            SAIIA, Jan Smuts House<br />
                            East Campus, University of the Witwatersrand<br />
                            Johannesburg, South Africa
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6 text-brand-navy" />
                        </div>
                        <h3 className="font-bold text-brand-navy mb-2">Phone</h3>
                        <a href="tel:+27117143000" className="text-gray-600 hover:text-brand-cyan transition-colors">
                            +27 11 714 3000
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
