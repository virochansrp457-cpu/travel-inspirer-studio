import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Toll Free: 1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Call us: +91-22-1234-5678</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Business hours: 10AM - 7PM</span>
            <span>travel@wanderlust.com</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-primary">
              Anay Tours & Travels
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                India Tours
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                International
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Special Tours
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Custom Holidays
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Corporate
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <Input 
                placeholder="Search destinations..." 
                className="pr-10 w-64"
              />
              <Search className="absolute right-3 w-4 h-4 text-muted-foreground" />
            </div>
            
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            
            <Button className="hidden md:inline-flex travel-button">
              Book Now
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              <Button variant="ghost" className="justify-start">
                India Tours
              </Button>
              <Button variant="ghost" className="justify-start">
                International
              </Button>
              <Button variant="ghost" className="justify-start">
                Special Tours
              </Button>
              <Button variant="ghost" className="justify-start">
                Custom Holidays
              </Button>
              <Button variant="ghost" className="justify-start">
                Corporate
              </Button>
              <div className="pt-4 border-t">
                <Button className="w-full travel-button">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;