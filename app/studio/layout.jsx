export const metadata = {
  title: "Sudarva Studio",
  description: "Write and publish Insights for the Sudarva website.",
};

// Minimal layout — don't wrap Studio in the marketing site chrome.
export default function StudioLayout({ children }) {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", overflow: "auto" }}>
      {children}
    </div>
  );
}
