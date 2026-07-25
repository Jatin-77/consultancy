"use client"

import { FaWhatsapp } from "react-icons/fa";

const message =
    "Hello ADI Consultancy, I would like to get a consultation regarding your services.";

const whatsappUrl = `https://wa.me/918894141200?text=${encodeURIComponent(message)}`;


export default function WhatsappButton() {
    return (
        <div>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed top-24 right-6 rounded-full bg-green-500 p-4 shadow-xl hover:scale-110 transition"
            >
                <FaWhatsapp size={30} className="text-white" />
            </a>
        </div>
    )
}