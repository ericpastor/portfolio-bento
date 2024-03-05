import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Eric Pastor",
  description: "Portfolio",
  icons: {
    icon: "/logoicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[url('/fondo-marino.svg')] dark:bg-gradient-to-br dark:from-card-end dark:to-card-end">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
