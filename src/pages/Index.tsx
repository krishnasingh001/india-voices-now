
import { useState } from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { LivePolls } from "@/components/LivePolls";
import { ActivitiesShowcase } from "@/components/ActivitiesShowcase";
import { WeeklyHighlights } from "@/components/WeeklyHighlights";
import { HaveYourSay } from "@/components/HaveYourSay";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroBanner />
        <LivePolls />
        <ActivitiesShowcase />
        <WeeklyHighlights />
        <HaveYourSay />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
