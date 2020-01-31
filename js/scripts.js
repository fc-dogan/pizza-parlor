function Pizza() {
  this.toppings =[];
  this.size = [];
  this.cost = 10
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  

}