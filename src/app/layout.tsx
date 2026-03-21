import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoverads - Drone Aerial Advertising & Light Shows",
  description: "Dominate the skyline with massive flying billboards and mesmerising drone light shows.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
