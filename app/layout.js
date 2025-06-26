import { Montserrat  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
});

export const metadata = {
  title: "Professional IT Training Institute in Bangladesh - PeopleNTech",
  description: "We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={montserrat.className}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
