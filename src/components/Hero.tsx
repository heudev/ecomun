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
                <div className="">
                    <h1 className="text-6xl font-bold mb-2">İZMİR UNIVERSITY OF ECONOMICS</h1>
                    <h1 className="mb-5 text-6xl font-bold">ANNUAL CONFERENCE</h1>
                    <div className="flex justify-center">
                        <CountdownTimer />
                    </div>
                    <h1 className="mb-5 text-4xl font-bold mt-5">6 - 9 FEBRUARY</h1>
                    <button className="btn btn-lg rounded-full bg-[#fd7706] text-white">Apply Now!</button>
                </div>
            </div>
        </div>
    )
}
