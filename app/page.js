import Banner from "@/components/Banner";
import Hero from "@/components/HeroBg";

export const metadata = {
  title: "Home | ADI Counsultancy",
  description:
    "Professional consultancy services for admissions, visas, and career guidance.",
};

export default function Home() {
  return (
    <div>

      <Banner />
     
         <Hero/>
         
       
    </div>
  );
}