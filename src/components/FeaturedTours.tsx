import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, MapPin } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Magical Kerala Backwaters",
    location: "Kerala, India",
    duration: "8 Days | 7 Nights",
    price: "₹45,000",
    originalPrice: "₹55,000",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    group: "Small Group"
  },
  {
    id: 2,
    title: "European Grand Tour",
    location: "Europe Multi-City",
    duration: "15 Days | 14 Nights",
    price: "₹1,85,000",
    originalPrice: "₹2,25,000",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
    group: "Family Tours"
  },
  {
    id: 3,
    title: "Himalayan Adventure Trek",
    location: "Himachal Pradesh, India",
    duration: "12 Days | 11 Nights",
    price: "₹65,000",
    originalPrice: "₹78,000",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    badge: "Adventure",
    group: "Adventure Group"
  }
];

const FeaturedTours = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="gradient-sunset bg-clip-text text-transparent"> Tours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked experiences that promise unforgettable memories and exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="travel-card group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {tour.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {tour.group}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                    <span className="font-semibold mr-1">{tour.rating}</span>
                    <span className="text-muted-foreground">({tour.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground line-through">
                      {tour.originalPrice}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {tour.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per person
                    </div>
                  </div>
                  <Button className="travel-button-secondary">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="travel-button text-lg px-10 py-6">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;