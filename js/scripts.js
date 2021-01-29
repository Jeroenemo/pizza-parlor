// BUSINESS LOGIC
function Order() {
  this.pizzas = {};
  this.total = 0;
  this.currentId = 0;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};
Order.prototype.totalCost = function() {
  let total = 0
  for (id in this.pizzas) {
    total += this.pizzas[id].price;
  };
  this.total = total;
};
Order.prototype.getPizza = function(id) {
  return this.pizzas[id];
}
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
  if (this.size === "Small") {
    this.price += 4;
  } else if (this.size === "Medium") {
    this.price += 6;
  } else if (this.size === "Large") {
    this.price += 8;
  } else {
    this.price += 0;
  };
  for (i = 0; i < this.toppings.length; i ++) {
    this.price += 3;
  };
};
// UI LOGIC
let order = new Order();

function displayOrder(ordertoDisplay) {
  let orderList = $("ol#order");
  let htmlForOrder = "";
  Object.keys(order.pizzas).forEach(function(key) {
    const order = ordertoDisplay.getPizza(key);
    htmlForOrder += "<li>" + "One " + order.size + " pizza with " + order.toppings.join(", ").replace(/,(?=[^,]*$)/, ' and') + "</li>"
  });
  orderList.html(htmlForOrder);
};
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
  });
  $(":button").click(function() {
    if (this.id === "add-pizza") { 
    let pizza = new Pizza();
      pizza.addSize($("input:radio[name=size]:checked").val());
      pizza.addTopping($("input#topping1").val());
      pizza.addTopping($("input#topping2").val());
      pizza.addTopping($("input#topping3").val());
      pizza.addTopping($("input#topping4").val());
      pizza.addTopping($("input#topping5").val());
      pizza.addTopping($("input#topping6").val());
      pizza.calculatePrice();
      order.addPizza(pizza);
      console.log(pizza)
      console.log(order)
      $("input#topping1").val("");
      $("input#topping2").val("");
      $("input#topping3").val("");
      $("input#topping4").val("");
      $("input#topping5").val("");
      $("input#topping6").val("");
    } else if (this.id === "complete-order") {
      $("div#order-input").hide();
      $("div#order-output").show();
      order.totalCost();
      displayOrder(order);
    }
  });
})