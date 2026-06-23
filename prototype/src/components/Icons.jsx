/* AppLogo — abstract seedling/burst, teal palette */
export function AppLogo({ width = 80, height = 80 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer glow circle */}
      <circle cx="40" cy="40" r="36" fill="#3DBFAA" fillOpacity="0.12" />
      {/* Main circle */}
      <circle cx="40" cy="40" r="28" fill="#3DBFAA" />
      {/* Stem */}
      <rect x="38" y="26" width="4" height="20" rx="2" fill="white" />
      {/* Left leaf */}
      <path
        d="M39 36 C32 30 24 34 26 42 C30 38 36 38 39 36Z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Right leaf */}
      <path
        d="M41 33 C48 27 56 31 54 39 C50 35 44 35 41 33Z"
        fill="#7BC67A"
      />
    </svg>
  )
}

/* GlowStar — decorative star for History timeline entries */
export function GlowStar({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer glow */}
      <circle cx="6" cy="6" r="5.5" fill="#5DADE2" fillOpacity="0.15" />
      {/* Inner star */}
      <path
        d="M6 1 L7.5 4.5 L11 5 L8.5 7.5 L9 11 L6 9 L3 11 L3.5 7.5 L1 5 L4.5 4.5 Z"
        fill="#5DADE2"
      />
    </svg>
  )
}
