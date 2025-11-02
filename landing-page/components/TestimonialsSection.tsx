import Testimonial from './Testimonial';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "I was skeptical at first, but after just 2 weeks of using MyoGlow, I noticed a visible difference in my arms. They look more toned and the skin feels tighter. I'm so glad I didn't waste money on expensive spa treatments!"
    },
    {
      name: "Jennifer K.",
      location: "Miami, FL",
      rating: 5,
      text: "This device is a game-changer! I've spent thousands on treatments that gave temporary results. MyoGlow gives me the same results at a fraction of the cost, and I can use it whenever I want. Absolutely worth it!"
    },
    {
      name: "Amanda R.",
      location: "New York, NY",
      rating: 5,
      text: "I love how easy it is to use. Just 10 minutes a day while watching TV, and my arms have never looked better. The red light therapy really works, and I feel more confident wearing sleeveless tops now!"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16 bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
        REAL RESULTS FROM REAL CUSTOMERS
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Join thousands of satisfied customers who have transformed their appearance with MyoGlow™
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
