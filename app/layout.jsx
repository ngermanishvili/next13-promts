import "@styles/global.css";
import Nav from "@components/nav";
import Provider from "@components/Provider";

export const metada = {
  title: "Promtopia",
  description: "Discover & share AI Promts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
