// Blueprint book palette (from the 시뮬레이션 교육 book: dark paper, silver ink, sky-blue accent, grid, mono numbers).
// Two variants share the same rules; "light" is the contrast toggle (pale blueprint paper with navy ink).
const DARK = {
  name: "dark",
  desk: "#0A0D12", deskLine: "#121821",
  mat: "#101823", matGrid: "#1A2431", matGridMajor: "#243142",
  cover: "#0F1B2A", coverEdge: "#5B6879",
  paper: "#172435", paperEdge: "#22324A", paperGrid: "rgba(226,232,240,0.055)",
  ink: "#E2E8F0", inkSoft: "#AEB9C7", rule: "#45505E",
  accent: "#A7DAED", warm: "#F2C38B", red: "#F08A8A",
  fill: "#263850", hatch: "#C9D4E0",
};
const LIGHT = {
  name: "light",
  desk: "#C9D2DC", deskLine: "#BAC4CF",
  mat: "#DDE4EB", matGrid: "#C5CFDA", matGridMajor: "#AEBBC9",
  cover: "#1C2E45", coverEdge: "#3B4C61",
  paper: "#EEF3F8", paperEdge: "#D7DEE6", paperGrid: "rgba(28,46,69,0.07)",
  ink: "#16243A", inkSoft: "#4A5B70", rule: "#9AA8B8",
  accent: "#1F6E93", warm: "#B5651D", red: "#B23A3A",
  fill: "#F6F9FC", hatch: "#3A4E68",
};

let current = DARK;
const listeners = new Set();

export function palette() { return current; }
export function setPalette(name) {
  current = name === "light" ? LIGHT : DARK;
  document.documentElement.dataset.dtTheme = current.name;
  for (const fn of listeners) fn(current);
}
export function onPalette(fn) { listeners.add(fn); return () => listeners.delete(fn); }

export const FONT = {
  sans: '"SUIT Variable", "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif',
  serif: '"Nanum Myeongjo", "AppleMyungjo", "Noto Serif KR", "Batang", serif',
  mono: '"Space Mono", ui-monospace, "SF Mono", "Menlo", "Consolas", monospace',
  hand: '"Nanum Pen Script", "Nanum Pen", "Gaegu", "Apple SD Gothic Neo", "Noto Sans KR", cursive',
};
