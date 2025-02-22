import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

const HealthMania = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-32">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-8 animate-fade-in-down">
        <p className="text-gray-500 text-sm mb-2">February 21, 2025</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-4">
          Introducing the Health Intelligence Age
        </h1>
        <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
          A revolutionary platform that synthesizes vast amounts of online
          health data to empower you with multi-step research in minutes.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
          >
            Explore the Health Intelligence Age
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl bg-white p-6 sm:p-8">
        {/* Intro Section */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="mb-8 opacity-0 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            A New Dawn for Health Research
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Today, we’re introducing the{" "}
            <strong>Health Intelligence Age</strong>, a game-changing platform
            that transforms how you explore health insights. In tens of minutes,
            it delivers comprehensive research that would take hours or days to
            compile manually.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Built from the ground up to tackle complex health questions, the
            Health Intelligence Age dives into medical journals, wellness
            forums, and market trends, delivering polished reports that rival a
            seasoned analyst’s work. It’s your gateway to smarter, faster health
            discoveries.
          </p>
        </section>

        {/* Why We Built It */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="mb-8 opacity-0 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Why We Built It
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Health Intelligence Age is designed for anyone navigating the
            health landscape—doctors, researchers, fitness buffs, or curious
            patients. Whether you’re a business eyeing health tech trends or a
            consumer picking the perfect wellness gear, this platform’s got you
            covered.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            With fully cited reports and a knack for digging up hidden gems—like
            rare condition insights or the next big wellness fad—it turns
            time-intensive research into a breeze with one simple query.
          </p>
        </section>

        {/* How to Use */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="mb-8 opacity-0 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            How to Jump In
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Head to the Health Intelligence Age platform, pick your research
            topic—say, wearable tech comparisons or diabetes management tips—and
            hit go. Add files like spreadsheets for extra context. Watch the
            progress unfold in a sleek sidebar, and get notified when your
            report’s ready (5-30 minutes). Soon, we’ll roll out visuals like
            charts and trend graphs!
          </p>
        </section>

        {/* Sample Prompt and Response */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="mb-8 opacity-0 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Health Intelligence Age in Action
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg transform transition-all duration-500 hover:scale-102">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Your Question:
            </h3>
            <p className="text-gray-600 italic">
              "Compile data on health tech adoption, chronic disease rates, and
              investment trends over the past 10 years for the top 5 developed
              and top 5 developing countries by GDP. Show it in a table and
              suggest markets for a new chronic disease management tool from the
              Health Intelligence Age."
            </p>

            <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">
              Our Answer:
            </h3>
            <p className="text-gray-600 mb-4">
              Here’s a crafted report based on the latest insights, spotlighting
              markets the Health Intelligence Age serves.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">
                      Health Tech Adoption (%)
                    </th>
                    <th className="p-3 font-semibold">
                      Chronic Disease Rate (%)
                    </th>
                    <th className="p-3 font-semibold">Investment (2023, $B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">USA</td>
                    <td className="p-3">25%</td>
                    <td className="p-3">50%</td>
                    <td className="p-3">20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Japan</td>
                    <td className="p-3">15%</td>
                    <td className="p-3">40%</td>
                    <td className="p-3">2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Germany</td>
                    <td className="p-3">18%</td>
                    <td className="p-3">35%</td>
                    <td className="p-3">1.8</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">UK</td>
                    <td className="p-3">20%</td>
                    <td className="p-3">38%</td>
                    <td className="p-3">1.5</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">France</td>
                    <td className="p-3">17%</td>
                    <td className="p-3">36%</td>
                    <td className="p-3">1.2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">China</td>
                    <td className="p-3">12%</td>
                    <td className="p-3">15%</td>
                    <td className="p-3">10</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">India</td>
                    <td className="p-3">10%</td>
                    <td className="p-3">12%</td>
                    <td className="p-3">1.5</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Brazil</td>
                    <td className="p-3">8%</td>
                    <td className="p-3">20%</td>
                    <td className="p-3">0.8</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Russia</td>
                    <td className="p-3">7%</td>
                    <td className="p-3">25%</td>
                    <td className="p-3">0.5</td>
                  </tr>
                  <tr>
                    <td className="p-3">Indonesia</td>
                    <td className="p-3">6%</td>
                    <td className="p-3">10%</td>
                    <td className="p-3">0.3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">
              Top Picks:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>United States</strong>: High tech adoption and chronic
                disease rates.
              </li>
              <li>
                <strong>United Kingdom</strong>: Strong health tech growth and
                care needs.
              </li>
              <li>
                <strong>Japan</strong>: Aging population meets cutting-edge
                tech.
              </li>
              <li>
                <strong>China</strong>: Massive scale and rising health demands.
              </li>
              <li>
                <strong>India</strong>: Diabetes surge and growing tech access.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="text-center opacity-0 transition-all duration-700 mb-10 mt-32"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4 ">
            Ready to Step Into the Future?
          </h2>
          <p className="text-gray-600 mb-6">
            Available to Pro users now, with Plus and Team coming soon. Unleash
            the power of health research today!
          </p>
          <Link
            to="/try-"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105 animate-bounce-slow"
          >
            Dive In
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HealthMania;

// Custom CSS for animations (add this to your CSS file or <style> tag in index.html)
const styles = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }

  .animate-bounce-slow {
    animation: bounceSlow 2s infinite;
  }

  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounceSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
