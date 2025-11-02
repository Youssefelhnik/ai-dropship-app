import PromoBanner from '@/components/PromoBanner';
import Hero from '@/components/Hero';
import ProductFeatures from '@/components/ProductFeatures';
import ComparisonTable from '@/components/ComparisonTable';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import CTAButton from '@/components/CTAButton';
import SocialComments from '@/components/SocialComments';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Hero />
      
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The Celebrity Secret That's Now Available to Everyone
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            For years, celebrities and the ultra-wealthy have had access to professional red light therapy treatments at exclusive med-spas, paying hundreds of dollars per session.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            But now, thanks to breakthrough technology, you can get the same professional-grade results at home for a fraction of the cost.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Introducing <strong>MyoGlow™</strong> - the revolutionary at-home red light therapy device that's taking the beauty world by storm.
          </p>
        </div>
      </section>

      <ProductFeatures />
      
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            How Does Red Light Therapy Work?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Red light therapy uses specific wavelengths of light to penetrate deep into the skin, stimulating cellular regeneration and collagen production.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This scientifically-proven technology has been used by dermatologists and aestheticians for decades to improve skin tone, reduce the appearance of fine lines, and promote a more youthful appearance.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            What Makes MyoGlow™ Different?
          </h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700"><strong>Professional-Grade Technology:</strong> The same wavelengths used in $500+ spa treatments</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700"><strong>Convenient:</strong> Use it anywhere, anytime - no appointments needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700"><strong>Cost-Effective:</strong> One-time investment vs. ongoing expensive treatments</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700"><strong>Safe for All Skin Types:</strong> Non-invasive and gentle enough for daily use</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700"><strong>Backed by Science:</strong> Clinically proven technology with decades of research</span>
            </li>
          </ul>
        </div>
      </section>

      <ComparisonTable />
      
      <CTASection />
      
      <TestimonialsSection />
      
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How long does it take to see results?
            </h3>
            <p className="text-gray-700">
              Many users report visible improvements in as little as 5-7 days of consistent use. For optimal results, we recommend using MyoGlow™ for 10 minutes daily for at least 4 weeks.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Is it safe for all skin types?
            </h3>
            <p className="text-gray-700">
              Yes! Red light therapy is safe and effective for all skin types and tones. It's non-invasive, painless, and has no known side effects when used as directed.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How is this different from other devices on Amazon?
            </h3>
            <p className="text-gray-700">
              MyoGlow™ uses professional-grade LED technology with the optimal wavelength (630-660nm) proven effective in clinical studies. Many cheaper alternatives use inferior LEDs that don't penetrate deep enough to be effective.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              What if it doesn't work for me?
            </h3>
            <p className="text-gray-700">
              We offer a 90-day money-back guarantee. If you're not completely satisfied with your results, simply return it for a full refund - no questions asked.
            </p>
          </div>
          
          <div className="pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How much does shipping cost?
            </h3>
            <p className="text-gray-700">
              Shipping is completely FREE during our Halloween sale! We also include a FREE gift with every order.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <SocialComments />
      
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ⚠️ Limited Stock Warning
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Due to overwhelming demand and our Halloween sale, MyoGlow™ devices are selling out fast!
          </p>
          <p className="text-gray-600 mb-6">
            Don't miss your chance to save 50% + get FREE shipping + FREE gift. This offer won't last long!
          </p>
          <div className="inline-block">
            <CTAButton text="🎃 CHECK AVAILABILITY NOW 🎃" variant="secondary" />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
