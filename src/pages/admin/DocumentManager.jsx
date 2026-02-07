import React, { useState } from 'react';
import {
    Upload, Search, Filter, FileText, Download, Eye,
    MoreVertical, Edit, Trash2, CheckCircle, Clock, XCircle,
    Plus, ChevronDown
} from 'lucide-react';

// Mock documents data
const mockDocuments = [
    { id: 1, title: 'Youth Unemployment Policy Brief', author: 'Dr. Amara Okonkwo', category: 'Policy Brief', status: 'published', date: '2026-01-15', downloads: 2450, views: 8900 },
    { id: 2, title: 'Digital Economy Report', author: 'Fatima El-Amin', category: 'Report', status: 'published', date: '2026-01-10', downloads: 1820, views: 6200 },
    { id: 3, title: 'Climate Action Working Paper', author: 'Tendai Moyo', category: 'Working Paper', status: 'pending', date: '2026-02-05', downloads: 0, views: 45 },
    { id: 4, title: 'Education Technology Analysis', author: 'Dr. Nadia Bouazizi', category: 'Report', status: 'published', date: '2025-12-15', downloads: 3100, views: 11500 },
    { id: 5, title: 'Youth Political Participation', author: 'Oluwaseun Adeyemi', category: 'Policy Brief', status: 'draft', date: '2026-02-01', downloads: 0, views: 0 },
];

const statusColors = {
    published: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    draft: 'bg-gray-100 text-gray-600',
    rejected: 'bg-red-100 text-red-700',
};

const DocumentManager = () => {
    const [documents, setDocuments] = useState(mockDocuments);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showUploadModal, setShowUploadModal] = useState(false);

    const filteredDocs = documents.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || doc.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="fade-in">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Documents</h1>
                    <p className="text-gray-500">Manage your research repository</p>
                </div>
                <button
                    onClick={() => setShowUploadModal(true)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Upload Document
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search documents..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent outline-none flex-grow text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        {['all', 'published', 'pending', 'draft'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilterStatus(status)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${filterStatus === status
                                        ? 'bg-brand-navy text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Documents Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Document</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Stats</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredDocs.map((doc) => (
                            <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{doc.title}</p>
                                            <p className="text-sm text-gray-500">{doc.author}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{doc.category}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[doc.status]}`}>
                                        {doc.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {doc.views.toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Download className="w-4 h-4" />
                                            {doc.downloads.toLocaleString()}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">{doc.date}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-brand-cyan transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 animate-fadeIn">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Upload Document</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Document Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none"
                                    placeholder="Enter document title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan outline-none">
                                    <option>Policy Brief</option>
                                    <option>Report</option>
                                    <option>Working Paper</option>
                                    <option>Commentary</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-brand-cyan transition-colors">
                                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                                    <p className="text-sm text-gray-600 mb-1">Drop your PDF here or click to browse</p>
                                    <p className="text-xs text-gray-400">Max file size: 10MB</p>
                                    <input type="file" className="hidden" accept=".pdf" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowUploadModal(false)}
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-3 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocumentManager;
