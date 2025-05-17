
import Navbar from "@/components/organism/navbar";
import "./fonts.css";
import "./globals.css";
import { ApiProvider } from "@/api/providers/api-provider";
import Footer from "@/components/organism/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <ApiProvider>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </ApiProvider>
      </body>
    </html>
  );
}
