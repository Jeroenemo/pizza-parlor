// Describe: Pizza();
// Test: "It should create an object with the passed in arguments for parameters topping and size."
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large"}));

// Test: "It should instantiate new pizza objects with default price of 0"
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large", price: 0}));

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}