import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mateo López | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="px-6 md:px-20">{children}</main>
      </body>
    </html>
  );
}
