import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/95 backdrop-blur-md shadow-glow sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-xl p-3 shadow-warm">
              <span className="text-primary-foreground font-bold text-2xl">🍽️</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                KainanPH
              </span>
              <div className="text-xs text-muted-foreground font-medium">Authentic Filipino Food</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Home
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-smooth font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
              Contact
            </a>
          </nav>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 rounded-xl">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-accent text-accent-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-warm">
                3
              </span>
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex rounded-xl border-primary/20 hover:bg-primary/5">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:flex rounded-xl">
              Sign Up
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-primary/10 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border/50 pt-6 bg-gradient-subtle rounded-2xl p-4 mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium py-2">Home</a>
              <a href="#menu" className="text-foreground hover:text-primary transition-smooth font-medium py-2">Menu</a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium py-2">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium py-2">Contact</a>
              <div className="flex space-x-3 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button variant="hero" size="sm" className="flex-1 rounded-xl">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;