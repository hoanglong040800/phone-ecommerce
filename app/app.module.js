const myApp = angular.module("myApp", ["ngRoute", "counterModule"]);

myApp.config("$routeProvider", ($routeProvider) => {
  $routeProvider.when("/counter", {
    templateUrl: "<p>Counter</p>",
  });
});
