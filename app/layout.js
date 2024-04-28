import "./globals.css";

export const metadata = {
  title: "AI ChatBot 🦾",
  description: "AI Asistent"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <div className="head-title">
              <h2>AI ChatBot 🦾</h2>
              <p>Hecho con amor por Julius 💙</p>
            </div>
            <div className="new-chat-button">
              <button><svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M15 12h-6" /><path d="M12 9v6" /></svg></button>
              <p>New Chat</p>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <input type="text" placeholder="Ask something ..." id="textPrompt"></input>
        </footer>
      </body>
    </html>
  );
}
