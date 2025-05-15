import React, { useState } from "react";
import "../styleCss/upcomingEvents.css";

type Event = {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
    registerLink: string; // URL for registration
    calendarLink: string; // URL for adding to calendar
    learnMoreLink: string; // URL for more information
};

const events: Event[] = [
    {
        id: 1,
        name: "Community Recycling Drive",
        date: "20 May",
        time: "10:00 AM",
        location: "Central Park, Bucharest",
        description: "Join us for a community recycling drive to help reduce waste and promote sustainability.",
        registerLink: "https://example.com/register",
        calendarLink: "https://example.com/calendar",
        learnMoreLink: "https://example.com/learn-more",
    },
    {
        id: 2,
        name: "Sustainability Workshop",
        date: "05 June",
        time: "2:00 PM",
        location: "Eco Center, Cluj-Napoca",
        description: "Learn practical tips for living sustainably and reducing your environmental footprint.",
        registerLink: "https://example.com/register",
        calendarLink: "https://example.com/calendar",
        learnMoreLink: "https://example.com/learn-more",
    },
    {
        id: 3,
        name: "Beach Cleanup Campaign",
        date: "15 June",
        time: "9:00 AM",
        location: "Constanța Beach",
        description: "Join us in cleaning up the beach and protecting marine life from plastic pollution.",
        registerLink: "https://example.com/register",
        calendarLink: "https://example.com/calendar",
        learnMoreLink: "https://example.com/learn-more",
    },
];

const UpcomingEvents: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <div className="events-section">
            <h2 className="events-title">Upcoming Events</h2>
            <div className="events-container">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-date-time">
                            <p className="event-date">{event.date}</p>
                            <p className="event-time">{event.time}</p>
                        </div>
                        <div className="event-details">
                            <h3 className="event-name">{event.name}</h3>
                            <p className="event-description">{event.description}</p>
                        </div>
                        <div className="event-action">
                            <button
                                className="event-action-button"
                                onClick={() => toggleDropdown(event.id)}
                            >
                                Options
                                <span className="arrow-icon">→</span>
                            </button>
                            {activeDropdown === event.id && (
                                <div className="dropdown-menu">
                                    <a
                                        href={event.registerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-item"
                                    >
                                        Register <span className="dropdown-arrow-icon">→</span>
                                    </a>
                                    <a
                                        href={event.calendarLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-item"
                                    >
                                        Add to Calendar <span className="dropdown-arrow-icon">→</span>
                                    </a>
                                    <a
                                        href={event.learnMoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-item"
                                    >
                                        Learn More <span className="dropdown-arrow-icon">→</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;
