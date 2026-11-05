import React, { useState } from 'react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackCode?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Visual Archive Plate',
  fallbackCode = 'VM-ARC',
}) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`relative flex flex-col justify-between p-6 bg-[#0F0F12] border border-[#27272A] text-[#F4F4F0] overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          <rect x="20" y="20" width="360" height="360" stroke="#F4F4F0" strokeWidth="1" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#F4F4F0" strokeWidth="0.75" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#F4F4F0" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="110" stroke="#E11D48" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="60" stroke="#F4F4F0" strokeWidth="0.75" strokeDasharray="4 4" />
          <path d="M90 310 L310 90" stroke="#F4F4F0" strokeWidth="0.75" />
        </svg>
        <div className="relative z-10 flex items-center justify-between text-xs font-mono-tabular text-[#A1A1AA]">
          <span>{fallbackCode}</span>
          <span>STUDIO ARCHIVE</span>
        </div>
        <div className="relative z-10">
          <p className="text-sm font-medium text-[#F4F4F0]">{fallbackTitle}</p>
          <p className="text-xs text-[#A1A1AA] mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

interface VectorIllustrationPlateProps {
  variant: 'botanical-bust' | 'anatomical-backpiece' | 'brutalist-reliquary' | 'cyber-herbarium';
  layerMode?: 'composite' | 'keyline' | 'spot';
}

export const VectorIllustrationPlate: React.FC<VectorIllustrationPlateProps> = ({
  variant,
  layerMode = 'composite',
}) => {
  const showKey = layerMode === 'composite' || layerMode === 'keyline';
  const showSpot = layerMode === 'composite' || layerMode === 'spot';

  if (variant === 'brutalist-reliquary') {
    return (
      <div className="relative w-full h-full min-h-[360px] bg-[#EAE6DF] text-[#111111] p-6 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#111111]/70 border-b border-[#111111]/20 pb-2">
          <span>PLATE III · SYNTHETIC HERBARIUM</span>
          <span>SCALE 1:1 · 300GSM AWAGAMI</span>
        </div>

        <svg viewBox="0 0 400 460" className="w-full h-full my-auto max-h-[340px]" fill="none">
          {/* Grid & calibration */}
          {showKey && (
            <g stroke="#111111" strokeOpacity="0.22" strokeWidth="0.8">
              <rect x="24" y="20" width="352" height="420" />
              <line x1="200" y1="20" x2="200" y2="440" />
              <line x1="24" y1="230" x2="376" y2="230" />
              <circle cx="200" cy="230" r="145" />
              <circle cx="200" cy="230" r="95" strokeDasharray="3 3" />
              <polygon points="200,45 345,320 55,320" />
            </g>
          )}

          {/* Cinnabar Risograph Spot Layer */}
          {showSpot && (
            <g>
              <rect x="56" y="54" width="110" height="110" fill="#E11D48" fillOpacity="0.88" />
              <circle cx="275" cy="310" r="54" fill="#E11D48" fillOpacity="0.85" />
              <path
                d="M110 365 L290 95"
                stroke="#E11D48"
                strokeWidth="3"
              />
            </g>
          )}

          {/* Botanical & Architectural Engraving Keyline */}
          {showKey && (
            <g stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {/* Central stem & thorns */}
              <path d="M200 410 C198 310, 205 180, 200 60" strokeWidth="2.5" />
              {/* Left architectural fronds */}
              <path d="M200 330 C160 320, 125 290, 95 255 C135 265, 175 290, 200 310" fill="#111111" />
              <path d="M200 270 C150 250, 110 215, 85 170 C130 185, 170 220, 200 248" fill="#111111" />
              <path d="M200 205 C155 185, 130 145, 115 105 C150 125, 180 165, 200 185" fill="#111111" />
              {/* Right architectural fronds */}
              <path d="M200 310 C240 295, 280 265, 310 225 C270 240, 230 270, 200 290" fill="#111111" />
              <path d="M200 245 C248 225, 285 190, 305 145 C265 165, 228 200, 200 225" fill="#111111" />
              <path d="M200 175 C235 155, 265 120, 280 85 C245 105, 220 140, 200 160" fill="#111111" />
              {/* Geometric reliquary frame */}
              <rect x="145" y="150" width="110" height="160" strokeWidth="1.5" />
              <line x1="145" y1="150" x2="255" y2="310" strokeWidth="0.9" />
              <line x1="255" y1="150" x2="145" y2="310" strokeWidth="0.9" />
            </g>
          )}
        </svg>

        <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#111111]/80 border-t border-[#111111]/20 pt-2">
          <span>RELIQUARY OF POST-INDUSTRIAL FLORA</span>
          <span>EDITION ARCHIVE · VM-2026</span>
        </div>
      </div>
    );
  }

  // cyber-herbarium / default woodcut plate
  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#111113] text-[#F4F4F0] p-6 flex flex-col justify-between overflow-hidden select-none">
      <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#A1A1AA] border-b border-[#27272A] pb-2">
        <span>PLATE IV · CONSTRUCTIVIST LINOCUT</span>
        <span>280GSM CHARCOAL COTTON BOARD</span>
      </div>

      <svg viewBox="0 0 400 460" className="w-full h-full my-auto max-h-[340px]" fill="none">
        {showKey && (
          <g stroke="#F4F4F0" strokeOpacity="0.2" strokeWidth="0.75">
            <rect x="30" y="25" width="340" height="410" />
            <line x1="30" y1="140" x2="370" y2="140" />
            <line x1="30" y1="320" x2="370" y2="320" />
            <line x1="140" y1="25" x2="140" y2="435" />
            <line x1="260" y1="25" x2="260" y2="435" />
          </g>
        )}

        {showSpot && (
          <g>
            <polygon points="200,55 330,190 200,325 70,190" fill="#E11D48" fillOpacity="0.82" />
            <rect x="165" y="345" width="70" height="55" fill="#E11D48" />
          </g>
        )}

        {showKey && (
          <g stroke="#F4F4F0" strokeWidth="1.75">
            {/* Brutalist Monolith Isometric */}
            <polygon points="200,70 300,130 300,290 200,350 100,290 100,130" fill="#09090B" fillOpacity="0.85" />
            <line x1="200" y1="70" x2="200" y2="350" />
            <line x1="100" y1="130" x2="200" y2="190" />
            <line x1="300" y1="130" x2="200" y2="190" />
            {/* Crosshatching lines */}
            <line x1="115" y1="160" x2="185" y2="202" strokeWidth="1" />
            <line x1="115" y1="180" x2="185" y2="222" strokeWidth="1" />
            <line x1="115" y1="200" x2="185" y2="242" strokeWidth="1" />
            <line x1="115" y1="220" x2="185" y2="262" strokeWidth="1" />
            <line x1="115" y1="240" x2="185" y2="282" strokeWidth="1" />
            {/* Botanical crown */}
            <circle cx="200" cy="190" r="42" stroke="#F4F4F0" strokeWidth="2" />
            <circle cx="200" cy="190" r="16" fill="#E11D48" />
          </g>
        )}
      </svg>

      <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#A1A1AA] border-t border-[#27272A] pt-2">
        <span>METAMORPHOSIS OF THE MONOLITH</span>
        <span>RELIEF PULL · VM-2026</span>
      </div>
    </div>
  );
};

interface GarmentCadBlueprintProps {
  variant: 'hoodie' | 'overcoat' | 'cargo' | 'longsleeve';
}

export const GarmentCadBlueprint: React.FC<GarmentCadBlueprintProps> = ({ variant }) => {
  return (
    <div className="relative w-full h-full min-h-[420px] bg-[#0B0C0E] border border-[#27272A] rounded-xl p-6 flex flex-col justify-between overflow-hidden select-none">
      {/* Blueprint technical grid background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #3F3F46 1px, transparent 1px), linear-gradient(to bottom, #3F3F46 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-[#27272A] pb-3 text-xs font-mono-tabular text-[#A1A1AA]">
        <span>TECHNICAL FLAT CAD · {variant.toUpperCase()} SPEC</span>
        <span className="text-[#E11D48]">PRINT PLACEMENT & SEAM CALLOUT</span>
      </div>

      <div className="relative z-10 my-auto py-4 flex items-center justify-center">
        {variant === 'hoodie' && (
          <svg viewBox="0 0 500 380" className="w-full max-w-[460px] h-auto" fill="none">
            {/* Hoodie Silhouette */}
            <path
              d="M175 55 C200 25, 300 25, 325 55 L430 115 L395 275 L350 265 L365 155 L345 315 L155 315 L135 155 L150 265 L105 275 L70 115 Z"
              fill="#141417"
              stroke="#F4F4F0"
              strokeWidth="1.75"
            />
            {/* Hood Cavity */}
            <path d="M195 55 C215 80, 285 80, 305 55" stroke="#F4F4F0" strokeWidth="1.2" />
            {/* Ribbed Hem & Cuffs */}
            <rect x="155" y="315" width="190" height="22" fill="#1C1C21" stroke="#F4F4F0" strokeWidth="1.5" />
            {/* Center Chest Kinetic Typography Placement Box */}
            <rect
              x="175"
              y="125"
              width="150"
              height="52"
              stroke="#E11D48"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="#E11D48"
              fillOpacity="0.12"
            />
            <text x="250" y="148" textAnchor="middle" fill="#F4F4F0" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DECONSTRUCTED
            </text>
            <text x="250" y="164" textAnchor="middle" fill="#F4F4F0" fontSize="10" fontFamily="monospace">
              REALITY / EST. 2026
            </text>

            {/* Right Forearm Woven Illustration Patch Callout */}
            <rect
              x="92"
              y="165"
              width="42"
              height="76"
              transform="rotate(10 92 165)"
              fill="#EAE6DF"
              stroke="#E11D48"
              strokeWidth="1.5"
            />
            {/* Dimension Callouts */}
            <line x1="155" y1="358" x2="345" y2="358" stroke="#A1A1AA" strokeWidth="1" />
            <text x="250" y="372" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">
              BOXY HEM WIDTH: 680MM · 520GSM TERRY
            </text>
          </svg>
        )}

        {variant === 'overcoat' && (
          <svg viewBox="0 0 500 380" className="w-full max-w-[460px] h-auto" fill="none">
            {/* Overcoat Back View Silhouette */}
            <path
              d="M170 40 L330 40 L435 125 L400 265 L355 250 L360 140 L370 345 L130 345 L140 140 L145 250 L100 265 L65 125 Z"
              fill="#141417"
              stroke="#F4F4F0"
              strokeWidth="1.75"
            />
            {/* Raw Canvas Back Plate */}
            <rect
              x="175"
              y="75"
              width="150"
              height="215"
              fill="#DFDDD6"
              stroke="#E11D48"
              strokeWidth="1.5"
            />
            {/* Anatomical Illustration Vector Sketch Inside Back Plate */}
            <circle cx="250" cy="120" r="22" stroke="#111111" strokeWidth="1.5" />
            <line x1="250" y1="95" x2="250" y2="275" stroke="#111111" strokeWidth="1.2" />
            <path d="M215 155 C235 145, 265 145, 285 155 L275 245 L225 245 Z" stroke="#111111" strokeWidth="1.4" />
            {/* Cinnabar Sleeve Tab */}
            <rect x="394" y="238" width="22" height="8" fill="#E11D48" />
            <text x="250" y="368" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">
              BACK LITHOGRAPH PANEL: 420×620MM · 14OZ RAW CANVAS
            </text>
          </svg>
        )}

        {(variant === 'cargo' || variant === 'longsleeve') && (
          <svg viewBox="0 0 500 380" className="w-full max-w-[460px] h-auto" fill="none">
            {/* Articulated Cargo Trousers CAD */}
            <path
              d="M165 30 L335 30 L360 345 L275 345 L250 135 L225 345 L140 345 Z"
              fill="#141417"
              stroke="#F4F4F0"
              strokeWidth="1.75"
            />
            {/* Cargo Bellows Pockets */}
            <rect x="142" y="135" width="52" height="85" fill="#1C1C21" stroke="#F4F4F0" strokeWidth="1.4" />
            <rect x="306" y="135" width="52" height="85" fill="#1C1C21" stroke="#F4F4F0" strokeWidth="1.4" />
            {/* Woven Patch on Right Cargo Pocket */}
            <rect x="316" y="152" width="32" height="52" fill="#EAE6DF" stroke="#E11D48" strokeWidth="1.5" />
            {/* Compression Straps */}
            <line x1="150" y1="235" x2="235" y2="235" stroke="#E11D48" strokeWidth="3" />
            <line x1="265" y1="235" x2="350" y2="235" stroke="#E11D48" strokeWidth="3" />
            <text x="250" y="368" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">
              8-POCKET ARTICULATED RIPSTOP · WOVEN DAMASK PATCH
            </text>
          </svg>
        )}
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-[#27272A] pt-3 text-[11px] font-mono-tabular text-[#A1A1AA]">
        <div>
          <span className="text-[#F4F4F0] block">SEAM ALLOWANCE</span>
          <span>12MM OVERLOCK + RAW EDGE</span>
        </div>
        <div>
          <span className="text-[#F4F4F0] block">SCREEN MESH</span>
          <span>320TP HALFTONE / PLASTISOL</span>
        </div>
        <div>
          <span className="text-[#F4F4F0] block">LABEL SPEC</span>
          <span>HIGH-DENSITY DAMASK WOVEN</span>
        </div>
      </div>
    </div>
  );
};
