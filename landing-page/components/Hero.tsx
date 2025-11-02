export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-4">
        <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
          Beauty
        </span>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        The "Magical Glow Wand" That's Taking Hollywood By Storm
      </h1>
      
      <div className="text-sm text-gray-600 mb-6 flex items-center gap-2">
        <span>By</span>
        <span className="font-semibold text-gray-900">Jill Peterson</span>
        <span>•</span>
        <time>November 2, 2025</time>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          How do celebrities over 40 maintain their flawless appearance without spending thousands on spa treatments or risky surgery?
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The answer might surprise you. It's not expensive creams, it's not Botox, and it's definitely not surgery...
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          It's a revolutionary at-home device that uses the same red light therapy technology trusted by dermatologists and aestheticians worldwide.
        </p>
      </div>
    </section>
  );
}
