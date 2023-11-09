angular.module("core").filter("checkmark", function () {
  return function (rating) {
    return rating >= 4 ? "recommend" : "neutral";
  };
});
