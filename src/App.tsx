import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Layers,
  Eye,
  SlidersHorizontal,
  Check,
  BookOpen,
  Menu,
  X,
} from 'lucide-react';
import {
  CASE_STUDIES,
  ILLUSTRATION_WORKS,
  GRAPHIC_SYSTEM_WORKS,
  APPAREL_CAPSULE,
  CREATIVE_PILLARS,
  GENERATED_IMAGES,
  DisciplineCategory,
  CaseStudyProject,
  IllustrationPiece,
} from './data/portfolioData';
import {
  ResilientImage,
  VectorIllustrationPlate,
  GarmentCadBlueprint,
} from './components/ResilientArtwork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SwissTypeLab } from './components/SwissTypeLab';
import { LocalDeployModal } from './components/LocalDeployModal';

const FILTER_CATEGORIES: DisciplineCategory[] = [
  'All Works',
  'Fashion & Streetwear',
  'Illustration & Art',
  'Typography & Editorial',
  'Campaign & Branding',
];

export default function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<DisciplineCategory>('All Works');
  const [activeCaseStudy, setActiveCaseStudy] =
    useState<CaseStudyProject | null>(null);
  const [activeIllustrationLightbox, setActiveIllustrationLightbox] =
    useState<IllustrationPiece | null>(null);
  const [illustrationLayerMode, setIllustrationLayerMode] = useState<
    'composite' | 'keyline' | 'spot'
  >('composite');
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>(
    APPAREL_CAPSULE[0].id
  );
  const [garmentViewMode, setGarmentViewMode] = useState<'lookbook' | 'cad'>(
    'lookbook'
  );
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Contact form states
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryDiscipline, setInquiryDiscipline] = useState(
    'Fashion & Apparel Graphics'
  );
  const [inquiryScope, setInquiryScope] = useState('Capsule Art Direction');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredProjects =
    selectedCategory === 'All Works'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((project) => project.category === selectedCategory);

  const currentGarment =
    APPAREL_CAPSULE.find((g) => g.id === selectedGarmentId) ||
    APPAREL_CAPSULE[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F4F0] flex flex-col">
      {/* Sticky Top Bar following strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#27272A]">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#F4F4F0] whitespace-nowrap shrink-0"
          >
            VICTORY MADUMERE
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
          >
            <a
              href="#selected-works"
              className="hover:text-[#F4F4F0] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Selected Works
            </a>
            <a
              href="#illustration"
              className="hover:text-[#F4F4F0] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Illustration
            </a>
            <a
              href="#graphic-systems"
              className="hover:text-[#F4F4F0] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Graphic Systems
            </a>
            <a
              href="#apparel"
              className="hover:text-[#F4F4F0] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Apparel
            </a>
            <a
              href="#about"
              className="hover:text-[#F4F4F0] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-medium text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Inquire
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F4F4F0] rounded-lg border border-[#27272A]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#27272A] bg-[#0A0A0D] px-6 py-4 space-y-3">
            <div className="flex flex-col space-y-2.5 text-sm font-medium text-[#D4D4D8]">
              <a
                href="#selected-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Selected Works
              </a>
              <a
                href="#illustration"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Illustration Gallery
              </a>
              <a
                href="#graphic-systems"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Graphic &amp; Typographic Systems
              </a>
              <a
                href="#apparel"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Fashion &amp; Streetwear Capsule
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                About &amp; Positioning
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* HERO SECTION: Split-Screen Architecture + Full-Width Metrics Row Below */}
        <section className="max-w-[1360px] mx-auto px-6 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Typographic Hierarchy & Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-between py-2 space-y-8"
            >
              <div className="space-y-6">
                {/* Unboxed metadata kicker */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                  <span>Multidisciplinary Creative Direction</span>
                  <span aria-hidden="true">·</span>
                  <span>Self-Initiated Visual Archive</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#E11D48]">Edition 2026</span>
                </div>

                <h1
                  className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#F4F4F0] leading-[1.04]"
                  style={{ textWrap: 'balance' }}
                >
                  Where Fine-Art Printmaking Collides With Avant-Garde Streetwear &amp; Swiss Grid Systems.
                </h1>

                <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-[66ch]">
                  Independent multidisciplinary practice of Victory Madumere—working across original illustration, graphic systems, heavyweight apparel graphics, editorial monographs, and conceptual fashion campaigns. Every work in this archive is a self-initiated studio investigation built from zero.
                </p>
              </div>

              {/* Primary CTAs & Discipline Summary */}
              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#selected-works"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveCaseStudy(CASE_STUDIES[0])}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#F4F4F0] bg-[#121216] hover:bg-[#1C1C22] border border-[#27272A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Eye className="w-4 h-4 text-[#E11D48]" />
                    <span>Read Featured Monograph (01)</span>
                  </button>

                  <button
                    onClick={() => setIsDeployModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-[#A1A1AA] hover:text-[#F4F4F0] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Local Run &amp; Deploy Guide</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-[#27272A]/80 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#A1A1AA]">
                  <span className="text-[#F4F4F0] font-medium">Practice Pillars:</span>
                  <span>01. Illustration &amp; Art</span>
                  <span aria-hidden="true">·</span>
                  <span>02. Graphic Design</span>
                  <span aria-hidden="true">·</span>
                  <span>03. Apparel Graphics</span>
                  <span aria-hidden="true">·</span>
                  <span>04. Streetwear Design</span>
                  <span aria-hidden="true">·</span>
                  <span>05. Editorial Typography</span>
                  <span aria-hidden="true">·</span>
                  <span>06. Branding</span>
                  <span aria-hidden="true">·</span>
                  <span>07. Fashion Campaigns</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Matching-Height Visual Anchor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div
                onClick={() => setActiveCaseStudy(CASE_STUDIES[0])}
                className="group relative h-full min-h-[420px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-[#27272A] bg-[#0D0D10] cursor-pointer"
              >
                <ResilientImage
                  src={GENERATED_IMAGES.heroEditorial}
                  alt="Anatomical Silence — Oversized charcoal boiled wool jacket with screen-printed fine-art anatomical illustration on raw canvas back panel"
                  className="w-full h-full lg:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono-tabular text-[#F4F4F0]/90">
                  <span>ARCHIVE PLATE 01 · WEARABLE LITHOGRAPH</span>
                  <span className="inline-flex items-center gap-1 text-[#F4F4F0] group-hover:text-[#E11D48] transition-colors">
                    <span>Open Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                    <span>Fashion &amp; Apparel Graphics</span>
                    <span aria-hidden="true">·</span>
                    <span>Self-Initiated Concept</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">640GSM Wool / Raw Canvas</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-white">
                    01. Anatomical Silence — Wearable Lithograph Capsule
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width 4-Column Studio Archive Metrics Strip Below Hero Split */}
          <div className="mt-10 pt-8 border-t border-[#27272A] grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#F4F4F0] font-mono-tabular">
                07 Disciplines
              </div>
              <div className="text-xs text-[#A1A1AA]">
                Unified across fine art, typography, and apparel construction
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#F4F4F0] font-mono-tabular">
                05 Monographs
              </div>
              <div className="text-xs text-[#A1A1AA]">
                In-depth conceptual case studies with full material specs
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#F4F4F0] font-mono-tabular">
                520–640 GSM
              </div>
              <div className="text-xs text-[#A1A1AA]">
                Heavyweight architectural jersey &amp; boiled wool garment specs
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-display font-bold text-[#E11D48] font-mono-tabular">
                100% Original
              </div>
              <div className="text-xs text-[#A1A1AA]">
                Self-initiated studio concepts, illustrations &amp; lookbooks
              </div>
            </div>
          </div>
        </section>

        {/* SUBTLE ANIMATED MARQUEE SECTION DIVIDER */}
        <div className="border-y border-[#27272A] bg-[#09090C] py-3 overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono-tabular text-[#A1A1AA]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span>selected works &amp; monographs</span>
                <span className="text-[#E11D48]">·</span>
                <span>fine-art illustration &amp; risograph printmaking</span>
                <span className="text-[#E11D48]">·</span>
                <span>heavyweight streetwear &amp; apparel graphics</span>
                <span className="text-[#E11D48]">·</span>
                <span>swiss brutalist typography &amp; editorial design</span>
                <span className="text-[#E11D48]">·</span>
                <span>fashion campaigns &amp; creative direction</span>
                <span className="text-[#E11D48]">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 01: SELECTED WORKS & CASE STUDIES (DYNAMIC BENTO GRID) */}
        <section
          id="selected-works"
          className="max-w-[1360px] mx-auto px-6 py-16 md:py-24 space-y-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                <span>01. CURATED ARCHIVE</span>
                <span aria-hidden="true">·</span>
                <span>SELF-INITIATED CONCEPTUAL PROJECTS</span>
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
                style={{ textWrap: 'balance' }}
              >
                Selected Works &amp; Conceptual Case Studies
              </h2>
            </div>

            {/* Interactive Segmented Filter Bar */}
            <div
              role="tablist"
              aria-label="Filter projects by discipline"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#111115] border border-[#27272A] rounded-xl"
            >
              {FILTER_CATEGORIES.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? 'bg-[#F4F4F0] text-[#050505] shadow-sm'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const spanClass =
                project.bentoSpan === 'wide' && selectedCategory === 'All Works'
                  ? 'md:col-span-2'
                  : 'col-span-1';

              return (
                <motion.article
                  layout
                  key={project.id}
                  onClick={() => setActiveCaseStudy(project)}
                  className={`group relative rounded-2xl overflow-hidden bg-[#0C0C0F] border border-[#27272A] hover:border-[#52525B] transition-colors flex flex-col justify-between cursor-pointer ${spanClass}`}
                >
                  <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden bg-[#08080A]">
                    <ResilientImage
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      fallbackTitle={project.title}
                      fallbackCode={`ARCHIVE-${project.index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0F] via-black/25 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono-tabular text-[#F4F4F0]/90">
                      <span>CASE STUDY {project.index}</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-white group-hover:bg-[#E11D48] transition-colors">
                        <span>Inspect Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    {/* Zero-Pill Unboxed Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                      <span className="text-[#E11D48] font-medium">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.statusNote}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-tabular">{project.year}</span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#F4F4F0] group-hover:text-white">
                      {project.index}. {project.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] line-clamp-2 leading-relaxed">
                      {project.thesis}
                    </p>

                    <div className="pt-3 border-t border-[#27272A]/70 flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                      {project.disciplines.map((disc, idx) => (
                        <React.Fragment key={disc}>
                          <span>{disc}</span>
                          {idx < project.disciplines.length - 1 && (
                            <span aria-hidden="true">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION 02: DEDICATED ILLUSTRATION & VISUAL ART GALLERY */}
        <section
          id="illustration"
          className="border-t border-[#27272A] bg-[#08080B] py-16 md:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-6 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                  <span>02. FINE ART &amp; PRINTMAKING GALLERY</span>
                  <span aria-hidden="true">·</span>
                  <span>ORIGINAL INK, WOODCUT &amp; RISOGRAPH EDITIONS</span>
                </div>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
                  style={{ textWrap: 'balance' }}
                >
                  Dedicated Illustration &amp; Printmaking Archive
                </h2>
                <p className="text-sm md:text-base text-[#A1A1AA]">
                  Every garment graphic and exhibition poster begins as an original hand-drawn or engraved plate. Use the Ink Separation Inspector below to examine the structural linework and spot-color overprints on our vector plates.
                </p>
              </div>

              {/* Interactive Risograph / Screenprint Layer Inspector Control */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-xs font-mono-tabular text-[#A1A1AA] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Plate Separation View:</span>
                </span>
                <div className="flex items-center gap-1 p-1 bg-[#121217] border border-[#27272A] rounded-lg">
                  <button
                    onClick={() => setIllustrationLayerMode('composite')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      illustrationLayerMode === 'composite'
                        ? 'bg-[#F4F4F0] text-[#050505]'
                        : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                    }`}
                  >
                    Full Composite
                  </button>
                  <button
                    onClick={() => setIllustrationLayerMode('keyline')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      illustrationLayerMode === 'keyline'
                        ? 'bg-[#F4F4F0] text-[#050505]'
                        : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                    }`}
                  >
                    Carbon Ink Key
                  </button>
                  <button
                    onClick={() => setIllustrationLayerMode('spot')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      illustrationLayerMode === 'spot'
                        ? 'bg-[#E11D48] text-white'
                        : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                    }`}
                  >
                    Cinnabar Riso Spot
                  </button>
                </div>
              </div>
            </div>

            {/* 4-Piece Fine Art Illustration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ILLUSTRATION_WORKS.map((piece) => (
                <div
                  key={piece.id}
                  className="rounded-2xl bg-[#0D0D11] border border-[#27272A] overflow-hidden flex flex-col justify-between"
                >
                  {/* Artwork Plate Viewport */}
                  <div className="relative h-[430px] overflow-hidden bg-[#050505] border-b border-[#27272A]">
                    {piece.imageUrl ? (
                      <div className="relative w-full h-full">
                        <ResilientImage
                          src={piece.imageUrl}
                          alt={piece.title}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            illustrationLayerMode === 'keyline'
                              ? 'grayscale contrast-150'
                              : illustrationLayerMode === 'spot'
                              ? 'sepia hue-rotate-[-50deg] saturate-200 contrast-125'
                              : ''
                          }`}
                        />
                      </div>
                    ) : (
                      <VectorIllustrationPlate
                        variant={piece.svgVariant}
                        layerMode={illustrationLayerMode}
                      />
                    )}

                    <button
                      onClick={() => setActiveIllustrationLightbox(piece)}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/80 hover:bg-[#E11D48] border border-white/15 rounded-lg backdrop-blur-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Plate Specs</span>
                    </button>
                  </div>

                  {/* Plate Archival Metadata */}
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                      <span className="text-[#E11D48]">{piece.catalogNo}</span>
                      <span>
                        {piece.dimensions} · {piece.year}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display text-xl font-bold text-[#F4F4F0]">
                        {piece.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {piece.conceptNote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#27272A] space-y-1.5 text-xs text-[#A1A1AA]">
                      <div>
                        <span className="text-[#F4F4F0] font-medium">Medium: </span>
                        <span>{piece.medium}</span>
                      </div>
                      <div>
                        <span className="text-[#F4F4F0] font-medium">Substrate: </span>
                        <span>{piece.paperStock}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03: DEDICATED GRAPHIC DESIGN, TYPOGRAPHY & EDITORIAL GALLERY */}
        <section
          id="graphic-systems"
          className="border-t border-[#27272A] max-w-[1360px] mx-auto px-6 py-16 md:py-24 space-y-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
              <span>03. GRAPHIC DESIGN, TYPOGRAPHY &amp; EDITORIAL SYSTEMS</span>
              <span aria-hidden="true">·</span>
              <span>SWISS MODERNISM &amp; AVANT-GARDE PUBLICATIONS</span>
            </div>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
              style={{ textWrap: 'balance' }}
            >
              Editorial Monographs, Poster Systems &amp; Brand Architecture
            </h2>
            <p className="text-sm md:text-base text-[#A1A1AA]">
              Rooted in Basel typographic grid systems and underground cultural publishing, our graphic design work treats every book spread, exhibition poster, and woven garment spec tag as an enduring structural artifact.
            </p>
          </div>

          {/* Featured Editorial Monograph Spread Showcase + 2 Companion Graphic Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large Editorial Spread Showcase */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0C0C10] border border-[#27272A] overflow-hidden flex flex-col justify-between">
              <div className="relative h-80 sm:h-96 bg-[#050505] border-b border-[#27272A]">
                <ResilientImage
                  src={GRAPHIC_SYSTEM_WORKS[0].imageUrl}
                  alt={GRAPHIC_SYSTEM_WORKS[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                  <span className="text-[#E11D48]">{GRAPHIC_SYSTEM_WORKS[0].index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{GRAPHIC_SYSTEM_WORKS[0].format}</span>
                  <span aria-hidden="true">·</span>
                  <span>{GRAPHIC_SYSTEM_WORKS[0].gridSystem}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F4F4F0]">
                  {GRAPHIC_SYSTEM_WORKS[0].title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {GRAPHIC_SYSTEM_WORKS[0].description}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveCaseStudy(CASE_STUDIES[2])}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#E11D48] hover:underline underline-offset-4 cursor-pointer"
                  >
                    <span>Open Full Editorial Monograph Case Study (03)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Companion Graphic Identity & Spec Systems */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {GRAPHIC_SYSTEM_WORKS.slice(1).map((work) => (
                <div
                  key={work.id}
                  className="flex-1 rounded-2xl bg-[#0C0C10] border border-[#27272A] p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono-tabular text-[#A1A1AA]">
                      <span className="text-[#E11D48]">{work.index}</span>
                      <span>{work.gridSystem}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#F4F4F0]">
                      {work.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#27272A] space-y-1.5">
                    <div className="text-[11px] font-mono-tabular text-[#F4F4F0]">
                      SYSTEM PRINCIPLES:
                    </div>
                    {work.designPrinciples.map((principle, idx) => (
                      <div
                        key={principle}
                        className="text-xs text-[#A1A1AA] flex items-baseline gap-2"
                      >
                        <span className="font-mono-tabular text-[#E11D48]">
                          0{idx + 1}.
                        </span>
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Swiss Grid & Typographic Specimen Lab */}
          <SwissTypeLab />
        </section>

        {/* SECTION 04: DEDICATED FASHION, STREETWEAR & APPAREL GRAPHICS SECTION */}
        <section
          id="apparel"
          className="border-t border-[#27272A] bg-[#08080B] py-16 md:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-6 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
                  <span>04. FASHION, STREETWEAR &amp; APPAREL GRAPHICS</span>
                  <span aria-hidden="true">·</span>
                  <span>CAPSULE 00: SILENCE AS ARMOR</span>
                </div>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
                  style={{ textWrap: 'balance' }}
                >
                  Heavyweight Streetwear Silhouettes &amp; Garment Tech Packs
                </h2>
                <p className="text-sm md:text-base text-[#A1A1AA]">
                  Select an original garment from our self-initiated capsule below and switch between the studio lookbook photograph and the Technical Flat CAD Blueprint to inspect screenprint mesh specifications, woven patches, and pattern measurements.
                </p>
              </div>

              {/* Lookbook vs Technical CAD Mode Switch */}
              <div className="flex items-center gap-1 p-1 bg-[#121217] border border-[#27272A] rounded-xl self-start lg:self-auto">
                <button
                  onClick={() => setGarmentViewMode('lookbook')}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    garmentViewMode === 'lookbook'
                      ? 'bg-[#F4F4F0] text-[#050505]'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                  }`}
                >
                  Lookbook Mockup View
                </button>
                <button
                  onClick={() => setGarmentViewMode('cad')}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    garmentViewMode === 'cad'
                      ? 'bg-[#E11D48] text-white'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                  }`}
                >
                  Technical Flat CAD Blueprint
                </button>
              </div>
            </div>

            {/* Garment Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {APPAREL_CAPSULE.map((item) => {
                const isSelected = item.id === currentGarment.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGarmentId(item.id)}
                    className={`text-left p-5 rounded-xl border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#131318] border-[#E11D48]'
                        : 'bg-[#0C0C10] border-[#27272A] hover:border-[#3F3F46]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-tabular text-[#A1A1AA] mb-1.5">
                      <span className={isSelected ? 'text-[#E11D48]' : ''}>
                        {item.code}
                      </span>
                      <span>{item.colorway.split('/')[0]}</span>
                    </div>
                    <div className="font-display font-bold text-base text-[#F4F4F0] truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#A1A1AA] mt-1 truncate">
                      {item.silhouette}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Garment Inspector Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#0C0C10] border border-[#27272A] rounded-2xl p-6 md:p-8">
              {/* Left Visual Viewport */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {garmentViewMode === 'lookbook' ? (
                  <div className="relative h-full min-h-[420px] rounded-xl overflow-hidden border border-[#27272A] bg-[#050505]">
                    <ResilientImage
                      src={currentGarment.imageUrl}
                      alt={currentGarment.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono-tabular text-[#F4F4F0]">
                        {currentGarment.code} · {currentGarment.fabricSpec.split('(')[0]}
                      </span>
                      <button
                        onClick={() => setGarmentViewMode('cad')}
                        className="text-[#E11D48] font-medium hover:underline cursor-pointer"
                      >
                        Switch to Technical CAD Blueprint →
                      </button>
                    </div>
                  </div>
                ) : (
                  <GarmentCadBlueprint variant={currentGarment.cadVariant} />
                )}
              </div>

              {/* Right Tech-Pack Specification Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#A1A1AA]">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>GARMENT TECH-PACK SPECIFICATION</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentGarment.code}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#F4F4F0]">
                    {currentGarment.name}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {currentGarment.conceptStatement}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#27272A] text-xs">
                    <div>
                      <span className="text-[#A1A1AA] block">Fabrication &amp; GSM:</span>
                      <span className="text-[#F4F4F0] font-medium">
                        {currentGarment.fabricSpec}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#A1A1AA] block">Graphic &amp; Print Execution:</span>
                      <span className="text-[#F4F4F0] font-medium">
                        {currentGarment.printTechnique}
                      </span>
                    </div>
                  </div>

                  {/* Graphic Placement Callouts */}
                  <div className="space-y-2 pt-2 border-t border-[#27272A]">
                    <div className="text-xs font-semibold text-[#F4F4F0]">
                      Graphic Placement &amp; Trim Notes
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                      {currentGarment.graphicPlacementNotes.map((note, i) => (
                        <li key={note} className="flex items-baseline gap-2">
                          <span className="font-mono-tabular text-[#E11D48]">
                            0{i + 1}.
                          </span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tabular Size & Block Measurements */}
                <div className="space-y-2 pt-4 border-t border-[#27272A]">
                  <div className="text-xs font-mono-tabular text-[#A1A1AA]">
                    GARMENT BLOCK MEASUREMENTS (TOLERANCE ±1.0 CM)
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono-tabular border-collapse">
                      <thead>
                        <tr className="border-b border-[#27272A] text-[#A1A1AA]">
                          <th className="py-2 pr-3">GRADE</th>
                          <th className="py-2 px-3">CHEST / WAIST</th>
                          <th className="py-2 px-3">LENGTH</th>
                          <th className="py-2 pl-3">SLEEVE / HEM</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#27272A]/60 text-[#F4F4F0]">
                        {currentGarment.measurements.map((row) => (
                          <tr key={row.size}>
                            <td className="py-2 pr-3 font-medium text-[#E11D48]">
                              {row.size}
                            </td>
                            <td className="py-2 px-3">{row.chest}</td>
                            <td className="py-2 px-3">{row.length}</td>
                            <td className="py-2 pl-3">{row.sleeve}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Fashion Campaign Lookbook Feature Banner */}
            <div className="rounded-2xl overflow-hidden border border-[#27272A] bg-[#050505] relative">
              <div className="relative h-[380px] md:h-[460px]">
                <ResilientImage
                  src={GENERATED_IMAGES.campaignArchive}
                  alt="Procession In Concrete — Six avant-garde monochrome streetwear silhouettes walking through a brutalist concrete gallery space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#D4D4D8]">
                      <span>FASHION CAMPAIGN &amp; CREATIVE DIRECTION</span>
                      <span aria-hidden="true">·</span>
                      <span>AUTUMN / WINTER CONCEPT</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-white">
                      05. Procession In Concrete — Lookbook &amp; Spatial Staging
                    </h3>
                    <p className="text-xs md:text-sm text-[#D4D4D8] leading-relaxed">
                      Choreographed architectural campaign uniting six layered monochrome silhouettes inside a brutalist concrete sanctuary.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveCaseStudy(CASE_STUDIES[4])}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start md:self-auto"
                  >
                    <span>Explore Campaign Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: ABOUT & MULTIDISCIPLINARY CREATIVE POSITIONING */}
        <section
          id="about"
          className="border-t border-[#27272A] max-w-[1360px] mx-auto px-6 py-16 md:py-24 space-y-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#A1A1AA]">
                <span>05. CREATIVE POSITIONING &amp; ETHOS</span>
                <span aria-hidden="true">·</span>
                <span>INDEPENDENT PRACTICE</span>
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
                style={{ textWrap: 'balance' }}
              >
                Seven Interlocking Disciplines. One Cohesive Visual Language.
              </h2>
              <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                Operating at the intersection of an independent art press, a contemporary streetwear design studio, and an avant-garde graphic design practice. Rather than separating fine-art illustration from garment construction or typographic systems, each discipline informs the next.
              </p>

              <div className="p-5 rounded-xl bg-[#0D0D11] border border-[#27272A] space-y-2">
                <div className="text-xs font-mono-tabular text-[#E11D48]">
                  TRANSPARENCY &amp; ARCHIVE STATEMENT
                </div>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  All projects, capsules, monographs, and print editions exhibited in this portfolio are original, self-initiated conceptual works developed to demonstrate end-to-end art direction, visual systems thinking, and garment graphic execution.
                </p>
              </div>
            </div>

            {/* 7 Creative Pillars List */}
            <div className="lg:col-span-7 divide-y divide-[#27272A] border-y border-[#27272A]">
              {CREATIVE_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-baseline gap-3">
                    <span className="text-xs font-mono-tabular text-[#E11D48]">
                      {pillar.index}.
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#F4F4F0]">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-7 space-y-2">
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {pillar.summary}
                    </p>
                    <div className="text-xs font-mono-tabular text-[#D4D4D8]">
                      {pillar.methods}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 06: CONTACT & COMMISSION INQUIRY */}
        <section
          id="contact"
          className="border-t border-[#27272A] bg-[#08080B] py-16 md:py-24"
        >
          <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono-tabular text-[#A1A1AA]">
                  06. STUDIO INQUIRIES &amp; COLLABORATIONS
                </div>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
                  style={{ textWrap: 'balance' }}
                >
                  Commission Original Artwork, Apparel Graphics, or Art Direction.
                </h2>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                  Available for select independent fashion capsules, custom illustration series, editorial book design, and holistic brand world creation.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#27272A] text-sm">
                <div>
                  <span className="text-xs font-mono-tabular text-[#A1A1AA] block">
                    DIRECT STUDIO DISPATCH
                  </span>
                  <span className="font-medium text-[#F4F4F0]">
                    tory.madumere@gmail.com
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono-tabular text-[#A1A1AA] block">
                    CAPABILITIES &amp; DELIVERABLES
                  </span>
                  <span className="text-xs text-[#D4D4D8]">
                    Print-Ready Halftone Separations · Garment Tech Packs (CAD) · Editorial Layouts · Custom Type &amp; Brand Identity
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#0D0D11] border border-[#27272A] rounded-2xl p-6 md:p-8">
                {inquirySubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#E11D48]/15 border border-[#E11D48] text-[#E11D48] flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#F4F4F0]">
                      Studio Brief Logged
                    </h3>
                    <p className="text-sm text-[#A1A1AA] max-w-md mx-auto">
                      Thank you, <span className="text-[#F4F4F0]">{inquiryName}</span>. Your inquiry regarding <span className="text-[#F4F4F0]">{inquiryDiscipline}</span> ({inquiryScope}) has been recorded in the studio dispatch.
                    </p>
                    <button
                      onClick={() => {
                        setInquirySubmitted(false);
                        setInquiryName('');
                        setInquiryEmail('');
                        setInquiryMessage('');
                      }}
                      className="px-4 py-2 text-xs font-medium text-[#F4F4F0] bg-[#18181D] hover:bg-[#27272A] border border-[#27272A] rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="inquiry-name"
                          className="block text-xs font-medium text-[#D4D4D8]"
                        >
                          Your Name or Studio
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          placeholder="e.g., Sora Takahashi / Atelier 09"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#070709] border border-[#27272A] focus:border-[#E11D48] rounded-lg text-[#F4F4F0] placeholder-[#52525B] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="inquiry-email"
                          className="block text-xs font-medium text-[#D4D4D8]"
                        >
                          Return Email Address
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          required
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#070709] border border-[#27272A] focus:border-[#E11D48] rounded-lg text-[#F4F4F0] placeholder-[#52525B] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="inquiry-discipline"
                          className="block text-xs font-medium text-[#D4D4D8]"
                        >
                          Primary Discipline
                        </label>
                        <select
                          id="inquiry-discipline"
                          value={inquiryDiscipline}
                          onChange={(e) => setInquiryDiscipline(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#070709] border border-[#27272A] focus:border-[#E11D48] rounded-lg text-[#F4F4F0] outline-none transition-colors"
                        >
                          <option value="Illustration & Visual Art">
                            01. Illustration &amp; Visual Art
                          </option>
                          <option value="Graphic Design & Posters">
                            02. Graphic Design &amp; Posters
                          </option>
                          <option value="Fashion & Apparel Graphics">
                            03. Fashion &amp; Apparel Graphics
                          </option>
                          <option value="Streetwear & Clothing Design">
                            04. Streetwear &amp; Clothing Design
                          </option>
                          <option value="Typography & Editorial Design">
                            05. Typography &amp; Editorial Design
                          </option>
                          <option value="Branding & Art Direction">
                            06. Branding &amp; Art Direction
                          </option>
                          <option value="Fashion Campaign Concept">
                            07. Fashion Campaign Concept
                          </option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="inquiry-scope"
                          className="block text-xs font-medium text-[#D4D4D8]"
                        >
                          Engagement Scope
                        </label>
                        <select
                          id="inquiry-scope"
                          value={inquiryScope}
                          onChange={(e) => setInquiryScope(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#070709] border border-[#27272A] focus:border-[#E11D48] rounded-lg text-[#F4F4F0] outline-none transition-colors"
                        >
                          <option value="Capsule Art Direction">
                            Full Capsule Collection &amp; Tech Packs
                          </option>
                          <option value="Bespoke Illustration Series">
                            Original Print / Illustration Commission
                          </option>
                          <option value="Editorial Monograph / Identity">
                            Editorial Publication / Visual Identity
                          </option>
                          <option value="Exhibition / Creative Collaboration">
                            Exhibition or Cultural Collaboration
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="inquiry-message"
                        className="block text-xs font-medium text-[#D4D4D8]"
                      >
                        Conceptual Brief, Timeline &amp; Notes
                      </label>
                      <textarea
                        id="inquiry-message"
                        rows={4}
                        required
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Describe your garment capsule, publication concept, or visual art requirements..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#070709] border border-[#27272A] focus:border-[#E11D48] rounded-lg text-[#F4F4F0] placeholder-[#52525B] outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Project Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET ARCHITECTURAL FOOTER */}
      <footer className="border-t border-[#27272A] bg-[#050505] py-10">
        <div className="max-w-[1360px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#A1A1AA]">
          <div className="space-y-1">
            <div className="font-display font-bold text-[#F4F4F0] tracking-tight">
              VICTORY MADUMERE — MULTIDISCIPLINARY PORTFOLIO ARCHIVE
            </div>
            <div>
              All exhibited works are self-initiated conceptual projects created for this portfolio archive.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#selected-works" className="hover:text-[#F4F4F0] transition-colors">
              Selected Works
            </a>
            <a href="#illustration" className="hover:text-[#F4F4F0] transition-colors">
              Illustration
            </a>
            <a href="#graphic-systems" className="hover:text-[#F4F4F0] transition-colors">
              Graphic Systems
            </a>
            <a href="#apparel" className="hover:text-[#F4F4F0] transition-colors">
              Apparel
            </a>
            <button
              onClick={() => setIsDeployModalOpen(true)}
              className="text-[#E11D48] hover:underline underline-offset-4 cursor-pointer"
            >
              Local Setup &amp; Deploy Guide
            </button>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectProject={(proj) => setActiveCaseStudy(proj)}
        allProjects={CASE_STUDIES}
      />

      {/* Illustration Plate Lightbox Modal */}
      {activeIllustrationLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-[#0B0B0E] border border-[#27272A] rounded-2xl overflow-hidden my-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A]">
              <div className="text-xs font-mono-tabular text-[#A1A1AA]">
                {activeIllustrationLightbox.catalogNo} ·{' '}
                {activeIllustrationLightbox.edition}
              </div>
              <button
                onClick={() => setActiveIllustrationLightbox(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F4F4F0] bg-[#18181B] hover:bg-[#27272A] rounded-lg cursor-pointer"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 bg-[#050505] min-h-[380px] flex items-center justify-center border-b md:border-b-0 md:border-r border-[#27272A]">
                {activeIllustrationLightbox.imageUrl ? (
                  <ResilientImage
                    src={activeIllustrationLightbox.imageUrl}
                    alt={activeIllustrationLightbox.title}
                    className="w-full max-h-[520px] object-contain"
                  />
                ) : (
                  <VectorIllustrationPlate
                    variant={activeIllustrationLightbox.svgVariant}
                    layerMode={illustrationLayerMode}
                  />
                )}
              </div>
              <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono-tabular text-[#E11D48]">
                    {activeIllustrationLightbox.series}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#F4F4F0]">
                    {activeIllustrationLightbox.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {activeIllustrationLightbox.conceptNote}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#27272A] text-xs">
                  <div>
                    <span className="text-[#A1A1AA] block">Print Medium:</span>
                    <span className="text-[#F4F4F0] font-medium">
                      {activeIllustrationLightbox.medium}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] block">Paper Substrate:</span>
                    <span className="text-[#F4F4F0] font-medium">
                      {activeIllustrationLightbox.paperStock}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] block mb-1">
                      Color Separation Plates:
                    </span>
                    <ul className="space-y-1 text-[#D4D4D8] font-mono-tabular">
                      {activeIllustrationLightbox.inkLayers.map((layer) => (
                        <li key={layer}>{layer}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local Setup & Deployment Guide Modal */}
      <LocalDeployModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
