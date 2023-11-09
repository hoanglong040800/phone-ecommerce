angular.module("phoneCreate").component("phoneCreate", {
  templateUrl: "phone-create/phone-create.html",
  controller: [controller],
  bindings: {
    text: "@",
  },
});

function controller() {
  this.inputTitle = "";
  this.inputDesc = "";

  this.$onInit = function () {
    // binded data is not available immediately
    console.log(this.text);
  };

  this.createNewProduct = function () {
    console.log(this.inputTitle);
    console.log(this.inputDesc);
  };
}
