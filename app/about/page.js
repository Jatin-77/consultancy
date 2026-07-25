import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#F8F6F2]">

      {/* Hero */}
      <section className="bg-[#0F2D52] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[#C9A227] font-semibold tracking-[0.2em] uppercase">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Guiding Financial Success with Integrity
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            We provide trusted financial consulting services that empower
            individuals, families, and businesses to make informed financial
            decisions and achieve long-term prosperity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          <div>
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Our Mission
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0F2D52]">
              Helping You Build a Secure Financial Future
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to deliver personalized financial strategies that
              help clients grow wealth, manage risk, and confidently navigate
              today's evolving financial landscape.
            </p>
          </div>

          <div className="relative h-100 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/mission.avif"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          <div className="order-2 lg:order-1 relative h-100 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/vision.jpg"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Our Vision
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0F2D52]">
              Becoming a Trusted Financial Partner
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We aspire to become the most trusted financial consultancy by
              building lasting relationships founded on transparency,
              professionalism, and measurable results.
            </p>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0F2D52]">
              Experience That Makes a Difference
            </h2>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            <div className="relative h-112.5 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/experience.png"
                alt="Experience"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-lg leading-8 text-gray-600">
                With years of experience in wealth management, GST
                compliance, tax optimization, TDS compliance, and business
                consulting, our advisor provides practical solutions tailored to
                every client's unique goals.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div className="rounded-xl bg-[#0F2D52] p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#C9A227]">9+</h3>
                  <p className="mt-2 text-white">Years Experience</p>
                </div>

                <div className="rounded-xl bg-[#0F2D52] p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#C9A227]">500+</h3>
                  <p className="mt-2 text-white">Satisfied Clients</p>
                </div>

                <div className="rounded-xl bg-[#0F2D52] p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#C9A227]">1000+</h3>
                  <p className="mt-2 text-white">Financial Plans</p>
                </div>

                <div className="rounded-xl bg-[#0F2D52] p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#C9A227]">24/7</h3>
                  <p className="mt-2 text-white">Client Support</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto  items-center gap-14 px-6">



          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className=" text-4xl text-[#C9A227] font-semibold tracking-[0.2em] uppercase">
              Our Experience
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We have extensive experience in managing statutory and regulatory compliances for multi-location businesses operating across multiple states. Our expertise includes handling GST compliance, TDS compliance, audit support, and various statutory registrations and applications for a rapidly expanding retail franchise network.

              Currently, we manage compliance for 90+ franchise stores operating across four Indian states, ensuring timely and accurate statutory filings and regulatory adherence.
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0F2D52]">
              Our Areas Of Expertise Include:
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              GST return filing and compliance management
              TDS deduction, payment, and quarterly return filing
              Audit support and compliance coordination
              GST registrations, amendments, and other statutory applications
              Compliance calendar management and due date monitoring
              Reconciliation of GST and TDS records
              Ongoing compliance support for expanding multi-state businesses
            </p>

            <h1 className=" text-4xl text-[#C9A227] mt-7 font-semibold tracking-[0.2em] ">
              We are committed to delivering reliable, timely, and practical compliance solutions that help businesses remain focused on growth while meeting all statutory obligations.
            </h1>
          </div>

        </div>
      </section>

    </main>
  );
}