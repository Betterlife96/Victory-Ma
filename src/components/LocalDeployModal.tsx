import React, { useEffect } from 'react';
import { X, Terminal, Globe, CheckCircle2 } from 'lucide-react';

interface LocalDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocalDeployModal: React.FC<LocalDeployModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto p-4 md:p-8 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
    >
      <div className="relative w-full max-w-3xl bg-[#0B0B0E] border border-[#27272A] rounded-2xl overflow-hidden shadow-2xl my-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A] bg-[#0B0B0E]">
          <div className="text-xs font-mono-tabular text-[#A1A1AA]">
            STUDIO DOCUMENTATION · LOCAL SETUP &amp; CLOUD DEPLOYMENT
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F4F4F0] bg-[#18181B] hover:bg-[#27272A] rounded-lg transition-colors cursor-pointer"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <h2
              id="deploy-guide-title"
              className="text-2xl font-bold text-[#F4F4F0]"
            >
              Running Locally &amp; Deploying Your Portfolio Online
            </h2>
            <p className="text-sm text-[#A1A1AA]">
              Complete step-by-step developer workflow to run this TypeScript, Tailwind CSS, and Motion portfolio on your machine and publish it to a live custom domain.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#111115] border border-[#27272A] space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F4F4F0]">
                <Terminal className="w-4 h-4 text-[#E11D48]" />
                <span>01. Run the Project Locally on Your Computer</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Ensure you have Node.js (v18+ or v20+ LTS) installed. Download or clone your project folder, open your terminal in the project root, and run:
              </p>
              <pre className="p-3.5 rounded-lg bg-[#050505] border border-[#27272A] text-xs font-mono-tabular text-[#E4E4E7] overflow-x-auto">
{`# 1. Install all required packages
npm install

# 2. Start the local development server (runs on http://localhost:3000)
npm run dev

# 3. Verify production bundle & TypeScript types
npm run build`}
              </pre>
            </div>

            <div className="p-5 rounded-xl bg-[#111115] border border-[#27272A] space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F4F4F0]">
                <Globe className="w-4 h-4 text-[#E11D48]" />
                <span>02. Deploy Online (Vercel, Netlify, or Cloud Run)</span>
              </div>
              <div className="space-y-2 text-xs text-[#A1A1AA] leading-relaxed">
                <p>
                  <strong className="text-[#F4F4F0]">Option A — Vercel / Netlify (Fastest Static &amp; Edge Hosting):</strong> Push this repository to GitHub, import the repository into Vercel or Netlify, set the Build Command to <code className="text-[#F4F4F0] font-mono-tabular">npm run build</code> and the Output Directory to <code className="text-[#F4F4F0] font-mono-tabular">dist</code>. Every push to your main branch will automatically deploy.
                </p>
                <p>
                  <strong className="text-[#F4F4F0]">Option B — One-Click Cloud Run Deployment:</strong> You can also publish directly from this workspace or deploy via Google Cloud Run using the production build output.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#111115] border border-[#27272A] space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F4F4F0]">
                <CheckCircle2 className="w-4 h-4 text-[#E11D48]" />
                <span>03. Customizing Artwork &amp; Case Studies</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                All conceptual projects, illustrations, garment tech packs, and editorial spreads are structured cleanly in <code className="text-[#F4F4F0] font-mono-tabular">src/data/portfolioData.ts</code>. As you create new client or personal works, simply add entries or drop high-resolution images into <code className="text-[#F4F4F0] font-mono-tabular">src/assets/images/</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
