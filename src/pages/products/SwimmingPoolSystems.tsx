import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SwimmingPoolSystems = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            SWIMMING POOL SYSTEMS
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div>
            <h2 className="text-2xl font-bold mb-4">Filtration System</h2>
            <p className="mb-4">
              The filtration system is the core of any pool, ensuring water remains clean and clear while preventing waterborne diseases.
              Our systems are fully assembled, customized to fit your pool, and meet all necessary standards for guaranteed performance.
            </p>
            <p className="font-semibold mb-2">We use two main methods for pool sanitation:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <strong>Consecutive Dilution:</strong> Removes organic waste daily via skimmer baskets and the circulation pump.
              </li>
              <li>
                <strong>Sand Unit with Backwash:</strong> Cleans the filter and removes waste efficiently through backwashing.
              </li>
            </ul>
            <p>
              Disinfection with Hypochlorous Acid (HCIO) ensures the water is safe from harmful microorganisms.
              Swimmer hygiene also helps reduce waste buildup.
            </p>
          </div>
          <br />

          {/* Disinfection/Dosing System */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Disinfection/Dosing System</h2>
            <p className="mb-4">
              Maintaining the correct sanitizer level is crucial for pool water safety. We offer a range of automatic dosing and
              sanitizing units that ensure the water remains at the optimal additive level. Our solutions cater to pools of all sizes,
              from small home pools to Olympic-sized pools, including:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Chlorine Dosing Mechanism</li>
              <li>UV System</li>
              <li>Ozone Generation System</li>
            </ul>
            <p>
              These systems work efficiently to keep your pool water clean and safe for swimmers.
            </p>
          </div>
          <br />
          <br />
          {/* Water Treatment System */}

          {/* Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src="/images/4.jpg"
                alt="Water Body"
                className="w-full h-56 object-cover"
              />
              <div className="bg-blue-700 text-white text-center py-3 font-semibold">
                Water Body
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src="/images/5.jpg"
                alt="Commercial Swimming Pool"
                className="w-full h-56 object-cover"
              />
              <div className="bg-blue-700 text-white text-center py-3 font-semibold">
                Commercial Swimming Pool
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src="/images/6.jpg"
                alt="Water Massage Systems"
                className="w-full h-56 object-cover"
              />
              <div className="bg-blue-700 text-white text-center py-3 font-semibold">
                Water Massage Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SwimmingPoolSystems;
