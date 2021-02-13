var pizza = { 
    crust       : "crispy", 
    cheese      : "cheddar",
    sauce       : "marinara", 
    addToppings : function() {
        return "Please add pepperoni and sausage"; 
    }
};

function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    console.log(pizza.addToppings()); 
};

orderPizza(); 