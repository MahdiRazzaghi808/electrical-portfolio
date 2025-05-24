import { ApiProvider } from "@/api/providers/api-provider";
import "../fonts.css";
import "../globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApiProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </ApiProvider>
      </body>
    </html>
  );
} 