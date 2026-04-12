import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hoverads - Drone Aerial Advertising & Light Shows",
  description: "Deploy huge digital billboards in the sky with mesmerizing drone light shows, aerial displays, and elite digital marketing campaigns.",
  keywords: ["Drone Advertising", "Aerial Advertising", "Light Shows", "Digital Billboard", "Sky Advertising", "Digital Marketing"],
  openGraph: {
    title: "Hover Ads - The Sky is the New Billboard",
    description: "Deploy huge digital billboards in the sky with mesmerizing drone light shows.",
    url: "https://hoverads.in",
    siteName: "Hover Ads",
    images: [{ url: "/logo.png" }],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hover Ads",
    "url": "https://hoverads.in",
    "logo": "https://hoverads.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7981382598",
      "contactType": "customer service",
      "email": "contact@hoverads.in"
    },
    "sameAs": [
      "https://instagram.com/hover.ads",
      "https://facebook.com/hoverads",
      "https://threads.net/@hover.ads",
      "https://youtube.com/@hoverads",
      "https://x.com/hoveradsin",
      "https://linkedin.com/company/hoverads"
    ]
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-black text-white" suppressHydrationWarning>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
