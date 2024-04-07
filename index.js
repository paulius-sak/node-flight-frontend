import {addToCart} from "./utils/addToCart.js"


fetch("http://localhost:3001/flights")
  .then((response) => response.json())
  .then((data) => {
    const flights = data.flights;

    const flightCardsContainer = document.getElementById("flight-cards");


    flights.forEach((flight) => {

      const flightCard = document.createElement("div");
      flightCard.classList.add("flight-card");
      

      const titleLink = document.createElement("a");
      titleLink.classList.add("title-link")
      titleLink.textContent = "Flight Details Here ✈︎";
      titleLink.setAttribute("href", "../flight/flight.html");
      titleLink.addEventListener("click", (event) => {

        event.preventDefault();
        

        const flightId = flight.flightId;
      
        // Redirect to the flight.html page with the flight ID as a query parameter
        window.location.href = `../flight/flight.html?id=${flightId}`;
      });

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
      addBtn.innerText = "Add To Basket"

      

      

      addBtn.addEventListener("click", (event) => {
        addToCart(flight.flightId);
        console.log(flight.flightId)

        const addMessage = document.createElement("p")
        addMessage.classList.add("add-message")
        addMessage.id = "add-message"
        addMessage.innerText = "Ticket Added To Cart!"
        flightCard.appendChild(addMessage)

        setTimeout(() => {
          flightCard.removeChild(addMessage);
        }, 3000);

        event.preventDefault();
      });


      flightCard.appendChild(titleLink);
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

  

