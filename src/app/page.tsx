"use client";

import useAmplitudeContext from "@/hooks/useAmplitudeContext";
import { setUserId } from "@amplitude/analytics-browser";
import { useEffect } from "react";

export default function Home() {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  useEffect(() => {
    setUserId("xzer1");
    trackAmplitudeEvent("Page Viewed", {
      page: "home",
      "Page Location": "home_page",
      "Page Title": "Home Page",
      "Page URL": window.location.href,
      "Page Path": window.location.pathname,
      "Page Domain": window.location.hostname,
      "Page Counter": 1,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <div>
      <p>home page </p>
      <button
        onClick={() => {
          trackAmplitudeEvent("click", {
            description: "Home page button clicked",
            timestamp: new Date().toISOString(),
            page: "home",
            button: "home_page_button",
          });
        }}
      >
        Home page button
      </button>
    </div>
  );
}
