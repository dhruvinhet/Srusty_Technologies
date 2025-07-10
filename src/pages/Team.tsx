
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "20+ years in water treatment industry"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Engineer",
      experience: "15+ years in environmental engineering"
    },
    {
      name: "Michael Chen",
      position: "Operations Manager",
      experience: "12+ years in project management"
    },
    {
      name: "Emily Davis",
      position: "Quality Assurance Director",
      experience: "18+ years in quality control"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-blue-100">
              Meet the experts behind our water treatment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <User className="w-24 h-24 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
