// Describe: Pizza();
// Test: "It should create an object with the passed in arguments for parameters topping and size."
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large"}));

// Test: "It should instantiate new pizza objects with default price of 0"
// Expect(pizza = new Pizza("cheese", "large").toEqual(Pizza {topping: "cheese", size: "large", price: 0}));

// Test: "It should instantiate new pizza objects with empty [] for toppings"
// Expect(pizza = new Pizza("large").toEqual(Pizza {toppings: [], size: "large", price: 0}));

// Test: "It should instantiate new pizza objects with "undefined" for size, as to set it with prototype later"
// Expect(pizza = new Pizza().toEqual(Pizza {toppings: [], size: undefined, price: 0}));

// Describe: Pizza.prototype.addTopping();
// Test: "It should push topping into pizza object if topping is not empty string"
// Expect(pizza.addTopping("cheese").toEqual(Pizza {toppings: ["cheese"], size: undefined, price: 0}));

// Describe: Pizza.prototype.addSize();
// Test: "It should set size variable of pizza object"
// Expect(pizza.addSize("large").toEqual(Pizza {toppings: [], size: "large", price: 0}));

// Describe: Pizza.prototype.calculateCost();
// Test: "It should add to this.price of pizza object depending on size."
// Test: "This test assumes pre-existing pizza object has size: "medium"
// Expect(pizza.calculateCost().toEqual(Pizza {toppings: [], size: "medium", price: 6}));

// Test: "It should add 3 to this.price for each element in this.toppings array"
// Test: "This test assumes this.toppings are ["cheese", "pepperoni"], and size is "medium"
// Expect(pizza.calculateCost().toEqual(Pizza {toppings: ["cheese", "pepperoni"], size: "medium", price: 12})) ;

// Describe: Order();
// Test: "It should instantiate Order objects with empty {} object "
// Expect(order = new Order().toEqual(Order {order: {}}));

// Describe: Order.prototype.assignId();
// Test: "It should add current id to object, incrementing by 1."
// Expect(order.assignId().toEqual(Order {order: {}, currentId: 1}));

// Describe: Order.prototype.addPizza();
// Test: "It should assign incrementing Id's to pizza objects as they are passed into the order object"
// Test: "This test passes a newly constructed pizza object into the order object"
// Expect(order.addPizza(pizza).toEqual(Order {order: {1: Pizza}, currentId: 1}))

// Describe: Order.prototype.totalCost();
// Test: "It should return sum of prices of pizzas in order object"
// This: "This test calculates the total cost of an order with 2 pizzas, {price: 12, toppings: Array(2), size: "medium"}, and Pizza {price: 11, toppings: Array(1), size: "large"}"
// Expect(order.totalCost().toEqual(23))

//Describe: Order.prototype.getPizza();
//Test: "It should return pizza with inputted id."
//Expect(order.getPizza(1).toEqual(Pizza {price: 0, toppings: Array(0), size: undefined, id: 1}));