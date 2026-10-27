export const DORMS_ORIGIN = process.env.DORMS_ORIGIN || "https://dorms.school";
export const VERSION_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const FRAME_ANCESTORS = (process.env.FRAME_ANCESTORS || "https://dorms.school https://www.dorms.school").split(/\s+/).filter(Boolean);
