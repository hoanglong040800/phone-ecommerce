const mapStateHungryPng = {
  hungry:
    "https://www.shutterstock.com/shutterstock/photos/1178357125/display_1500/stock-vector-vector-illustration-girl-holding-stomach-because-of-hungry-kid-thinking-of-food-and-holding-her-1178357125.jpg",
  full: "https://www.shutterstock.com/image-vector/walking-full-stomach-man-cartoon-260nw-362321831.jpg",
};

const AppController = ($scope, $filter) => {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.stateOfHungry = mapStateHungryPng.hungry;
  $scope.cookieCost = 0.45;

  /*
   * Functions
   */

  $scope.displayNumeric = () => {
    $scope.totalValue = calculateNumericOfString($scope.name);
  };

  $scope.upper = () => {
    const { name } = $scope;

    $scope.name = $filter("uppercase")(name);
  };

  $scope.sayMessage = () => {
    const msg = "My dog is so cute";
    return msg.replace("cute", "adorable");
  };

  $scope.feedMe = () => {
    $scope.stateOfHungry = mapStateHungryPng.full;
  };

  const calculateNumericOfString = (string) => string.length;
};

angular.module("myApp").controller("appController", AppController);
