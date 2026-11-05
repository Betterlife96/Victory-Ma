export const GENERATED_IMAGES = {
  heroEditorial: '/src/assets/images/hero_avant_editorial_1793898971569.jpg',
  apparelHoodie: '/src/assets/images/apparel_heavyweight_hoodie_1793898971940.jpg',
  illustrationMyth: '/src/assets/images/illustration_botanical_myth_1793898974120.jpg',
  editorialSpread: '/src/assets/images/editorial_monograph_spread_1793898975619.jpg',
  campaignArchive: '/src/assets/images/campaign_silence_archive_1793898975747.jpg',
};

export type DisciplineCategory =
  | 'All Works'
  | 'Illustration & Art'
  | 'Fashion & Streetwear'
  | 'Typography & Editorial'
  | 'Campaign & Branding';

export interface CaseStudyProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: Exclude<DisciplineCategory, 'All Works'>;
  disciplines: string[];
  year: string;
  statusNote: string;
  bentoSpan: 'wide' | 'tall' | 'standard';
  imageUrl?: string;
  vectorPlateId?: 'kinetic-monolith' | 'flora-anatomica' | 'swiss-grid-04' | 'garment-cad-01';
  aspectRatio: string;
  thesis: string;
  conceptNarrative: string;
  artDirectionNotes: string;
  deliverables: string[];
  specifications: { label: string; value: string }[];
  palette: { name: string; hex: string }[];
  secondaryImageUrl?: string;
}

export interface IllustrationPiece {
  id: string;
  catalogNo: string;
  title: string;
  series: string;
  medium: string;
  paperStock: string;
  dimensions: string;
  year: string;
  edition: string;
  imageUrl?: string;
  svgVariant: 'botanical-bust' | 'anatomical-backpiece' | 'brutalist-reliquary' | 'cyber-herbarium';
  conceptNote: string;
  inkLayers: string[];
}

export interface GraphicSystemWork {
  id: string;
  index: string;
  title: string;
  format: string;
  typographyUsed: string;
  gridSystem: string;
  year: string;
  imageUrl?: string;
  posterType: 'monograph-spread' | 'swiss-kinetic' | 'exhibition-placard' | 'identity-system';
  description: string;
  designPrinciples: string[];
}

export interface ApparelGarment {
  id: string;
  code: string;
  name: string;
  capsule: string;
  silhouette: string;
  fabricSpec: string;
  printTechnique: string;
  colorway: string;
  imageUrl: string;
  cadVariant: 'hoodie' | 'overcoat' | 'cargo' | 'longsleeve';
  conceptStatement: string;
  graphicPlacementNotes: string[];
  measurements: { size: string; chest: string; length: string; sleeve: string }[];
}

export const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: 'anatomical-silence-outerwear',
    index: '01',
    title: 'Anatomical Silence — Wearable Lithograph Capsule',
    subtitle: 'Fine-art ink illustration merged with sculptural raw-seam wool outerwear',
    category: 'Fashion & Streetwear',
    disciplines: ['Fashion & Apparel Graphics', 'Illustration & Visual Art', 'Streetwear Design'],
    year: '2026',
    statusNote: 'Self-Initiated Conceptual Project',
    bentoSpan: 'wide',
    imageUrl: GENERATED_IMAGES.heroEditorial,
    secondaryImageUrl: GENERATED_IMAGES.apparelHoodie,
    aspectRatio: '4:3',
    thesis:
      'Can a garment function as an archival gallery print without sacrificing architectural drape or utilitarian durability?',
    conceptNarrative:
      'Initiated as an independent studio investigation into wearable printmaking, Anatomical Silence rejects disposable streetwear graphics in favor of museum-grade textile intervention. A hand-drawn Neo-Symbolist anatomical and botanical triptych was separated into high-mesh halftone screens and hand-pulled onto raw-edge heavyweight brushed wool canvas panels before garment assembly.',
    artDirectionNotes:
      'Photographed in raw daylight inside a poured-concrete industrial cistern. The oversized drop-shoulder silhouette creates a flat canvas plane across the upper back, uninterrupted by traditional center-back tailoring seams, punctuated only by a single woven cinnabar crimson sleeve tab.',
    deliverables: [
      'Original 3-Plate Pen & Ink Anatomical Illustration',
      '640GSM Brushed Wool & Raw Canvas Back-Piece Construction',
      'Water-Based Discharge & High-Mesh Halftone Screenprint',
      'Editorial Lookbook & Garment Tech-Pack Specification',
    ],
    specifications: [
      { label: 'Origin', value: 'Self-Initiated Studio Concept' },
      { label: 'Fabrication', value: '640GSM Boiled Wool / 14oz Unbleached Canvas' },
      { label: 'Print Medium', value: '320-Mesh Halftone Carbon Black Ink' },
      { label: 'Archive Ref', value: 'VM-ARC-2026-01' },
    ],
    palette: [
      { name: 'Carbon Soot', hex: '#0A0A0B' },
      { name: 'Weathered Slate', hex: '#3F4246' },
      { name: 'Raw Unbleached Cotton', hex: '#CBC9C2' },
      { name: 'Cinnabar Salvage Tab', hex: '#E11D48' },
    ],
  },
  {
    id: 'surreal-structures-woodcut',
    index: '02',
    title: 'Surreal Structures No. 04 — Botanical Mythos',
    subtitle: 'Experimental woodcut and risograph print series exploring classical decay',
    category: 'Illustration & Art',
    disciplines: ['Illustration & Visual Art', 'Printmaking', 'Exhibition Concept'],
    year: '2026',
    statusNote: 'Self-Initiated Conceptual Project',
    bentoSpan: 'tall',
    imageUrl: GENERATED_IMAGES.illustrationMyth,
    aspectRatio: '3:4',
    thesis:
      'Juxtaposing classical Greco-Roman sculptural permanence against invasive botanical growth and rigid axonometric architectural grids.',
    conceptNarrative:
      'Created entirely from scratch as a conceptual gallery edition, Surreal Structures No. 04 investigates the tension between human monuments and organic reclamation. The linework combines traditional crosshatched engraving techniques with stark isometric wireframes and a single flat overprint of cinnabar crimson soy ink on deckle-edge cotton rag paper.',
    artDirectionNotes:
      'Constructed on two distinct tonal registers: hyper-dense stippled ink shadows contrasted with open, breathing paper margins and a bold geometric block of crimson that anchors the upper-left quadrant.',
    deliverables: [
      'Two-Color Risograph & Relief Print Series (4 Plates)',
      'Deckle-Edge 350GSM Archival Cotton Rag Editions',
      'Custom Exhibition Framing & Curatorial Essay',
      'Apparel Graphic Adaptation for Woven Patchwork',
    ],
    specifications: [
      { label: 'Origin', value: 'Self-Initiated Conceptual Edition' },
      { label: 'Paper Stock', value: '350GSM Deckle-Edge Hahnemühle Cotton' },
      { label: 'Dimensions', value: '500 × 700 mm (B2 Architectural)' },
      { label: 'Archive Ref', value: 'VM-ILL-2026-02' },
    ],
    palette: [
      { name: 'Archival Cotton', hex: '#EAE6DF' },
      { name: 'Engraving Ink', hex: '#111111' },
      { name: 'Cinnabar Riso Spot', hex: '#A93238' },
      { name: 'Gallery Ash Frame', hex: '#1C1C1E' },
    ],
  },
  {
    id: 'fashion-as-resistance-monograph',
    index: '03',
    title: 'Fashion As Resistance — Independent Monograph & Grid System',
    subtitle: 'Swiss brutalist editorial design, exposed-spine bookbinding, and kinetic poster system',
    category: 'Typography & Editorial',
    disciplines: ['Typography & Editorial Design', 'Graphic Design', 'Art Direction'],
    year: '2026',
    statusNote: 'Self-Initiated Conceptual Project',
    bentoSpan: 'standard',
    imageUrl: GENERATED_IMAGES.editorialSpread,
    aspectRatio: '4:3',
    thesis:
      'Reimagining the fashion periodical as an uncompromising architectural artifact built on mathematical Swiss grid structures and exposed Coptic binding.',
    conceptNarrative:
      'Designed as an independent conceptual publication and accompanying Basel-inspired poster series, Fashion As Resistance explores anti-establishment garment history from 1968 to the present. The editorial system pairs extreme condensed grotesque display headlines with micro-set technical marginalia and exposed black linen thread binding that allows every spread to open 180 degrees flat.',
    artDirectionNotes:
      'Inspired by mid-century Swiss typographic bulletins and underground Tokyo fashion zines. Every layout obeys a strict 12-column modular matrix where photography, manifestos, and indexical numbers lock into visible hairline rules.',
    deliverables: [
      '240-Page Exposed-Spine Conceptual Monograph Layout',
      '12-Column Modular Swiss Typographic Grid Specification',
      'Series of 6 A1 Archival Exhibition Posters',
      'Custom Variable Display Type Treatment & Index System',
    ],
    specifications: [
      { label: 'Origin', value: 'Self-Initiated Editorial Concept' },
      { label: 'Binding', value: 'Exposed Coptic Stitch / Raw Board Cover' },
      { label: 'Typography', value: 'Bricolage Grotesque & Tabular Mono' },
      { label: 'Archive Ref', value: 'VM-EDT-2026-03' },
    ],
    palette: [
      { name: 'Newsprint Bone', hex: '#E5E1D8' },
      { name: 'Press Black', hex: '#0D0D0E' },
      { name: 'Swiss Vermilion', hex: '#D9232E' },
      { name: 'Slate Shadow', hex: '#27272A' },
    ],
  },
  {
    id: 'deconstructed-reality-streetwear',
    index: '04',
    title: 'Deconstructed Reality — Heavyweight Streetwear Capsule',
    subtitle: 'Distressed kinetic typography and woven illustration patches on 520GSM French terry',
    category: 'Fashion & Streetwear',
    disciplines: ['Streetwear & Clothing Design', 'Fashion & Apparel Graphics', 'Branding'],
    year: '2026',
    statusNote: 'Self-Initiated Conceptual Project',
    bentoSpan: 'standard',
    imageUrl: GENERATED_IMAGES.apparelHoodie,
    secondaryImageUrl: GENERATED_IMAGES.heroEditorial,
    aspectRatio: '4:3',
    thesis:
      'Merging Swiss typographic motion blur with raw edged high-density woven illustration patches across utilitarian streetwear silhouettes.',
    conceptNarrative:
      'Deconstructed Reality is a self-initiated streetwear design study examining how graphic design interacts with three-dimensional garment folds and articulated hardware. The capsule pairs a cropped, boxy 520GSM potassium-washed hoodie with multi-pocket bondage-strap technical cargo trousers. Forearm and cargo-flap zones carry high-definition jacquard woven patches derived from original cubist-anatomical ink drawings.',
    artDirectionNotes:
      'Chest typography utilizes a custom stepped-shutter stencil effect printed in three densities of matte plastisol to simulate kinetic motion across the fleece grain, balanced by industrial specification labels above the ribbed hem.',
    deliverables: [
      '520GSM Potassium-Washed Boxy Hoodie Design & Tech Pack',
      'Articulated Strapped Cargo Trouser Pattern & Hardware Spec',
      'High-Density Damask Woven Sleeve & Pocket Art Patches',
      'Brand Label System, Neck Tags & Packaging Concept',
    ],
    specifications: [
      { label: 'Origin', value: 'Self-Initiated Apparel Concept' },
      { label: 'Fleece Weight', value: '520GSM 100% Combed Ring-Spun Cotton' },
      { label: 'Wash Process', value: 'Enzyme Stone Wash + Charcoal Pigment Dye' },
      { label: 'Archive Ref', value: 'VM-APP-2026-04' },
    ],
    palette: [
      { name: 'Potassium Charcoal', hex: '#1B1C1E' },
      { name: 'Stone Washed Seam', hex: '#323438' },
      { name: 'Raw Patch Canvas', hex: '#DFDDD6' },
      { name: 'Stencil Ash', hex: '#8E9299' },
    ],
  },
  {
    id: 'monolith-procession-campaign',
    index: '05',
    title: 'Procession In Concrete — Autumn/Winter Campaign Direction',
    subtitle: 'Creative direction, spatial staging, and visual identity for an avant-garde Nomad collection',
    category: 'Campaign & Branding',
    disciplines: ['Fashion Campaigns & Creative Concepts', 'Branding & Art Direction', 'Streetwear Design'],
    year: '2026',
    statusNote: 'Self-Initiated Conceptual Project',
    bentoSpan: 'wide',
    imageUrl: GENERATED_IMAGES.campaignArchive,
    secondaryImageUrl: GENERATED_IMAGES.editorialSpread,
    aspectRatio: '16:9',
    thesis:
      'Staging fashion not as static studio commerce, but as a choreographed architectural procession through brutalist space.',
    conceptNarrative:
      'Conceived as a complete 360-degree fashion campaign and brand world, Procession In Concrete positions six monochrome utilitarian silhouettes moving in rhythmic unison beneath coffered concrete skylights. The campaign encompasses spatial scouting, casting direction, garment layering rules, exhibition invitations, and a modular graphic identity built around architectural section cuts.',
    artDirectionNotes:
      'High-contrast natural skylight bands create a natural metronome across the concrete floor. Every silhouette is styled in tonal layers of waxed cotton, boiled wool, and technical nylon webbing to read as kinetic sculpture in motion.',
    deliverables: [
      'Full Campaign Creative Direction & Spatial Lookbook (18 Frames)',
      'Brand Identity System & Seasonal Campaign Typography',
      'Brutalist Exhibition Spatial Plan & Soundscape Brief',
      'Digital Flagship Experience & Lookbook Archive',
    ],
    specifications: [
      { label: 'Origin', value: 'Self-Initiated Campaign Concept' },
      { label: 'Format', value: '35mm Cinema Scope & Medium Format Stills' },
      { label: 'Silhouettes', value: '06 Complete Layered Technical Looks' },
      { label: 'Archive Ref', value: 'VM-CMP-2026-05' },
    ],
    palette: [
      { name: 'Brutalist Concrete', hex: '#5A5D5E' },
      { name: 'Pitch Outerwear', hex: '#090A0B' },
      { name: 'Skylight Halation', hex: '#E4E7E5' },
      { name: 'Oxide Signal', hex: '#E11D48' },
    ],
  },
];

export const ILLUSTRATION_WORKS: IllustrationPiece[] = [
  {
    id: 'ill-01',
    catalogNo: 'PLATE I · RISO/WOODCUT',
    title: 'Surreal Structures No. 04 (Botanical Mythos)',
    series: 'Fragments of Classical Ruin',
    medium: 'Black India Ink Engraving + Cinnabar Risograph Overprint',
    paperStock: '350GSM Hahnemühle Deckle-Edge Cotton Rag',
    dimensions: '500 × 700 mm',
    year: '2026',
    edition: 'Conceptual Archive Study · 1 of 1',
    imageUrl: GENERATED_IMAGES.illustrationMyth,
    svgVariant: 'botanical-bust',
    conceptNote:
      'Investigates the fracture of classical sculptural ideals by pairing traditional crosshatched engraving with axonometric architectural grids and overgrown wild fern specimens.',
    inkLayers: ['Layer 01: Carbon Black Keyline Engraving', 'Layer 02: 45-LPI Stipple Halftone Shadow', 'Layer 03: Cinnabar Crimson Soy Spot Ink'],
  },
  {
    id: 'ill-02',
    catalogNo: 'PLATE II · TEXTILE LITHOGRAPH',
    title: 'Anatomical Triptych for Raw Wool Canvas',
    series: 'Anatomical Silence Capsule',
    medium: 'Fine-Line Technical Pen & High-Mesh Textile Screenprint',
    paperStock: '14oz Unbleached Heavyweight Duck Canvas',
    dimensions: '420 × 620 mm (Back Panel Scale)',
    year: '2026',
    edition: 'Conceptual Wearable Study · 1 of 1',
    imageUrl: GENERATED_IMAGES.heroEditorial,
    svgVariant: 'anatomical-backpiece',
    conceptNote:
      'Designed specifically to wrap and flex with the human scapula on an oversized wool coat. Combines Vesalian anatomical studies with fragmented cubist framing.',
    inkLayers: ['Layer 01: Raw Unbleached Loom State Base', 'Layer 02: Fine Contour Anatomical Key', 'Layer 03: Dry-Brush Charcoal Wash'],
  },
  {
    id: 'ill-03',
    catalogNo: 'PLATE III · VECTOR ETCHING',
    title: 'Reliquary of the Post-Industrial Flora',
    series: 'Synthetic Herbarium',
    medium: 'Digital Scratchboard Etching & Geometric Wireframe',
    paperStock: '300GSM Awagami Bamboo Archival Sheet',
    dimensions: '594 × 841 mm (A1)',
    year: '2026',
    edition: 'Self-Initiated Studio Plate',
    svgVariant: 'brutalist-reliquary',
    conceptNote:
      'A purely geometric and botanical synthesis constructed for large-format silkscreen translation, balancing razor-sharp radial calibration marks with organic botanical thorns.',
    inkLayers: ['Layer 01: Radial Calibration Matrix', 'Layer 02: High-Contrast Botanical Silhouette', 'Layer 03: Vermilion Registration Crosshairs'],
  },
  {
    id: 'ill-04',
    catalogNo: 'PLATE IV · WOODCUT STUDY',
    title: 'Metamorphosis of the Monolith',
    series: 'Architectural Dystopia',
    medium: 'Linocut Texture Study & Constructivist Assemblage',
    paperStock: '280GSM Charcoal Dyed Cotton Board',
    dimensions: '420 × 594 mm (A2)',
    year: '2026',
    edition: 'Self-Initiated Studio Plate',
    svgVariant: 'cyber-herbarium',
    conceptNote:
      'Explores brutalist architectural elevation drawings mutating into skeletal structures—created as the foundational visual language for apparel woven patches and hangtags.',
    inkLayers: ['Layer 01: Titanium White Relief Pull', 'Layer 02: Structural Elevation Grid', 'Layer 03: Crimson Seal Stamp'],
  },
];

export const GRAPHIC_SYSTEM_WORKS: GraphicSystemWork[] = [
  {
    id: 'gfx-01',
    index: 'SYS · 01',
    title: 'Fashion As Resistance — Editorial Monograph & Swiss Poster Series',
    format: '240pp Exposed-Spine Book + A1 Archival Poster System',
    typographyUsed: 'Bricolage Grotesque Condensed + JetBrains Mono',
    gridSystem: '12-Column Asymmetric Basel Matrix (4mm Baseline)',
    year: '2026',
    imageUrl: GENERATED_IMAGES.editorialSpread,
    posterType: 'monograph-spread',
    description:
      'A complete editorial and typographic system treating book spreads and exhibition posters as modular architectural blueprints. Visible hairline rules divide manifesto headlines, runway photo plates, and archival index footnotes.',
    designPrinciples: [
      'Extreme scale contrast between 140pt condensed titles and 7pt tabular index metadata',
      'Exposed Coptic stitch binding allowing full-bleed gutter cross-overs without distortion',
      'Strict two-ink economy (Press Black + Swiss Vermilion) on uncoated tactile cotton stock',
    ],
  },
  {
    id: 'gfx-02',
    index: 'SYS · 02',
    title: 'Klang & Struktur — Avant-Garde Sound & Exhibition Identity',
    format: 'Kinetic Typography System, Vinyl Sleeve & Spatial Signage',
    typographyUsed: 'Bricolage Grotesque Bold + Custom Stencil Numerals',
    gridSystem: '8×8 Orthogonal Acoustic Ratio Grid',
    year: '2026',
    posterType: 'swiss-kinetic',
    description:
      'Self-initiated visual identity for an experimental sound and textile installation. Uses rhythmic typographic repetition and mathematical bar progressions to visualize low-frequency acoustic resonance.',
    designPrinciples: [
      'Modular grid cells that scale seamlessly from 12-inch vinyl sleeves to 4-meter gallery banners',
      'Zero decorative ornament—pure typographic hierarchy and negative space tension',
      'High-contrast perceptual readability across both dark gallery walls and newsprint handbills',
    ],
  },
  {
    id: 'gfx-03',
    index: 'SYS · 03',
    title: 'Archive 00 — Utilitarian Garment Spec & Hangtag System',
    format: 'Woven Damask Care Labels, Tyvek Spec Tags & Industrial Packaging',
    typographyUsed: 'JetBrains Mono Tabular + Bricolage Grotesque',
    gridSystem: 'ISO Technical Specification Table Layout',
    year: '2026',
    posterType: 'identity-system',
    description:
      'A cohesive branding and graphic system for independent clothing lines that elevates internal garment labels, wash-care instructions, and packaging into collectible design artifacts.',
    designPrinciples: [
      'Inspired by archival museum conservation tags and industrial military specification plates',
      'Serialized edition numbering and garment GSM breakdown printed on tear-resistant Tyvek',
      'Custom geometric laundry and fabrication glyphs designed on a 24×24 pixel grid',
    ],
  },
];

export const APPAREL_CAPSULE: ApparelGarment[] = [
  {
    id: 'garment-01',
    code: 'ARC-00-HD01',
    name: '“Deconstructed Reality” 520GSM Boxy Hoodie',
    capsule: 'Capsule 00: Silence As Armor',
    silhouette: 'Cropped Boxy Fit · Drop Shoulder · Double-Layered Structured Hood',
    fabricSpec: '520GSM 100% Organic Ring-Spun French Terry (Potassium & Enzyme Washed)',
    printTechnique: '3-Pass Matte Plastisol Shutter Type + High-Density Woven Damask Sleeve Patch',
    colorway: 'Potassium Charcoal / Bone Canvas Patch',
    imageUrl: GENERATED_IMAGES.apparelHoodie,
    cadVariant: 'hoodie',
    conceptStatement:
      'Engineered to hold an architectural silhouette even in motion. The chest graphic utilizes a custom optical-stutter typographic lockup while the right forearm features a raw-edged jacquard woven patch of an original cubist ink study.',
    graphicPlacementNotes: [
      'Center Chest: 290mm wide multi-density plastisol kinetic typography (“DECONSTRUCTED REALITY”)',
      'Right Sleeve: 110×210mm heavyweight damask woven art patch with zig-zag contrast stitch',
      'Lower Left Hem: Industrial specification woven badge with Japanese/English archive nomenclature',
    ],
    measurements: [
      { size: 'SIZE 01 (S/M)', chest: '64 cm', length: '66 cm', sleeve: '59 cm' },
      { size: 'SIZE 02 (M/L)', chest: '68 cm', length: '69 cm', sleeve: '61 cm' },
      { size: 'SIZE 03 (L/XL)', chest: '72 cm', length: '72 cm', sleeve: '63 cm' },
    ],
  },
  {
    id: 'garment-02',
    code: 'ARC-00-CT02',
    name: '“Anatomical Silence” Raw-Seam Wool Overcoat',
    capsule: 'Capsule 00: Silence As Armor',
    silhouette: 'Oversized Architectural Drape · Raw Distressed Hem · Wide Rever Collar',
    fabricSpec: '640GSM Boiled Virgin Wool Blend + 14oz Unbleached Cotton Canvas Back Panel',
    printTechnique: '320-Mesh Carbon Black Halftone Screenprint on Detachable Back Canvas',
    colorway: 'Carbon Ash / Raw Canvas / Cinnabar Tab',
    imageUrl: GENERATED_IMAGES.heroEditorial,
    cadVariant: 'overcoat',
    conceptStatement:
      'A hybrid between a gallery lithograph and brutalist cold-weather armor. The entire back yoke is replaced by a raw-edge unbleached canvas plate hand-screenprinted with an original anatomical illustration.',
    graphicPlacementNotes: [
      'Full Back Panel: 420×620mm hand-pulled fine-art anatomical ink illustration on raw canvas',
      'Right Cuff: Woven Cinnabar Crimson archive identification tab folded into the outer seam',
      'Interior Lining: Screenprinted curatorial essay and edition numbering pocket',
    ],
    measurements: [
      { size: 'SIZE 01 (S/M)', chest: '68 cm', length: '104 cm', sleeve: '62 cm' },
      { size: 'SIZE 02 (M/L)', chest: '72 cm', length: '108 cm', sleeve: '64 cm' },
      { size: 'SIZE 03 (L/XL)', chest: '76 cm', length: '112 cm', sleeve: '66 cm' },
    ],
  },
  {
    id: 'garment-03',
    code: 'ARC-00-PN03',
    name: '“Sub-Zero” Articulated Strapped Cargo Trouser',
    capsule: 'Capsule 00: Silence As Armor',
    silhouette: 'Wide Architectural Leg · 8-Pocket Bellows System · Compression Knee Straps',
    fabricSpec: '410GSM Cotton Ripstop & Washed Bull Denim Contrast Panels',
    printTechnique: 'Woven Jacquard Illustration Patch on Left Cargo Bellows + Laser-Etched Hardware',
    colorway: 'Pitch Black / Brushed Nickel Hardware',
    imageUrl: GENERATED_IMAGES.campaignArchive,
    cadVariant: 'cargo',
    conceptStatement:
      'Constructed with articulated knee pleats and adjustable D-ring compression straps that allow the wearer to transform the trouser profile from a wide architectural column into a tapered combat silhouette.',
    graphicPlacementNotes: [
      'Left Thigh Cargo Pocket: 95×145mm framed fine-art woven illustration patch',
      'Thigh Harness: Custom 38mm heavy nylon webbing with matte steel tension buckles',
      'Ankle Gusset: Concealed heavy-gauge zip expansion revealing screenprinted spec code',
    ],
    measurements: [
      { size: 'SIZE 01 (30)', chest: '39 cm (Waist)', length: '106 cm', sleeve: '26 cm (Hem)' },
      { size: 'SIZE 02 (32)', chest: '42 cm (Waist)', length: '109 cm', sleeve: '27 cm (Hem)' },
      { size: 'SIZE 03 (34)', chest: '45 cm (Waist)', length: '112 cm', sleeve: '28 cm (Hem)' },
    ],
  },
];

export const CREATIVE_PILLARS = [
  {
    index: '01',
    title: 'Illustration & Visual Art',
    summary:
      'Original fine-art ink engravings, Neo-Symbolist anatomical studies, woodcut relief prints, and multi-layer risograph editions built for both gallery framing and textile translation.',
    methods: 'Pen & Ink · Woodcut · Risograph Separation · Digital Etching',
  },
  {
    index: '02',
    title: 'Graphic Design',
    summary:
      'Rigorous visual systems rooted in Swiss structural modernism and avant-garde brutalism—balancing mathematical grid discipline with raw, tactile organic expression.',
    methods: 'Modular Grids · Exhibition Systems · Cultural Posters · Iconography',
  },
  {
    index: '03',
    title: 'Fashion & Apparel Graphics',
    summary:
      'Treating the human body and garment panels as dynamic three-dimensional canvases through high-mesh halftone screenprinting, water-based discharge, and jacquard woven patches.',
    methods: 'Halftone Separation · Plastisol & Discharge · Jacquard Patchwork · Placement CADs',
  },
  {
    index: '04',
    title: 'Streetwear & Clothing Design',
    summary:
      'Conceptualizing heavyweight silhouettes from fiber weight (GSM) and wash chemistry to articulated seam geometry, custom hardware, and full technical production packs.',
    methods: 'Silhouette Architecture · Tech Packs · Heavyweight Jersey · Outerwear',
  },
  {
    index: '05',
    title: 'Typography & Editorial Design',
    summary:
      'Expressive publication design, independent fashion monographs, kinetic display typography, and exposed-spine books that command physical and visual permanence.',
    methods: 'Monograph Design · Kinetic Type · Swiss Grids · Print Production',
  },
  {
    index: '06',
    title: 'Branding & Art Direction',
    summary:
      'Building cohesive cultural worlds for independent fashion labels, exhibitions, and music imprints—from wordmarks and Tyvek label systems to packaging artifacts.',
    methods: 'Visual Identity · Label & Tag Systems · Packaging · Design Direction',
  },
  {
    index: '07',
    title: 'Fashion Campaigns & Creative Concepts',
    summary:
      'End-to-end conceptual narrative development, brutalist spatial staging, lighting direction, lookbook sequencing, and digital flagship experiences.',
    methods: 'Lookbook Direction · Spatial Staging · Visual Storytelling · Concept Archives',
  },
];
