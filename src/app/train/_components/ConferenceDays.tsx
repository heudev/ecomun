"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Session = {
    time: string;
    title: string;
};

type Day = {
    date: string;
    sessions: Session[];
};

const conferenceDays: Day[] = [
    {
        date: '06.02.2025',
        sessions: [
            { time: '10:00 - 11:50', title: 'Registration' },
            { time: '12:00 - 13:30', title: 'Opening Ceremony' },
            { time: '13:30 - 14:00', title: 'Coffee Break' },
            { time: '14:00 - 15:20', title: 'First Session' },
            { time: '15:20 - 15:35', title: 'Coffee Break' },
            { time: '15:35 - 16:55', title: 'Second Session' },
        ],
    },
    {
        date: '07.02.2025',
        sessions: [
            { time: '10:00 - 11:20', title: 'Third Session' },
            { time: '11:20 - 11:50', title: 'Coffee Break' },
            { time: '11:50 - 13:10', title: 'Fourth Session' },
            { time: '13:10 - 14:40', title: 'Lunch Break' },
            { time: '14:40 - 16:00', title: 'Fifth Session' },
            { time: '16:00 - 16:15', title: 'Coffee Break' },
            { time: '16:15 - 17:35', title: 'Sixth Session' },
        ],
    },
    {
        date: '08.02.2025',
        sessions: [
            { time: '10:00 - 11:20', title: 'Seventh Session' },
            { time: '11:20 - 11:50', title: 'Coffee Break' },
            { time: '11:50 - 13:10', title: 'Eighth Session' },
            { time: '13:10 - 14:40', title: 'Lunch Break' },
            { time: '14:40 - 16:00', title: 'Ninth Session' },
            { time: '16:00 - 16:15', title: 'Coffee Break' },
            { time: '16:15 - 17:35', title: 'Tenth Session' },
            { time: '17:35 - 17:50', title: 'Coffee Break' },
            { time: '17:50 - 19:10', title: 'Eleventh Session' },
        ],
    },
    {
        date: '09.02.2025',
        sessions: [
            { time: '10:00 - 11:20', title: 'Twelfth Session' },
            { time: '11:20 - 11:50', title: 'Coffee Break' },
            { time: '11:50 - 13:10', title: 'Thirteenth Session' },
            { time: '13:10 - 13:25', title: 'Coffee Break' },
            { time: '13:25 - 14:45', title: 'Fourteenth Session' },
            { time: '14:45 - 15:00', title: 'Coffee Break' },
            { time: '15:00 - 17:00', title: 'Closing Ceremony' },
        ],
    },
];

const ConferenceSchedule: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState(conferenceDays[0].date);

    const handleDayChange = (day: string) => {
        setSelectedDay(day);
    };

    const selectedSessions = conferenceDays.find(day => day.date === selectedDay)?.sessions || [];

    return (
        <div id='schedule'>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center text-white">
                Schedule
            </h1>
            <div role="tablist" className="tabs tabs-boxed mb-5 bg-[#0f216d] flex flex-col md:flex-row justify-center w-72 md:w-full max-w-2xl mx-auto mt-10">
                {conferenceDays.map(day => (
                    <a
                        key={day.date}
                        onClick={() => handleDayChange(day.date)}
                        role="tab"
                        className={`tab ${selectedDay === day.date ? 'bg-[#fd7706]' : ''} w-full font-bold text-lg text-white`}
                    >
                        {day.date}
                    </a>
                ))}
            </div>

            <AnimatePresence mode='wait'>
                <motion.ul
                    key={selectedDay}
                    className="timeline timeline-snap-icon timeline-vertical text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {selectedSessions.map((session, index) => (
                        <li key={session.time}>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={`${index % 2 === 0 ? "timeline-start text-end" : "timeline-end text-start"}`}>
                                <time className="text-lg bg-[#0f216d] text-white rounded-lg p-1.5">{session.time}</time>
                                <div className="text-lg font-black">{session.title}</div>
                            </div>
                            <hr className='bg-gray-100' />
                        </li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </div>
    );
};

export default ConferenceSchedule;