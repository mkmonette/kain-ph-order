import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Shield, CreditCard, MapPin, Trash2 } from "lucide-react";

const CustomerSettings = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newMenuItems: true,
    deliveryReminders: true,
    emailNotifications: true,
    smsNotifications: false
  });

  const [preferences, setPreferences] = useState({
    defaultPaymentMethod: "gcash",
    language: "en",
    currency: "php",
    dietaryRestrictions: "",
    allergies: ""
  });

  const [addresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "123 Rizal Street, Makati City",
      isDefault: true
    },
    {
      id: 2,
      label: "Office",
      address: "456 Ayala Avenue, Makati City", 
      isDefault: false
    }
  ]);

  const [paymentMethods] = useState([
    {
      id: 1,
      type: "GCash",
      number: "**** **** 6789",
      isDefault: true
    },
    {
      id: 2,
      type: "Maya",
      number: "**** **** 1234",
      isDefault: false
    }
  ]);

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="notifications" className="space-y-6">
            <TabsList className="grid grid-cols-4 bg-muted">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
                    </div>
                    <Switch
                      checked={notifications.orderUpdates}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, orderUpdates: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Promotions & Offers</p>
                      <p className="text-sm text-muted-foreground">Receive special offers and discounts</p>
                    </div>
                    <Switch
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, promotions: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Menu Items</p>
                      <p className="text-sm text-muted-foreground">Be the first to know about new dishes</p>
                    </div>
                    <Switch
                      checked={notifications.newMenuItems}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, newMenuItems: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Delivery Reminders</p>
                      <p className="text-sm text-muted-foreground">Get reminded when your order is nearby</p>
                    </div>
                    <Switch
                      checked={notifications.deliveryReminders}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, deliveryReminders: checked})
                      }
                    />
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-3">Notification Methods</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, emailNotifications: checked})
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                        </div>
                        <Switch
                          checked={notifications.smsNotifications}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, smsNotifications: checked})
                          }
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">App Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fil">Filipino</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select value={preferences.currency} onValueChange={(value) => setPreferences({...preferences, currency: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="php">Philippine Peso (₱)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="defaultPayment">Default Payment Method</Label>
                    <Select value={preferences.defaultPaymentMethod} onValueChange={(value) => setPreferences({...preferences, defaultPaymentMethod: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gcash">GCash</SelectItem>
                        <SelectItem value="maya">Maya</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="dietary">Dietary Restrictions</Label>
                    <Input
                      id="dietary"
                      value={preferences.dietaryRestrictions}
                      onChange={(e) => setPreferences({...preferences, dietaryRestrictions: e.target.value})}
                      placeholder="e.g., Vegetarian, Halal, Keto"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="allergies">Food Allergies</Label>
                    <Input
                      id="allergies"
                      value={preferences.allergies}
                      onChange={(e) => setPreferences({...preferences, allergies: e.target.value})}
                      placeholder="e.g., Nuts, Seafood, Dairy"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="h-5 w-5 mr-2" />
                    Delivery Addresses
                  </CardTitle>
                  <Button>Add Address</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="font-medium">{address.label}</p>
                            {address.isDefault && (
                              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{address.address}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Methods
                  </CardTitle>
                  <Button>Add Payment Method</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {method.type[0]}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="font-medium">{method.type}</p>
                              {method.isDefault && (
                                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{method.number}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Shield className="h-5 w-5 mr-2" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Change Password</h4>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h4 className="font-medium mb-4">Account Actions</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Download My Data
                      </Button>
                      <Button variant="destructive" className="w-full justify-start">
                        Delete Account
                      </Button>
                    </div>
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

export default CustomerSettings;