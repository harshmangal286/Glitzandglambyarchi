import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Portfolio } from "./components/Portfolio";
import { VideoShowcase } from "./components/VideoShowcase";
import { Location } from "./components/Location";
import { Testimonials } from "./components/Testimonials";
import { InstagramFeed } from "./components/InstagramFeed";
import { FinalCTA } from "./components/FinalCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <VideoShowcase />
      <Location />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}