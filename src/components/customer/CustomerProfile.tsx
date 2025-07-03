import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Phone, Mail, Calendar, Star, Upload } from "lucide-react";

const CustomerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Juan",
    lastName: "Dela Cruz",
    email: "juan@email.com",
    phone: "+63 912 345 6789",
    address: "123 Rizal Street, Makati City",
    dateJoined: "January 2024",
    avatar: ""
  });

  const [stats] = useState({
    totalOrders: 12,
    favoriteItems: 8,
    pointsEarned: 350,
    membershipLevel: "Silver",
    averageRating: 4.8
  });

  const favoriteItems = [
    { name: "Adobo Rice Bowl", orders: 4, lastOrdered: "2 days ago" },
    { name: "Lechon Kawali", orders: 3, lastOrdered: "1 week ago" },
    { name: "Sinigang Soup", orders: 2, lastOrdered: "3 days ago" },
    { name: "Kare-kare", orders: 2, lastOrdered: "1 week ago" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to backend
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Profile Information</CardTitle>
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} />
                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                  {profile.firstName[0]}{profile.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              )}
              <Badge variant="secondary" className="text-sm">
                {stats.membershipLevel} Member
              </Badge>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    disabled={!isEditing}
                  />
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
              </div>

              <div>
                <Label htmlFor="address">Delivery Address</Label>
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

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined {profile.dateJoined}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-accent fill-current" />
                  {stats.averageRating} rating
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{stats.totalOrders}</p>
            <p className="text-sm text-muted-foreground">Total Orders</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-secondary">{stats.favoriteItems}</p>
            <p className="text-sm text-muted-foreground">Favorite Items</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-accent">{stats.pointsEarned}</p>
            <p className="text-sm text-muted-foreground">Points Earned</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <Badge variant="secondary" className="text-lg font-bold">
              {stats.membershipLevel}
            </Badge>
            <p className="text-sm text-muted-foreground">Membership</p>
          </CardContent>
        </Card>
      </div>

      {/* Favorite Items */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Favorite Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {favoriteItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-lg text-primary-foreground">
                    🍽️
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Ordered {item.orders} times • Last: {item.lastOrdered}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Order Again
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerProfile;