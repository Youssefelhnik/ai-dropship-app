interface ComparisonItem {
  name: string;
  cost: string;
  annualCost: string;
  problems: string[];
}

export default function ComparisonTable() {
  const comparisons: ComparisonItem[] = [
    {
      name: "Med-Spa Treatments",
      cost: "$250-$500 per session",
      annualCost: "$3,000-$6,000/year",
      problems: [
        "Requires multiple sessions",
        "Expensive ongoing costs",
        "Time-consuming appointments",
        "Results fade without maintenance"
      ]
    },
    {
      name: "CoolSculpting",
      cost: "$600-$1,000 per area",
      annualCost: "$1,200-$2,000/year",
      problems: [
        "Painful procedure",
        "Multiple treatments needed",
        "Temporary results",
        "Risk of side effects"
      ]
    },
    {
      name: "Liposuction",
      cost: "$3,000-$7,000",
      annualCost: "$3,000-$7,000 one-time",
      problems: [
        "Invasive surgery",
        "Long recovery time",
        "Scarring",
        "Expensive and risky"
      ]
    },
    {
      name: "Arm Lift Surgery",
      cost: "$2,500-$10,000",
      annualCost: "$2,500-$10,000 one-time",
      problems: [
        "Major surgery required",
        "Permanent scarring",
        "Weeks of recovery",
        "High risk complications"
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        THE EXPENSIVE ALTERNATIVES
      </h2>
      
      <div className="space-y-6">
        {comparisons.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.name}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cost per treatment:</p>
                <p className="text-lg font-semibold text-red-600">{item.cost}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual cost:</p>
                <p className="text-lg font-semibold text-red-600">{item.annualCost}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Problems:</p>
              <ul className="space-y-1">
                {item.problems.map((problem, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          Our Solution: MyoGlow™
        </h3>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">One-time investment:</p>
          <p className="text-3xl font-bold text-green-600 mb-2">$139</p>
          <p className="text-sm text-gray-600">
            <span className="line-through">$278</span> - Save 50% Today!
          </p>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-gray-700 flex items-start">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            Unlimited use at home
          </li>
          <li className="text-sm text-gray-700 flex items-start">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            No ongoing costs
          </li>
          <li className="text-sm text-gray-700 flex items-start">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            90-day money-back guarantee
          </li>
          <li className="text-sm text-gray-700 flex items-start">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            Safe, non-invasive technology
          </li>
        </ul>
      </div>
    </section>
  );
}
