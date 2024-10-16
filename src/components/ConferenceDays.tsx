interface Session {
    time: string;
    title: string;
}

interface Day {
    date: string;
    sessions: Session[];
}

const conferenceDays: Day[] = [
    {
        date: '6 February',
        sessions: [
            { time: '08:30 - 09:00', title: 'Registration' },
            { time: '09:00 - 10:30', title: 'Keynote: Future of Tech' },
            { time: '10:30 - 11:00', title: 'Networking Break' },
            { time: '11:00 - 12:30', title: 'Workshop: AI in Business' },
            { time: '12:30 - 13:30', title: 'Lunch Break' },
            { time: '13:30 - 15:00', title: 'Panel Discussion: Sustainability' },
            { time: '15:00 - 15:30', title: 'Coffee Break' },
            { time: '15:30 - 17:00', title: 'Session: Blockchain Basics' },
        ],
    },
    {
        date: '7 February',
        sessions: [
            { time: '09:00 - 10:00', title: 'Breakfast and Networking' },
            { time: '10:00 - 11:30', title: 'Session: Web Development Trends' },
            { time: '11:30 - 12:00', title: 'Coffee Break' },
            { time: '12:00 - 13:30', title: 'Workshop: Cloud Computing' },
            { time: '13:30 - 14:30', title: 'Lunch Break' },
            { time: '14:30 - 16:00', title: 'Session: Cybersecurity Essentials' },
            { time: '16:00 - 16:30', title: 'Closing Remarks' },
        ],
    },
    {
        date: '8 February',
        sessions: [
            { time: '09:00 - 09:30', title: 'Breakfast' },
            { time: '09:30 - 11:00', title: 'Workshop: UX/UI Design' },
            { time: '11:00 - 11:30', title: 'Networking Break' },
            { time: '11:30 - 13:00', title: 'Session: Mobile Development' },
            { time: '13:00 - 14:00', title: 'Lunch Break' },
            { time: '14:00 - 15:30', title: 'Panel: Women in Tech' },
            { time: '15:30 - 16:00', title: 'Farewell Coffee' },
        ],
    },
];

export default function ConferenceDays() {
    return (
        <section className="relative flex items-center py-10 lg:py-20 md:px-5">
            <div className="absolute inset-0 bg-[#fd7706] opacity-50 z-0"></div>
            <div className='p-5 flex justify-center w-full relative z-10'> {/* Added relative positioning and z-10 */}
                <div role="tablist" className="tabs tabs-lifted w-full md:w-3/5 ">
                    {conferenceDays.map((day, dayIndex) => (
                        <>
                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab text-white whitespace-nowrap"
                                aria-label={day.date}
                                defaultChecked={dayIndex === 0}
                            />
                            <div role="tabpanel" className="tab-content border-base-300  rounded-box p-6">
                                <ul className="timeline timeline-vertical">
                                    {day.sessions.map((session, sessionIndex) => (
                                        <li key={sessionIndex}>
                                            <hr />
                                            <div className="timeline-start">{session.time}</div>
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
                                            <div className="timeline-end timeline-box">{session.title}</div>
                                            <hr />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};