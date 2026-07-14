import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans [scrollbar-gutter:stable]", inter.variable)}>
      <body>
        <div>
          <header>

          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
