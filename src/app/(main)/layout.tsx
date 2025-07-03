import { ApiProvider } from "@/api/providers/api-provider";
import Footer from "@/components/organism/footer";
import Navbar from "@/components/organism/navbar";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>

    );
}
