export const deleteFlight = (flightId) => {
  fetch(`http://localhost:3001/flights/${flightId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Flight deleted successfully");
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 1000);

      } else {
        console.error("Failed to delete flight");
      }
    })
    .catch((error) => {
      console.error("Error deleting flight:", error);
    });
    
};
