export default function ProductFeatures() {
  const features = [
    {
      title: "Red Light Therapy",
      description: "Clinically proven technology used by dermatologists worldwide to improve skin appearance and tone."
    },
    {
      title: "Easy to Use",
      description: "Just 10 minutes a day. Use while watching TV, reading, or relaxing at home."
    },
    {
      title: "Safe & Non-Invasive",
      description: "No pain, no surgery, no downtime. Gentle enough for daily use on all skin types."
    },
    {
      title: "Professional Results",
      description: "Get spa-quality results at home for a fraction of the cost. Unlimited treatments."
    },
    {
      title: "Fast Results",
      description: "Many users report visible improvements in as little as 5-7 days of consistent use."
    },
    {
      title: "Money-Back Guarantee",
      description: "Try it risk-free for 90 days. If you're not satisfied, get a full refund - no questions asked."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
        WHY MYOGLOW™ WORKS
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover the science-backed benefits that make MyoGlow™ the #1 choice for at-home beauty treatments
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
