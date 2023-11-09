angular.module("phonecatApp").component("phoneList", {
  template: `<div ng-repeat="phone in $ctrl.phones">
    <h6>{{phone.name}}</h6>
    <p>{{phone.desc}}</p>
  </div>
  `,
  controller: function () {
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
  },
});
