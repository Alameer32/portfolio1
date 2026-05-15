import { ImageResponse } from "next/og";

export const alt = "Salman Alameer — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 16,
            color: "#8A8A95",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          // SOFTWARE ENGINEER
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ECECEC",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Salman Alameer
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8A8A95",
            marginTop: 16,
            lineHeight: 1.4,
          }}
        >
          <span>I build software that </span>
          <span style={{ color: "#6366F1" }}>&nbsp;ships</span>
          <span>&nbsp;and </span>
          <span style={{ color: "#22C55E" }}>&nbsp;scales</span>
          <span>.</span>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 64,
            marginTop: 48,
          }}
        >
          {[
            { value: "$500K+", label: "ROI DELIVERED" },
            { value: "6 countries", label: "DEPLOYMENTS" },
            { value: "3.87", label: "GPA / 4.00" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#ECECEC",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#8A8A95",
                  letterSpacing: "0.1em",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#6366F1",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
