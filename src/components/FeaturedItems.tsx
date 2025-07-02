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
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Taste the best of Filipino cuisine from our partner vendors. 
            Each dish is prepared with love and authentic flavors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-warm transition-smooth cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Image placeholder */}
                  <div className="bg-gradient-subtle h-48 flex items-center justify-center text-6xl rounded-t-lg">
                    {item.image}
                  </div>
                  
                  {/* Popular badge */}
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-semibold">
                      Popular
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="absolute top-4 right-4 bg-card shadow-card rounded-lg px-3 py-1">
                    <span className="text-primary font-bold">₱{item.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="text-xs text-muted-foreground mb-4">
                    by {item.vendor}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;