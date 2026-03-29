function calculateGrade(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return null;
  }

  const total = scores.reduce((sum, s) => sum + s, 0);

  const average = total / scores.length;

  if (average >= 90) return "A";

  if (average >= 80) return "B";

  if (average >= 70) return "C";

  if (average >= 60) return "D";

  return "F";
}
