"use client";
import { init, track } from "@amplitude/analytics-browser";
import { createContext, useEffect } from "react";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

type AmplitudeContextType = {
  trackAmplitudeEvent: (
    eventName: string,
    eventProperties: Record<string, unknown>
  ) => void;
};

export const AmplitudeContext = createContext<AmplitudeContextType | undefined>(
  undefined
);

const AmplitudeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  useEffect(() => {
    init(AMPLITUDE_API_KEY!, undefined, {
      defaultTracking: {
        sessions: true,
      },
    });
  }, []);

  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties: Record<string, unknown>
  ) => {
    track(eventName, eventProperties);
  };

  const value = { trackAmplitudeEvent };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
