function Order() {
  this.order = {};
  this.currentId = 0;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.order[pizza.id] = pizza;
};
Order.prototype.totalCost = function() {
  let total = 0
  for (id in this.order) {
    total += this.order[id].price;
  };
  return total;
};
function Pizza() {
  this.price = 0;
  this.toppings = [];
  this.size = undefined;
};
Pizza.prototype.addTopping = function(topping) {
  if (topping !== "") {
    this.toppings.push(topping);
  }  
};
Pizza.prototype.addSize = function(size) {
  this.size = size;
};
Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.price += 4;
  } else if (this.size === "medium") {
    this.price += 6;
  } else if (this.size === "large") {
    this.price += 8;
  } else {
    this.price += 0;
  };
  for (i = 0; i < this.toppings.length; i ++) {
    this.price += 3;
  };
};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza();
    pizza.addSize($("input:radio[name=size]:checked").val());
    pizza.addTopping($("input#topping1").val());
    pizza.addTopping($("input#topping2").val());
    pizza.addTopping($("input#topping3").val());
    pizza.addTopping($("input#topping4").val());
    pizza.addTopping($("input#topping5").val());
    pizza.addTopping($("input#topping6").val());
    
    console.log(pizza)
    $("input#topping1").val("");
    $("input#topping2").val("");
    $("input#topping3").val("");
    $("input#topping4").val("");
    $("input#topping5").val("");
    $("input#topping6").val("");
  })
})