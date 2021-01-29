// Describe: Pizza();
// Test: "It should create an object with the passed in arguments for parameters topping and size."
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large"}));

// Test: "It should instantiate new pizza objects with default price of 0"
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large", price: 0}));

// Test: "It should instantiate new pizza objects with empty [] for toppings"
// Expect(pizza = new Pizza("large").toEqual(Pizza {toppings: [], size: "large", price: 0}));

// Test: "It should instantiate new pizza objects with "undefined" for size, as to set it with prototype later"
// Expect(pizza = new Pizza().toEqual(Pizza {toppings: [], size: undefined, price: 0}))

// Describe: Pizza.prototype.addTopping();
// Test: "It should push topping into pizza object"
// Expect(pizza.addTopping("cheese").toEqual(Pizza {toppings: ["cheese"], size: undefined, price: 0}))

// Describe: Pizza.prototype.addSize();
// Test: "It should set size variable of pizza object"
// Expect(pizza.addSize("large").toEqual(Pizza {toppings: [], size: "large", price: 0}))

// Describe: Pizza.prototype.calculateCost();
// Test: "It should add to this.price of pizza object depending on size."
// Test: "This test assumes pre-existing pizza object has size: "medium"
// Expect(pizza.calculateCost().toEqual(Pizza {toppings: [], size: "medium", price: 6}))

// Test: "It should add 3 to this.price for each element in this.toppings array"
// Test: "This test assumes this.toppings are ["cheese", "pepperoni"], and size is "medium"
// Expect(pizza.calculateCost().toEqual(Pizza {toppings: ["cheese", "pepperoni"], size: "medium", price: 12})) 

// Describe Order();
// Test: "It should instantiate Order objects with empty {} object "
// Expect(order = new Order().toEqual(Order {order: {}}))
function Order() {
  this.order = {};
}

function Pizza() {
  this.toppings = [];
  this.size = undefined;
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.price += 4;
  } else if (this.size === "medium") {
    this.price += 6;
  } else if (this.size === "large") {
    this.price += 8;
  } else {
    this.price += 0;
  }
  for (i = 0; i < this.toppings.length; i ++) {
    this.price += 3;
  }
}


