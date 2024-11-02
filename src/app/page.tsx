import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";
//import Youtube from "@/components/Youtube";
import ConferenceDays from "@/components/ConferenceDays";
import Committees from "@/components/Committees";
//import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Fees from "@/components/Fees";

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
          {/* <Team /> */}
          {/* <Youtube /> */}
          <Gallery />
          <Footer />
        </div>
      </section>
    </main>
  );
} 