import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AiPage = () => {
  const { aiType } = useParams();
  const { id } = useParams();
  console.log(aiType);
  console.log(id);

  const handleLink = () => {
    if (aiType === "nutri-score" || aiType === "neuro-rest") {
      return `/ai-page/ai-query/choose-ai/${aiType}/${id}`;
    } else if (aiType === "gluco-sense") {
      return `/ai-page/ai-query/gluco-sense/diabetes/${id}`;
    } else {
      return `/ai-page/ai-query/bump-balance/bumpBalance/${id}`;
    }
  };
  const linkTo = handleLink();

  return (
    <div
      className="h-[100svh] overflow-hidden flex flex-col justify-center items-center p-6 sm:p-8 md:p-2"
      style={{
        background:
          "linear-gradient(135deg, #000000 10%, #1c1c1c 40%, #2a1506 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientFlow 6s ease infinite", // Faster: 6s instead of 10s
      }}
    >
      <div className="text-[2rem] sm:text-[3rem] md:text-[8rem] font-bold text-white text-center animate-fade-in-up">
        {aiType.toUpperCase()}
      </div>
      <p className="mt-[12px] text-[.8rem] sm:text-[.9rem] md:text-[1rem] break-inside-auto text-white text-center max-w-lg animate-fade-in-up animation-delay-300">
        {aiType === "neuro-rest"
          ? "Take control of your well-being. Answer a few questions to assess your stress levels and sleep quality for a healthier balance."
          : aiType === "nutri-score"
          ? "Take control of your health. Answer a few questions to assess your nutrition and calorie intake for a balanced lifestyle."
          : aiType === "dream-guard"
          ? "Take control of your sleep. Answer a few questions to assess your sleep quality and identify potential risks."
          : aiType === "gluco-sense"
          ? "Take control of your health. Answer a few questions to assess your risk of diabetes."
          : "Take charge of your well-being. Answer a few questions to evaluate your comfort and health during pregnancy."}
      </p>

      <Link className="animate-fade-in-up" to={linkTo}>
        <button className="mt-8 text-[.8rem] px-6 py-2 flex justify-center items-center cursor-pointer hover:opacity-90 bg-white text-[#ea580c] rounded-full font-semibold transition-all duration-300 hover:shadow-lg animate-bounce-subtle hover:bg-black hover:text-white">
          Try Now
        </button>
      </Link>

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
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
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
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default AiPage;
