import "./globals.css";

export const metadata = {
  title: "JuliusAI 💙👑",
  description: "Asistente AI Julius"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <h3>Hola, soy el Rey del C# 👑, tienes alguna duda en programación? 🙂</h3>
          {children}
          <p className='lastP'>Hecho con amor por Julius 💙</p>
        </main>
      </body>
    </html>
  );
}
