function calculateDiscount(price, percentage) {
  if (percentage < 0 || percentage > 100) {
    return null;
  }

  const discount = price * (percentage / 100);

  return price - discount;
}
