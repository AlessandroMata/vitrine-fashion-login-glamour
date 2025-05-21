
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      console.log("Login submitted:", { email, password });
      setIsLoading(false);
      // In a real app, you would handle authentication here
    }, 1500);
  };

  return (
    <div className={cn("w-full max-w-md", className)}>
      <h2 className="text-2xl font-serif mb-6">Entrar na sua conta</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 border-muted focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password">Senha</Label>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Esqueceu a senha?
            </a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 border-muted focus:border-primary"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
            Lembrar de mim
          </Label>
        </div>
        
        <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 transition-colors">
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
        
        <div className="relative flex items-center justify-center">
          <div className="border-t border-muted flex-grow"></div>
          <span className="px-3 text-xs text-muted-foreground">ou continue com</span>
          <div className="border-t border-muted flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="h-10 border-muted hover:border-primary/50" type="button">
            Google
          </Button>
          <Button variant="outline" className="h-10 border-muted hover:border-primary/50" type="button">
            Facebook
          </Button>
          <Button variant="outline" className="h-10 border-muted hover:border-primary/50" type="button">
            Apple
          </Button>
        </div>
        
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Não tem uma conta? </span>
          <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
