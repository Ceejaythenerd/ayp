import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main Layout & Pages
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Research from './pages/Research';
import Voices from './pages/Voices';
import Contribute from './pages/Contribute';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Careers from './pages/Careers';
import Accessibility from './pages/Accessibility';

// Admin Layout & Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import DocumentManager from './pages/admin/DocumentManager';
import Subscribers from './pages/admin/Subscribers';
import Notifications from './pages/admin/Notifications';
import Settings from './pages/admin/Settings';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="research" element={<Research />} />
                    <Route path="voices" element={<Voices />} />
                    <Route path="contribute" element={<Contribute />} />
                    <Route path="about" element={<About />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="events" element={<Events />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="accessibility" element={<Accessibility />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="documents" element={<DocumentManager />} />
                    <Route path="users" element={<Subscribers />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

