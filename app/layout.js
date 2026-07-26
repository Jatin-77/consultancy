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
 
  tle: "Your Consultancy Name",
  description: "Professional consultancy services.",
  keywords: [
    "consultancy",
    "education",
    "career",
    "visa",
    "admission",
  ],
  authors: [{ name: "ADI Consultancy" }],
  openGraph: {
    title: "ADI Consultancy",
    description: "Professional consultancy services.",
    url: "https://consultancy-git-main-jatin-77s-projects.vercel.app",
    siteName: "Your Consultancy Name",
  },
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
