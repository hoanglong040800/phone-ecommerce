angular.module("phoneList").component("phoneList", {
  // scope is /app folder. Therefore need to import like at /app
  templateUrl: "phone-list/phone-list.html",
  controller: ["$http", controller],
});

function controller($http) {
  this.sortCategory = "id";
  this.showAddProduct = true;

  this.toggleShowAddProduct = function () {
    this.showAddProduct = !this.showAddProduct;
  };

  $http.get("https://dummyjson.com/products").then((res) => {
    this.phones = res.data.products;
  });
}
