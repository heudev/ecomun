import Navbar from "@/app/train/_components/Navbar";
import Hero from "@/app/train/_components/Hero";
import Letter from "@/app/train/_components/Letter";
import Contact from "@/app/train/_components/Contact";
import Youtube from "@/app/train/_components/Youtube";
import ConferenceDays from "@/app/train/_components/ConferenceDays";
import Committees from "@/app/train/_components/Committees";
import Gallery from "@/app/train/_components/Gallery";
import Fees from "@/app/train/_components/Fees";
import Faq from "@/app/train/_components/Faq";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden text-white">
            <div
                aria-hidden="true"
                className="fixed inset-0 bg-center bg-cover bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('/images/backgrounds/campus.jpg')`,
                    height: '100vh',
                }}
            ></div>
            <div className="fixed inset-0 bg-black opacity-65 z-10"></div>
            <section className="relative z-20">
                <Navbar />
                <Hero />
                <div className="space-y-20 md:space-y-32">
                    <Letter />
                    <Committees />
                    <ConferenceDays />
                    <Fees />
                    <Gallery />
                    <Youtube />
                    <Faq />
                    <Contact />
                </div>
                <div className="flex justify-center pb-5 pt-5">
                    <a href="https://enes.run" target="_blank" className="italic">Developed by <span className="font-bold">Enes Uysal</span></a>
                </div>
            </section>
        </main>
    );
} 