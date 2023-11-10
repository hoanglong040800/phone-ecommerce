angular.module("phoneList").component("phoneList", {
  // scope is /app folder. Therefore need to import like at /app
  templateUrl: "phone-list/phone-list.html",
  controller: ["$http", controller],
});

function controller($http) {
  const ctrl = this;

  ctrl.sortCategory = "id";
  ctrl.showAddProduct = true;

  ctrl.toggleShowAddProduct = function () {
    ctrl.showAddProduct = !ctrl.showAddProduct;
  };

  $http.get("https://dummyjson.com/products?limit=5").then((res) => {
    ctrl.phones = res.data.products;
  });

  ctrl.handleClickDelete = function (id) {
    $http.delete(`https://dummyjson.com/products/${id}`).then((res) => {
      ctrl.phones = ctrl.phones.filter((phone) => phone.id !== id);
    });
  };
}
