import Navbar from '@/components/Navbar';
import Research from '@/components/Research';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://shamim-ratan-portfolio.vercel.app'),
  title: 'Research & Academic Interests | MD. Shamim Raton',
  description: 'Research philosophy, academic interests, chemistry education, and mentoring by MD. Shamim Raton.',
};

export default function ResearchPage() {
  return (
    <main>
      <Navbar activePage="research" />
      <Research />
      <GetInTouch />
      <Footer />
    </main>
  );
}
