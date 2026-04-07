import { Mail, Phone } from "lucide-react";

export default function Privacy() {
  return (
    <section className="px-4 md:px-16 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600">Last Updated: March 31, 2026</p>

        <p className="text-gray-700 leading-relaxed">
          Welcome to Hirkaab Resources. Your privacy is important to us.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
            <p className="text-gray-700 mb-2">
              We only collect limited personal information in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Email Address:</strong> When you voluntarily subscribe to our newsletter via Mailchimp.</li>
              <li><strong>Usage Data:</strong> Basic, non-personal information such as browser type, pages visited, and general analytics.</li>
            </ul>
            <p className="text-gray-700 mt-2">We do <strong>not</strong> require user registration or account creation.</p>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Send newsletters, updates, and new resources</li>
              <li>Improve our website and user experience</li>
              <li>Respond to inquiries or support requests</li>
            </ul>
          </div>

          {/* 3. Email Subscriptions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Email Subscriptions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Your email is stored securely באמצעות Mailchimp</li>
              <li>You can unsubscribe at any time using the link in any email</li>
              <li>We do not send spam or sell your email to third parties</li>
            </ul>
          </div>

          {/* 4. Cookies and Advertising */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Cookies and Advertising</h2>
            <p className="text-gray-700">
              We may use cookies and third-party services such as Google AdSense to display ads. These services may:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Use cookies to show personalized ads</li>
              <li>Collect anonymous usage data</li>
            </ul>
            <p className="text-gray-700 mt-1">
              You can manage ad preferences through Google Ads Settings.
            </p>
          </div>

          {/* 5. Third-Party Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may include links to external websites. We are not responsible for the privacy practices or content of those sites.
            </p>
          </div>

          {/* 6. Data Protection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Data Protection</h2>
            <p className="text-gray-700">
              We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* 7. Children’s Privacy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Children’s Privacy</h2>
            <p className="text-gray-700">
              Our website is not intended for children under 13. We do not knowingly collect personal data from children.
            </p>
          </div>

          {/* 8. Your Rights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Your Rights</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Unsubscribe from emails at any time</li>
              <li>Request removal of your email from our records</li>
            </ul>
          </div>

          {/* 9. Changes to This Policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy at any time. Changes will be posted on this page.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy, contact us:</p>

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