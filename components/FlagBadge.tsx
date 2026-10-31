"use client";

import React, { useEffect, useState } from "react";

const TIMEZONE_TO_COUNTRY: Record<string, string> = {
  "Africa/Nairobi": "KE",
  "Africa/Lagos": "NG",
  "Africa/Johannesburg": "ZA",
  "Africa/Cairo": "EG",
  "Africa/Accra": "GH",
  "Africa/Addis_Ababa": "ET",
  "Africa/Kampala": "UG",
  "Africa/Dar_es_Salaam": "TZ",
  "Africa/Algiers": "DZ",
  "Africa/Casablanca": "MA",
  "Africa/Tunis": "TN",
  "Africa/Kigali": "RW",
  "Africa/Lusaka": "ZM",
  "Africa/Harare": "ZW",
  "Africa/Maputo": "MZ",
  "Africa/Luanda": "AO",
  "Africa/Dakar": "SN",
  "Africa/Abidjan": "CI",
  "Africa/Khartoum": "SD",
  "Africa/Kinshasa": "CD",
  "Africa/Windhoek": "NA",
  "Africa/Gaborone": "BW",
  "Europe/London": "GB",
  "Europe/Dublin": "IE",
  "Europe/Paris": "FR",
  "Europe/Berlin": "DE",
  "Europe/Madrid": "ES",
  "Europe/Rome": "IT",
  "Europe/Amsterdam": "NL",
  "Europe/Brussels": "BE",
  "Europe/Zurich": "CH",
  "Europe/Vienna": "AT",
  "Europe/Stockholm": "SE",
  "Europe/Oslo": "NO",
  "Europe/Copenhagen": "DK",
  "Europe/Helsinki": "FI",
  "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ",
  "Europe/Budapest": "HU",
  "Europe/Bucharest": "RO",
  "Europe/Athens": "GR",
  "Europe/Lisbon": "PT",
  "Europe/Istanbul": "TR",
  "Europe/Kiev": "UA",
  "Europe/Kyiv": "UA",
  "Europe/Moscow": "RU",
  "Atlantic/Reykjavik": "IS",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Phoenix": "US",
  "America/Anchorage": "US",
  "Pacific/Honolulu": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Edmonton": "CA",
  "America/Winnipeg": "CA",
  "America/Halifax": "CA",
  "America/Mexico_City": "MX",
  "America/Bogota": "CO",
  "America/Lima": "PE",
  "America/Santiago": "CL",
  "America/Sao_Paulo": "BR",
  "America/Caracas": "VE",
  "America/Jamaica": "JM",
  "America/Port_of_Spain": "TT",
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Karachi": "PK",
  "Asia/Dhaka": "BD",
  "Asia/Colombo": "LK",
  "Asia/Kathmandu": "NP",
  "Asia/Dubai": "AE",
  "Asia/Riyadh": "SA",
  "Asia/Qatar": "QA",
  "Asia/Kuwait": "KW",
  "Asia/Tehran": "IR",
  "Asia/Baghdad": "IQ",
  "Asia/Jerusalem": "IL",
  "Asia/Beirut": "LB",
  "Asia/Amman": "JO",
  "Asia/Bangkok": "TH",
  "Asia/Ho_Chi_Minh": "VN",
  "Asia/Jakarta": "ID",
  "Asia/Manila": "PH",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Singapore": "SG",
  "Asia/Hong_Kong": "HK",
  "Asia/Shanghai": "CN",
  "Asia/Taipei": "TW",
  "Asia/Seoul": "KR",
  "Asia/Tokyo": "JP",
  "Asia/Tashkent": "UZ",
  "Asia/Almaty": "KZ",
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Australia/Adelaide": "AU",
  "Pacific/Auckland": "NZ",
};

// SVG flag generator matching original site
function st(d: "h" | "v", a: string[]): string {
  let t = 0;
  const w = a.map((s) => {
    const p = s.split(":");
    const n = +(p[1] || 1);
    t += n;
    return [p[0], n] as [string, number];
  });
  let o = "";
  let p = 0;
  w.forEach((x) => {
    const l = x[1] / t;
    o +=
      d === "h"
        ? `<rect y="${p * 40}" width="60" height="${l * 40 + 0.3}" fill="#${x[0]}"/>`
        : `<rect x="${p * 60}" width="${l * 60 + 0.3}" height="40" fill="#${x[0]}"/>`;
    p += l;
  });
  return o;
}

function rc(c: string, x: number, y: number, w: number, h: number): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#${c}"/>`;
}

function dc(c: string, r: number, x = 30, y = 20): string {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#${c}"/>`;
}

function sr(c: string, x: number, y: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const q = i % 2 ? r * 0.382 : r;
    pts.push((x + q * Math.cos(a)).toFixed(1) + "," + (y + q * Math.sin(a)).toFixed(1));
  }
  return `<polygon points="${pts.join(" ")}" fill="#${c}"/>`;
}

function nc(c: string, w: number, x: number): string {
  return rc(c, 0, 20 - w / 2, 60, w) + rc(c, x - w / 2, 0, w, 40);
}

const UJ =
  '<rect width="60" height="40" fill="#012169"/><path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/><path d="M30 0v40M0 20h60" stroke="#C8102E" stroke-width="7"/>';

const usStripes: string[] = [];
for (let k = 0; k < 13; k++) usStripes.push(k % 2 ? "fff" : "B22234");

const FLAGS: Record<string, string> = {
  FR: st("v", ["00267F", "fff", "ED2939"]),
  IT: st("v", ["009246", "fff", "CE2B37"]),
  IE: st("v", ["169B62", "fff", "FF883E"]),
  BE: st("v", ["000", "FAE042", "ED2939"]),
  DE: st("h", ["000", "DD0000", "FFCE00"]),
  NL: st("h", ["AE1C28", "fff", "21468B"]),
  AT: st("h", ["ED2939", "fff", "ED2939"]),
  RU: st("h", ["fff", "0039A6", "D52B1E"]),
  UA: st("h", ["0057B7", "FFD700"]),
  PL: st("h", ["fff", "DC143C"]),
  HU: st("h", ["CE2939", "fff", "477050"]),
  RO: st("v", ["002B7F", "FCD116", "CE1126"]),
  BG: st("h", ["fff", "00966E", "D62612"]),
  LT: st("h", ["FDB913", "006A44", "C1272D"]),
  EE: st("h", ["0072CE", "000", "fff"]),
  ES: st("h", ["AA151B", "F1BF00:2", "AA151B"]),
  GB: UJ,
  DK: rc("C8102E", 0, 0, 60, 40) + nc("fff", 6, 22),
  SE: rc("006AA7", 0, 0, 60, 40) + nc("FECC00", 7, 22),
  FI: rc("fff", 0, 0, 60, 40) + nc("003580", 9, 22),
  NO: rc("BA0C2F", 0, 0, 60, 40) + nc("fff", 10, 22) + nc("00205B", 5, 22),
  IS: rc("02529C", 0, 0, 60, 40) + nc("fff", 9, 22) + nc("DC1E35", 4, 22),
  CH: rc("DA291C", 0, 0, 60, 40) + rc("fff", 24, 8, 12, 24) + rc("fff", 16, 16, 28, 8),
  CZ: st("h", ["fff", "D7141A"]) + '<polygon points="0,0 30,20 0,40" fill="#11457E"/>',
  PT: st("v", ["006600:2", "FF0000:3"]) + dc("FFE000", 8, 24),
  TR: rc("E30A17", 0, 0, 60, 40) + dc("fff", 11, 23) + dc("E30A17", 9, 26) + sr("fff", 37, 20, 4.5),
  US: st("h", usStripes) + rc("3C3B6E", 0, 0, 24, 21.5),
  CA: st("v", ["D52B1E", "fff:2", "D52B1E"]) + sr("D52B1E", 30, 20, 8),
  MX: st("v", ["006847", "fff", "CE1126"]) + dc("8C6E3E", 5),
  BR: rc("009C3B", 0, 0, 60, 40) + '<polygon points="30,4 56,20 30,36 4,20" fill="#FFDF00"/>' + dc("002776", 9),
  AR: st("h", ["74ACDF", "fff", "74ACDF"]) + dc("F6B40E", 4),
  CL: st("h", ["fff", "D52B1E"]) + rc("0039A6", 0, 0, 20, 20) + sr("fff", 10, 10, 6),
  CO: st("h", ["FCD116:2", "003893", "CE1126"]),
  PE: st("v", ["D91023", "fff", "D91023"]),
  VE: st("h", ["FFCF00", "00247D", "CF142B"]),
  KE:
    st("h", ["000:3", "fff:.5", "BB0000:3", "fff:.5", "006600:3"]) +
    '<ellipse cx="30" cy="20" rx="4" ry="9" fill="#BB0000" stroke="#fff" stroke-width="1"/>',
  NG: st("v", ["008751", "fff", "008751"]),
  GH: st("h", ["CE1126", "FCD116", "006B3F"]) + sr("000", 30, 20, 7),
  EG: st("h", ["CE1126", "fff", "000"]),
  ET: st("h", ["078930", "FCDD09", "DA121A"]) + dc("0B4EA2", 8),
  UG: st("h", ["000", "FCD116", "D90000", "000", "FCD116", "D90000"]) + dc("fff", 7),
  RW: st("h", ["00A1DE:2", "FAD201", "20603D"]),
  SN: st("v", ["00853F", "FDEF42", "E31B23"]) + sr("00853F", 30, 20, 8),
  CI: st("v", ["F77F00", "fff", "009E60"]),
  MA: rc("C1272D", 0, 0, 60, 40) + sr("006233", 30, 20, 10),
  TN: rc("E70013", 0, 0, 60, 40) + dc("fff", 11) + sr("E70013", 30, 20, 6),
  AE: st("h", ["00732F", "fff", "000"]) + rc("FF0000", 0, 0, 15, 40),
  JP: rc("fff", 0, 0, 60, 40) + dc("BC002D", 12),
  BD: rc("006A4E", 0, 0, 60, 40) + dc("F42A41", 12, 27),
  IN: st("h", ["FF9933", "fff", "138808"]) + '<circle cx="30" cy="20" r="4.5" fill="none" stroke="#000080" stroke-width="1"/>',
  CN: rc("DE2910", 0, 0, 60, 40) + sr("FFDE00", 10, 11, 6),
  VN: rc("DA251D", 0, 0, 60, 40) + sr("FFFF00", 30, 20, 12),
  ID: st("h", ["FF0000", "fff"]),
  SG: st("h", ["ED2939", "fff"]) + dc("fff", 8, 13, 10) + dc("ED2939", 7, 16, 10),
  TH: st("h", ["A51931", "F4F5F8", "2D2A4A:2", "F4F5F8", "A51931"]),
  AU:
    rc("012169", 0, 0, 60, 40) +
    '<g transform="scale(.5)">' +
    UJ +
    "</g>" +
    sr("fff", 15, 32, 5) +
    sr("fff", 42, 9, 2.4) +
    sr("fff", 50, 18, 2.4) +
    sr("fff", 42, 31, 2.4) +
    sr("fff", 35, 19, 2.4),
  NZ:
    rc("012169", 0, 0, 60, 40) +
    '<g transform="scale(.5)">' +
    UJ +
    "</g>" +
    sr("CC142B", 42, 10, 3) +
    sr("CC142B", 50, 18, 3) +
    sr("CC142B", 42, 30, 3) +
    sr("CC142B", 35, 19, 3),
};

export const FlagBadge: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>("");
  const [countryName, setCountryName] = useState<string>("");
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    let tz = "";
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {}

    let code =
      TIMEZONE_TO_COUNTRY[tz] ||
      (/^America\/Argentina\//.test(tz)
        ? "AR"
        : /^Australia\//.test(tz)
        ? "AU"
        : /^US\//.test(tz)
        ? "US"
        : "");

    if (!code) {
      const languages =
        typeof navigator !== "undefined" && navigator.languages && navigator.languages.length
          ? navigator.languages
          : [navigator.language || ""];
      for (let i = 0; i < languages.length; i++) {
        const match = /[-_]([A-Za-z]{2})$/.exec(languages[i]);
        if (match) {
          code = match[1].toUpperCase();
          break;
        }
      }
    }

    if (code && /^[A-Z]{2}$/.test(code)) {
      setCountryCode(code);
      try {
        const name = new Intl.DisplayNames(["en"], { type: "region" }).of(code);
        if (name) setCountryName(name);
      } catch {}

      const body =
        FLAGS[code] ||
        `<rect width="60" height="40" fill="#666"/><text x="30" y="26" font-size="16" font-weight="700" text-anchor="middle" fill="#fff" font-family="sans-serif">${code}</text>`;
      setSvgContent(body);
    }
  }, []);

  return (
    <div
      className="group relative flex items-center gap-1.5 cursor-default select-none"
      title={countryName ? `Visiting from ${countryName}` : "Worldwide caller access"}
      aria-label={countryName ? `Visiting from ${countryName}` : "Worldwide caller access"}
    >
      {svgContent ? (
        <div className="w-[30px] h-[20px] sm:w-[34px] sm:h-[23px] rounded-[3px] overflow-hidden shadow-[0_0_0_1px_rgba(128,128,128,0.35)] transition-transform duration-200 group-hover:scale-105">
          <svg
            viewBox="0 0 60 40"
            className="w-full h-full block"
            dangerouslySetInnerHTML={{ __html: svgContent }}
            aria-hidden="true"
          />
        </div>
      ) : (
        <span className="text-xl sm:text-2xl leading-none" aria-hidden="true">
          🌍
        </span>
      )}
      {countryName && (
        <span className="hidden lg:inline-block text-[11px] font-semibold uppercase tracking-wider text-mute">
          {countryCode}
        </span>
      )}
    </div>
  );
};
