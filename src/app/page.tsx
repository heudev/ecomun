import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Contact from "@/components/Contact";
import Youtube from "@/components/Youtube";
import ConferenceDays from "@/components/ConferenceDays";
import Committees from "@/components/Committees";
//import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Fees from "@/components/Fees";
import Faq from "@/components/Faq";

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
        {/* <Navbar />
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
        </div> */}

        <div className="h-screen text-white flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Coming Back Stronger Than Ever
          </h1>
          <p className="text-lg md:text-2xl mb-10 opacity-80">
            We’re rebuilding something great. Stay tuned and stay with us.
          </p>
          <hr className="w-32 border-t-2 border-white mb-6" />
          <div className="text-xl md:text-2xl font-medium tracking-wide">ECOMUN Team</div>
        </div>

      </section>
    </main>
  );
} 