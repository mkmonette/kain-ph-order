import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Upload, Star } from "lucide-react";

const BusinessMenu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Adobo Rice Bowl",
      description: "Classic Filipino adobo with steamed rice",
      price: 150,
      category: "Rice Meals",
      image: "",
      available: true,
      rating: 4.8,
      orders: 45
    },
    {
      id: 2,
      name: "Lechon Kawali",
      description: "Crispy pork belly with garlic rice",
      price: 200,
      category: "Rice Meals", 
      image: "",
      available: true,
      rating: 4.9,
      orders: 38
    },
    {
      id: 3,
      name: "Sinigang Soup",
      description: "Sour tamarind soup with vegetables",
      price: 120,
      category: "Soups",
      image: "",
      available: false,
      rating: 4.7,
      orders: 32
    }
  ]);

  const [isAddingItem, setIsAddingItem] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    available: true
  });

  const categories = ["Rice Meals", "Noodles", "Soups", "Grilled & BBQ", "Street Food", "Desserts", "Beverages"];

  const handleAddItem = () => {
    const item = {
      id: Date.now(),
      ...newItem,
      rating: 0,
      orders: 0
    };
    setMenuItems([...menuItems, item]);
    setNewItem({ name: "", description: "", price: 0, category: "", image: "", available: true });
    setIsAddingItem(false);
  };

  const handleEditItem = (item: any) => {
    setEditingItem(item);
  };

  const handleUpdateItem = () => {
    setMenuItems(menuItems.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    setEditingItem(null);
  };

  const handleDeleteItem = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const toggleAvailability = (id: number) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Menu Management</CardTitle>
          <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Menu Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Menu Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Item Name</Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price (₱)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newItem.category} onValueChange={(value) => setNewItem({...newItem, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Image</Label>
                  <Button variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
                <Button onClick={handleAddItem} className="w-full">Add Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className={`relative ${!item.available ? 'opacity-60' : ''}`}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-gradient-primary rounded-lg mb-4 flex items-center justify-center text-4xl text-primary-foreground">
                    🍽️
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <Badge variant={item.available ? "secondary" : "outline"}>
                        {item.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">₱{item.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm text-foreground">{item.rating}</span>
                        <span className="text-sm text-muted-foreground">({item.orders})</span>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditItem(item)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant={item.available ? "secondary" : "default"}
                        onClick={() => toggleAvailability(item.id)}
                      >
                        {item.available ? "Disable" : "Enable"}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Item Dialog */}
      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
          </DialogHeader>
          {editingItem && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Item Name</Label>
                <Input
                  id="edit-name"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-price">Price (₱)</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={editingItem.price}
                  onChange={(e) => setEditingItem({...editingItem, price: Number(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="edit-category">Category</Label>
                <Select value={editingItem.category} onValueChange={(value) => setEditingItem({...editingItem, category: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleUpdateItem} className="w-full">Update Item</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusinessMenu;