import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahbod Hasti",
  description: "Mahbod Hasti Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
