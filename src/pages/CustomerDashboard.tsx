import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, ShoppingBag, Settings } from "lucide-react";
import CustomerProfile from "@/components/customer/CustomerProfile";
import CustomerOrders from "@/components/customer/CustomerOrders";
import CustomerSettings from "@/components/customer/CustomerSettings";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const stats = [
    { title: "Total Orders", value: "12", color: "text-primary" },
    { title: "Favorite Items", value: "8", color: "text-secondary" },
    { title: "Points Earned", value: "350", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Account</h1>
          <p className="text-muted-foreground">Manage your profile and orders</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="shadow-card border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 bg-card">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <CustomerProfile />
          </TabsContent>

          <TabsContent value="orders">
            <CustomerOrders />
          </TabsContent>

          <TabsContent value="settings">
            <CustomerSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerDashboard;