import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";
import Youtube from "@/components/Youtube";
import ConferenceDays from "@/components/ConferenceDays";
import Committees from "@/components/Committees";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Fees from "@/components/Fees";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://cdn.yenicaggazetesi.com.tr/news/860590.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 ">
        <Navbar />
        <Hero />
        <div className="md:space-y-20">
          <Letter />
          <Committees />
          <ConferenceDays />
          <Fees />
          <Team />
          <Youtube />
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
};