const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <span className="text-primary-foreground font-bold text-xl">🍽️</span>
              </div>
              <span className="text-xl font-bold">KainanPH</span>
            </div>
            <p className="text-background/70 text-sm">
              Connecting Filipino food lovers with authentic local vendors. 
              Taste the Philippines, one order at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-background/70 hover:text-background transition-smooth">Home</a></li>
              <li><a href="#menu" className="text-background/70 hover:text-background transition-smooth">Menu</a></li>
              <li><a href="#about" className="text-background/70 hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h3 className="font-semibold mb-4">For Vendors</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Partner with Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Vendor Dashboard</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Support</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Order Tracking</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2024 KainanPH. All rights reserved. Made with ❤️ for Filipino food lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;