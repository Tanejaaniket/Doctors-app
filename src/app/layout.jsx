import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Apollo 24|7 - Consult Doctors Online",
  description:
    "Book appointments, consult doctors online and manage your health with Apollo 24|7.",
  keywords: ["online doctor", "Apollo", "healthcare", "medical consultation"],
  openGraph: {
    title: "Apollo 24|7 - Online Medical Services",
    description:
      "Consult with top doctors anytime, anywhere using Apollo 24|7.",
    url: "https://www.apollo247.com",
    type: "website",
  },
  icons: {
    icon: "/apollo247.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
