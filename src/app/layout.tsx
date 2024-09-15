const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Tsukumane</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Tsukumane. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
