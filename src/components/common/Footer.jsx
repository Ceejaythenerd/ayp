import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Linkedin, Youtube, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        resources: [
            { label: 'Research Repository', to: '/research' },
            { label: 'Youth Voices', to: '/voices' },
            { label: 'Events', to: '/events' },
            { label: 'Publications', to: '/research' },
        ],
        about: [
            { label: 'Our Mission', to: '/about' },
            { label: 'Team', to: '/about#team' },
            { label: 'Partners', to: '/about#partners' },
            { label: 'Careers', to: '/careers' },
        ],
        connect: [
            { label: 'Contact Us', to: '/contact' },
            { label: 'Submit Research', to: '/contribute' },
            { label: 'Newsletter', to: '/#newsletter' },
            { label: 'Media Kit', to: '/media' },
        ],
    };

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com/africayouthportal', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/company/africayouthportal', label: 'LinkedIn' },
        { icon: Youtube, href: 'https://youtube.com/@africayouthportal', label: 'YouTube' },
        { icon: Instagram, href: 'https://instagram.com/africayouthportal', label: 'Instagram' },
    ];

    return (
        <footer className="bg-brand-navy text-white mt-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <img
                            src="/assets/logo.png"
                            alt="Africa Youth Portal"
                            className="h-16 w-auto mb-6 brightness-0 invert"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                            Amplifying youth voices across Africa through research, analysis, and community.
                            A platform by SAIIA with support from the Mastercard Foundation.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="font-bold text-brand-gold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-gray-300 hover:text-brand-cyan text-sm transition-colors"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Column */}
                    <div>
                        <h3 className="font-bold text-brand-gold mb-4">About</h3>
                        <ul className="space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-gray-300 hover:text-brand-cyan text-sm transition-colors"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="font-bold text-brand-gold mb-4">Connect</h3>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-gray-300 hover:text-brand-cyan text-sm transition-colors"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Partner Logos */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <p className="text-gray-400 text-xs mb-4 text-center">Supported by</p>
                    <div className="flex justify-center items-center gap-12 opacity-60">
                        {/* Placeholder for partner logos - replace with actual images */}
                        <div className="h-8 px-4 bg-white/20 rounded flex items-center text-xs">SAIIA</div>
                        <div className="h-8 px-4 bg-white/20 rounded flex items-center text-xs">Mastercard Foundation</div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} Africa Youth Portal. All rights reserved.</p>
                    <div className="flex gap-6">
                        <NavLink to="/privacy" className="hover:text-brand-cyan transition-colors">Privacy Policy</NavLink>
                        <NavLink to="/terms" className="hover:text-brand-cyan transition-colors">Terms of Use</NavLink>
                        <NavLink to="/accessibility" className="hover:text-brand-cyan transition-colors">Accessibility</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
