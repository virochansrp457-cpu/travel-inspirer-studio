import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Newsletter section */}
        <div className="py-16 border-b border-background/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Travel Deals</h3>
            <p className="text-background/80 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, 
              new destinations, and travel tips.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-background/10 border-background/30 text-background placeholder:text-background/60"
            />
            <Button className="travel-button-accent whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold mb-6 text-background">
                Anay Tours & Travels
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Your trusted travel companion for over years. We create extraordinary 
                journeys that inspire, connect, and transform.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="hover:bg-background/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-background/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-background/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-background/10">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-background">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Our Services</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Group Tours</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Custom Holidays</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Travel Insurance</a></li>
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-background">Popular Destinations</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kerala</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Rajasthan</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Himachal Pradesh</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Europe</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Southeast Asia</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Andaman</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-background">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <div className="text-background/80">
                    <div>123 Travel Street,</div>
                    <div>Mumbai, Maharashtra 400001</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="text-background/80">
                    <div>Toll Free: 1800-123-4567</div>
                    <div>Direct: +91-22-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="text-background/80">
                    travel@anaytours.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Anay Tours & Travels. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;