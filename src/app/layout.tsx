// import Nav from "./components/nav/simple";
import WithSubnavigation from "./components/nav/with-sub-nav";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WithSubnavigation />
          {/* <Nav /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
