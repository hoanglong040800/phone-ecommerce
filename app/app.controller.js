const controller = ($scope) => {
  $scope.phones = [
    {
      name: 'abc',
      desc: 'xyz'
    },
    {
      name: 'def',
      desc: 'ghi'
    },
    {
      name: 'klm',
      desc: 'nop'
    }
  ]
};

angular.module("appModule").controller("AppController", controller);
