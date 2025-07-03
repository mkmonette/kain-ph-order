import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, MapPin, Clock, Phone, Mail } from "lucide-react";

const BusinessProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    businessName: "Lola's Kitchen",
    description: "Authentic Filipino home-cooked meals",
    address: "123 Rizal Street, Makati City",
    phone: "+63 912 345 6789",
    email: "lolaskitchen@email.com",
    hours: "8:00 AM - 10:00 PM",
    logo: "",
  });

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to backend
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Business Profile</CardTitle>
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-4xl text-primary-foreground">
              🍽️
            </div>
            {isEditing && (
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Logo
              </Button>
            )}
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                value={profile.businessName}
                onChange={(e) => setProfile({...profile, businessName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="hours">Operating Hours</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="hours"
                  value={profile.hours}
                  onChange={(e) => setProfile({...profile, hours: e.target.value})}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                disabled={!isEditing}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={profile.description}
              onChange={(e) => setProfile({...profile, description: e.target.value})}
              disabled={!isEditing}
              rows={3}
            />
          </div>

          {/* Business Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">156</p>
              <p className="text-sm text-muted-foreground">Orders</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">89</p>
              <p className="text-sm text-muted-foreground">Customers</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary">Active</Badge>
              <p className="text-sm text-muted-foreground">Status</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessProfile;