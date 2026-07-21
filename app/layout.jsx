import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
