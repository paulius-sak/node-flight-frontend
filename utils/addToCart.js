
export function addToCart(id) {
 
    const userEmail = "guest1@gmail.com";
  
    fetch(`http://localhost:3001/addToCart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: userEmail }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add flight to cart");
        }
        
        console.log("Flight added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding flight to cart:", error);
      });
  }