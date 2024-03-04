import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-blue-500 to-blue-200 dark:bg-gradient-to-br dark:from-card-end dark:to-card-end">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
