// Business Logic ------

function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

// Calculate pizza cost ------

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
}