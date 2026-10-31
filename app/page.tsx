import React from "react";
import { Header } from "@/components/Header";
import { VideoSection } from "@/components/VideoSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WorldMap } from "@/components/WorldMap";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between w-full bg-background transition-colors duration-200">
      <div className="w-full">
        {/* Navigation & Header */}
        <Header />

        {/* Video / TikTok Section */}
        <VideoSection />

        {/* Reviews Carousel & Trustpilot Section */}
        <ReviewsSection />

        {/* Enhanced World Vector Map Section */}
        <WorldMap />

        {/* Booking & Checkout Section (Voice Strategy Blitz) */}
        <BookingSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
