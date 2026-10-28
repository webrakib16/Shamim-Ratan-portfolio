import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://shamim-ratan-portfolio.vercel.app'),
  title: 'Page Not Found | MD. Shamim Raton',
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="notfound-section">
        <div className="notfound-inner">
          <p className="notfound-code">404</p>
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-sub">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="neon-button notfound-btn">
            <i className="fa-solid fa-house" style={{ marginRight: '8px' }}></i>
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
