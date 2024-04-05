import {addToCart} from "./utils/addToCart.js"


fetch("http://localhost:3001/flights")
  .then((response) => response.json())
  .then((data) => {
    const flights = data.flights;

    const flightCardsContainer = document.getElementById("flight-cards");


    flights.forEach((flight) => {

      const flightCard = document.createElement("a");
      flightCard.classList.add("flight-card");
      flightCard.setAttribute("href", "../flight/flight.html");

      const title = document.createElement("h2");
      title.textContent = "✈︎ Flight Details";

      const price = document.createElement("p");
      price.innerHTML = `Price: $${flight.price}`;

      const departureCity = document.createElement("p");
      departureCity.innerHTML = `Departure City: ${flight.departureCity}`;

      const destinationCity = document.createElement("p");
      destinationCity.innerHTML = `Destination City: ${flight.destinationCity}`;

      const image = document.createElement("img");
      image.src = flight.destinationCityPhotoUrl;
      image.alt = "Destination City Photo";

      const departureTime = document.createElement("p");
      departureTime.innerHTML = `Departure Time: ${new Date(flight.departureTime).toLocaleString()}`;

      const addBtn = document.createElement("button")
      addBtn.classList.add("add-button")
      addBtn.id = "add-button"
      addBtn.innerText = "add to basket"

      

      

      addBtn.addEventListener("click", () => {
        addToCart(flight.id);

        const addMessage = document.createElement("p")
        addMessage.classList.add("add-message")
        addMessage.id = "add-message"
        addMessage.innerText = "Ticket Added To Cart!"
        flightCard.appendChild(addMessage)

        setTimeout(() => {
          flightCard.removeChild(addMessage);
        }, 3000);

      });


      flightCard.appendChild(title);
      flightCard.appendChild(price);
      flightCard.appendChild(departureCity);
      flightCard.appendChild(destinationCity);
      flightCard.appendChild(image);
      flightCard.appendChild(departureTime);
      flightCard.appendChild(addBtn);


      flightCardsContainer.appendChild(flightCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching flights:", error);
  });

  

