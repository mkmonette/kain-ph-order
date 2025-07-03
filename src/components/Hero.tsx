import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-subtle">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-market opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-sunset opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🇵🇭 Authentic Filipino Cuisine
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight">
                Sarap ng{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Lutong Bahay
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Discover authentic Filipino flavors from your favorite local vendors. 
              Fresh, delicious meals delivered straight to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 rounded-2xl shadow-glow">
                🛒 Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 rounded-2xl">
                📱 Browse Menu
              </Button>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-muted-foreground font-medium">Local Vendors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-market bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-muted-foreground font-medium">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium">Delivery</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative lg:order-last order-first">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-glow transform hover:scale-105 transition-smooth">
                <img 
                  src={heroImage} 
                  alt="Filipino food spread" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-warm border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <div className="text-sm text-muted-foreground">Today's Special</div>
                </div>
                <div className="text-lg font-bold text-foreground mt-1">Adobo Rice Bowl</div>
                <div className="text-2xl font-bold text-primary">₱120</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-warm border border-border/50 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🚚</div>
                  <div>
                    <div className="text-sm text-muted-foreground">Free Delivery</div>
                    <div className="font-bold text-foreground">Orders ₱300+</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-warm border border-border/50 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
                <div className="text-sm font-semibold text-foreground">4.9/5 Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;