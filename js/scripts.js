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
};
function Pizza() {
  this.price = 0;
  this.toppings = [];
  this.size = undefined;
  this.sauce = undefined;
};
Pizza.prototype.addTopping = function(topping) {
  topping = topping.replace(/\s+/g, '')
  if (topping !== "") {
    this.toppings.push(topping);
  };  
};
Pizza.prototype.addSize = function(size) {
  this.size = size;
};
Pizza.prototype.addSauce = function(sauce) {
  this.sauce = sauce;
}
Pizza.prototype.calculatePrice = function() {
  if (this.size === "Small") {
    this.price += 4;
  } else if (this.size === "Medium") {
    this.price += 6;
  } else {
    this.price += 8;
  };
  if (this.sauce === "White") {
    this.price += 1;
  } else if (this.sauce === "Secret") {
    this.price += 2;
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
    if (order.toppings.length === 0) {
      htmlForOrder += "<li>" + "One " + order.size + " cheese pizza with " +order.sauce+ " Sauce and NO toppings..." + "</li>" 
    } else {
      htmlForOrder += "<li>" + "One " + order.size + " pizza with " + order.sauce + " Sauce and " + order.toppings.join(", ").replace(/,(?=[^,]*$)/, ' and') + "</li>"
    }
  });
  htmlForOrder += "<br><h3> Your total is: $" +ordertoDisplay.total+ "</h3>"
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
      pizza.addSauce($("input:radio[name=sauce]:checked").val());
      $('#toppings input:checked').each(function() {
        pizza.toppings.push($(this).val());
        $("#input").trigger("reset");
      });
      pizza.calculatePrice();
      order.addPizza(pizza);
    } else if (this.id === "complete-order") {
      $("div#order-input").hide();
      $("div#order-output").show();
      order.totalCost();
      displayOrder(order);
    } else if (this.id === "reset-page") {
      location.reload();
    }
  });
})