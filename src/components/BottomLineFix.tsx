import React from "react";

type Props = { onJoin?: () => void };

const BottomLineFix: React.FC<Props> = ({ onJoin }) => {
  return (
    <div
      aria-label="bottom-offer-bar"
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "18px",
        width: "60vw",
        maxWidth: "959.9749755859375px",
        minWidth: "320px",
        height: "65px", // Reduced from 75px
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <style>
        {`
          @keyframes glowLeftToRight {
            0% {
              transform: translateX(-150%);
            }
            100% {
              transform: translateX(150%);
            }
          }
          
          .glow-container {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            border: 1.5px solid #002554;
            padding: 3px;
            background: #002554;
          }
          
          .glow-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #0361DA, transparent);
            animation: glowLeftToRight 2.5s linear infinite;
            z-index: 1;
            border-radius: 12px;
          }
          
          .button-inner {
            position: relative;
            z-index: 2;
            border-radius: 9px;
            overflow: hidden;
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          background: "#06124580",
          boxShadow:
            "inset 0 0 0 1px rgba(128,186,255,0.18), 0 8px 24px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "stretch",
          padding: "8px", // Reduced from 10px
          gap: "12px",
          pointerEvents: "auto",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* COLUMN 1: Current price block */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "8px 14px", // Reduced vertical padding
            borderRadius: "20px",
            background: "#101D5866",
            minWidth: 0,
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 500,
              letterSpacing: "0.2px",
              whiteSpace: "nowrap",
            }}
          >
            Current price
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              minWidth: 0,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 800,
                letterSpacing: "0.3px",
                whiteSpace: "nowrap",
              }}
            >
              <b>1</b>$NLOV
            </span>
            <span
              style={{
                color: "rgba(128,153,204,0.55)",
                fontSize: "clamp(14px, 1.6vw, 18px)",
                fontWeight: 550,
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
              }}
            >
              3.56$NLOV
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "8px 16px", // Reduced padding
              borderRadius: "10px",
              border: "1.5px solid #80BAFF",
              color: "#80BAFF",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              fontWeight: 700,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            -52%
          </div>
        </div>

        {/* COLUMN 2: ROI + button inside */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px", // Reduced vertical padding
            borderRadius: "20px",
            background: "#101D5866",
            minWidth: 0,
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 500,
              letterSpacing: "0.2px",
              whiteSpace: "nowrap",
            }}
          >
            ROI at TGE =
          </span>
          <span
            style={{
              color: "#80BAFF",
              fontSize: "clamp(20px, 2.2vw, 26px)",
              fontWeight: 800,
              letterSpacing: "0.4px",
              whiteSpace: "nowrap",
            }}
          >
            600%
          </span>

          {/* Glow Container */}
          <div
            className="glow-container"
            style={{
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            <button
              type="button"
              onClick={onJoin}
              className="button-inner"
              style={{
                width: "180px",
                height: "30px",
                border: 0,
                outline: 0,
                background: "#0E1A52",
                backgroundImage: "url(/bottom-line/button.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                JOIN NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLineFix;
