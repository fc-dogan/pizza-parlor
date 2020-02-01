function Pizza() {
  this.toppings =[];
  this.size = "";
  this.cost = 10
}
// check again for calculation

Pizza.prototype.sizeCostDifference = function (size) {
  this.size = size;
  if (this.size === "small") {
    return this.cost -=2
  } else if (this.size === "medium") {
    return this.cost 
  } else if (this.size === "large"){
    return this.cost +=2
  }
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
   if (this.toppings.length <= 4) {
     return this.cost
   } else if (this.toppings.length > 4 && this.toppings.length < 8) {
     return this.cost += ((this.toppings.length) - 4)
   }
 
}

Pizza.prototype.displayOrderDetails =function() {
  return  this.size + " size, with " + this.toppings.length + " toppings pizza total: $" + this.cost;
}

//User interface logic

var pizza = new Pizza();

$(document).ready(function() {
  $("#user-info").submit(function() {
    event.preventDefault();
    var userName =$("#user-name").val();
    var userAddress = $("#user-address").val();
    $("#name").text(userName);
    $("#welcome-screen").hide();
    $("#order-screen").show();
  });


  $("#order-form").submit(function() {
    event.preventDefault();
    var inputtedSize = $("#pizza-size").val();
    pizza.sizeCostDifference(inputtedSize);
    
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      pizza.addTopping(inputtedToppings);
    });

    var totalCost = pizza.displayOrderDetails();
    $("#order-details").text(totalCost);
    $("#order-screen").hide();
    $("#final-screen").show();
    
    
    console.log(pizza);
  });

});
