import React, { useState } from 'react';
import { Upload, FileText, User, Mail, Building, Tag, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const Contribute = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        title: '',
        abstract: '',
        category: '',
        file: null,
        agreeTerms: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const categories = [
        'Policy Brief',
        'Working Paper',
        'Report',
        'Opinion/Commentary',
        'Research Article',
        'Other',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    if (submitted) {
        return (
            <div className="max-w-xl mx-auto px-4 py-20 text-center fade-in">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-brand-navy mb-4">Submission Received!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for contributing to the Africa Youth Portal. Our team will review your submission and get back to you within 5-7 business days.
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
        <div className="max-w-3xl mx-auto px-4 py-12 fade-in">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
                    Submit Your Research
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Share your work with the Africa Youth Portal community. All submissions are reviewed by our editorial team.
                </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-brand-navy text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                            {s}
                        </div>
                        {s < 3 && (
                            <div className={`w-16 h-1 rounded-full transition-all ${step > s ? 'bg-brand-cyan' : 'bg-gray-200'
                                }`} />
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                {/* Step 1: Author Information */}
                {step === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-brand-cyan" />
                            Author Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Affiliation</label>
                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="University, NGO, or Independent"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Document Details */}
                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-brand-cyan" />
                            Document Details
                        </h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Document Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Abstract *</label>
                            <textarea
                                name="abstract"
                                value={formData.abstract}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Provide a brief summary of your research (150-300 words)"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none cursor-pointer"
                            >
                                <option value="">Select a category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                {/* Step 3: File Upload & Confirmation */}
                {step === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-brand-cyan" />
                            Upload & Confirm
                        </h2>

                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-brand-cyan transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">
                                {formData.file ? formData.file.name : 'Drop your PDF here or click to browse'}
                            </p>
                            <input
                                type="file"
                                name="file"
                                accept=".pdf"
                                onChange={handleChange}
                                className="hidden"
                                id="fileUpload"
                            />
                            <label
                                htmlFor="fileUpload"
                                className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                            >
                                Choose File
                            </label>
                            <p className="text-xs text-gray-400 mt-2">PDF only, max 10MB</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-navy focus:ring-brand-cyan"
                                />
                                <span className="text-sm text-gray-600">
                                    I confirm that this is my original work and I grant Africa Youth Portal the right to publish it under our open-access policy. I agree to the <a href="/terms" className="text-brand-cyan underline">Terms of Service</a> and <a href="/privacy" className="text-brand-cyan underline">Privacy Policy</a>.
                                </span>
                            </label>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Previous
                        </button>
                    ) : (
                        <div />
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors"
                        >
                            Next
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={!formData.agreeTerms}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-brand-cyan text-brand-navy font-bold hover:bg-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Submit Research
                            <CheckCircle className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </form>

            {/* Submission Guidelines */}
            <div className="mt-8 p-6 bg-brand-gold/10 rounded-2xl">
                <h3 className="font-bold text-brand-navy mb-2">Submission Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All submissions must be original work</li>
                    <li>• Documents should be in PDF format, maximum 10MB</li>
                    <li>• Include a clear abstract (150-300 words)</li>
                    <li>• Review process takes 5-7 business days</li>
                </ul>
            </div>
        </div>
    );
};

export default Contribute;
