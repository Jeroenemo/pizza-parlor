// Describe: Pizza();
// Test: "It should create an object with the passed in arguments for parameters topping and size."
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large"}));

// Test: "It should instantiate new pizza objects with default price of 0"
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large", price: 0}));

// Test: "It should instantiate new pizza objects with empty [] for toppings"
// Expect(pizza = new Pizza("large").toEqual(Pizza {toppings: [], size: "large", price: 0}));

// Describe: Pizza.prototype.addTopping();
// Test: "It should push topping into pizza object"
// Expect(pizza.addTopping("cheese").toEqual(Pizza {toppings: ["cheese"], size: "large", price: 0}))

function Pizza(size) {
  this.toppings = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}
