interface CTAButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export default function CTAButton({ 
  text = "🎃 TRY IT RISK-FREE FOR 90 DAYS 🎃", 
  variant = 'primary',
  size = 'large'
}: CTAButtonProps) {
  const baseClasses = "font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
    : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white";
  
  const sizeClasses = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "px-10 py-4 text-lg md:text-xl"
  };

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses[size]} w-full md:w-auto`}>
      {text}
    </button>
  );
}
