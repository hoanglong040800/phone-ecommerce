angular.module("phoneList").component("phoneList", {
  // scope is /app folder. Therefore need to import like at /app
  templateUrl: "phone-list/phone-list.html",
  controller,
});

function controller() {
  this.phones = [
    {
      name: "abc",
      desc: "xyz",
    },
    {
      name: "def",
      desc: "ghi",
    },
    {
      name: "klm",
      desc: "nop",
    },
  ];
}
