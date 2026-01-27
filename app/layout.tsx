import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okenrenkporo Godswill | Full Stack Developer",
  description: "Portfolio of Okenrenkporo Godswill - Full Stack Developer specialized in React, Next.js, and Node.js.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Okenrenkporo Godswill"],
  authors: [{ name: "Okenrenkporo Godswill" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
