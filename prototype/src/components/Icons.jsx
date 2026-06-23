/* Custom icons not available in Lucide */

/* Constellation / star-cluster icon for History nav */
export function ConstellationIcon({ color = '#7A8499', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Three star nodes */}
      <circle cx="12" cy="4.5"  r="2"   fill={color} />
      <circle cx="4.5" cy="18" r="2"   fill={color} />
      <circle cx="19.5" cy="18" r="2"  fill={color} />
      {/* Connecting lines */}
      <line x1="12" y1="4.5" x2="4.5"  y2="18"  stroke={color} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
      <line x1="12" y1="4.5" x2="19.5" y2="18"  stroke={color} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
      <line x1="4.5" y1="18" x2="19.5" y2="18"  stroke={color} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
    </svg>
  )
}

/* Cloud + star app logo */
export function AppLogo({ width = 90, height = 68 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 90 68" fill="none" aria-hidden="true">
      {/* Cloud */}
      <rect x="4" y="22" width="74" height="42" rx="21" fill="rgba(255,255,255,0.88)" />
      <ellipse cx="28" cy="30" rx="15" ry="13" fill="rgba(255,255,255,0.88)" />
      <ellipse cx="52" cy="25" rx="13" ry="11" fill="rgba(255,255,255,0.88)" />
      {/* 5-pointed star at top-right of cloud */}
      <polygon
        points="73,1 75.63,8.76 83.8,8.76 77.34,13.52 79.97,21.28 73,16.52 66.03,21.28 68.66,13.52 62.2,8.76 70.37,8.76"
        fill="#8B9DC3"
      />
    </svg>
  )
}

/* Glowing 8px star dot for History entries */
export function GlowStar() {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#8B9DC3',
        flexShrink: 0,
        boxShadow: '0 0 0 2px rgba(139, 157, 195, 0.30), 0 0 8px 2px rgba(139, 157, 195, 0.50)',
      }}
    />
  )
}
