import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#10b981",
            }}
          />
          <div style={{ fontSize: "28px", color: "#a3a3a3" }}>
            {siteConfig.role} at {siteConfig.company}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "34px",
              color: "#a3a3a3",
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            Data · Engineering · Business strategy for complex operational
            problems.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
