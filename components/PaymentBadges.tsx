import React from "react";

export const PaymentBadges: React.FC = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5"
      aria-label="Accepted payment methods"
    >
      {/* VISA */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 inline-flex items-center justify-center font-extrabold text-[15px] sm:text-[16px] italic text-[#1a1f71] select-none shadow-sm">
        VISA
      </span>

      {/* Mastercard */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 inline-flex items-center justify-center select-none shadow-sm">
        <svg viewBox="0 0 38 24" className="h-5 sm:h-[22px] w-auto">
          <circle cx="13" cy="12" r="10" fill="#eb001b" />
          <circle cx="25" cy="12" r="10" fill="#f79e1b" />
          <path
            d="M19 4.6a10 10 0 0 1 0 14.8 10 10 0 0 1 0-14.8z"
            fill="#ff5f00"
          />
        </svg>
      </span>

      {/* AMEX */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-[#2e77bc] border border-[#2e77bc] text-white font-extrabold text-xs sm:text-[13px] tracking-tight inline-flex items-center justify-center select-none shadow-sm">
        AMEX
      </span>

      {/* Discover */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 text-[#222] font-extrabold text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
        DISCOVER
        <i className="w-2 h-2 sm:w-[9px] sm:h-[9px] rounded-full bg-[#f76f20] ml-1 inline-block" />
      </span>

      {/* Diners Club */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 text-[#0079be] font-bold text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
        Diners Club
      </span>

      {/* JCB */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 font-extrabold text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
        <span className="text-[#0b4ea2]">J</span>
        <span className="text-[#d6001c]">C</span>
        <span className="text-[#007b40]">B</span>
      </span>

      {/* UnionPay */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 font-bold text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
        <span className="text-[#d6001c]">Union</span>
        <span className="text-[#00447c]">Pay</span>
      </span>

      {/* Apple Pay */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 text-black font-semibold text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
         Pay
      </span>

      {/* Google Pay */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-white border border-[#ddd] dark:border-neutral-700 font-semibold text-xs sm:text-[13px] text-black inline-flex items-center justify-center select-none shadow-sm">
        <span className="text-[#4285f4] font-bold">G</span>&nbsp;Pay
      </span>

      {/* Stripe Link */}
      <span className="h-8 sm:h-9 min-w-[54px] sm:min-w-[58px] px-2.5 rounded-md bg-[#00d66f] border border-[#00d66f] text-[#0a2e1a] font-black text-xs sm:text-[13px] inline-flex items-center justify-center select-none shadow-sm">
        link
      </span>
    </div>
  );
};
