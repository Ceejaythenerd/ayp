import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BottomNav from '../components/common/BottomNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="min-h-screen text-gray-900 bg-slate-50 relative selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden font-sans">

            {/* Gradient Background Blobs - Global */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-brand-navy/10 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <Header />

            <main className="pb-8">
                <Outlet />
            </main>

            <Footer />

            <BottomNav />

        </div>
    );
};

export default MainLayout;
