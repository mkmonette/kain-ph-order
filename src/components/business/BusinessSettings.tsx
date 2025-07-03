import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, Banknote, Shield, Bell, Store } from "lucide-react";

const BusinessSettings = () => {
  const [paymentSettings, setPaymentSettings] = useState({
    paymongo: { enabled: true, publicKey: "pk_test_***", secretKey: "sk_test_***" },
    gcash: { enabled: true },
    maya: { enabled: true },
    cashOnDelivery: { enabled: true },
    bankTransfer: { enabled: false, details: "" }
  });

  const [businessSettings, setBusinessSettings] = useState({
    autoAcceptOrders: false,
    minOrderAmount: 100,
    deliveryFee: 50,
    estimatedPrepTime: 30,
    maxDailyOrders: 100,
    vacationMode: false
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    dailyReports: false,
    customerReviews: true
  });

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Business Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="payments" className="space-y-6">
            <TabsList className="grid grid-cols-3 bg-muted">
              <TabsTrigger value="payments">Payment Methods</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="payments" className="space-y-6">
              {/* PayMongo Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CreditCard className="h-5 w-5 mr-2" />
                    PayMongo Integration
                    <Badge variant={paymentSettings.paymongo.enabled ? "secondary" : "outline"} className="ml-2">
                      {paymentSettings.paymongo.enabled ? "Active" : "Inactive"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable PayMongo Payments</p>
                      <p className="text-sm text-muted-foreground">Accept credit cards, debit cards, and e-wallets</p>
                    </div>
                    <Switch
                      checked={paymentSettings.paymongo.enabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({
                          ...paymentSettings,
                          paymongo: { ...paymentSettings.paymongo, enabled: checked }
                        })
                      }
                    />
                  </div>
                  
                  {paymentSettings.paymongo.enabled && (
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <Label htmlFor="paymongo-public">Public Key</Label>
                        <Input
                          id="paymongo-public"
                          type="password"
                          value={paymentSettings.paymongo.publicKey}
                          onChange={(e) => setPaymentSettings({
                            ...paymentSettings,
                            paymongo: { ...paymentSettings.paymongo, publicKey: e.target.value }
                          })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="paymongo-secret">Secret Key</Label>
                        <Input
                          id="paymongo-secret"
                          type="password"
                          value={paymentSettings.paymongo.secretKey}
                          onChange={(e) => setPaymentSettings({
                            ...paymentSettings,
                            paymongo: { ...paymentSettings.paymongo, secretKey: e.target.value }
                          })}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* E-Wallet Payments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Smartphone className="h-5 w-5 mr-2" />
                    E-Wallet Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        G
                      </div>
                      <div>
                        <p className="font-medium">GCash</p>
                        <p className="text-sm text-muted-foreground">Philippine mobile wallet</p>
                      </div>
                    </div>
                    <Switch
                      checked={paymentSettings.gcash.enabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({
                          ...paymentSettings,
                          gcash: { enabled: checked }
                        })
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <div>
                        <p className="font-medium">Maya (PayMaya)</p>
                        <p className="text-sm text-muted-foreground">Digital payment platform</p>
                      </div>
                    </div>
                    <Switch
                      checked={paymentSettings.maya.enabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({
                          ...paymentSettings,
                          maya: { enabled: checked }
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Manual Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Banknote className="h-5 w-5 mr-2" />
                    Manual Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Accept cash payments upon delivery</p>
                    </div>
                    <Switch
                      checked={paymentSettings.cashOnDelivery.enabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({
                          ...paymentSettings,
                          cashOnDelivery: { enabled: checked }
                        })
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Accept bank transfers</p>
                    </div>
                    <Switch
                      checked={paymentSettings.bankTransfer.enabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({
                          ...paymentSettings,
                          bankTransfer: { ...paymentSettings.bankTransfer, enabled: checked }
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="operations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Store className="h-5 w-5 mr-2" />
                    Operational Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-accept Orders</p>
                      <p className="text-sm text-muted-foreground">Automatically accept incoming orders</p>
                    </div>
                    <Switch
                      checked={businessSettings.autoAcceptOrders}
                      onCheckedChange={(checked) => 
                        setBusinessSettings({...businessSettings, autoAcceptOrders: checked})
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minOrder">Minimum Order Amount (₱)</Label>
                      <Input
                        id="minOrder"
                        type="number"
                        value={businessSettings.minOrderAmount}
                        onChange={(e) => setBusinessSettings({
                          ...businessSettings,
                          minOrderAmount: Number(e.target.value)
                        })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="deliveryFee">Delivery Fee (₱)</Label>
                      <Input
                        id="deliveryFee"
                        type="number"
                        value={businessSettings.deliveryFee}
                        onChange={(e) => setBusinessSettings({
                          ...businessSettings,
                          deliveryFee: Number(e.target.value)
                        })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="prepTime">Estimated Prep Time (minutes)</Label>
                      <Input
                        id="prepTime"
                        type="number"
                        value={businessSettings.estimatedPrepTime}
                        onChange={(e) => setBusinessSettings({
                          ...businessSettings,
                          estimatedPrepTime: Number(e.target.value)
                        })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="maxOrders">Max Daily Orders</Label>
                      <Input
                        id="maxOrders"
                        type="number"
                        value={businessSettings.maxDailyOrders}
                        onChange={(e) => setBusinessSettings({
                          ...businessSettings,
                          maxDailyOrders: Number(e.target.value)
                        })}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-medium">Vacation Mode</p>
                      <p className="text-sm text-muted-foreground">Temporarily stop accepting new orders</p>
                    </div>
                    <Switch
                      checked={businessSettings.vacationMode}
                      onCheckedChange={(checked) => 
                        setBusinessSettings({...businessSettings, vacationMode: checked})
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Orders</p>
                      <p className="text-sm text-muted-foreground">Get notified when new orders arrive</p>
                    </div>
                    <Switch
                      checked={notifications.newOrders}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, newOrders: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Low Stock Alerts</p>
                      <p className="text-sm text-muted-foreground">Alert when menu items are running low</p>
                    </div>
                    <Switch
                      checked={notifications.lowStock}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, lowStock: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Reports</p>
                      <p className="text-sm text-muted-foreground">Receive daily sales and performance reports</p>
                    </div>
                    <Switch
                      checked={notifications.dailyReports}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, dailyReports: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Customer Reviews</p>
                      <p className="text-sm text-muted-foreground">Get notified of new customer reviews</p>
                    </div>
                    <Switch
                      checked={notifications.customerReviews}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, customerReviews: checked})
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="pt-6 border-t border-border">
            <Button className="w-full">Save All Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessSettings;