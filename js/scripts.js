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
    this.price += (this.standardTopping.length * 1);
  }
  if (this.premiumTopping.length === 0) {
    this.price;
  } else {
    this.price += (this.premiumTopping.length * 2);
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

// User Interface ------

$(document).ready(function() {
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    let pizzaSize = $("input:radio[name=size]:checked").val();
    let newPizza = new Pizza(pizzaSize);
    $("input:checkbox[name=standard-topping]:checked").each(function() {
      newPizza.standardTopping.push($(this).val());
    });
    $("input:checkbox[name=premium-topping]:checked").each(function() {
      newPizza.premiumTopping.push($(this).val());
    });
    let pizzaPrice = newPizza.pizzaPrice()
    $("#total").html(pizzaPrice);
    $("#output").show();
    console.log(pizzaPrice);
  });
})