"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 98, label: "AI intelligence", symbol: "%" },
  { value: 50000, label: "Health Checkups", symbol: "+" },
  { value: 24, label: "Health Experts", symbol: "+" },
  { value: 365, label: "Days Active", symbol: "d" },
];
export function HealthStats() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="stats-section" className="bg-gray-50 py-20 px-4 md:px-[3rem]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-center mb-16">
          Making a <span className="text-orange-500">Difference</span> in
          Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="">
              <div className="text-4xl text-center md:text-5xl font-bold mb-2">
                {inView ? (
                  <Counter target={stat.value} symbol={stat.symbol} />
                ) : (
                  "0" + stat.symbol
                )}
              </div>
              <div className="text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Counter({ target, symbol }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString() + symbol}</>;
}
