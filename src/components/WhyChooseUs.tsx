import { Shield, Award, Headphones, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "25+ Years of Trust",
    description: "Established travel company with proven track record of delivering exceptional experiences"
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in travel services and customer satisfaction"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your journey is smooth and worry-free"
  },
  {
    icon: Heart,
    title: "Passionate Experts",
    description: "Our travel experts craft personalized experiences tailored to your dreams"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose WanderLust?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We don't just plan trips, we create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-smooth hover-lift">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer testimonial */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="text-white/90 text-xl md:text-2xl italic mb-6 leading-relaxed">
              "WanderLust turned our dream vacation into reality. From the moment we contacted them 
              to the day we returned, everything was perfectly organized. The memories we created 
              will last a lifetime!"
            </div>
            <div className="text-white font-semibold">
              — Priya & Rohit Sharma, Mumbai
            </div>
            <div className="text-white/70 text-sm mt-2">
              European Grand Tour, September 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;