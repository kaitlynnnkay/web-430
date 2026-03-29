export function formatDate(dateString) {
  const date = new Date(dateString);

  // Temporary fix for timezone issues

  const adjusted = new Date(date.getTime() + 3600000);

  return adjusted.toISOString().split("T")[0];
}

// TODO: Add validation

export function daysBetween(start, end) {
  const s = new Date(start);

  const e = new Date(end);

  return Math.abs(e - s) / (1000 * 60 * 60 * 24);
}
