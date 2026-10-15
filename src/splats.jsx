import React from "react";

/* Phone mockup that shows a tiny version of the comparison app. */
export function PhoneMockup({ children }) {
  return (
    <div className="phone-mockup" aria-hidden="true">
      <div className="phone-notch" />
      <div className="phone-screen">
        {children}
      </div>
    </div>
  );
}

/* Small floating card that sits beside the phone — like a notification. */
export function FloatingCard({ tone = "orange", title, price, store, percent, style }) {
  return (
    <div className={`floating-card tone-${tone}`} style={style}>
      <div className="floating-card-head">
        <span className="floating-card-store">{store}</span>
        {percent && <span className="floating-card-pct">{percent}</span>}
      </div>
      <div className="floating-card-title">{title}</div>
      <div className="floating-card-price">{price}</div>
    </div>
  );
}

/* Hexagon grid logo / decoration. */
export function HexGrid({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <pattern id="hex" width="28" height="32" patternUnits="userSpaceOnUse">
          <polygon
            points="14,2 26,9 26,23 14,30 2,23 2,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#hex)" />
    </svg>
  );
}

/* Tiny chart line for hero & product cards. */
export function Sparkline({ points, color = "#FF6A1A", fill = "rgba(255,106,26,0.15)" }) {
  if (!points || points.length === 0) return null;
  const w = 100, h = 32;
  const min = Math.min(...points), max = Math.max(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - ((p - min) / range) * h]);
  const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="sparkline" aria-hidden="true">
      <path d={area} fill={fill} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="1.8" fill={color} />
    </svg>
  );
}

/* Background glow blob. */
export function GlowBlob({ className, color = "#FF6A1A" }) {
  return <div className={`glow-blob ${className || ""}`} style={{ "--c": color }} aria-hidden="true" />;
}
