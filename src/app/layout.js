import "./globals.css";


export const metadata = {
  title: "Barber Shop",
  description: "A melhor barbearia da região",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
