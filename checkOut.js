let all_total_price = document.getElementById("all_total_price");
let discounted_price = document.getElementById("discounted_price");
let total = document.getElementById("total")

let total_discount_price = JSON.parse(localStorage.getItem("total_discount_price"));
console.log(total_discount_price);

all_total_price.innerHTML = `&#8377;${total_discount_price[0].total_price}`;
discounted_price.innerHTML = `-&#8377;${total_discount_price[0].discount_price}`;
total.innerHTML = `&#8377;${Number(total_discount_price[0].total_price) - Number(total_discount_price[0].discount_price)}`;

function shoppingComplete() {
    let array = [
    "Your order is accepted",
    "Your order is ready",
    "Order delivered",
    ];
  
    let h1 = document.getElementById("notification");
    let index = 0;
    h1.textContent = array[index++];

    setTimeout(function () {
      h1.textContent = array[index++];
    }, 3000);
    setTimeout(function () {
      h1.textContent = array[index++];
    }, 8000);
}