// Reads a submitted lesson version from DoRms (signed request). Never trusts the caller of this project.
import { DORMS_ORIGIN, VERSION_ID } from "./config.js";
import { sign } from "./sign.js";

export async function fetchBundle(id) {
  if (!VERSION_ID.test(id)) return { status: 400 };
  const pathname = `/api/textbook/bundle/${id}`;
  const res = await fetch(DORMS_ORIGIN + pathname, { headers: sign("GET", pathname), cache: "no-store" });
  if (res.status === 404) return { status: 404 };
  if (!res.ok) return { status: 502 };
  const json = await res.json();
  if (typeof json.source !== "string") return { status: 502 };
  return { status: 200, source: json.source, title: String(json.title ?? "도름스 교과서").slice(0, 80) };
}
