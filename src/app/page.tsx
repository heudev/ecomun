import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";
import Youtube from "@/components/Youtube";
import ConferenceDays from "@/components/ConferenceDays";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Letter />
      <ConferenceDays />
      <Youtube />
      <Footer />
    </>
  );
}
