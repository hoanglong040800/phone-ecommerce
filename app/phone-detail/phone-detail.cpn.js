angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "phone-detail/phone-detail.html",
  controller: ["$routeParams", "$http", controller],
});

function controller($routeParams, $http) {
  this.phoneId = $routeParams.phoneId;

  $http
    .get(`https://dummyjson.com/product/${this.phoneId}`)
    .then(({ data }) => {
      this.phone = data;
    });
}
