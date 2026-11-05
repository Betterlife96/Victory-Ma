import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { CaseStudyProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientArtwork';

interface CaseStudyModalProps {
  project: CaseStudyProject | null;
  onClose: () => void;
  onSelectProject: (project: CaseStudyProject) => void;
  allProjects: CaseStudyProject[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto p-4 md:p-8 flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-6xl bg-[#0A0A0C] border border-[#27272A] rounded-2xl overflow-hidden my-4 shadow-2xl">
        {/* Top Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A0A0C]/95 backdrop-blur border-b border-[#27272A]">
          <div className="flex items-center gap-2 text-xs text-[#A1A1AA] font-mono-tabular">
            <span>CASE STUDY {project.index}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E11D48]">{project.statusNote}</span>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#F4F4F0] bg-[#18181B] hover:bg-[#27272A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            aria-label="Close Case Study"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Header & Thesis */}
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
              {project.disciplines.map((d, idx) => (
                <React.Fragment key={d}>
                  <span>{d}</span>
                  {idx < project.disciplines.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
              <span aria-hidden="true">·</span>
              <span className="font-mono-tabular">{project.year}</span>
            </div>

            <h2
              id="case-study-title"
              className="text-2xl md:text-4xl font-bold tracking-tight text-[#F4F4F0]"
              style={{ textWrap: 'balance' }}
            >
              {project.index}. {project.title}
            </h2>

            <p className="text-base md:text-lg text-[#D4D4D8] leading-relaxed">
              {project.thesis}
            </p>
          </div>

          {/* Primary Artwork Plate */}
          <div className="rounded-xl overflow-hidden border border-[#27272A] bg-[#050505]">
            <ResilientImage
              src={project.imageUrl}
              alt={project.title}
              className="w-full max-h-[640px] object-cover"
              fallbackTitle={project.title}
              fallbackCode={`CASE-${project.index}`}
            />
          </div>

          {/* 4-Column Specification Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-[#27272A]">
            {project.specifications.map((spec) => (
              <div key={spec.label} className="space-y-1">
                <div className="text-xs text-[#A1A1AA]">{spec.label}</div>
                <div className="text-sm font-medium text-[#F4F4F0] font-mono-tabular">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Narrative & Deliverables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#F4F4F0]">
                  01. Conceptual Direction & Studio Research
                </h3>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                  {project.conceptNarrative}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#F4F4F0]">
                  02. Materiality, Lighting & Execution Notes
                </h3>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                  {project.artDirectionNotes}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 bg-[#111114] border border-[#27272A] rounded-xl p-6">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#F4F4F0]">
                  Project Deliverables & Artifacts
                </h3>
                <ul className="space-y-2.5 text-sm text-[#D4D4D8]">
                  {project.deliverables.map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-b border-[#27272A]/60 pb-2 last:border-none last:pb-0"
                    >
                      <span className="text-xs font-mono-tabular text-[#E11D48]">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color & Material Palette */}
              <div className="space-y-3 pt-4 border-t border-[#27272A]">
                <h4 className="text-xs text-[#A1A1AA]">
                  Curated Pigments & Surface Palette
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex items-center gap-3 p-2 rounded-lg bg-[#0A0A0C] border border-[#27272A]"
                    >
                      <div
                        className="w-6 h-6 rounded border border-white/15 shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-[#F4F4F0] truncate">
                          {swatch.name}
                        </div>
                        <div className="text-[11px] font-mono-tabular text-[#A1A1AA]">
                          {swatch.hex}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Visual Plate if available */}
          {project.secondaryImageUrl && (
            <div className="space-y-3 pt-4">
              <div className="text-xs text-[#A1A1AA] font-mono-tabular">
                COMPANION ARCHIVE PLATE · TECHNICAL & CONTEXTUAL VIEW
              </div>
              <div className="rounded-xl overflow-hidden border border-[#27272A] bg-[#050505]">
                <ResilientImage
                  src={project.secondaryImageUrl}
                  alt={`${project.title} secondary plate`}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>
            </div>
          )}

          {/* Modal Footer Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#27272A]">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-[#F4F4F0] bg-[#141417] hover:bg-[#1F1F23] border border-[#27272A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[#E11D48]" />
              <span>Previous: {prevProject.index}. {prevProject.title.split('—')[0]}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-2.5 text-xs font-medium text-[#F4F4F0] bg-[#141417] hover:bg-[#1F1F23] border border-[#27272A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Next: {nextProject.index}. {nextProject.title.split('—')[0]}</span>
              <ArrowRight className="w-4 h-4 text-[#E11D48]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
