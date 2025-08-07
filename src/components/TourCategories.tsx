import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mountainImage from "@/assets/mountain-adventure.jpg";
import beachImage from "@/assets/beach-paradise.jpg";
import cultureImage from "@/assets/cultural-europe.jpg";
import safariImage from "@/assets/safari-adventure.jpg";

const categories = [
  {
    id: 1,
    title: "Adventure Tours",
    description: "Thrilling mountain treks, hiking adventures, and adrenaline-pumping experiences",
    image: mountainImage,
    tours: "45+ Tours",
    gradient: "from-green-600/80 to-blue-600/80"
  },
  {
    id: 2,
    title: "Beach Destinations",
    description: "Pristine beaches, crystal waters, and tropical paradise getaways",
    image: beachImage,
    tours: "60+ Tours",
    gradient: "from-blue-500/80 to-cyan-400/80"
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Historic cities, ancient monuments, and rich cultural experiences",
    image: cultureImage,
    tours: "80+ Tours",
    gradient: "from-amber-600/80 to-orange-500/80"
  },
  {
    id: 4,
    title: "Wildlife Safari",
    description: "African safaris, wildlife encounters, and nature photography tours",
    image: safariImage,
    tours: "35+ Tours",
    gradient: "from-yellow-600/80 to-red-500/80"
  }
];

const TourCategories = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore by
            <span className="gradient-ocean bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated travel experiences designed to match your wanderlust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl hover-lift">
              <div className="aspect-[4/5] relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2 text-white/80">
                      {category.tours}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="self-start bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm transition-smooth group-hover:translate-x-1"
                  >
                    Explore Tours
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="travel-button-accent text-lg px-10 py-6">
            View All Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourCategories;