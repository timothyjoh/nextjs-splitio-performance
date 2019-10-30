import React, { useMemo } from "react";
import { SplitProvider, SplitClient } from "react-splitio";
import nookies from "nookies";
import nanoid from "nanoid";

const ANON_COOKIE_KEY = "leafly_anon";

export const anonymousCookie = ctx => {
  let anon = nookies.get(ctx)[ANON_COOKIE_KEY];
  if (!anon) {
    anon = nanoid();
    nookies.set(ctx, ANON_COOKIE_KEY, anon, {
      maxAge: 60 * 24 * 60 * 60,
      path: "/",
      sameSite: "strict"
    });
  }

  return anon;
};

const NewSplitProvider = ({ trafficType, splitKey, children }) => {
  const config = useMemo(
    () => ({
      core: {
        authorizationKey: 'js604eki2au6d26oetgbj33jfi1t3i3dh4ov',
        trafficType,
        labelsEnabled: true
      },
      startup: {
        requestTimeoutBeforeReady: 800, // 800ms
        retriesOnFailureBeforeReady: 5, // 1 sec
        readyTimeout: 1.5, // 1.5 sec
        eventsFirstPushWindow: 10 // 10 sec
      },
      scheduler: {
        featuresRefreshRate: 30, // 30 sec
        segmentsRefreshRate: 60, // 60 sec
        metricsRefreshRate: 60, // 60 sec
        impressionsRefreshRate: 60, // 60 sec
        eventsPushRate: 15, // 60 sec
        eventsQueueSize: 500 // 500 items
      }
    }),
    [trafficType]
  );
  return (
    <SplitProvider config={config}>
      <SplitClient splitKey={splitKey || anonymousCookie()}>
        {children}
      </SplitClient>
    </SplitProvider>
  );
};
export default NewSplitProvider;
