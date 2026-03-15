import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "칼로링 - 다이어트 계산기 & 식품 최저가 비교";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFCCBC 0%, #FFE0B2 50%, #FFE082 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#424242",
              letterSpacing: "-2px",
            }}
          >
            caloring
          </div>
          <div
            style={{
              width: "120px",
              height: "6px",
              background: "#FFE082",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#616161",
            }}
          >
            다이어트 계산기 & 식품 최저가 비교
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            {["칼로리", "기초대사량", "BMI", "체지방", "적정체중", "물섭취량"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 20px",
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "20px",
                    fontSize: "20px",
                    color: "#424242",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
