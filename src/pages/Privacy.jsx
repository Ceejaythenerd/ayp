import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-brand-cyan" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
                    Privacy Policy
                </h1>
                <p className="text-gray-500">Last updated: February 2026</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 space-y-8">
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Information We Collect</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We collect information you provide directly, such as when you create an account, submit research,
                        or subscribe to our newsletter. This may include your name, email address, organization, and any
                        content you submit.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">How We Use Your Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We use the information we collect to provide, maintain, and improve our services, communicate with
                        you about research and opportunities, and ensure the security of our platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Data Security</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Your Rights</h2>
                    <p className="text-gray-600 leading-relaxed">
                        You have the right to access, correct, or delete your personal data. You may also opt out of
                        marketing communications at any time by using the unsubscribe link in our emails.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:privacy@africayouthportal.org" className="text-brand-cyan hover:underline">
                            privacy@africayouthportal.org
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
