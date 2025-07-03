import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Package } from "lucide-react";

const BusinessCategories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Rice Meals",
      description: "Hearty rice dishes with your favorite ulam",
      icon: "🍚",
      itemCount: 12,
      active: true
    },
    {
      id: 2,
      name: "Noodles",
      description: "Pancit, ramen, and other noodle favorites",
      icon: "🍜",
      itemCount: 8,
      active: true
    },
    {
      id: 3,
      name: "Grilled & BBQ",
      description: "Smoky and flavorful grilled meats",
      icon: "🔥",
      itemCount: 6,
      active: true
    },
    {
      id: 4,
      name: "Street Food",
      description: "Classic Filipino street food favorites",
      icon: "🌭",
      itemCount: 10,
      active: false
    }
  ]);

  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    icon: "🍽️"
  });

  const availableIcons = ["🍚", "🍜", "🔥", "🌭", "🍧", "🥤", "🍖", "🥗", "🍰", "☕", "🍕", "🍔"];

  const handleAddCategory = () => {
    const category = {
      id: Date.now(),
      ...newCategory,
      itemCount: 0,
      active: true
    };
    setCategories([...categories, category]);
    setNewCategory({ name: "", description: "", icon: "🍽️" });
    setIsAddingCategory(false);
  };

  const handleEditCategory = (category: any) => {
    setEditingCategory(category);
  };

  const handleUpdateCategory = () => {
    setCategories(categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    ));
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const toggleCategoryStatus = (id: number) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, active: !cat.active } : cat
    ));
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category Management</CardTitle>
          <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Category Name</Label>
                  <Input
                    id="name"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Icon</Label>
                  <div className="grid grid-cols-6 gap-2 mt-2">
                    {availableIcons.map((icon) => (
                      <Button
                        key={icon}
                        variant={newCategory.icon === icon ? "default" : "outline"}
                        size="sm"
                        onClick={() => setNewCategory({...newCategory, icon})}
                        className="h-10 w-10 text-lg p-0"
                      >
                        {icon}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button onClick={handleAddCategory} className="w-full">Add Category</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className={`relative ${!category.active ? 'opacity-60' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-primary rounded-lg p-3 text-2xl">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{category.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Package className="h-4 w-4" />
                        <span>{category.itemCount} items</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          category.active 
                            ? 'bg-secondary text-secondary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {category.active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditCategory(category)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant={category.active ? "secondary" : "default"}
                      onClick={() => toggleCategoryStatus(category.id)}
                    >
                      {category.active ? "Deactivate" : "Activate"}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Category Dialog */}
      <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>
          {editingCategory && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Category Name</Label>
                <Input
                  id="edit-name"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingCategory.description}
                  onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                />
              </div>
              <div>
                <Label>Icon</Label>
                <div className="grid grid-cols-6 gap-2 mt-2">
                  {availableIcons.map((icon) => (
                    <Button
                      key={icon}
                      variant={editingCategory.icon === icon ? "default" : "outline"}
                      size="sm"
                      onClick={() => setEditingCategory({...editingCategory, icon})}
                      className="h-10 w-10 text-lg p-0"
                    >
                      {icon}
                    </Button>
                  ))}
                </div>
              </div>
              <Button onClick={handleUpdateCategory} className="w-full">Update Category</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusinessCategories;