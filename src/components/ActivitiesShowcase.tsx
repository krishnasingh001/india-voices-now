import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const activitiesData = [
  {
    id: 1,
    title: "Community Development Initiative",
    description: "Led infrastructure improvements in local neighborhoods including road repairs and street lighting installation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    location: "Central District",
    date: "Dec 2024",
    participants: "500+ families benefited"
  },
  {
    id: 2,
    title: "Digital Literacy Program",
    description: "Organized training sessions to help seniors and youth learn essential computer and internet skills.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
    location: "Community Center",
    date: "Nov 2024",
    participants: "200+ participants"
  },
  {
    id: 3,
    title: "Public Awareness Campaign",
    description: "Conducted educational sessions on civic responsibilities and community engagement initiatives.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
    location: "Town Hall",
    date: "Oct 2024",
    participants: "300+ attendees"
  },
  {
    id: 4,
    title: "Local Problem-Solving Workshop",
    description: "Facilitated brainstorming sessions with residents to address local challenges and implement solutions.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800",
    location: "Community Hall",
    date: "Sep 2024",
    participants: "150+ residents"
  }
];

export const ActivitiesShowcase = () => {
  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Work in the Community</h2>
          <p className="text-lg text-gray-600">Activities and initiatives I've undertaken in our area</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    {activity.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    {activity.participants}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};