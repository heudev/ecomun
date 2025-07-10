import Navbar from "@/app/prime/_components/Navbar";
import Hero from "@/app/prime/_components/Hero";
import Letter from "@/app/prime/_components/Letter";
import Contact from "@/app/prime/_components/Contact";
import Youtube from "@/app/prime/_components/Youtube";
import ConferenceDays from "@/app/prime/_components/ConferenceDays";
import Committees from "@/app/prime/_components/Committees";
import Gallery from "@/app/prime/_components/Gallery";
import Fees from "@/app/prime/_components/Fees";
import Faq from "@/app/prime/_components/Faq";
import { Fade } from 'react-awesome-reveal';

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
                <Fade triggerOnce>
                    <Hero />
                </Fade>
                <div className="space-y-20 md:space-y-32">
                    <Fade triggerOnce>
                        <Letter />
                    </Fade>
                    <Fade triggerOnce>
                        <Committees />
                    </Fade>
                    <Fade triggerOnce>
                        <ConferenceDays />
                    </Fade>
                    <Fade triggerOnce>
                        <Fees />
                    </Fade>
                    <Fade triggerOnce>
                        <Gallery />
                    </Fade>
                    <Fade triggerOnce>
                        <Youtube />
                    </Fade>
                    <Fade triggerOnce>
                        <Faq />
                    </Fade>
                    <Fade triggerOnce>
                        <Contact />
                    </Fade>
                </div>
                <div className="flex justify-center pb-5 pt-5">
                    <a href="https://enes.run" target="_blank" className="italic">Developed by <span className="font-bold">Enes Uysal</span></a>
                </div>
            </section>
        </main>
    );
} 