import CountdownTimer from "./Countdown";

export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://cdn.yenicaggazetesi.com.tr/news/860590.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div>
                    <h1 className="text-xl md:text-6xl font-bold mb-2 text-white shadow-2xl shadow-[#fd7706]">İZMİR UNIVERSITY OF ECONOMICS</h1>
                    <h1 className="mb-5 text-2xl md:text-6xl font-bold text-white shadow-2xl">ANNUAL CONFERENCE</h1>
                    <div className="flex justify-center ">
                        <CountdownTimer />
                    </div>
                    <h1 className="mb-5 text-4xl text-white font-bold mt-5 underline italic">6 - 9 FEBRUARY</h1>
                    <button className="btn btn-lg rounded-full bg-[#fd7706] text-white hover:bg-[#fd7706] glass">Apply Now!</button>
                </div>
            </div>
        </div>
    );
};