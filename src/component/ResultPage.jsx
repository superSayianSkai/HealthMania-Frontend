import { useState, useEffect } from "react";
import { Activity } from "lucide-react";

export default function ResultPage({ AiResponse, subAiType }) {
  const [mounted, setMounted] = useState(false);
  

  console.log(AiResponse);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #000000 10%, #1c1c1c 40%, #2a1506 100%)",
        backgroundSize: "200% 200%", // Enlarges gradient for animation
        animation: "gradientFlow 5s ease infinite", // Faster: 5s instead of 8s
      }}
      className="min-h-screen w-full flex items-center justify-center"
    >
      {/* Go Back Button - Added at the top left */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-8 left-8 flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-200"
      >
        <span className="text-sm font-medium">Go Back</span>
      </button>

      <div
        className={`relative transform transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl" />

        {/* Main content card */}
        <div className="relative p-8 md:p-12 w-[340px] md:w-[440px]">
          {/* Top section */}
          <div className="flex items-center justify-center mb-8">
            <Activity className="w-6 h-6 text-orange-500 mr-3 custom-pulse" />
            <h1 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
              {subAiType === "calorieLevel"
                ? "Calorie Level"
                : subAiType === "nutriScan"
                ? "Nutri-scan"
                : subAiType === "diabetes"
                ? "Diabetes"
                : ""}
            </h1>
          </div>

          {/* Result circle */}
          <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-orange-500/30 flex items-center justify-center mb-8 cursor-pointer transition-transform duration-500 hover:scale-105">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 rotating-border" />

            {/* Pulsing background */}
            <div className="absolute inset-4 rounded-full bg-orange-500/10 custom-pulse" />

            {/* Inner content */}
            <div className="text-center z-10">
              <div className="text-4xl md:text-[1.4rem] font-bold text-white mb-2">
                {AiResponse === "this food seems unhealthy"
                  ? "unhealthy"
                  : AiResponse === "this food is healthy"
                  ? "healthy"
                  : AiResponse === "you are non-diabetic"
                  ? "Non Diabetic"
                  : AiResponse}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-4 text-center">
            <p className="text-orange-500 font-medium tracking-wide">
              {AiResponse === "low"
                ? "Room for improvement"
                : AiResponse === "high"
                ? "Consider moderation"
                : AiResponse === "normal"
                ? "Great choice!"
                : AiResponse === "this food seems unhealthy"
                ? "This food seems unhealthy"
                : AiResponse === "this food is healthy"
                ? "This food is healthy"
                : ""}
            </p>
            {AiResponse === "low" && subAiType === "calorieLevel" ? (
              <p className="text-zinc-400 text-sm leading-relaxed">
                This food has a low calorie content. Consider pairing it with
                nutrient-rich options to support energy and well-being.
              </p>
            ) : AiResponse === "high" && subAiType === "calorieLevel" ? (
              <p className="text-red-500 text-sm leading-relaxed">
                This food has a high calorie content. Consume in moderation to
                maintain a balanced diet.
              </p>
            ) : AiResponse === "normal" && subAiType === "calorieLevel" ? (
              <p className="text-green-500 text-sm leading-relaxed">
                This food has a normal calorie content. It&apos;s a good choice
                for maintaining energy and balance.
              </p>
            ) : AiResponse === "this food seems unhealthy" ? (
              <p className="text-white text-sm leading-relaxed">
                Consider healthier alternatives for better nutrition.
              </p>
            ) : AiResponse === "this food is healthy" ? (
              "This food is healthy! A great choice for supporting your overall well-being."
            ) : (
              ""
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .rotating-border {
          animation: rotate 8s linear infinite;
        }

        .custom-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
