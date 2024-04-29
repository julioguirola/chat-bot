import "./globals.css";

export const metadata = {
  title: "AI ChatBot 🦾",
  description: "AI Asistent"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
