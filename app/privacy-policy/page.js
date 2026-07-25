export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      {/* Header */}
      <section className="bg-[#0F2D52] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Your Privacy Matters to Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            We respect your privacy and are committed to protecting the
            personal information you provide when contacting us.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                1. Introduction
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Welcome to Adi Consultancy. We value your privacy and are
                committed to handling your personal information responsibly.
                This Privacy Policy explains what information we collect,
                why we collect it, and how we use it when you interact with
                our website or contact us through our inquiry forms.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                2. Information We Collect
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                When you submit an inquiry or request through our website, we
                may collect the following personal information:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                <li>Your full name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Any additional information you voluntarily provide in your message</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                We collect your name, email address, and phone number primarily
                to respond to your inquiries, requests, and messages. We may
                use this information to contact you regarding the services or
                information you have requested.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We only use the information provided to us for legitimate
                business and communication purposes related to your inquiry.
              </p>
            </section>

            {/* EmailJS */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                4. How Your Information Is Sent
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Information submitted through our contact and inquiry forms is
                transmitted using EmailJS, a third-party email service that
                helps us receive and respond to inquiries submitted through
                our website.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                By submitting information through our contact forms, you
                acknowledge that the information you provide is processed
                through EmailJS for the purpose of delivering your inquiry to
                us.
              </p>
            </section>

            {/* Information Sharing */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                5. Sharing of Personal Information
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                We do not sell, rent, or share your personal information with
                third parties for their own marketing or commercial purposes.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Your information is used only for the purposes described in
                this Privacy Policy, including responding to your inquiries
                and requests.
              </p>
            </section>

            {/* Data Security */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                6. Data Security
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                We take reasonable steps to protect the personal information
                submitted through our website. However, no method of electronic
                transmission or storage can be guaranteed to be completely
                secure.
              </p>
            </section>

            {/* User Rights */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#0F2D52] md:text-3xl">
                7. Your Privacy Choices
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                If you have questions about the personal information you have
                provided to us, or if you would like to request clarification
                about how your information is handled, you can contact us using
                the details provided below.
              </p>
            </section>

            {/* Contact */}
            <section className="mt-10 rounded-xl bg-[#0F2D52] p-8">
              <h2 className="text-2xl font-bold text-[#C9A227] md:text-3xl">
                8. Contact Us About Privacy
              </h2>

              <p className="mt-4 leading-8 text-gray-300">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the handling of your personal information,
                please contact us:
              </p>

              <div className="mt-6 space-y-3 text-gray-200">
                <p>
                  <span className="font-semibold text-[#C9A227]">
                    Email:
                  </span>{" "}
                   aditithakur200@yahoo.com
                </p>

                <p>
                  <span className="font-semibold text-[#C9A227]">
                    Phone:
                  </span>{" "}
                  +91 88941 41200
                </p>

                <p>
                  <span className="font-semibold text-[#C9A227]">
                    Address:
                  </span>{" "}
                  Hathni Ki Dhar, Shimla, Himachal Pradesh, India
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <p className="mt-10 text-sm text-gray-500">
              Last Updated: July 2026
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}