import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Eye, Save, Palette } from "lucide-react";

const BusinessContent = () => {
  const [content, setContent] = useState({
    businessName: "Lola's Kitchen",
    tagline: "Authentic Filipino Home-Cooked Meals",
    heroTitle: "Taste the Flavors of Home",
    heroSubtitle: "Experience authentic Filipino cuisine made with love and traditional recipes passed down through generations.",
    aboutText: "We are a family-owned restaurant serving traditional Filipino dishes with a modern twist. Our recipes have been passed down through generations.",
    footer: "© 2024 Lola's Kitchen. All rights reserved.",
    logo: "",
    heroImage: ""
  });

  const [selectedTheme, setSelectedTheme] = useState("classic");
  const [isEditing, setIsEditing] = useState(false);

  const themes = [
    { id: "classic", name: "Classic Filipino", description: "Warm oranges and earth tones" },
    { id: "modern", name: "Modern Minimalist", description: "Clean whites and subtle accents" },
    { id: "vibrant", name: "Vibrant Market", description: "Bold colors and energetic feel" },
    { id: "sunset", name: "Manila Sunset", description: "Warm sunset gradients" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to backend and update live website
  };

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId);
    // TODO: Apply theme changes to live website
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Landing Page Content</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                "Edit Content"
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid grid-cols-3 bg-muted">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="theme">Theme</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              {/* Business Identity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Identity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={content.businessName}
                      onChange={(e) => setContent({...content, businessName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={content.tagline}
                      onChange={(e) => setContent({...content, tagline: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Hero Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="heroTitle">Hero Title</Label>
                    <Input
                      id="heroTitle"
                      value={content.heroTitle}
                      onChange={(e) => setContent({...content, heroTitle: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                    <Textarea
                      id="heroSubtitle"
                      value={content.heroSubtitle}
                      onChange={(e) => setContent({...content, heroSubtitle: e.target.value})}
                      disabled={!isEditing}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="aboutText">About Text</Label>
                    <Textarea
                      id="aboutText"
                      value={content.aboutText}
                      onChange={(e) => setContent({...content, aboutText: e.target.value})}
                      disabled={!isEditing}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Footer */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Footer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="footer">Footer Text</Label>
                    <Input
                      id="footer"
                      value={content.footer}
                      onChange={(e) => setContent({...content, footer: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="space-y-6">
              {/* Logo Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Logo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-primary rounded-lg flex items-center justify-center text-4xl text-primary-foreground">
                      🍽️
                    </div>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Logo
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Recommended size: 512x512px, PNG or JPG
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Hero Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hero Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-sunset rounded-lg flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <p className="text-lg font-semibold">Hero Image Preview</p>
                      <p className="text-sm opacity-80">Current hero image</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Hero Image
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Recommended size: 1920x1080px, JPG or PNG
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="theme" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Choose Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {themes.map((theme) => (
                      <Card 
                        key={theme.id} 
                        className={`cursor-pointer transition-all ${
                          selectedTheme === theme.id 
                            ? 'ring-2 ring-primary shadow-glow' 
                            : 'hover:shadow-card'
                        }`}
                        onClick={() => handleThemeChange(theme.id)}
                      >
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{theme.name}</h3>
                              {selectedTheme === theme.id && (
                                <div className="w-4 h-4 bg-primary rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{theme.description}</p>
                            
                            {/* Theme Preview */}
                            <div className="h-20 rounded-lg overflow-hidden">
                              {theme.id === "classic" && (
                                <div className="h-full bg-gradient-primary"></div>
                              )}
                              {theme.id === "modern" && (
                                <div className="h-full bg-gradient-to-r from-muted to-card"></div>
                              )}
                              {theme.id === "vibrant" && (
                                <div className="h-full bg-gradient-market"></div>
                              )}
                              {theme.id === "sunset" && (
                                <div className="h-full bg-gradient-sunset"></div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Theme Preview</h4>
                    <p className="text-sm text-muted-foreground">
                      Changes will be applied to your live website immediately after saving.
                      Your customers will see the new theme on their next visit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessContent;