import type { Metadata, Viewport } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const comic = Comic_Neue({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anandhu A S",
  description: "Anandhu A S — Frontend developer, writer, and tech enthusiast.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${comic.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} suppressHydrationWarning />
        {children}
      </body>
    </html>
  );
}
