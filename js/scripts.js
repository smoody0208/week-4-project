// Business Logic ------

function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

// Calculate pizza cost ------

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
  if (this.pizzaTopping === "premium") {
    this.price += 2;
  } else if (this.pizzaTopping === "regular") {
    this.price += 1;
  }
  if (this.pizzaSize === "small") {
    this.price += 1;
  } else if (this.pizzaSize === "medium") {
    this.price += 3;
  } else {
    this.price += 4;
  }
  return this.price;
}