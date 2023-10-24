const AppController = ($scope, $filter) => {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = () => {
    $scope.totalValue = calculateNumericOfString($scope.name);
  };

  $scope.upper = () => {
    $scope.name = $filter("uppercase")($scope.name);
  };

  const calculateNumericOfString = (string) => string.length;
};

AppController.$inject = ["$scope", "$filter"];

angular.module("myApp").controller("appController", AppController);
