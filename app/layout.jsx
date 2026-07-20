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

export default function RootLayout({ children }) {
  // data-theme mirrors the original standalone build; script.js toggles it at runtime.
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
