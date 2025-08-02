
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vote, Users, Star } from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-orange-50 to-green-50">
      {/* Hero Banner Image */}
      <div className="relative w-full h-screen">
        <img 
          src="/lovable-uploads/6491487a-114a-4faa-b0a2-24f7e96fa054.png" 
          alt="Shravan Singh - BJP Leader Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              राष्ट्रवाद, विकास और सुशासन
              <span className="text-orange-400 block">भारतीय जनता पार्टी की पहचान</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our mission for national development, good governance, and inclusive growth. 
              Together we build a stronger India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Vote className="mr-2 h-5 w-5" />
                Join Our Movement
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3">
                Learn More
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Community Members</div>
              </Card>
              
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Vote className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Active Initiatives</div>
              </Card>
              
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Families Benefited</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
