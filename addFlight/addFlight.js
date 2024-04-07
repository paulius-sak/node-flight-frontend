document.addEventListener("DOMContentLoaded", function () {
  const addFlightForm = document.getElementById("add-flight-form");

  addFlightForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(addFlightForm);
    const flightData = Object.fromEntries(formData.entries());

    createFlight(flightData, addFlightForm);
  });
});

async function createFlight(flightData, addFlightForm) {
  try {
    const response = await fetch("http://localhost:3001/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flightData),
    });

    if (!response.ok) {
      throw new Error("Failed to add flight");
    }

    const responseData = await response.json();
    console.log("Flight added successfully:", responseData);

    const addMessage = document.createElement("p");
    addMessage.classList.add("add-message");
    addMessage.id = "add-message";
    addMessage.innerText = "Flight added successfully!";
    addFlightForm.appendChild(addMessage);
  } catch (error) {
    console.error("Error adding flight:", error);
  }
}
