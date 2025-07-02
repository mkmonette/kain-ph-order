import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Sarap ng
              <span className="text-primary block">Lutong Bahay</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Discover authentic Filipino flavors from your favorite local vendors. 
              Fresh, delicious, and delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Menu
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Local Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Filipino food spread" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card rounded-lg p-4 shadow-warm">
              <div className="text-sm text-muted-foreground">Today's Special</div>
              <div className="font-semibold text-foreground">Adobo Rice Bowl</div>
              <div className="text-primary font-bold">₱120</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-warm">
              <div className="text-sm text-muted-foreground">Free Delivery</div>
              <div className="font-semibold text-foreground">Orders ₱300+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;