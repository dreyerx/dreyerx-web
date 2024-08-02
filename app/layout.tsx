import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Provider from "./providers";

import "aos/dist/aos.css"

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: false
})
export const metadata: Metadata = {
  applicationName: "DreyerX",
  title: "DreyerX Network",
  authors: [{
    "url": "https://github.com/dreyerx",
    "name": "DreyerX Labs"
  }],
  keywords: [
    "blockchain",
    "web3",
    "staking",
    "dreyerx",
    "bridge",
    "web3 project",
    "rpc",
    "dreyerx network",
    "network",
    "web3 network",
    "blockchain network",
    "blockchain platform",
    "blockchain project",
    "project blockchain",
  ],
  creator: "DreyerX Labs",
  openGraph: {
    type: "website",
    url: "https://dreyerx.com",
    title: "DreyerX Network",
    description: "Empowering transactions with speed and security on our POA-powered Layer 1 blockchain project",
    siteName: "DreyerX",
    images: [{
      url: "https://dreyerx.com/assets/images/banner.png",
      alt: "DreyerX Open Graph Image",
      width: 1920,
      height: 1080,
      type: "image/png"
    }]
  },
  description: "Empowering transactions with speed and security on our POA-powered Layer 1 blockchain project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className} style={{ scrollBehavior: 'smooth' }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
