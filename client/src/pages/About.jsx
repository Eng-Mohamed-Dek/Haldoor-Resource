import { Code, Video, Camera, Monitor, Palette } from "lucide-react";

const categories = [
  { name: "Web Development", icon: Code, color: "bg-orange" },
  { name: "Video Editing", icon: Video, color: "bg-blue" },
  { name: "Photography", icon: Camera, color: "bg-orange" },
  { name: "Web Design", icon: Monitor, color: "bg-blue" },
  { name: "Graphic Design", icon: Palette, color: "bg-orange" },
];

export default function About() {
  return (
    <section className="px-4 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hirkaab Resources</h2>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Hirkaab Resources is a digital platform powered by Hirkaab Academy, created to provide high-quality creative assets and learning materials for designers, developers, and content creators.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Our mission is to make premium resources easily accessible. Users can explore and download a wide range of design and development materials without the need to create an account.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          We organize our content into key categories to help you find what you need quickly:
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 cursor-pointer">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2 p-3 bg-white rounded-xl shadow transition">
              <div className={`p-2 rounded-full text-white ${cat.color}`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <p className="font-medium text-gray-800">{cat.name}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">
          Whether you are a beginner or a professional, Hirkaab Resources is built to support your creative journey and productivity.
        </p>
      </div>
    </section>
  );
}