// Business Logic ------

function Pizza (pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.standardTopping = [];
  this.premiumTopping = [];
}

// Calculate pizza cost ------

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
  if (this.standardTopping.length === 0) {
    this.price;
  } else {
    this.price += (this.standardTopping * 1);
  }
  if (this.premiumTopping.length === 0) {
    this.price;
  } else {
    this.price += (this.premiumTopping * 2);
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