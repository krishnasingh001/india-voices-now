
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, ThumbsUp } from "lucide-react";

const leadersData = [
  {
    id: 1,
    name: "Narendra Modi",
    position: "Prime Minister",
    party: "BJP",
    rating: 4.2,
    reviews: 15420,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
    achievements: ["Digital India Initiative", "Swachh Bharat Mission", "Jan Dhan Yojana"],
    approval: 78
  },
  {
    id: 2,
    name: "Rahul Gandhi",
    position: "MP, Wayanad",
    party: "Congress",
    rating: 3.8,
    reviews: 8930,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face",
    achievements: ["Youth Empowerment Programs", "Rural Development Focus", "Education Reforms"],
    approval: 65
  },
  {
    id: 3,
    name: "Arvind Kejriwal",
    position: "Chief Minister, Delhi",
    party: "AAP",
    rating: 4.0,
    reviews: 12100,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop&crop=face",
    achievements: ["Free Electricity Scheme", "Education Revolution", "Healthcare Reforms"],
    approval: 72
  }
];

export const LeaderReviews = () => {
  return (
    <section id="leaders" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leader Review Section</h2>
          <p className="text-lg text-gray-600">Rate and review political leaders based on their performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadersData.map((leader) => (
            <Card key={leader.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-orange-100"
                />
                <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                <p className="text-gray-600">{leader.position}</p>
                <p className="text-sm text-orange-600 font-medium">{leader.party}</p>
              </div>

              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(leader.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 font-semibold">{leader.rating}</span>
                <span className="ml-1 text-gray-600">({leader.reviews.toLocaleString()})</span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Public Approval</span>
                  <span className="text-sm font-medium">{leader.approval}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${leader.approval}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {leader.achievements.slice(0, 2).map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                  <Star className="mr-1 h-4 w-4" />
                  Rate
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  Review
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Leaders
          </Button>
        </div>
      </div>
    </section>
  );
};
