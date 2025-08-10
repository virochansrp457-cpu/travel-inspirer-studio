import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b sticky top-0 z-[100] backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 max-w-screen-xl overflow-hidden">
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
            <span>travel@anaytours.com</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4 gap-1 sm:gap-2 md:gap-4">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 min-w-0 max-w-[60%] lg:max-w-none">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary truncate sm:whitespace-nowrap">
              Anay Tours & Travels
            </div>
            
            <nav className="hidden xl:flex items-center gap-3">
              <Button variant="ghost" className="text-foreground hover:text-primary text-xs px-2 whitespace-nowrap">
                India Tours
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary text-xs px-2 whitespace-nowrap">
                International
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary text-xs px-2 whitespace-nowrap">
                Special Tours
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary text-xs px-2 whitespace-nowrap">
                Custom Holidays
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary text-xs px-2 whitespace-nowrap">
                Corporate
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <div className="hidden lg:flex items-center relative">
              <Input 
                placeholder="Search destinations..." 
                className="pr-10 w-40 xl:w-48"
              />
              <Search className="absolute right-3 w-4 h-4 text-muted-foreground" />
            </div>
            
            <Button variant="ghost" size="icon" className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button className="hidden sm:inline-flex travel-button flex-shrink-0 text-xs sm:text-sm px-2 sm:px-4">
              Book Now
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="xl:hidden flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full border-t bg-background shadow-lg z-50">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
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