"use client";
import CountdownTimer from "./Countdown";

export default function Hero() {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="hero min-h-screen">
            <div className="hero-content text-neutral-content text-center">
                <div className="space-y-16">
                    <div>
                        <h1 className="text-xl md:text-6xl font-bold mb-2 text-white shadow-2xl">İZMİR UNIVERSITY OF ECONOMICS</h1>
                        <h1 className="mb-5 text-2xl md:text-6xl font-bold text-white shadow-2xl">ECOMUN CONFERENCE</h1>
                    </div>
                    <div className="flex justify-center">
                        <CountdownTimer />
                    </div>
                    <h1 className="mb-5 text-2xl md:text-4xl text-white font-bold mt-5">6 - 9 February 2025</h1>
                    <button className="btn rounded-lg text-lg bg-[#fd7706] text-white hover:bg-[#fd7706] hover:scale-110" onClick={() => handleScroll('fees')}>Apply Now!</button>
                </div>
            </div>
        </div>
    );
};