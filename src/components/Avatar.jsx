const Avatar = ({ initials = 'DP' }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Portrait placeholder with initials DP"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D3252" />
          <stop offset="100%" stopColor="#0F1B2D" />
        </linearGradient>
        <linearGradient id="avatarRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3ED9C4" />
          <stop offset="100%" stopColor="#F2A65A" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#avatarBg)" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="url(#avatarRing)" strokeWidth="2" strokeDasharray="4 8" opacity="0.5" />
      <text
        x="200"
        y="222"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="110"
        fontWeight="600"
        fill="#3ED9C4"
      >
        {initials}
      </text>
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="14"
        letterSpacing="2"
        fill="#9FB3CC"
      >
        &lt;photo pending /&gt;
      </text>
    </svg>
  )
};

export default Avatar;
