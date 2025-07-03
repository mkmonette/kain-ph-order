import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Star } from "lucide-react";

const BusinessAnalytics = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₱45,250",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      period: "This month"
    },
    {
      title: "Total Orders",
      value: "342",
      change: "+8.2%", 
      trend: "up",
      icon: ShoppingBag,
      period: "This month"
    },
    {
      title: "New Customers",
      value: "28",
      change: "-2.1%",
      trend: "down", 
      icon: Users,
      period: "This week"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.3",
      trend: "up",
      icon: Star,
      period: "Overall"
    }
  ];

  const topItems = [
    { name: "Adobo Rice Bowl", orders: 45, revenue: "₱6,750" },
    { name: "Lechon Kawali", orders: 38, revenue: "₱7,600" },
    { name: "Sinigang Soup", orders: 32, revenue: "₱4,800" },
    { name: "Kare-kare", orders: 28, revenue: "₱5,320" },
    { name: "Pancit Canton", orders: 25, revenue: "₱3,750" }
  ];

  const recentActivity = [
    { time: "2 min ago", activity: "New order from Juan dela Cruz", amount: "₱350" },
    { time: "15 min ago", activity: "Order completed for Maria Santos", amount: "₱425" },
    { time: "32 min ago", activity: "New customer registered", amount: "" },
    { time: "1 hr ago", activity: "Payment received via GCash", amount: "₱290" },
    { time: "2 hr ago", activity: "Menu item updated: Adobo Rice Bowl", amount: "" }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <Card key={metric.title} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-secondary" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      )}
                      <span className={`text-sm ${metric.trend === "up" ? "text-secondary" : "text-destructive"}`}>
                        {metric.change}
                      </span>
                      <span className="text-sm text-muted-foreground">{metric.period}</span>
                    </div>
                  </div>
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Items */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Top Selling Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topItems.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{item.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start justify-between p-3 border-l-2 border-primary/20 pl-4">
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  {activity.amount && (
                    <Badge variant="secondary" className="ml-2">
                      {activity.amount}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart Placeholder */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Sales chart will be displayed here</p>
              <p className="text-sm text-muted-foreground">Connect to analytics service for detailed charts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessAnalytics;