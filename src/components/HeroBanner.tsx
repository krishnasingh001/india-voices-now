
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vote, Users, Star } from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-orange-50 to-green-50">
      {/* Hero Banner Image */}
      <div className="relative w-full h-screen">
        <img 
          src="/india-voices-now/lovable-uploads/6491487a-114a-4faa-b0a2-24f7e96fa054.png" 
          alt="Shravan Singh - BJP Leader Banner"
          className="w-full h-full object-contain bg-gradient-to-r from-orange-100 to-yellow-100"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-16 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              राष्ट्रवाद, विकास और सुशासन
              <span className="text-orange-400 block">भारतीय जनता पार्टी की पहचान</span>
            </h1>
            
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
