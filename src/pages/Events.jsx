import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const sampleEvents = [
    {
        id: 1,
        title: 'Pan-African Youth Policy Summit 2026',
        date: 'March 15-17, 2026',
        time: '09:00 - 17:00 CAT',
        location: 'Kigali Convention Centre, Rwanda',
        type: 'Conference',
        description: 'Join young leaders from across Africa to discuss policy reforms and youth engagement strategies.',
        featured: true,
    },
    {
        id: 2,
        title: 'Research Writing Workshop',
        date: 'March 22, 2026',
        time: '14:00 - 16:00 CAT',
        location: 'Online (Zoom)',
        type: 'Workshop',
        description: 'Learn how to write compelling policy briefs and research papers for publication.',
        featured: false,
    },
    {
        id: 3,
        title: 'Climate Action Youth Forum',
        date: 'April 5, 2026',
        time: '10:00 - 15:00 CAT',
        location: 'University of Cape Town, South Africa',
        type: 'Forum',
        description: 'A gathering of young climate activists to share strategies and build coalitions.',
        featured: false,
    },
];

const Events = () => {
    const featuredEvent = sampleEvents.find(e => e.featured);
    const upcomingEvents = sampleEvents.filter(e => !e.featured);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
                    Events
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Connect, learn, and collaborate at our upcoming events and workshops.
                </p>
            </div>

            {/* Featured Event */}
            {featuredEvent && (
                <div className="bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-3xl p-8 md:p-12 text-white mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-navy text-sm font-bold mb-4">
                        Featured Event
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredEvent.title}</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl">{featuredEvent.description}</p>
                    <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-8">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {featuredEvent.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredEvent.time}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {featuredEvent.location}
                        </span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-cyan text-brand-navy font-bold hover:bg-brand-gold transition-colors">
                        Register Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Upcoming Events */}
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-brand-cyan/30 transition-all group"
                    >
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-brand-cyan/10 text-brand-navy">
                            {event.type}
                        </span>
                        <h4 className="text-lg font-bold text-brand-navy mt-3 mb-2 group-hover:text-brand-cyan transition-colors">
                            {event.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                        <div className="space-y-2 text-sm text-gray-500">
                            <p className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                            </p>
                        </div>
                        <button className="mt-4 flex items-center gap-2 text-brand-cyan font-medium hover:underline">
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
