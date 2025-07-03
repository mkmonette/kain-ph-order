import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, Package, Star, RotateCcw } from "lucide-react";

const getStatusBadge = (status: string) => {
  const variants = {
    pending: { variant: "secondary" as const, icon: Clock, text: "Pending", color: "text-yellow-600" },
    preparing: { variant: "default" as const, icon: Package, text: "Preparing", color: "text-blue-600" },
    delivered: { variant: "outline" as const, icon: CheckCircle, text: "Delivered", color: "text-green-600" },
    cancelled: { variant: "destructive" as const, icon: Clock, text: "Cancelled", color: "text-red-600" }
  };
  
  const config = variants[status as keyof typeof variants];
  const IconComponent = config.icon;
  
  return (
    <Badge variant={config.variant} className="flex items-center gap-1">
      <IconComponent className="h-3 w-3" />
      {config.text}
    </Badge>
  );
};

const CustomerOrders = () => {
  const [orders] = useState([
    {
      id: "ORD-001",
      restaurant: "Lola's Kitchen",
      items: [
        { name: "Adobo Rice Bowl", quantity: 1, price: 150 },
        { name: "Sinigang Soup", quantity: 1, price: 120 }
      ],
      total: 320,
      status: "delivered",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-15",
      paymentMethod: "GCash",
      rating: 5
    },
    {
      id: "ORD-002",
      restaurant: "Lola's Kitchen", 
      items: [
        { name: "Lechon Kawali", quantity: 1, price: 200 },
        { name: "Garlic Rice", quantity: 1, price: 80 }
      ],
      total: 330,
      status: "preparing",
      orderDate: "2024-01-20",
      deliveryDate: null,
      paymentMethod: "Cash on Delivery",
      rating: null
    },
    {
      id: "ORD-003",
      restaurant: "Lola's Kitchen",
      items: [
        { name: "Kare-kare", quantity: 1, price: 180 },
        { name: "Steamed Rice", quantity: 2, price: 60 }
      ],
      total: 290,
      status: "cancelled",
      orderDate: "2024-01-18",
      deliveryDate: null,
      paymentMethod: "Maya",
      rating: null
    }
  ]);


  const filterOrders = (status?: string) => {
    if (!status) return orders;
    return orders.filter(order => order.status === status);
  };

  const handleReorder = (orderId: string) => {
    console.log(`Reordering ${orderId}`);
    // TODO: Add items to cart and redirect to checkout
  };

  const handleRateOrder = (orderId: string) => {
    console.log(`Rating order ${orderId}`);
    // TODO: Open rating dialog
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid grid-cols-4 bg-muted">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="preparing">Active</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <OrderList orders={orders} onReorder={handleReorder} onRate={handleRateOrder} />
            </TabsContent>

            <TabsContent value="delivered">
              <OrderList orders={filterOrders("delivered")} onReorder={handleReorder} onRate={handleRateOrder} />
            </TabsContent>

            <TabsContent value="preparing">
              <OrderList orders={filterOrders("preparing")} onReorder={handleReorder} onRate={handleRateOrder} />
            </TabsContent>

            <TabsContent value="cancelled">
              <OrderList orders={filterOrders("cancelled")} onReorder={handleReorder} onRate={handleRateOrder} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const OrderList = ({ orders, onReorder, onRate }: { 
  orders: any[], 
  onReorder: (orderId: string) => void,
  onRate: (orderId: string) => void
}) => (
  <div className="space-y-4">
    {orders.length === 0 ? (
      <div className="text-center py-8">
        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No orders found</p>
      </div>
    ) : (
      orders.map((order) => (
        <Card key={order.id} className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-foreground">{order.id}</h3>
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{order.restaurant}</p>
                
                <div className="space-y-1 mb-3">
                  {order.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>₱{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Payment: {order.paymentMethod}</span>
                  <span className="font-semibold text-primary">Total: ₱{order.total}</span>
                </div>
                
                {order.rating && (
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-muted-foreground mr-2">Your rating:</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < order.rating 
                              ? 'text-accent fill-current' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                {order.status === "delivered" && !order.rating && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onRate(order.id)}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Rate Order
                  </Button>
                )}
                
                {order.status === "delivered" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onReorder(order.id)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reorder
                  </Button>
                )}
                
                {order.status === "preparing" && (
                  <Button variant="outline" size="sm">
                    Track Order
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))
    )}
  </div>
);

export default CustomerOrders;