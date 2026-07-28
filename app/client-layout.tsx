import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="w-full min-h-screen grow">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
