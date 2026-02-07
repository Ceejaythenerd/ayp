import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

/**
 * LanguageSelector Component
 * Custom-styled dropdown that interfaces with Google Translate to change website text
 */

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'zu', name: 'isiZulu', flag: '🇿🇦' },
];

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [isTranslateReady, setIsTranslateReady] = useState(false);
    const dropdownRef = useRef(null);

    // Check if Google Translate is loaded
    useEffect(() => {
        const checkTranslate = () => {
            if (window.google && window.google.translate) {
                setIsTranslateReady(true);
            }
        };

        // Check immediately and then periodically
        checkTranslate();
        const interval = setInterval(checkTranslate, 1000);

        // Stop checking after 10 seconds
        setTimeout(() => clearInterval(interval), 10000);

        return () => clearInterval(interval);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);

        // Method 1: Try using the Google Translate combo box
        const googleCombo = document.querySelector('.goog-te-combo');
        if (googleCombo) {
            googleCombo.value = lang.code;
            googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
            return;
        }

        // Method 2: Use cookie-based translation
        // Google Translate uses a cookie to store the language preference
        const domain = window.location.hostname;
        document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/${lang.code}; path=/`;

        // Method 3: Try calling the translate function directly
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
            try {
                // Reload to apply translation
                if (lang.code !== 'en') {
                    window.location.reload();
                } else {
                    // Reset to English - clear cookies and reload
                    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    window.location.reload();
                }
            } catch (e) {
                console.log('Translation applied via cookie');
            }
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Hidden Google Translate element - required for the API to work */}
            <div id="google_translate_element" className="hidden absolute"></div>

            {/* Custom Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 hover:bg-white border border-gray-200 hover:border-brand-cyan transition-all group"
                aria-label="Select language"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <Globe className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan transition-colors" />
                <span className="text-sm font-medium text-gray-700">{selectedLang.flag}</span>
                <span className="hidden sm:inline text-sm text-gray-600">{selectedLang.name}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn"
                    role="listbox"
                    aria-label="Language selection"
                >
                    <div className="p-2">
                        <p className="px-3 py-2 text-xs text-gray-400 uppercase tracking-wider">Translate to</p>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${selectedLang.code === lang.code
                                        ? 'bg-brand-cyan/10 text-brand-navy'
                                        : 'hover:bg-gray-50 text-gray-700'
                                    }`}
                                role="option"
                                aria-selected={selectedLang.code === lang.code}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span className="text-sm font-medium flex-grow">{lang.name}</span>
                                {selectedLang.code === lang.code && (
                                    <Check className="w-4 h-4 text-brand-cyan" />
                                )}
                            </button>
                        ))}
                    </div>
                    {!isTranslateReady && (
                        <div className="px-3 py-2 bg-yellow-50 text-xs text-yellow-700 border-t border-yellow-100">
                            Translation loading...
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
