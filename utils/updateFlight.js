export const updateFlight = async (flightData, updateFlightForm) => {
    try {
      const response = await fetch(`http://localhost:3001/flights/${flightData.flightId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flightData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update flight");
      }
  
      const responseData = await response.json();
      console.log("Flight updated successfully:", responseData);
  
      const updateMessage = document.createElement("p");
      updateMessage.classList.add("update-message");
      updateMessage.id = "update-message";
      updateMessage.innerText = "Flight updated successfully!";
      updateFlightForm.appendChild(updateMessage);
  
      
    } catch (error) {
      console.error("Error updating flight:", error);
    }
  }