// Messages to the host page (DoRms lesson page). The lesson never stores anything itself:
// the host decides where a record goes (nowhere, this device, or the teacher's Google Drive).
const errors = [];

export function post(type, payload = {}) {
  if (window.parent && window.parent !== window) window.parent.postMessage({ source: "dorms-textbook", type, ...payload }, "*");
}

export function record(key, value, page) {
  if (typeof key !== "string" || !/^[a-z0-9_-]{1,40}$/i.test(key)) throw new Error(`기록 이름은 영문·숫자·_-로 40자 이내여야 해요: ${key}`);
  const text = typeof value === "string" ? value.slice(0, 2000) : JSON.stringify(value ?? null).slice(0, 2000);
  post("record", { key, value: text, page });
}

export function reportError(error) {
  const message = String(error && error.message ? error.message : error).slice(0, 500);
  errors.push(message);
  if (window.__dt) window.__dt.errors = errors.slice(-20);
  post("error", { message });
  console.error("[도름스 교과서]", message);
}

export function errorList() { return errors.slice(); }
