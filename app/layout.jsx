import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./styles/site.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Sudarva — Beyond the network",
  description:
    "Sudarva is the technology infrastructure that connects travel businesses, partners and travellers across Asia and beyond.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/** Runs before paint so a saved dark theme does not flash white on refresh. */
const themeInitScript = `(function(){try{var t=localStorage.getItem('sudarva-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}document.documentElement.classList.add('theme-booting');})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
