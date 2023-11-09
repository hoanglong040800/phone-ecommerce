angular.module("phoneList").component("phoneList", {
  // scope is /app folder. Therefore need to import like at /app
  templateUrl: "phone-list/phone-list.html",
  controller,
});

function controller() {
  this.phones = [
    {
      name: "Xiaomi",
      desc: "Xiaomi phones are popular for their affordability and impressive features. They offer great value for your money, with sleek designs and powerful hardware. For example, the Xiaomi Mi 11 boasts a high-quality camera, fast processor, and a stunning display, all at a reasonable price.",
    },
    {
      name: "Iphone",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur at eaque voluptatum minima autem, minus quaerat pariatur reprehenderit nobis delectus?",
    },
    {
      name: "Samsung",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id assumenda dolorum repellat sit sint accusantium fugit, natus quasi minus ipsam dolore voluptas omnis tempora?",
    },
  ];
}
