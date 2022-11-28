import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-slate-800">{children}</body>
    </html>
  );
}
