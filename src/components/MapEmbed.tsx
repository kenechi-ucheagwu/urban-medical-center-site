"use client";

import { useEffect, useRef, useState } from "react";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
} from "@/lib/clinic";

/**
 * Click-to-load Google Map. The embed pulls ~500-700 KB of Google scripts
 * (and sets Google cookies), so the page ships a static address card and
 * only injects the iframe when someone asks for it. Most patients just
 * want the directions link, which works without loading the map at all.
 */
export default function MapEmbed({ className = "" }: { className?: string }) {
  const [showMap, setShowMap] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // The Show map button unmounts on click; hand focus to the map instead of
  // dropping keyboard users back at the top of the page.
  useEffect(() => {
    if (showMap) iframeRef.current?.focus();
  }, [showMap]);

  return (
    <div className={`rounded-xl overflow-hidden border border-line ${className}`}>
      {showMap ? (
        <iframe
          ref={iframeRef}
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          title="Map showing Urban Medical Center at 95 Martin Luther King Jr Dr, Jersey City"
        />
      ) : (
        <div className="h-full bg-teal-50 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal-700"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-ink-900 font-semibold leading-snug">
            Urban Medical Center
            <span className="block font-normal text-ink-700">
              {ADDRESS_STREET}, {ADDRESS_CITY}
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center min-h-11 px-4 rounded-lg bg-teal-700 hover:bg-teal-900 text-white text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Get directions
            </a>
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="btn-press inline-flex items-center justify-center min-h-11 px-4 rounded-lg bg-white hover:bg-teal-50 border-2 border-teal-700 text-teal-700 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Show map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
