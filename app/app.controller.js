const AppController = ($scope) => {
  $scope.counter = 0;

  $scope.showNumberOfWatcher = () => {
    console.log("number of watchers: ", $scope.$$wathersCount);
  };

  $scope.countOne = () => {
    $scope.counter = 1;
  };

  $scope.$watch("counter", (newValue, oldValue) => {
    console.log("old", oldValue);
    console.log("new", newValue);
  });
};

angular.module("appModule").controller("AppController", AppController);
