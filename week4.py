def calculate_total(items):
  total = 0

  for item in items:

    if "price" in item and "quantity" in item:
      total += item["price"] * item["quantity"]

    return total