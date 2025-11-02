# MyoGlow™ Landing Page

A professional, conversion-optimized landing page built with Next.js 14 and Tailwind CSS, replicating the advertorial style of high-converting beauty product sales pages.

## 🎯 Features

- **Long-form advertorial layout** - Editorial-style content that builds trust and drives conversions
- **Responsive design** - Mobile-first approach that looks great on all devices
- **Modular components** - Easy to customize and reuse across different pages
- **SEO optimized** - Proper meta tags and semantic HTML structure
- **Fast performance** - Built with Next.js 14 for optimal speed
- **Tailwind CSS** - Utility-first styling for rapid customization

## 📦 What's Included

### Components

- **PromoBanner** - Eye-catching promotional banner with seasonal offers
- **Hero** - Editorial-style hero section with byline for credibility
- **ProductFeatures** - Grid layout showcasing key benefits
- **ComparisonTable** - Cost comparison showing value proposition
- **TestimonialsSection** - Customer reviews with ratings
- **CTASection** - Call-to-action with risk reversal messaging
- **CTAButton** - Reusable button component with variants
- **SocialComments** - Simulated social proof comments section
- **Footer** - Complete footer with links and legal disclaimers

### Key Sections

1. **Promotional Banner** - Seasonal sale announcement
2. **Hero Section** - Attention-grabbing headline with editorial byline
3. **Problem/Solution Narrative** - Story-driven content flow
4. **Product Features** - Benefits and technology explanation
5. **Cost Comparison** - Detailed pricing vs. alternatives
6. **Multiple CTAs** - Strategic placement throughout scroll depth
7. **Customer Testimonials** - Social proof with ratings
8. **FAQ Section** - Objection handling
9. **Social Comments** - Simulated engagement
10. **Legal Footer** - Disclaimers and policies

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

```bash
# Navigate to the project directory
cd landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Customization Guide

### 1. Update Content

All content is easily customizable within the components. Key areas to update:

**PromoBanner.tsx** - Change promotional offer:
```tsx
<p className="text-sm md:text-base font-bold">
  🎃 YOUR OFFER HERE 🎃
</p>
```

**Hero.tsx** - Update headline and author:
```tsx
<h1>Your Headline Here</h1>
<span className="font-semibold">Your Name</span>
```

**TestimonialsSection.tsx** - Replace testimonials array with your customer reviews

**ComparisonTable.tsx** - Update pricing and alternatives

### 2. Change Colors

The landing page uses Tailwind CSS. Update colors by modifying class names:

- Primary CTA: `from-red-500 to-pink-500`
- Secondary CTA: `from-green-500 to-emerald-500`
- Accents: `purple-500`, `orange-500`, etc.

### 3. Add Your Images

Replace placeholder content with your product images:

```tsx
<img 
  src="/images/your-product.jpg" 
  alt="Product description"
  className="w-full h-auto rounded-lg"
/>
```

### 4. Update Metadata

Edit `app/layout.tsx` to change SEO information:

```tsx
export const metadata: Metadata = {
  title: "Your Product Name - Your Tagline",
  description: "Your product description for SEO",
};
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive utilities (`md:`, `lg:`) for optimal display on all devices.

## 🎯 Conversion Optimization Features

- **Multiple CTAs** - Strategically placed throughout the page
- **Risk Reversal** - 90-day guarantee messaging
- **Social Proof** - Customer testimonials and comments
- **Urgency** - Limited time offers and stock warnings
- **Value Demonstration** - Cost comparison tables
- **Objection Handling** - FAQ section addresses concerns
- **Trust Signals** - Editorial format, expert quotes, guarantees

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans (Google Fonts)
- **Build Tool**: Turbopack

## 📋 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Other Platforms

The built files are in the `.next` folder after running `npm run build`. Follow your hosting provider's Next.js deployment guide.

## 🔧 GemPages Integration

To use this design in GemPages (Shopify):

1. **Export HTML/CSS**: Use the built static files as reference
2. **Recreate in GemPages**: Use GemPages' drag-and-drop builder to recreate sections
3. **Copy Content**: Transfer all text content from components
4. **Match Styling**: Use GemPages' styling options to match colors, fonts, spacing
5. **Add Shopify Integration**: Connect product pages and checkout

### Custom Liquid Alternative

For Custom Liquid implementation:

1. Convert React components to Liquid templates
2. Use Shopify's section schema for customization
3. Integrate with Shopify's cart and checkout
4. Add Liquid variables for dynamic content

## 📝 License

This is a template for commercial use. Customize it for your brand and products.

## 🤝 Support

For questions or customization help, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GemPages Documentation](https://help.gempages.net/)

## ⚠️ Important Notes

- Replace all placeholder content with your actual copy and assets
- Update legal disclaimers to match your product and jurisdiction
- Ensure all claims are truthful and compliant with advertising regulations
- Test thoroughly on multiple devices before going live
- Consider A/B testing different headlines and CTAs for optimization

---

Built with ❤️ using Next.js and Tailwind CSS
