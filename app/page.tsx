import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Footer />
      {/* About, Services, Projects, Testimonials, Team, Blog go here */}
    </main>
  );
}