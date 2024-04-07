import {createFlight} from "../utils/createFlight.js"
import {updateFlight} from "../utils/updateFlight.js"

document.addEventListener("DOMContentLoaded", function () {
  const addFlightForm = document.getElementById("add-flight-form");
  const updateFlightForm = document.getElementById("update-flight-form");

  addFlightForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(addFlightForm);
    const flightData = Object.fromEntries(formData.entries());

    createFlight(flightData, addFlightForm);
  });

  updateFlightForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(updateFlightForm);
    const flightData = Object.fromEntries(formData.entries());

    updateFlight(flightData, updateFlightForm);
  });
});







