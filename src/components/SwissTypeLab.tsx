import React, { useState } from 'react';

type PosterTheme = 'obsidian' | 'bone' | 'cinnabar';
type GridStructure = 'basel-asymmetric' | 'monolith-stack' | 'acoustic-matrix';

export const SwissTypeLab: React.FC = () => {
  const [theme, setTheme] = useState<PosterTheme>('bone');
  const [grid, setGrid] = useState<GridStructure>('basel-asymmetric');
  const [showGridLines, setShowGridLines] = useState<boolean>(true);

  const themeClasses: Record<
    PosterTheme,
    { bg: string; text: string; muted: string; rule: string; accent: string }
  > = {
    obsidian: {
      bg: 'bg-[#09090B]',
      text: 'text-[#F4F4F0]',
      muted: 'text-[#A1A1AA]',
      rule: 'border-[#27272A]',
      accent: 'bg-[#E11D48] text-white',
    },
    bone: {
      bg: 'bg-[#EAE6DF]',
      text: 'text-[#111111]',
      muted: 'text-[#52525B]',
      rule: 'border-[#111111]/20',
      accent: 'bg-[#E11D48] text-white',
    },
    cinnabar: {
      bg: 'bg-[#B91C1C]',
      text: 'text-[#F4F4F0]',
      muted: 'text-[#FECDD3]',
      rule: 'border-white/25',
      accent: 'bg-[#09090B] text-[#F4F4F0]',
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className="bg-[#0D0D10] border border-[#27272A] rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#27272A] pb-6">
        <div className="space-y-1">
          <div className="text-xs text-[#A1A1AA] font-mono-tabular">
            INTERACTIVE SPECIMEN · SWISS EDITORIAL & POSTER MATRIX
          </div>
          <h3 className="text-xl font-bold text-[#F4F4F0]">
            Kinetic Grid & Typographic Composition Studio
          </h3>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Grid Selector */}
          <div className="flex items-center gap-1 p-1 bg-[#141418] border border-[#27272A] rounded-lg">
            <button
              onClick={() => setGrid('basel-asymmetric')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                grid === 'basel-asymmetric'
                  ? 'bg-[#F4F4F0] text-[#050505]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
              01. Basel Grid
            </button>
            <button
              onClick={() => setGrid('monolith-stack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                grid === 'monolith-stack'
                  ? 'bg-[#F4F4F0] text-[#050505]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
              02. Monolith Type
            </button>
            <button
              onClick={() => setGrid('acoustic-matrix')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                grid === 'acoustic-matrix'
                  ? 'bg-[#F4F4F0] text-[#050505]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
              03. Index Matrix
            </button>
          </div>

          {/* Paper / Ink Colorway Selector */}
          <div className="flex items-center gap-1 p-1 bg-[#141418] border border-[#27272A] rounded-lg">
            <button
              onClick={() => setTheme('bone')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                theme === 'bone'
                  ? 'bg-[#EAE6DF] text-[#111111]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
               Cotton Rag
            </button>
            <button
              onClick={() => setTheme('obsidian')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                theme === 'obsidian'
                  ? 'bg-[#27272A] text-[#F4F4F0]'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
              Press Black
            </button>
            <button
              onClick={() => setTheme('cinnabar')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                theme === 'cinnabar'
                  ? 'bg-[#E11D48] text-white'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
              }`}
            >
              Cinnabar Overprint
            </button>
          </div>

          <button
            onClick={() => setShowGridLines(!showGridLines)}
            className="px-3 py-2 text-xs font-medium text-[#F4F4F0] bg-[#141418] hover:bg-[#1F1F25] border border-[#27272A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {showGridLines ? 'Hide Construction Grid' : 'Show Construction Grid'}
          </button>
        </div>
      </div>

      {/* Live Poster Canvas */}
      <div
        className={`relative rounded-xl border ${currentTheme.rule} ${currentTheme.bg} ${currentTheme.text} p-6 md:p-10 min-h-[420px] flex flex-col justify-between transition-colors duration-200 overflow-hidden`}
      >
        {/* Optional Swiss Modular Grid Overlay */}
        {showGridLines && (
          <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none opacity-25">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className={`border-r ${currentTheme.rule} h-full`}
              />
            ))}
          </div>
        )}

        {/* Top Editorial Metadata Bar */}
        <div
          className={`relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b ${currentTheme.rule} text-xs font-mono-tabular`}
        >
          <div>
            <span className="block font-semibold">VICTORY MADUMERE STUDIO</span>
            <span className={currentTheme.muted}>BASEL / TOKYO / LONDON</span>
          </div>
          <div>
            <span className="block font-semibold">TYPOGRAPHIE & STRUKTUR</span>
            <span className={currentTheme.muted}>MONOGRAPH VOL. 04</span>
          </div>
          <div>
            <span className="block font-semibold">SPECIMEN SERIES</span>
            <span className={currentTheme.muted}>SELF-INITIATED ARCHIVE</span>
          </div>
          <div className="text-right">
            <span className="block font-semibold">REF. 1957–2026</span>
            <span className={currentTheme.muted}>12-COL MODULAR</span>
          </div>
        </div>

        {/* Dynamic Poster Core Layout */}
        {grid === 'basel-asymmetric' && (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 my-8 items-end">
            <div className="md:col-span-8 space-y-2">
              <div className={`text-xs font-mono-tabular ${currentTheme.muted}`}>
                01. AVANT-GARDE EDITORIAL THESIS
              </div>
              <h4 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[0.95]">
                FORM FOLLOWS TENSION &amp; TEXTILE.
              </h4>
            </div>
            <div className="md:col-span-4 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-4 gap-1.5 h-24">
                <div className="bg-current opacity-90 col-span-2" />
                <div className="border border-current col-span-1" />
                <div className={`${currentTheme.accent} col-span-1 flex items-end p-1.5 text-[10px] font-mono-tabular`}>
                  04
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${currentTheme.muted}`}>
                An independent investigation into mathematical grid systems applied to heavyweight streetwear graphics and exposed-spine art publications.
              </p>
            </div>
          </div>
        )}

        {grid === 'monolith-stack' && (
          <div className="relative z-10 my-8 space-y-4">
            <div className="flex flex-col space-y-1 font-display font-extrabold tracking-tighter leading-none">
              <span className="text-3xl sm:text-5xl opacity-35">
                SILENCE AS ARMOR
              </span>
              <span className="text-4xl sm:text-6xl opacity-65">
                SILENCE AS ARMOR
              </span>
              <span className="text-5xl sm:text-7xl">
                SILENCE AS ARMOR
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <span className={`text-xs font-mono-tabular ${currentTheme.muted}`}>
                KINETIC SHUTTER LOCKUP · 3-PASS SCREENPRINT STUDY
              </span>
              <span className={`px-3 py-1 text-xs font-mono-tabular ${currentTheme.accent}`}>
                520GSM HEAVY JERSEY EDITION
              </span>
            </div>
          </div>
        )}

        {grid === 'acoustic-matrix' && (
          <div className="relative z-10 my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Grid Discipline',
                body: 'Asymmetric column tension anchored by strict baseline rules and tabular index numerals.',
              },
              {
                num: '02',
                title: 'Tactile Ink Pull',
                body: 'High-mesh halftone screens and soy risograph spot layers on 350GSM archival cotton rag.',
              },
              {
                num: '03',
                title: 'Wearable Artifact',
                body: 'Translating flat editorial compositions onto three-dimensional heavyweight garment panels.',
              },
            ].map((cell) => (
              <div
                key={cell.num}
                className={`p-5 border ${currentTheme.rule} flex flex-col justify-between space-y-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold font-mono-tabular">
                    {cell.num}.
                  </span>
                  <span className={`w-3 h-3 ${currentTheme.accent}`} />
                </div>
                <div className="space-y-1.5">
                  <h5 className="font-display font-bold text-lg">{cell.title}</h5>
                  <p className={`text-xs leading-relaxed ${currentTheme.muted}`}>
                    {cell.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Colophon */}
        <div
          className={`relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t ${currentTheme.rule} text-xs font-mono-tabular ${currentTheme.muted}`}
        >
          <span>FONT PAIRING: BRICOLAGE GROTESQUE · PLUS JAKARTA SANS · JETBRAINS MONO</span>
          <span>PRINT PROOF: UNCOATED ARCHIVAL STOCK</span>
        </div>
      </div>
    </div>
  );
};
