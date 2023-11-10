angular.module("phoneCreate").component("phoneCreate", {
  templateUrl: "phone-create/phone-create.html",
  controller: ["$http", controller],
  bindings: {
    text: "@",
    phones: "=",
  },
});

function controller($http) {
  const ctrl = this;
  ctrl.inputTitle = "";
  ctrl.inputDesc = "";

  ctrl.$onInit = function () {
    // binded data is not available immediately
    console.log(ctrl.text);

    // ajax need some time to binding
    setTimeout(() => {
      console.log(ctrl.phones);
    }, [1000]);
  };

  ctrl.createNewProduct = function () {
    $http
      .post("https://dummyjson.com/products/add", {
        title: ctrl.inputTitle,
        description: ctrl.inputDesc,
      })
      .then(({ data }) => {
        ctrl.phones.unshift(data);
      });
  };
}
