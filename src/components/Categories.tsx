import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Rice Meals",
    description: "Hearty rice dishes with your favorite ulam",
    icon: "🍚",
    count: 45,
    color: "bg-gradient-primary"
  },
  {
    id: 2,
    name: "Noodles",
    description: "Pancit, ramen, and other noodle favorites",
    icon: "🍜",
    count: 28,
    color: "bg-gradient-market"
  },
  {
    id: 3,
    name: "Grilled & BBQ",
    description: "Smoky and flavorful grilled meats",
    icon: "🔥",
    count: 32,
    color: "bg-gradient-sunset"
  },
  {
    id: 4,
    name: "Street Food",
    description: "Classic Filipino street food favorites",
    icon: "🌭",
    count: 38,
    color: "bg-gradient-primary"
  },
  {
    id: 5,
    name: "Desserts",
    description: "Sweet treats and traditional kakanin",
    icon: "🍧",
    count: 22,
    color: "bg-gradient-market"
  },
  {
    id: 6,
    name: "Beverages",
    description: "Fresh juices, coffee, and local drinks",
    icon: "🥤",
    count: 25,
    color: "bg-gradient-sunset"
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🍽️ Food Categories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Explore Authentic
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Filipino Flavors
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our diverse selection of Filipino cuisine categories. 
            From traditional lutong bahay to modern interpretations of classic dishes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-glow transition-all duration-500 cursor-pointer border-border/30 bg-card/50 backdrop-blur-sm hover:-translate-y-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`${category.color} rounded-2xl p-4 text-4xl group-hover:scale-110 transition-bounce inline-flex items-center justify-center w-20 h-20 shadow-card`}>
                    {category.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-bold">
                    {category.count}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground font-medium">
                      {category.count} dishes available
                    </span>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <span className="text-primary text-sm">→</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;