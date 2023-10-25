const myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  
  function ($routeProvider) {
    $routeProvider.when("/counter", {
      template: "<p>Counter</p>",
    });
  },
]);
