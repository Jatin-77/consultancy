import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  verification:{
    google: "jLRAJyk4GDm_aqKxtgL3M5GWiYuvZkw37AoVHT7UNgc"
  },
  title: "Adi Consultancy",
  description: "ADI Consultancy is your trusted partner for accounting, GST filing, TDS compliance, income tax services, bookkeeping, and business consulting. Serving individuals and businesses with reliable financial solutions.",
  icons:{
    icon: "/logo.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={poppins.className}
    >
     
      <body className="min-h-full flex flex-col" >
        <Navbar/>
        {children}
       <WhatsappButton/>
        </body>
    </html>
  );
}
