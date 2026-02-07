import React from 'react';
import { Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';

/**
 * ShareButtons Component
 * Displays social sharing buttons for articles and documents
 * 
 * @param {string} url - The URL to share (defaults to current page)
 * @param {string} title - The title of the content being shared
 * @param {string} description - Optional description for the content
 */
const ShareButtons = ({ url = window.location.href, title = '', description = '' }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    const shareLinks = [
        {
            name: 'Twitter',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: 'hover:bg-[#1DA1F2] hover:text-white',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'hover:bg-[#1877F2] hover:text-white',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
            color: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
            name: 'Email',
            icon: Mail,
            href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
            color: 'hover:bg-gray-700 hover:text-white',
        },
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Share:</span>
            {shareLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${link.name}`}
                    className={`w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all ${link.color}`}
                >
                    <link.icon className="w-4 h-4" />
                </a>
            ))}
            <button
                onClick={copyToClipboard}
                aria-label="Copy link"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-cyan hover:text-brand-navy transition-all"
            >
                <Link2 className="w-4 h-4" />
            </button>
        </div>
    );
};

export default ShareButtons;
