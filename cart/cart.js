fetch("http://localhost:3001/carts/0cddf1b2-d0e8-4c68-9031-5647a21a7218")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch cart information");
    }
    return response.json();
  })
  .then((data) => {
    const cart = data.cart;

    console.log("Cart:", cart)

    const cartContainer = document.getElementById("cart-container");

    const cartInfo = document.createElement("div");
    cartInfo.classList.add("cart-info");

    const date = document.createElement("p");
    date.textContent = `Date: ${cart.date}`;

    const userEmail = document.createElement("p");
    userEmail.textContent = `User Email: ${cart.userEmail}`;

    const productListTitle = document.createElement("p");
    productListTitle.textContent = "Product List:";

    const productList = document.createElement("ol");

    let totalPrice = 0;

    cart.flightList.forEach((flight) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Flight ID: ${flight.id}, Departure: ${flight.departureCity}, Destination: ${flight.destinationCity}, Departure time: ${flight.departureTime}, Price: ${flight.price}$`;

      const removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove From Cart";
      removeBtn.addEventListener("click", () => {
        fetch(`http://localhost:3001/carts/${cart.cartId}/flight/${flight.flightId}`, {
          method: 'DELETE'
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to remove item from cart");
          }
          location.reload();
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
      });
      

      const listItemContainer = document.createElement("div");
      listItemContainer.appendChild(listItem);
      listItemContainer.appendChild(removeBtn);
      productList.appendChild(listItemContainer);

      totalPrice += flight.price;
    });

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `Total Price: ${totalPrice}$`;
    

    cartInfo.appendChild(date);
    cartInfo.appendChild(userEmail);
    cartInfo.appendChild(productListTitle);
    cartInfo.appendChild(productList);
   

    cartContainer.appendChild(cartInfo);
  })
  .catch((error) => {
    console.error("Error fetching cart information:", error);
  });

