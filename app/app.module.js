const appModule = angular.module("appModule", ["ngRoute"]);

appModule.config([
  "$routeProvider",

  function ($routeProvider) {
    $routeProvider.when("/counter", {
      template: "<p>Counter</p>",
    });
  },
]);
