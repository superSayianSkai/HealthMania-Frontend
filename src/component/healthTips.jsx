export function HealthTips() {
    const tips = [
      {
        title: "Morning Routine",
        description: "Start your day with a glass of water and 10 minutes of stretching",
        icon: "bi-sunrise"
      },
      {
        title: "Mindful Eating",
        description: "Take time to chew slowly and enjoy your meals without distractions",
        icon: "bi-heart"
      },
      {
        title: "Digital Detox",
        description: "Take regular breaks from screens to reduce eye strain and mental fatigue",
        icon: "bi-phone"
      }
    ]
  
    return (
      <div className="py-20 px-4 md:px-[3rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">
            Daily Health <span className="text-orange-500">Tips</span>
          </h2>
          <p className="text-gray-600 mb-12 md:w-[60%]">
            Simple yet effective ways to improve your daily health and wellness routine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <i className={`${tip.icon} text-orange-500 text-3xl mb-4 block`}></i>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  