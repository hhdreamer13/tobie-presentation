import "@styles/globals.css";

export const metadata = {
  title: "Les Amis de Tobie",
  description: "Tobie Lolness",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>
        <main className=''>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
