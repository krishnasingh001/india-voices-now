
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Vote, TrendingUp } from "lucide-react";

const pollData = [
  {
    id: 1,
    question: "Who should be the next Prime Minister?",
    options: [
      { name: "Narendra Modi", votes: 45, color: "bg-orange-500" },
      { name: "Rahul Gandhi", votes: 28, color: "bg-blue-500" },
      { name: "Arvind Kejriwal", votes: 15, color: "bg-yellow-500" },
      { name: "Others", votes: 12, color: "bg-gray-500" }
    ],
    totalVotes: 125000,
    trending: true
  },
  {
    id: 2,
    question: "Best performing Chief Minister?",
    options: [
      { name: "Yogi Adityanath", votes: 35, color: "bg-orange-500" },
      { name: "Mamata Banerjee", votes: 25, color: "bg-green-500" },
      { name: "M.K. Stalin", votes: 22, color: "bg-red-500" },
      { name: "Others", votes: 18, color: "bg-gray-500" }
    ],
    totalVotes: 89000,
    trending: false
  }
];

export const LivePolls = () => {
  return (
    <section id="polls" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Polls & Trending Leaders</h2>
          <p className="text-lg text-gray-600">Real-time opinion polls reflecting the voice of India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pollData.map((poll) => (
            <Card key={poll.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{poll.question}</h3>
                {poll.trending && (
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Trending</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-6">
                {poll.options.map((option, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{option.name}</span>
                      <span className="text-sm text-gray-600">{option.votes}%</span>
                    </div>
                    <Progress value={option.votes} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {poll.totalVotes.toLocaleString()} votes
                </span>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Vote className="mr-2 h-4 w-4" />
                  Vote Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Polls
          </Button>
        </div>
      </div>
    </section>
  );
};
