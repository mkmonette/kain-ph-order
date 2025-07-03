const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/10 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Enhanced Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary rounded-xl p-3 shadow-glow">
                <span className="text-primary-foreground font-bold text-2xl">🍽️</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-background">KainanPH</span>
                <div className="text-background/70 text-sm">Authentic Filipino Food Platform</div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Connecting Filipino food lovers with authentic local vendors. 
              Experience the true taste of the Philippines, delivered fresh to your doorstep.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth cursor-pointer">
                <span className="text-background">📘</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth cursor-pointer">
                <span className="text-background">📷</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth cursor-pointer">
                <span className="text-background">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-background">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-primary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">→</span> Home
              </a></li>
              <li><a href="#menu" className="text-background/70 hover:text-primary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">→</span> Menu
              </a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">→</span> About Us
              </a></li>
              <li><a href="#contact" className="text-background/70 hover:text-primary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">→</span> Contact
              </a></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-background">For Business</h3>
            <ul className="space-y-3">
              <li><a href="/business" className="text-background/70 hover:text-secondary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">🏪</span> Partner with Us
              </a></li>
              <li><a href="/business" className="text-background/70 hover:text-secondary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">📊</span> Business Dashboard
              </a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">💬</span> Support
              </a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-smooth flex items-center group">
                <span className="mr-2 group-hover:translate-x-1 transition-smooth">📚</span> Resources
              </a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              &copy; 2024 KainanPH. All rights reserved. Made with ❤️ for Filipino food lovers.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-smooth">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-background transition-smooth">Terms of Service</a>
              <a href="#" className="text-background/70 hover:text-background transition-smooth">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;