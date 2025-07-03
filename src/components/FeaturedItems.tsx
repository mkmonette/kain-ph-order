import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredItems = [
  {
    id: 1,
    name: "Adobo Rice Bowl",
    description: "Tender pork adobo served with garlic rice and pickled vegetables",
    price: 120,
    image: "🍖",
    vendor: "Lola's Kitchen",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 2,
    name: "Sisig Sizzling Plate",
    description: "Crispy pork sisig on a hot plate with egg and chili",
    price: 150,
    image: "🔥",
    vendor: "Manila Grill",
    rating: 4.9,
    isPopular: false
  },
  {
    id: 3,
    name: "Pancit Canton",
    description: "Stir-fried noodles with vegetables, meat, and seafood",
    price: 100,
    image: "🍜",
    vendor: "Tita's Noodles",
    rating: 4.7,
    isPopular: true
  },
  {
    id: 4,
    name: "Lechon Kawali",
    description: "Crispy deep-fried pork belly with liver sauce",
    price: 180,
    image: "🥓",
    vendor: "Cebu Lechon House",
    rating: 4.9,
    isPopular: false
  },
  {
    id: 5,
    name: "Halo-Halo",
    description: "Classic Filipino dessert with mixed fruits, beans, and ice cream",
    price: 80,
    image: "🍧",
    vendor: "Sweet Treats PH",
    rating: 4.6,
    isPopular: true
  },
  {
    id: 6,
    name: "Lumpia Shanghai",
    description: "Crispy spring rolls filled with seasoned ground pork",
    price: 90,
    image: "🥢",
    vendor: "Golden Dragon",
    rating: 4.8,
    isPopular: false
  }
];

const FeaturedItems = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⭐ Featured Dishes
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Taste the Best of
            <span className="bg-gradient-market bg-clip-text text-transparent block">
              Filipino Cuisine
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each dish is lovingly prepared by our partner vendors using authentic recipes 
            and the freshest ingredients. Experience the true flavors of the Philippines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-glow transition-all duration-500 cursor-pointer border-border/30 bg-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* Enhanced Image placeholder */}
                  <div className="bg-gradient-subtle h-64 flex items-center justify-center text-7xl rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                    <span className="relative z-10 group-hover:scale-110 transition-bounce duration-500">
                      {item.image}
                    </span>
                  </div>
                  
                  {/* Enhanced Popular badge */}
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs px-3 py-2 rounded-full font-bold shadow-warm">
                      🔥 Popular
                    </div>
                  )}
                  
                  {/* Enhanced Price */}
                  <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-md shadow-glow rounded-xl px-4 py-2 border border-border/50">
                    <span className="text-primary font-bold text-lg">₱{item.price}</span>
                  </div>

                  {/* Rating overlay */}
                  <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-md rounded-lg px-3 py-1 border border-border/50">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-sm">⭐</span>
                      <span className="text-sm font-bold text-foreground">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">
                      by {item.vendor}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-secondary font-medium">Available</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="default" size="sm" className="flex-1 rounded-xl">
                      🛒 Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      👁️ View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-12 py-6 text-xl rounded-2xl">
            🍽️ View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;