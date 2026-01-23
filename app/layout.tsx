import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xscade - Digital Marketing & Software",
  description: "Professional digital marketing and software development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
