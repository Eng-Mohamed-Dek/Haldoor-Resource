import { Mail, Phone } from "lucide-react";

export default function Terms() {
  return (
    <section className="px-4 md:px-16 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        <p className="text-gray-600">Last Updated: March 31, 2026</p>

        <p className="text-gray-700 leading-relaxed">
          Welcome to Hirkaab Resources. By using this website, you agree to the following terms:
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. Use of Website */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Use of Website</h2>
            <p className="text-gray-700 mb-2">
              This website provides access to educational content, tools, and curated resources for informational and personal use. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to harm, hack, or disrupt the website</li>
              <li>Copy or redistribute content without permission</li>
            </ul>
          </div>

          {/* 2. No User Accounts */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. No User Accounts</h2>
            <p className="text-gray-700">
              We do not require user registration. Access to our content is open and free.
            </p>
          </div>

          {/* 3. Email Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Email Subscription</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>You agree to receive emails from us</li>
              <li>You can unsubscribe at any time</li>
              <li>We respect your privacy and do not sell your data</li>
            </ul>
          </div>

          {/* 4. Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, branding, and design, is owned by Hirkaab Resources unless otherwise stated. We may link to or reference third-party resources. Ownership of those materials belongs to their respective creators.
            </p>
          </div>

          {/* 5. Disclaimer of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Disclaimer of Liability</h2>
            <p className="text-gray-700">
              All content is provided "as is" without warranties. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Errors or inaccuracies</li>
              <li>Losses or damages from using the website</li>
              <li>Third-party content or external links</li>
            </ul>
          </div>

          {/* 6. Third-Party Services */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Third-Party Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Google AdSense for ads</li>
              <li>Mailchimp for email subscriptions</li>
            </ul>
            <p className="text-gray-700 mt-1">
              These services have their own terms and policies.
            </p>
          </div>

          {/* 7. Modifications */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Modifications</h2>
            <p className="text-gray-700">
              We may update or change these terms at any time without prior notice.
            </p>
          </div>

          {/* 8. Termination */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to restrict access to the website if users violate these terms.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by applicable international laws.
            </p>
          </div>

          {/* 10. Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any questions regarding these Terms:
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-blue text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:hirkaaba@gmail.com" className="text-gray-700 hover:text-blue-500">
                  hirkaaba@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-orange text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+252614459166" className="text-gray-700 hover:text-orange-500">
                  +252 61 4459166
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}