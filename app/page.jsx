import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar activePage="home" />
      <Hero />
      <About />
      <Timeline />
      <Gallery mode="preview" />
      <GetInTouch />
      <Footer />
    </main>
  );
}
