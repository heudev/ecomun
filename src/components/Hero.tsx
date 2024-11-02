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
        <div className="hero min-h-screen pt-10">
            <div className="hero-content text-neutral-content text-center">
                <div className="space-y-6 md:space-y-10">
                    <div>
                        <h1 className="text-xl md:text-6xl font-bold mb-2 text-white shadow-2xl">İZMİR UNIVERSITY OF ECONOMICS</h1>
                        <h1 className="mb-5 text-2xl md:text-6xl font-bold text-white shadow-2xl">ECOMUN CONFERENCE</h1>
                    </div>
                    <div className="flex justify-center">
                        <CountdownTimer />
                    </div>
                    <h1 className="mb-5 text-2xl md:text-4xl text-white font-bold mt-5">6 - 9 February 2025</h1>
                    <div className="text-xl text-white">#feeltheaegeandifference</div>
                    <button className="btn rounded-lg text-lg bg-[#fd7706] text-white hover:bg-[#fd7706] hover:scale-110 border-0" onClick={() => handleScroll('fees')}>Apply Now!</button>
                </div>
            </div>
        </div>
    );
};