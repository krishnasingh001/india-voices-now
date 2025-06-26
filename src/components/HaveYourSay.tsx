
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Vote, Star, Users } from "lucide-react";

export const HaveYourSay = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Your Say</h2>
          <p className="text-lg text-gray-600">Your voice matters in shaping India's democratic future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <Vote className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create a Poll</h3>
            <p className="text-gray-600 text-sm mb-4">Start your own opinion poll and gather public sentiment</p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Create Poll
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rate Leaders</h3>
            <p className="text-gray-600 text-sm mb-4">Share your opinion on political leaders' performance</p>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
              Rate Now
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Discussions</h3>
            <p className="text-gray-600 text-sm mb-4">Participate in meaningful political discussions</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Join Now
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Views</h3>
            <p className="text-gray-600 text-sm mb-4">Write articles and share your political insights</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Write Article
            </Button>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-orange-50 to-green-50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of India's Democratic Journey
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Join millions of Indians in making informed decisions about our nation's future. 
              Your participation strengthens our democracy and ensures every voice is heard.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Get Started Today
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
