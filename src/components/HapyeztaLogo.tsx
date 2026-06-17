import logoImg from "../assets/logo.png";
import wordmarkImg from "../assets/wordmark.png";

interface LogoProps {
  className?: string;
  size?: number;
  showShadow?: boolean;
}

export function HapyeztaEmblem({ className = "", size = 120 }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Hapyezta Emblem"
      width={size}
      height={size}
      style={{ width: size, height: "auto" }}
      className={`select-none object-contain ${className}`}
    />
  );
}

export function HapyeztaWordmark({ className = "", height = 32 }: { className?: string; height?: number }) {
  return (
    <img
      src={wordmarkImg}
      alt="Hapyezta Wordmark"
      height={height}
      style={{ height: height, width: "auto" }}
      className={`select-none object-contain ${className}`}
    />
  );
}

export function HapyeztaLogo({
  className = "",
  orientation = "horizontal",
  emblemSize = 48,
  wordmarkHeight = 24,
  showShadow = false,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical" | "icon";
  emblemSize?: number;
  wordmarkHeight?: number;
  showShadow?: boolean;
}) {
  if (orientation === "icon") {
    return <HapyeztaEmblem size={emblemSize} showShadow={showShadow} className={className} />;
  }

  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <HapyeztaEmblem size={emblemSize * 1.5} showShadow={showShadow} className="mb-2" />
        <HapyeztaWordmark height={wordmarkHeight * 1.5} className="w-full max-w-[280px]" />
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#f47523] mt-2 block uppercase font-display">
          Where Happy Creation Begin
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HapyeztaEmblem size={emblemSize} showShadow={showShadow} />
      <div className="flex flex-col">
        <HapyeztaWordmark height={wordmarkHeight} className="w-full max-w-[220px]" />
        <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] text-[#f47523] mt-0.5 uppercase font-display">
          Where Happy Creation Begin
        </span>
      </div>
    </div>
  );
}
