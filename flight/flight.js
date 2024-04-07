import {deleteFlight} from "../utils/deleteFlight.js"
document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const flightId = urlParams.get('id');
    
    fetch(`http://localhost:3001/flights/${flightId}`)
        .then(response => response.json())
        .then(data => {
            const flightDetails = data.flight;
            console.log(data.flight)

            // Display flight details on the page
            const flightDetailsContainer = document.getElementById("flight-details");
            flightDetailsContainer.innerHTML = `
                <p>Price: $${flightDetails.price}</p>
                <p>Departure City: ${flightDetails.departureCity}</p>
                <p>Destination City: ${flightDetails.destinationCity}</p>
                <p>Departure Time: ${new Date(flightDetails.departureTime).toLocaleString()}</p>
                <img src="${flightDetails.destinationCityPhotoUrl}" alt="Destination City Photo">
            `;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-flight-btn")
            deleteButton.textContent = "Delete Flight";
            deleteButton.addEventListener("click", () => {
                deleteFlight(flightId);
            });

            flightDetailsContainer.appendChild(deleteButton);
        })
        .catch(error => {
            console.error("Error fetching flight details:", error);
        });

        
});