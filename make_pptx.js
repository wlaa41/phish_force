const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "ShadowPhish Cyber Defense Academy – Team Contributions";

// ── Design tokens ──────────────────────────────────────────────────
const BG       = "07091A";   // deep navy-black
const PURPLE   = "8B00FF";   // vivid purple (accent)
const CYAN     = "00C8FF";   // cyber cyan
const WHITE    = "FFFFFF";
const LGREY    = "B0B8CC";   // light grey for body
const CARD_BG  = "111630";   // slightly lighter card
const GOLD     = "FFD700";   // highlight gold for role tag

// ── Helper: background + subtle grid ──────────────────────────────
function applyBg(slide) {
  slide.background = { color: BG };
  // subtle horizontal rule across the top third
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.05,
    fill: { color: PURPLE }, line: { color: PURPLE }
  });
}

// ── Helper: glowing name badge (top-left) ─────────────────────────
function nameBadge(slide, name, role, color) {
  // colour strip on left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 0.55, w: 0.07, h: 0.72,
    fill: { color: color }, line: { color: color }
  });
  slide.addText(name, {
    x: 0.6, y: 0.52, w: 6, h: 0.42,
    fontSize: 26, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });
  slide.addText(role, {
    x: 0.6, y: 0.94, w: 6, h: 0.28,
    fontSize: 13, fontFace: "Calibri", italic: true,
    color: color, margin: 0
  });
}

// ── Helper: slide number badge (bottom-right) ─────────────────────
function slideNum(slide, n, total) {
  slide.addText(`${n} / ${total}`, {
    x: 8.8, y: 5.2, w: 0.9, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: "505878",
    align: "right", margin: 0
  });
}

// ── Helper: section tag ───────────────────────────────────────────
function sectionTag(slide, label, x, y, color) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w: 2.2, h: 0.32,
    fill: { color: color, transparency: 20 },
    line: { color: color },
    rectRadius: 0.06
  });
  slide.addText(label, {
    x, y: y + 0.02, w: 2.2, h: 0.28,
    fontSize: 10, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", margin: 0
  });
}

// ── Helper: bullet card ───────────────────────────────────────────
function bulletCard(slide, bullets, x, y, w, h, accent) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: CARD_BG },
    line: { color: accent, width: 1.2 },
    shadow: { type: "outer", blur: 8, offset: 2, angle: 135, color: "000000", opacity: 0.35 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.055, h,
    fill: { color: accent }, line: { color: accent }
  });
  const items = bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, color: LGREY, fontSize: 13, fontFace: "Calibri",
               breakLine: i < bullets.length - 1 }
  }));
  slide.addText(items, {
    x: x + 0.18, y: y + 0.18, w: w - 0.28, h: h - 0.3,
    valign: "top", margin: 0
  });
}

// ── Helper: two-card layout ───────────────────────────────────────
function twoCards(slide, leftTitle, leftBullets, rightTitle, rightBullets, leftColor, rightColor) {
  sectionTag(slide, leftTitle,  0.45, 1.45, leftColor);
  sectionTag(slide, rightTitle, 5.25, 1.45, rightColor);
  bulletCard(slide, leftBullets,  0.45, 1.85, 4.45, 3.35, leftColor);
  bulletCard(slide, rightBullets, 5.25, 1.85, 4.30, 3.35, rightColor);
}

// ── Helper: single wide card with challenge/solution ──────────────
function challengeSlide(slide, challenge, solution, accent) {
  // Challenge
  sectionTag(slide, "⚠  CHALLENGE", 0.45, 1.45, "FF5050");
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.85, w: 9.1, h: 1.42,
    fill: { color: "1A0A0A" },
    line: { color: "FF5050", width: 1.2 },
    shadow: { type: "outer", blur: 8, offset: 2, angle: 135, color: "000000", opacity: 0.35 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.85, w: 0.055, h: 1.42,
    fill: { color: "FF5050" }, line: { color: "FF5050" }
  });
  slide.addText(challenge, {
    x: 0.65, y: 1.98, w: 8.7, h: 1.18,
    fontSize: 13.5, fontFace: "Calibri", color: "FFB0B0",
    valign: "top", margin: 0, wrap: true
  });

  // Solution
  sectionTag(slide, "✔  SOLUTION", 0.45, 3.42, accent);
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 3.82, w: 9.1, h: 1.42,
    fill: { color: CARD_BG },
    line: { color: accent, width: 1.2 },
    shadow: { type: "outer", blur: 8, offset: 2, angle: 135, color: "000000", opacity: 0.35 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 3.82, w: 0.055, h: 1.42,
    fill: { color: accent }, line: { color: accent }
  });
  slide.addText(solution, {
    x: 0.65, y: 3.95, w: 8.7, h: 1.18,
    fontSize: 13.5, fontFace: "Calibri", color: LGREY,
    valign: "top", margin: 0, wrap: true
  });
}

// ── Helper: project label (top-right) ────────────────────────────
function projectLabel(slide) {
  slide.addText("ShadowPhish  ·  Coventry University  ·  503IT", {
    x: 4.5, y: 0.12, w: 5.2, h: 0.3,
    fontSize: 9, fontFace: "Calibri", color: "505878",
    align: "right", margin: 0
  });
}

// ═══════════════════════════════════════════════════════════════════
//  TEAM MEMBERS
// ═══════════════════════════════════════════════════════════════════

const members = [
  {
    name: "Prateek Rana",
    role: "Project Lead  ·  Intel Mission Developer",
    color: PURPLE,
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Led team coordination across all six sprint meetings",
      "Built Intel Mission (intel.html) — quiz UI, question engine & scoring",
      "Implemented feedback bar with visibility:hidden so layout stays stable",
      "Integrated localStorage for persistent player state (coins, XP, level)",
      "Set up GitHub repository (wlaa41/phish_force) and Pages deployment",
    ],
    rightTitle: "🛠  TECH WORKED ON",
    rightBullets: [
      "HTML5 / CSS3 Flexbox for viewport-filling layouts",
      "Vanilla JavaScript question engine (20-scenario question bank)",
      "localStorage API — sp_state object across all pages",
      "CSS transitions & answer-state colour feedback (green/red)",
      "GitHub Actions / GitHub Pages static hosting",
    ],
    challenge: "The feedback bar jumped and shifted the whole layout every time an answer was submitted — the quiz felt broken and unprofessional, distracting players from learning.",
    solution: "Switched from display:none / display:block to visibility:hidden / visibility:visible with a fixed min-height:56px reserved on the bar. The space is always occupied, so no elements ever shift. This small CSS change eliminated all layout reflow during gameplay.",
  },
  {
    name: "Prathish Thangaraj",
    role: "Canvas Engineer  ·  Game Mechanics",
    color: CYAN,
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Researched Canvas API game-loop patterns (requestAnimationFrame)",
      "Designed and coded drawBike() — top-down motorcycle with helmet, visor, exhaust flame",
      "Identified critical localStorage vs sessionStorage bug causing lost progress",
      "Compiled group presentation deck and wrote project README",
      "Recommended vanilla JS over Phaser.js to keep the project dependency-free",
    ],
    rightTitle: "🛠  TECH WORKED ON",
    rightBullets: [
      "HTML5 Canvas API — shapes, gradients, ellipses, rounded rects",
      "requestAnimationFrame game loop with delta-time control",
      "localStorage read/write for persistent player state",
      "SVG-to-Canvas rendering for decorative elements",
      "Cross-browser compatibility testing (Chrome, Firefox, Edge)",
    ],
    challenge: "Player progress (coins, hearts, XP) was being lost every time the user navigated between pages. The issue wasn't obvious — the game appeared to save, but nothing persisted after page reload.",
    solution: "Traced the bug to sessionStorage being used in the state initialisation function — sessionStorage is cleared on tab close, unlike localStorage. Replacing the single API call with localStorage.setItem/getItem fixed persistence across all pages and sessions with no further changes needed.",
  },
  {
    name: "Allen Twins George",
    role: "UI/UX Designer  ·  Visual Identity",
    color: "00E676",
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Created all wireframes and UI mockups for every screen",
      "Rebuilt home screen layout using CSS Flexbox — eliminated overflow on all viewports",
      "Identified obstacle spawn coordinate bug and proposed the off-screen fix",
      "Applied the Y = -90 obstacle spawn fix to chase.html",
      "Defined cyberpunk visual identity: colour palette, typography, glow effects",
    ],
    rightTitle: "🛠  TECH WORKED ON",
    rightBullets: [
      "CSS Flexbox — justify-content, align-items, flex-direction",
      "CSS custom properties for consistent colour tokens",
      "Canvas coordinate system — negative Y spawn for smooth scroll-in",
      "Figma wireframes → HTML/CSS implementation",
      "Responsive design for different screen resolutions",
    ],
    challenge: "Road obstacles (cars, trucks) were appearing suddenly in the middle of the screen mid-race, which looked like a visual glitch and made the game feel unfair — players had no time to react.",
    solution: "Changed the obstacle spawn Y coordinate from H×0.38−80 (mid-canvas) to −90 (above the canvas edge). Objects now spawn out of sight above the road and scroll downward naturally, giving players a visible approach time. The fix required just one number change but transformed how the game felt.",
  },
  {
    name: "Bishal Raut",
    role: "Content & Question Bank Developer",
    color: "FFB300",
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Wrote all 20 phishing scenarios across 5 question types",
      "Categories: spot-the-phish (×7), URL analysis (×3), response-choice (×4), classify (×4), fill-in-the-blank (×2)",
      "Integrated hint system — hints deduct coins and reveal partial answers",
      "Playtested every question for clarity, difficulty balance and spelling",
      "Removed star/boost pickups from the road; simplified to coins only",
    ],
    rightTitle: "📋  QUESTION CATEGORIES",
    rightBullets: [
      "Spot-the-Phish — identify phishing indicators in emails",
      "URL Analysis — detect typosquatting and lookalike domains",
      "Response-Choice — correct action when targeted by attack",
      "Classify — label attack type (phishing, smishing, vishing…)",
      "Fill-in-the-Blank — complete key cybersecurity definitions",
    ],
    challenge: "The original question bank had only 5 questions recycled randomly, making the Intel Mission feel repetitive. Players who replayed the game saw the same questions immediately, removing all educational value on repeat attempts.",
    solution: "Expanded the bank to 20 unique real-world scenarios covering the full phishing taxonomy taught in the module. Questions are drawn in randomised order, so repeat sessions always feel fresh. Each scenario was cross-checked against Coventry module 503IT content to ensure academic accuracy.",
  },
  {
    name: "Dipesh Regmi",
    role: "Frontend Developer  ·  Login System",
    color: "FF6E40",
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Documented the full cyberpunk colour palette used across all pages",
      "Implemented login and sign-up pages (index.html) with form validation",
      "Built account storage using localStorage (sp_accounts key)",
      "Added guest-login flow so players can skip registration",
      "Performed cross-browser testing on Chrome, Firefox and Edge",
    ],
    rightTitle: "🛠  TECH WORKED ON",
    rightBullets: [
      "HTML5 forms — validation, placeholder styling, shake animation",
      "localStorage for account persistence between sessions",
      "CSS keyframe animations: glow, pulse, panelIn slide transitions",
      "Orbitron font integration via Google Fonts API",
      "Particle float animation (floating emoji background effect)",
    ],
    challenge: "During integration testing, the login form allowed empty submissions and short passwords without any visible feedback, causing silent failures. Players thought the game was broken when the login button did nothing.",
    solution: "Added explicit client-side validation: checked for empty fields, enforced a minimum codename length of 3 characters and password length of 4, and showed coloured error messages with a CSS shake animation on the card. The shake gives immediate tactile feedback, guiding users to correct their input quickly.",
  },
  {
    name: "Avtar",
    role: "Asset Integration  ·  Highway Chase Tester",
    color: "E040FB",
    leftTitle: "🔑  KEY CONTRIBUTIONS",
    leftBullets: [
      "Integrated the SVG ShadowPhish logo with a CSS float animation on home screen",
      "Built the initial Highway Chase canvas layout and road-drawing function",
      "Tested the infinite runner — confirmed no crash after 10,000 m gameplay",
      "Suggested the hover effect improvements adopted in intel.html answer buttons",
      "Verified the logout / session-clear flow works correctly on all pages",
    ],
    rightTitle: "🛠  TECH WORKED ON",
    rightBullets: [
      "SVG asset integration + CSS @keyframes float animation",
      "Canvas road rendering — lane markings, perspective gradient",
      "Infinite runner pattern: WIN_DISTANCE constant removed, loop runs forever",
      "CSS hover states: translateY(-3px), box-shadow glow on answer buttons",
      "Manual QA regression testing across the full game flow",
    ],
    challenge: "The original Highway Chase ended after exactly 3,000 m with a WIN screen — which made the game feel too short and gave players no reason to practise answering more questions after completing one lap.",
    solution: "Removed the WIN_DISTANCE = 3000 constant and the win-check block inside the update() loop entirely. The distance meter was repurposed to show progress within the current 1,500 m checkpoint segment instead of total distance, giving players a sense of rhythm without an artificial finish line.",
  },
];

// ═══════════════════════════════════════════════════════════════════
//  GENERATE SLIDES
// ═══════════════════════════════════════════════════════════════════

members.forEach((m, idx) => {
  const slideA_num = idx * 2 + 1;
  const slideB_num = idx * 2 + 2;

  // ── SLIDE A: contributions ───────────────────────────────────────
  const sA = pres.addSlide();
  applyBg(sA);
  projectLabel(sA);
  nameBadge(sA, m.name, m.role, m.color);
  twoCards(sA, m.leftTitle, m.leftBullets, m.rightTitle, m.rightBullets, m.color, CYAN);
  slideNum(sA, slideA_num, 12);

  // ── SLIDE B: challenge / solution ────────────────────────────────
  const sB = pres.addSlide();
  applyBg(sB);
  projectLabel(sB);
  nameBadge(sB, m.name, "Challenge & Solution", m.color);
  challengeSlide(sB, m.challenge, m.solution, m.color);
  slideNum(sB, slideB_num, 12);
});

// ── Save ──────────────────────────────────────────────────────────
const OUT = "C:\\Users\\Lenovo\\Documents\\GitHub\\OUR Group\\ShadowPhish_Team_Presentation.pptx";
pres.writeFile({ fileName: OUT })
  .then(() => console.log("✅  Saved:", OUT))
  .catch(e => { console.error("❌  Error:", e); process.exit(1); });
