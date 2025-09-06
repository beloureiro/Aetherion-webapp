export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Letra A estilizada em design minimalista */}
      <path
        d="M50 10 L20 80 L35 80 L42 60 L58 60 L65 80 L80 80 L50 10Z M45 48 L50 35 L55 48 L45 48Z"
        fill="currentColor"
      />
      {/* Linha horizontal elegante */}
      <rect x="10" y="85" width="80" height="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo className="w-10 h-10" />
      <span className="text-xl font-serif tracking-wider">AETHERION</span>
    </div>
  );
}