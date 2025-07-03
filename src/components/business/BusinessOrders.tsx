import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle, Package } from "lucide-react";

const getStatusBadge = (status: string) => {
  const variants = {
    pending: { variant: "secondary" as const, icon: Clock, text: "Pending" },
    preparing: { variant: "default" as const, icon: Package, text: "Preparing" },
    ready: { variant: "secondary" as const, icon: CheckCircle, text: "Ready" },
    completed: { variant: "outline" as const, icon: CheckCircle, text: "Completed" },
    cancelled: { variant: "destructive" as const, icon: XCircle, text: "Cancelled" }
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

const BusinessOrders = () => {
  const [orders] = useState([
    {
      id: "ORD-001",
      customer: "Juan dela Cruz",
      items: ["Adobo Rice Bowl", "Sinigang Soup"],
      total: "₱350",
      status: "pending",
      time: "2 minutes ago",
      payment: "GCash"
    },
    {
      id: "ORD-002", 
      customer: "Maria Santos",
      items: ["Lechon Kawali", "Garlic Rice"],
      total: "₱425",
      status: "preparing",
      time: "15 minutes ago",
      payment: "Cash on Delivery"
    },
    {
      id: "ORD-003",
      customer: "Pedro Reyes",
      items: ["Kare-kare", "Steamed Rice"],
      total: "₱380",
      status: "ready",
      time: "25 minutes ago",
      payment: "Maya"
    },
    {
      id: "ORD-004",
      customer: "Ana Gonzales",
      items: ["Pancit Canton", "Lumpia"],
      total: "₱290",
      status: "completed",
      time: "1 hour ago",
      payment: "GCash"
    }
  ]);


  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // TODO: Update order status in backend
    console.log(`Order ${orderId} status changed to ${newStatus}`);
  };

  const filterOrders = (status?: string) => {
    if (!status) return orders;
    return orders.filter(order => order.status === status);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid grid-cols-5 bg-muted">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="preparing">Preparing</TabsTrigger>
              <TabsTrigger value="ready">Ready</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <OrderTable orders={orders} onStatusUpdate={updateOrderStatus} />
            </TabsContent>

            <TabsContent value="pending">
              <OrderTable orders={filterOrders("pending")} onStatusUpdate={updateOrderStatus} />
            </TabsContent>

            <TabsContent value="preparing">
              <OrderTable orders={filterOrders("preparing")} onStatusUpdate={updateOrderStatus} />
            </TabsContent>

            <TabsContent value="ready">
              <OrderTable orders={filterOrders("ready")} onStatusUpdate={updateOrderStatus} />
            </TabsContent>

            <TabsContent value="completed">
              <OrderTable orders={filterOrders("completed")} onStatusUpdate={updateOrderStatus} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const OrderTable = ({ orders, onStatusUpdate }: { 
  orders: any[], 
  onStatusUpdate: (orderId: string, status: string) => void 
}) => (
  <div className="border rounded-lg">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Payment</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <div className="space-y-1">
                {order.items.map((item: string, idx: number) => (
                  <div key={idx} className="text-sm">{item}</div>
                ))}
              </div>
            </TableCell>
            <TableCell className="font-semibold">{order.total}</TableCell>
            <TableCell>{order.payment}</TableCell>
            <TableCell>
              {getStatusBadge(order.status)}
            </TableCell>
            <TableCell className="text-muted-foreground">{order.time}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                {order.status === "pending" && (
                  <Button 
                    size="sm" 
                    onClick={() => onStatusUpdate(order.id, "preparing")}
                  >
                    Accept
                  </Button>
                )}
                {order.status === "preparing" && (
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => onStatusUpdate(order.id, "ready")}
                  >
                    Ready
                  </Button>
                )}
                {order.status === "ready" && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onStatusUpdate(order.id, "completed")}
                  >
                    Complete
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default BusinessOrders;