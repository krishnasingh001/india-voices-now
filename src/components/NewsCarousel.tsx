
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Parliament Session Begins: Key Bills to be Discussed",
    excerpt: "The winter session of Parliament commences with several important bills on the agenda including economic reforms and social welfare measures.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
    category: "Politics",
    time: "2 hours ago",
    date: "Dec 26, 2024"
  },
  {
    id: 2,
    title: "Election Commission Announces Poll Schedule for 5 States",
    excerpt: "The Election Commission has declared the polling dates for upcoming state elections in five major states across India.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    category: "Elections",
    time: "4 hours ago",
    date: "Dec 26, 2024"
  },
  {
    id: 3,
    title: "New Digital Governance Initiative Launched",
    excerpt: "Government introduces comprehensive digital platform to enhance citizen services and improve administrative efficiency.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    category: "Technology",
    time: "6 hours ago",
    date: "Dec 26, 2024"
  }
];

export const NewsCarousel = () => {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Political News & Debates</h2>
          <p className="text-lg text-gray-600">Stay updated with breaking news and political developments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {news.time}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};
