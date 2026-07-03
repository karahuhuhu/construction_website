import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Philosophy from "@/components/Philosophy";
import Studio from "@/components/Studio";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Philosophy />
        <Studio />
        <News />
      </main>
      <Footer />
    </>
  );
}
