angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "phone-detail/phone-detail.html",
  controller: ["$routeParams", controller],
});

function controller($routeParams) {
  this.phoneId = $routeParams.phoneId;
}
