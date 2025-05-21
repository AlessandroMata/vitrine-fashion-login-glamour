
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [isMasculine, setIsMasculine] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const storedTheme = localStorage.getItem("theme");
    const prefersMasculine = localStorage.getItem("gender") === "masculine";
    
    if (prefersMasculine) {
      setIsMasculine(true);
      document.documentElement.classList.add("masculine");
      document.documentElement.classList.add("dark");
    } else {
      setIsMasculine(false);
      document.documentElement.classList.remove("masculine");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsMasculine = !isMasculine;
    setIsMasculine(newIsMasculine);
    
    if (newIsMasculine) {
      document.documentElement.classList.add("masculine");
      document.documentElement.classList.add("dark");
      localStorage.setItem("gender", "masculine");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("masculine");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("gender", "feminine");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-xs font-medium">Feminino</span>
      <Switch
        checked={isMasculine}
        onCheckedChange={toggleTheme}
        aria-label="Toggle Theme"
      />
      <span className="text-xs font-medium">Masculino</span>
    </div>
  );
};

export default ThemeToggle;
