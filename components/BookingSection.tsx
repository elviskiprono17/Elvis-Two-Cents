"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { PaymentBadges } from "./PaymentBadges";
import { PhoneCall, ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";

export const BookingSection: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const voice = SITE_CONFIG.pricing.voiceBlitz;
  const bookingUrl = SITE_CONFIG.bookingUrl;

  const mockSlots = [
    "Today · 3:00 PM",
    "Today · 5:30 PM",
    "Tomorrow · 11:00 AM",
    "Tomorrow · 2:00 PM",
    "Tomorrow · 4:30 PM",
    "Next Available Slot",
  ];

  return (
    <section id="book" className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-alt border-t border-line/60">
      <div className="max-w-[720px] mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-[12px] sm:text-[13px] uppercase tracking-[2px] text-mute font-semibold mb-6">
          Book a session
        </h2>

        {/* Voice Strategy Card (Zoom option removed as requested) */}
        <div className="w-full max-w-lg mx-auto bg-background rounded-2xl border-2 border-foreground p-6 sm:p-8 text-left shadow-lg transition-all duration-200">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {voice.title}
              </h3>
              <div className="inline-block mt-1 text-[11px] sm:text-xs tracking-[2px] uppercase text-brandBlue font-bold">
                {voice.badge}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-brandBlue/10 text-brandBlue flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
          </div>

          {/* Price */}
          <div className="my-4">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {voice.price}
            </span>
            <span className="text-xs sm:text-sm text-mute ml-2 font-medium">
              / single session
            </span>
          </div>

          {/* Bullet points */}
          <ul className="space-y-3 mb-6 text-fg2">
            {voice.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm sm:text-[15px]">
                <span className="w-1.5 h-1.5 rounded-full bg-brandBlue flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => {
              const calEl = document.getElementById("calendar-frame");
              if (calEl) {
                calEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-foreground text-background font-bold text-xs sm:text-[13px] uppercase tracking-[1.5px] transition-all duration-150 hover:opacity-90 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <span>Proceed to Schedule</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Calendar Scheduler Box */}
        <div
          id="calendar-frame"
          className="mt-8 border-[1.5px] border-dashed border-line2 rounded-2xl bg-cardBg/80 p-5 sm:p-7 min-h-[160px] flex flex-col items-center justify-center text-center text-mute overflow-hidden"
        >
          {bookingUrl ? (
            <iframe
              src={bookingUrl}
              title="Schedule Strategy Session"
              className="w-full h-[620px] border-0 rounded-xl"
            />
          ) : (
            <div className="w-full max-w-md py-4">
              <div className="w-12 h-12 rounded-full bg-brandBlue/10 text-brandBlue mx-auto mb-3 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <strong className="block text-base sm:text-lg text-foreground font-semibold mb-1">
                Live scheduling calendar loads here.
              </strong>
              <p className="text-xs sm:text-sm text-mute mb-5">
                Select your preferred slot. Card payment is required before a slot is locked in.
              </p>

              {/* Sample Slot Selection Interface */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {mockSlots.map((slot, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedSlot === slot
                        ? "border-brandBlue bg-brandBlue text-white shadow-sm"
                        : "border-line bg-background text-foreground hover:border-foreground"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              {selectedSlot && (
                <div className="mt-4 p-3 bg-background rounded-lg border border-brandBlue/30 text-xs text-foreground flex items-center justify-between animate-in fade-in">
                  <span>Selected: <strong>{selectedSlot}</strong></span>
                  <span className="text-brandBlue font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Ready to lock
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security & Payment Notice */}
        <div className="mt-6 text-center text-[11px] sm:text-xs uppercase tracking-[1.5px] text-mute font-semibold">
          Secure payments powered by Stripe
        </div>

        {/* Payment Badges */}
        <PaymentBadges />

        {/* Note */}
        <div className="text-center text-xs sm:text-[13px] text-mute mt-5">
          Payment is collected upfront at booking. No messaging back and forth.
        </div>
      </div>
    </section>
  );
};
