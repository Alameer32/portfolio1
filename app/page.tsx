import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedYalla from "@/components/sections/FeaturedYalla";
import FeaturedTeleperformance from "@/components/sections/FeaturedTeleperformance";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
// Certifications section is hidden for now — re-enable by restoring the import,
// the <Certifications /> render below, and the nav link in components/layout/Nav.tsx.
// import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <FeaturedYalla />
        <FeaturedTeleperformance />
        <ProjectsGrid />
        <About />
        <Experience />
        {/* <Certifications /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
