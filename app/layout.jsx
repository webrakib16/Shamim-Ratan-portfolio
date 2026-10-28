import './globals.css';
import './notfound.css';

export const metadata = {
  metadataBase: new URL('https://shamim-ratan-portfolio.vercel.app'),
  title: 'MD. Shamim Raton Portfolio | Lecturer, Rajshahi College',
  description: 'Official academic and teaching portfolio of MD. Shamim Raton, Lecturer in Chemistry at Rajshahi College (36th BCS Education Cadre).',
  icons: {
    icon: '/assets/download.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://shamim-ratan-portfolio.vercel.app',
    siteName: 'MD. Shamim Raton Portfolio',
    title: 'MD. Shamim Raton Portfolio | Lecturer, Rajshahi College',
    description:
      'Academic and teaching portfolio of MD. Shamim Raton, Lecturer in Chemistry at Rajshahi College. Education Journey, Gallery, Research, and contact.',
    locale: 'en_US',
    images: [
      {
        url: '/assets/profile (1).png',
        width: 512,
        height: 512,
        alt: 'MD. Shamim Raton',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'MD. Shamim Raton Portfolio | Lecturer, Rajshahi College',
    description:
      'Academic and teaching portfolio of MD. Shamim Raton, Lecturer in Chemistry at Rajshahi College.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
