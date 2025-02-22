"use client";

import { useState } from "react";

const healthFAQs = [
  {
    question: "What are the key pillars of good health?",
    answer:
      "The key pillars include regular physical activity, balanced nutrition, adequate sleep (7-9 hours), stress management, and preventive healthcare through regular check-ups.",
  },
  {
    question: "How can AI improve personal healthcare?",
    answer:
      "AI can analyze health data to provide personalized recommendations, detect early warning signs of health issues, track fitness progress, and help maintain better health habits through smart monitoring.",
  },
  {
    question: "What role does mental health play in overall wellness?",
    answer:
      "Mental health is fundamental to overall wellness. It affects physical health, immune function, sleep quality, and our ability to maintain healthy relationships and lifestyle habits.",
  },
  {
    question: "How often should I exercise for optimal health?",
    answer:
      "Adults should aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity per week, combined with strength training exercises twice a week.",
  },
  {
    question: "What are the benefits of preventive healthcare?",
    answer:
      "Preventive healthcare helps detect health issues early, reduces healthcare costs, prevents serious illnesses, and promotes longer, healthier lives through regular screenings and lifestyle modifications.",
  },
];

export function HealthFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-[3rem] mt-12 md:mt-[6rem] py-12   bg-gray-50  ">
      <div className="mb-8">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">
          Health <span className="text-orange-500">Questions</span> Answered
        </h2>
        <p className="text-[.8rem] md:text-[1rem] text-gray-700 font-medium md:w-[50%]">
          Explore common health questions and expert insights to help you make
          informed decisions about your wellbeing.
        </p>
      </div>

      <div className="space-y-4">
        {healthFAQs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <i
                className={`bi bi-chevron-down transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 py-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
