document.addEventListener("DOMContentLoaded", () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  if (userData == null) {
    localStorage.removeItem("cartItems");
  }

  // Retrieve user data from localStorage
  //localStorage.clear();
  if (userData != null) {
    if (userData.expiration <= new Date().getTime()) {
      localStorage.removeItem("userData");
      userData = {};
    }

    console.log(userData);

    // Check if user data exists
    if (userData.username) {
      // Display user data on the home page as needed
      const account = document.querySelector(
        "body > nav > div.nav-authentication > div > p"
      );
      account.innerHTML = userData.username;
      const link1 = document.querySelector(
        "body > nav > div.nav-authentication > div > div > a:nth-child(1)"
      );
      link1.innerHTML = "Profile";
      link1.href = "";
      const link2 = document.querySelector(
        "body > nav > div.nav-authentication > div > div > a:nth-child(2)"
      );
      link2.innerHTML = "Logout";
      link2.href = "";
    }
  }
});

const Logout = document.querySelector(
  "body > nav > div.nav-authentication > div > div > a:nth-child(2)"
);

Logout.addEventListener("click", function (event) {
  if (Logout.innerHTML == "Logout") {
    event.preventDefault();
    localStorage.removeItem("userData");

    fetch("/backend/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("cartItems");
          window.alert(data.message);
          window.location.reload();
        }
      });
  }
});

const profileButton= document.querySelector(
  "body > nav > div.nav-authentication > div > div > a:nth-child(1)"
);

profileButton.addEventListener("click", function(event){
  if(profileButton.innerHTML=="Profile"){
    event.preventDefault();
    window.location.href="/profile";
  } 
});

// document.getElementById("monitor-link").addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch("/product") // Send a GET request to /product endpoint
//     .then((response) => {
//       if (response.ok) {
//         return response.text();
//       }
//       throw new Error("Network response was not ok.");
//     });
// });
