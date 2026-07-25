"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";


export default function ContactPage() {

    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            if (!navigator.onLine) {
                setStatus({
                    type: "error",
                    message: "No internet connection. Please check your network and try again.",
                });
                setLoading(false);
                return;
            }

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message: "Your inquiry has been sent successfully!",
            });

            setTimeout(() => {
                setStatus({
                    type: "",
                    message: "",
                });
            }, 5000);

            form.current.reset();
        } catch (error) {
            console.error(error);

            setStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#F8F6F2] min-h-screen">

            {/* Hero */}
            <section className="bg-[#0F2D52] py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-[#C9A227] font-semibold uppercase tracking-[0.2em]">
                        Contact Us
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">
                        We'd Love to Hear From You
                    </h1>

                    <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                        Whether you have questions about investments, tax planning, wealth
                        management, or financial consulting, our experts are ready to help.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        <h2 className="text-3xl font-bold text-[#0F2D52]">
                            Send Us a Message
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Fill out the form below and we'll get back to you as soon as
                            possible.
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">

                            <div>
                                <label className="block mb-2 font-medium text-[#0F2D52]">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-[#0F2D52]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-[#0F2D52]">
                                    Phone Number
                                </label>

                                <input

                                    type="tel"
                                    name="phone"
                                    pattern="[6-9]{1}[0-9]{9}"
                                    maxLength={10}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-[#0F2D52]">
                                    Service Needed
                                </label>

                                <select name="service" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227]">
                                    <option>Accounting & Bookkeeping</option>
                                    <option>GST Compliance</option>
                                    <option>TDS Compliance</option>
                                    <option>Tax & Business Consulting</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-[#0F2D52]">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227]"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {status.message && (
                                        <div
                                            className={`flex items-center gap-2 rounded-lg p-4
                                                   ${status.type === "success"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {status.type === "success" ? (
                                                <FaCheckCircle />
                                            ) : (
                                                <FaTimesCircle />
                                            )}

                                            {status.message}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                         
                            <input className="cursor-pointer" type="checkbox" required />
                            <label>
                                I agree to the <a className="text-blue-700" href="/privacy-policy">Privacy Policy</a>
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full cursor-pointer bg-blue-900 text-white py-3 rounded-lg disabled:opacity-60 flex justify-center items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Inquiry"
                                )}
                            </button>

                        </form>

                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-[#0F2D52]">
                                Contact Information
                            </h2>

                            <div className="mt-8 space-y-6">

                                <div>
                                    <h3 className="font-semibold text-[#C9A227]">Phone</h3>
                                    <p className="mt-1 text-gray-700">+91 88941 41200</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#C9A227]">Email</h3>
                                    <p className="mt-1 text-gray-700">
                                        aditithakur200@yahoo.com
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#C9A227]">
                                        Office Address
                                    </h3>
                                    <p className="mt-1 text-gray-700">
                                        Hathni Ki Dhar,
                                        <br />
                                        Vill. Jadainee
                                        <br />
                                        Tehsil & District Shimla, 171011, Himachal Pradesh,
                                        <br />
                                        India
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="overflow-hidden rounded-2xl shadow-xl">

                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.0318912809837!2d77.10144350378825!3d31.106186326157037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057b2b920403d5%3A0xe101e6e9b66b591d!2sThakur%20Apartment!5e0!3m2!1sen!2sin!4v1784957864537!5m2!1sen!2sin"
                                className="h-80 w-full border-0"
                                loading="lazy"
                            ></iframe>

                        </div>

                        {/* Business Hours */}
                        <div className="bg-[#0F2D52] rounded-2xl p-8 text-white">

                            <h2 className="text-3xl font-bold text-[#C9A227]">
                                Business Hours
                            </h2>

                            <div className="mt-6 space-y-3">

                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Saturday - Sunday</span>
                                    <span>Closed</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}