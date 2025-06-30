"use client";
import useAmplitudeContext from "@/hooks/useAmplitudeContext";
import { useEffect } from "react";

const ContactPage = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  useEffect(() => {
    trackAmplitudeEvent("Page Viewed", {
      page: "contact",
      "Page Location": "contact_page",
      "Page Title": "Contact Page",
      "Page URL": window.location.href,
      "Page Path": window.location.pathname,
      "Page Domain": window.location.hostname,
      "Page Counter": 1,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <div>
      <p>ContactPage</p>
      <button
        onClick={() => {
          trackAmplitudeEvent("click", {
            description: "About page button clicked",
            timestamp: new Date().toISOString(),
            page: "contact",
            button: "contact_page_button",
          });
        }}
      >
        Contact page button
      </button>
    </div>
  );
};

export default ContactPage;
