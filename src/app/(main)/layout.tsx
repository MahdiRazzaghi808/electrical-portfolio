import { ApiProvider } from "@/api/providers/api-provider";
import Footer from "@/components/organism/footer";
import Navbar from "@/components/organism/navbar";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` text-gray-900`}>
                <ApiProvider>
                    <Navbar />
                    <div className="min-h-screen">{children}</div>
                    <Footer />
                </ApiProvider>
            </body>
        </html>
    );
}
