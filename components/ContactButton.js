"use client";

import Link from "next/link";

export default function ContactButton() {
  return (
    <div>
<Link
  href="/contact"
  className="
    inline-flex
    items-center
    justify-center

    w-full
    sm:w-auto

    rounded-lg
    bg-[#C9A227]

    px-5
    py-3
    m-2

    sm:px-6
    md:px-8

    text-sm
    sm:text-base
    md:text-lg

    font-semibold
    text-[#0F2D52]

    transition-all
    duration-300
    hover:scale-105
    hover:bg-[#D4AF37]
  "
>
  Contact Us
</Link>

<Link
  href="/about"
  className="
    inline-flex
    items-center
    justify-center

    w-full
    sm:w-auto

    rounded-lg
    bg-[#C9A227]

    px-5
    py-3
    m-2

    sm:px-6
    md:px-8

    text-sm
    sm:text-base
    md:text-lg

    font-semibold
    text-[#0F2D52]

    transition-all
    duration-300
    hover:scale-105
    hover:bg-[#D4AF37]
  "
>
  About Us
</Link>
</div>
  );
}