import type { Metadata } from 'next';
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';

import './globals.css';

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BYOC Example Apps Showcase",
  description: "Community apps built on the BYOC workflow runtime.",
  metadataBase: new URL("https://byoc-example-apps.vercel.app"),
  openGraph: {
    images: [{ url: "/social.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
