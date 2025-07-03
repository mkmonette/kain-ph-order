import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  ShoppingBag, 
  Settings, 
  Menu as MenuIcon,
  User,
  FileText,
  PaintBucket,
  Tag
} from "lucide-react";
import BusinessProfile from "@/components/business/BusinessProfile";
import BusinessOrders from "@/components/business/BusinessOrders";
import BusinessAnalytics from "@/components/business/BusinessAnalytics";
import BusinessMenu from "@/components/business/BusinessMenu";
import BusinessCategories from "@/components/business/BusinessCategories";
import BusinessContent from "@/components/business/BusinessContent";
import BusinessSettings from "@/components/business/BusinessSettings";

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Orders", value: "156", icon: ShoppingBag, color: "text-primary" },
    { title: "Revenue Today", value: "₱12,500", icon: BarChart3, color: "text-secondary" },
    { title: "Active Customers", value: "89", icon: Users, color: "text-accent" },
    { title: "Menu Items", value: "45", icon: MenuIcon, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Business Dashboard</h1>
          <p className="text-muted-foreground">Manage your food business</p>
        </div>

        {/* Overview Stats */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-7 bg-card">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center gap-2">
              <MenuIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span className="hidden sm:inline">Categories</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <PaintBucket className="h-4 w-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" onClick={() => setActiveTab("menu")}>
                      Add Menu Item
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("orders")}>
                      View Orders
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("analytics")}>
                      View Analytics
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("settings")}>
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <BusinessProfile />
          </TabsContent>

          <TabsContent value="orders">
            <BusinessOrders />
          </TabsContent>

          <TabsContent value="analytics">
            <BusinessAnalytics />
          </TabsContent>

          <TabsContent value="menu">
            <BusinessMenu />
          </TabsContent>

          <TabsContent value="categories">
            <BusinessCategories />
          </TabsContent>

          <TabsContent value="content">
            <BusinessContent />
          </TabsContent>

          <TabsContent value="settings">
            <BusinessSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessDashboard;