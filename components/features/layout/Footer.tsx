
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-2 flex justify-center   fixed bottom-0 left-0 right-0 bg-background m-auto border-t border-accent">
      © Copyright {currentYear}, 
      <Link
        href="/"
        
      >
        <span>Upply</span>
      </Link>

      
    </div>
  );
};
