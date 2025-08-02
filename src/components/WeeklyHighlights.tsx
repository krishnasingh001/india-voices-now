
import { Card } from "@/components/ui/card";
import { TrendingUp, MessageSquare, Vote, Users } from "lucide-react";

const highlightsData = [
  {
    type: "most-voted",
    title: "Most Voted Leader This Week",
    leader: "Narendra Modi",
    votes: "2.3M votes",
    change: "+12%",
    icon: Vote,
    color: "text-orange-600"
  },
  {
    type: "most-discussed",
    title: "Most Discussed Topic",
    leader: "Education Reform Bill",
    votes: "45K comments",
    change: "+35%",
    icon: MessageSquare,
    color: "text-blue-600"
  },
  {
    type: "trending",
    title: "Trending Leader",
    leader: "Yogi Adityanath",
    votes: "890K mentions",
    change: "+28%",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    type: "active-users",
    title: "Most Active State",
    leader: "Maharashtra",
    votes: "1.2M users",
    change: "+18%",
    icon: Users,
    color: "text-purple-600"
  }
];

export const WeeklyHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Highlights</h2>
          <p className="text-lg text-gray-600">Top voted leaders and most discussed topics this week</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${highlight.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {highlight.leader}
                </div>
                
                <div className="text-gray-600 mb-2">
                  {highlight.votes}
                </div>
                
                <div className="flex items-center justify-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{highlight.change}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
