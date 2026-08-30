function a(o, e = {}) {
  if (!Number.isFinite(o)) return "0ms";
  const t = Math.abs(o), r = Math.floor(t / 1e3 % 60), h = Math.floor(t / (1e3 * 60) % 60), n = Math.floor(t / (1e3 * 60 * 60) % 24), u = Math.floor(t / (1e3 * 60 * 60 * 24)), s = [];
  return u && s.push(`${u}${e.verbose ? " days" : "d"}`), n && s.push(`${n}${e.verbose ? " hours" : "h"}`), h && s.push(`${h}${e.verbose ? " minutes" : "m"}`), (r || s.length === 0) && s.push(`${r}${e.verbose ? " seconds" : "s"}`), (o < 0 ? "-" : "") + (e.compact ? s[0] : s.join(" "));
}
export {
  a as prettyMs
};
