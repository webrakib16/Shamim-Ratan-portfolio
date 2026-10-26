import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gallery | MD. Shamim Raton',
  description: 'Academic memories, teaching moments, tours, and milestones of MD. Shamim Raton at Rajshahi College.',
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar activePage="gallery" />
      <Gallery mode="full" />
      <GetInTouch />
      <Footer />
    </main>
  );
}
