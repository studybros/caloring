import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFCCBC",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#424242",
              lineHeight: 1,
            }}
          >
            C
          </div>
          <div
            style={{
              width: "48px",
              height: "6px",
              background: "#FFE082",
              borderRadius: "3px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
