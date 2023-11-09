angular.module("phoneDetail").component("phoneDetail", {
  templateUrl: "phone-detail/phone-detail.html",
  controller: ["$routeParams", "$http", controller],
});

function controller($routeParams, $http) {
  this.phoneId = $routeParams.phoneId;

  this.setImg = function (url) {
    this.curThumbnail = url;
  };

  $http
    .get(`https://dummyjson.com/product/${this.phoneId}`)
    .then(({ data }) => {
      this.phone = data;
      this.curThumbnail = this.phone.images[0];
    });
}
