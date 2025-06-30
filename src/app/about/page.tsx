"use client";

import useAmplitudeContext from "@/hooks/useAmplitudeContext";
import { useEffect } from "react";

const AboutPage = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  useEffect(() => {
    trackAmplitudeEvent("Page Viewed", {
      page: "about",
      "Page Location": "about_page",
      "Page Title": "About Page",
      "Page URL": window.location.href,
      "Page Path": window.location.pathname,
      "Page Domain": window.location.hostname,
      "Page Counter": 1,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <div>
      <p>AboutPage</p>
      <button
        style={{
          color: "blue",
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "5px",
        }}
        onClick={() => {
          trackAmplitudeEvent("click", {
            description: "About page button clicked",
            timestamp: new Date().toISOString(),
            page: "about",
            button: "about_page_button",
          });
        }}
      >
        About page button
      </button>
    </div>
  );
};

export default AboutPage;
