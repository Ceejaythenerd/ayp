import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-brand-gold" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-gold">
                    Terms of Use
                </h1>
                <p className="text-gray-500">Last updated: February 2026</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 space-y-8">
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Acceptance of Terms</h2>
                    <p className="text-gray-600 leading-relaxed">
                        By accessing and using the Africa Youth Portal, you accept and agree to be bound by these Terms of Use.
                        If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Use of Content</h2>
                    <p className="text-gray-600 leading-relaxed">
                        All content on this platform is provided for informational and educational purposes. You may use our
                        research materials for non-commercial purposes with proper attribution to the Africa Youth Portal and
                        original authors.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">User Contributions</h2>
                    <p className="text-gray-600 leading-relaxed">
                        When you submit research or content to our platform, you grant us a non-exclusive, worldwide license
                        to publish and distribute your work under our open-access policy. You retain ownership of your
                        original work.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Prohibited Conduct</h2>
                    <p className="text-gray-600 leading-relaxed">
                        You agree not to submit plagiarized content, use the platform for commercial advertising, or engage
                        in any activity that disrupts or interferes with the proper functioning of our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Disclaimer</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The views and opinions expressed in research papers and articles are those of the individual authors
                        and do not necessarily reflect the official policy or position of SAIIA or the Mastercard Foundation.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
