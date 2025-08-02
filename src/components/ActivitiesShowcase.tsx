import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const activitiesData = [
  {
    id: 1,
    title: "Environmental Conservation Drive",
    description: "Leading tree plantation initiatives to promote green environment and sustainable development in our community.",
    image: "/lovable-uploads/0a45dc5e-5a0f-4548-976a-3651d8c33920.png",
    location: "Lucknow, Uttar Pradesh",
    date: "Recent Initiative",
    participants: "Community volunteers"
  },
  {
    id: 2,
    title: "Cultural & Religious Events",
    description: "Organizing and participating in cultural celebrations and religious ceremonies to strengthen community bonds.",
    image: "/lovable-uploads/f8affacc-a71d-41cf-939f-eeab488f3ccc.png",
    location: "Local Temple",
    date: "Ongoing",
    participants: "Community members"
  },
  {
    id: 3,
    title: "Social Justice Advocacy",
    description: "Promoting awareness about justice, equality and fundamental rights through various social campaigns.",
    image: "/lovable-uploads/ffa6120a-91a3-41f3-89ad-dc59d7d4abe6.png",
    location: "Uttar Pradesh",
    date: "International Justice Day",
    participants: "Social activists"
  },
  {
    id: 4,
    title: "Community Gatherings & Outreach",
    description: "Actively engaging with local communities through traditional ceremonies and social gatherings.",
    image: "/lovable-uploads/bd37a2be-65cb-4e8f-80fb-f5358b6ef2d9.png",
    location: "Local Community Centers",
    date: "Regular Events",
    participants: "Community leaders & residents"
  },
  {
    id: 5,
    title: "Tribute to Freedom Fighters",
    description: "Honoring the legacy of great freedom fighters like Shaheed Udham Singh through awareness campaigns.",
    image: "/lovable-uploads/6ab097e0-e568-43c8-87eb-c8295138ec0a.png",
    location: "Uttar Pradesh",
    date: "Martyr's Day",
    participants: "Youth & students"
  },
  {
    id: 6,
    title: "Political Engagement & Leadership",
    description: "Working as an active member of Bharatiya Janata Party, representing the voice of the people in Lucknow.",
    image: "/lovable-uploads/5260405d-c368-4281-b2f2-9d51d4b771cd.png",
    location: "Lucknow, Uttar Pradesh",
    date: "Ongoing",
    participants: "BJP workers & supporters"
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