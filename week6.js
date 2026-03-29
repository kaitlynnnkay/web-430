function assignPriority(user) {
  if (user.role === "admin") {
    return "high";
  }

  if (user.role === "manager") {
    return "medium";
  }

  return "low";
}
