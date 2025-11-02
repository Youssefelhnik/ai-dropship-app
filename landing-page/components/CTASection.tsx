import CTAButton from './CTAButton';

export default function CTASection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Appearance?
        </h2>
        
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers and experience the power of professional red light therapy at home.
        </p>
        
        <div className="mb-6">
          <CTAButton />
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            90-Day Money-Back Guarantee
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            Free Shipping on All Orders
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            1-Year Warranty Included
          </p>
        </div>
      </div>
    </section>
  );
}
