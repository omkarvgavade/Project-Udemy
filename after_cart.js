function showcartItems() {
    let showCartItems = document.getElementById("showCartItems");
    showCartItems.innerHTML = null;
let cartItem = JSON.parse(localStorage.getItem("cartItem"));
for (let i = 0; i < cartItem.length; i++){
    let div = document.createElement("div");
    div.innerHTML = `<img src=${cartItem[i].img_source}>
                     <div>
                     <h3>${cartItem[i].course_name}</h3>
                     <h6>${cartItem[i].Author}</h6>
                     </div>
                    <div>
                     <button onclick="removeCourseFromCart(${i})">remove</button>
                     <button onclick="saveForLater(${i})">Save for later</button>
                     </div>
                     <div>
                     <h3>${cartItem[i].price}</h3>
                     <h6>${cartItem[i].mainPrice}</h6>
                     </div>`;
    div.style.display = "flex";
    showCartItems.appendChild(div);
}
let total_price = 0;
let total_main_price = 0;
for (let i = 0; i < cartItem.length; i++) {
    total_price += cartItem[i].price;
    total_main_price += cartItem[i].mainPrice;
}
let checkoutDiv = document.getElementById("checkoutDiv");
checkoutDiv.innerHTML = `<p>Total:</p>
                        <h2>${total_price}</h2>
                        <h4>${total_main_price}</h4>
                        <p>90% off</p>
                        <a href="checkout.html">checkout</a>
                        <div>
                            <input type="text" placeholder="Enter Copoun">
                            <button>Apply</button>
                        </div>
                        <div>
                            <i class="fas fa-times"></i>masai90 is applied
                        <div>`;
}


function removeCourseFromCart(i) {
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    cartItem.splice(i, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
}

function saveForLater(i) {
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let obj = cartItem[i];
    cartItem.splice(i, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));

    if (localStorage.getItem("saveForLater") == null) {
        localStorage.setItem("saveForLater", JSON.stringify([]));
    }
    let saveForLater = JSON.parse(localStorage.getItem("saveForLater"));
    saveForLater.push(obj);
    localStorage.setItem("saveForLater", JSON.stringify(saveForLater));
    showcartItems();
}


showcartItems();