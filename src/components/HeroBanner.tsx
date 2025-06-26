
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vote, Users, Star } from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Who should be the
            <span className="text-orange-600 block">Next PM of India?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join millions of Indians in shaping democracy. Vote in opinion polls, 
            review leaders, and stay informed about the political landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <Vote className="mr-2 h-5 w-5" />
              Cast Your Vote
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
              View Results
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2.3M+</div>
              <div className="text-gray-600">Active Voters</div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Vote className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-gray-600">Active Polls</div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Leader Reviews</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
