
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-black">
        <span>Vitrine</span>
        <span className="font-normal italic ml-1">Fashion</span>
      </h1>
      <div className="w-16 h-0.5 bg-gold mt-1"></div>
    </div>
  );
};

export default Logo;
