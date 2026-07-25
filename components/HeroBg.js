import Image from "next/image";
import ContactButton from "@/components/ContactButton";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/images/consultancy.jpeg"
        alt="Financial Consultancy"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F2D52]/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-[#F8F6F2] sm:text-5xl md:text-6xl lg:text-7xl">
          Secure Your Financial Future
        </h1>

        <div className="mt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}