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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Food Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse selection of Filipino cuisine categories. 
            From traditional favorites to modern interpretations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-warm transition-smooth cursor-pointer border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${category.color} rounded-lg p-3 text-2xl group-hover:scale-110 transition-bounce`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {category.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {category.count} dishes available
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;