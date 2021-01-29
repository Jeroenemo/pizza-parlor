Describe: Pizza();
Test: "It should create an object with the passed in arguments for parameters topping and size."
Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large"}));

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}