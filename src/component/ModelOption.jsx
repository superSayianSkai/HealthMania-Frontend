import { aiFeatures } from "@/data/aIFeatures";
import { Link, useParams } from "react-router-dom";

const ModelOption = () => {
  const { aiType } = useParams();

  const type =
    aiType === "neuro-rest"
      ? "Neurorest"
      : aiType === "nutri-score"
      ? "Nutriscore"
      : null;
  console.log(type);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #000000 10%, #1c1c1c 40%, #2a1506 100%)",
        backgroundSize: "200% 200%", // Enlarges gradient for animation
        animation: "gradientFlow 5s ease infinite", // Faster: 5s instead of 8s
      }}
      className="flex flex-col sm:flex-row justify-center items-center h-[100svh]"
    >
      <div className="flex gap-8 w-[100%] md:w-[50%] h-[50svh] md:h-[20vh] flex-col sm:flex-row animate-fade-in-up px-4">
        {Object.entries(aiFeatures)
          .filter(([key]) => key === type)
          .flatMap(([id, feature]) => {
            console.log(feature);
            return Object.entries(feature.features)
              .map(([subId, subFeature]) => ({
                id: subId,
                title: subFeature.title,
                link: subFeature.link,
                about: subFeature.about,
              }))
              .map(({ id, title, link, about }) => (
                <div
                  key={id}
                  className="group border-[2px] border-white md:w-[50%] h-[100%] rounded-lg text-white p-4 flex flex-col gap-2 cursor-pointer"
                >
                  <Link className="flex flex-col gap-4" to={link}>
                    <div className="flex gap-3 items-center justify-between group-hover:underline underline-offset-[.4rem]">
                      <h1 className="animate-fade-in-up text-[1.5rem] md:text-[1rem]">{title}</h1>
                      <i className="bi bi-arrow-up-right text-[.8rem] hidden group-hover:block"></i>
                    </div>
                    <p className="text-[.8rem] md:text-[.7rem]">{about}</p>
                  </Link>
                </div>
              ));
          })}
      </div>

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
};

export default ModelOption;