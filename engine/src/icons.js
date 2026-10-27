// Inline SVG icons (no emoji, no text symbols). 24x24, stroke = currentColor.
const PATHS = {
  menu: '<path d="M5 7h14M5 12h14M5 17h9" />',
  prev: '<path d="M14.5 6.5 9 12l5.5 5.5" />',
  next: '<path d="M9.5 6.5 15 12l-5.5 5.5" />',
  play: '<path d="M8.5 6.2v11.6L18 12z" fill="currentColor" stroke="none" />',
  pause: '<path d="M9 6.5v11M15 6.5v11" />',
  still: '<circle cx="12" cy="12" r="7.5" /><path d="M9.5 9.5v5M14.5 9.5v5" />',
  contrast: '<circle cx="12" cy="12" r="7.5" /><path d="M12 4.5a7.5 7.5 0 0 1 0 15z" fill="currentColor" stroke="none" />',
  teacher: '<path d="M3.5 9.5 12 5.5l8.5 4-8.5 4z" /><path d="M7 11.5v4c1.5 1.4 3.2 2 5 2s3.5-.6 5-2v-4" /><path d="M20.5 9.5v5" />',
  pages: '<path d="M12 7c-2-1.4-4.6-1.8-7.5-1.5v12c2.9-.3 5.5.1 7.5 1.5 2-1.4 4.6-1.8 7.5-1.5v-12C16.6 5.2 14 5.6 12 7z" /><path d="M12 7v12" />',
  close: '<path d="m7 7 10 10M17 7 7 17" />',
  check: '<path d="m6 12.5 4 4 8-9" />',
};
export function icon(name, size = 22) {
  const body = PATHS[name] ?? PATHS.next;
  return `<svg class="dt-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}
