import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-4 md:px-16 lg:px-24 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>

        {/* Description */}
        <p className="text-gray-700 mb-8">
          If you have any questions, suggestions, or support requests, feel free to reach out to us.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Phone */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="p-3 rounded-full bg-orange text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-gray-500">+252 61 4459166</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="p-3 rounded-full bg-blue text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-gray-500">hirkaaba@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-700 mt-8">
          We are always happy to assist you.
        </p>
      </div>
    </section>
  );
}