export function convertTime(str) {
  if (!str || typeof str !== "string") return "";
  // Match ISO 8601 duration: PT#H#M#S
  const match = str.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";
  let [, h, m, s] = match;
  h = h ? parseInt(h, 10) : 0;
  m = m ? parseInt(m, 10) : 0;
  s = s ? parseInt(s, 10) : 0;

  // Normalize minutes and seconds if seconds >= 60 or minutes >= 60
  m += Math.floor(s / 60);
  s = s % 60;
  h += Math.floor(m / 60);
  m = m % 60;

  // Always show HH:MM:SS, zero-padded
  return [
    h.toString().padStart(2, "0"),
    m.toString().padStart(2, "0"),
    s.toString().padStart(2, "0"),
  ].join(":");
}

export function formatDate(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatViews(views) {
  if (views === undefined || views === null) return "";
  const num = Number(views);
  if (isNaN(num)) return views;

  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toLocaleString(); // fallback: 999 or less
}
