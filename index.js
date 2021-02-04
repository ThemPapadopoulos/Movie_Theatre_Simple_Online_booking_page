(function () {
  var total = 0;

  //! creates the buttons(seats) and applies id and class

  for (let i = 0; i < 152; i++) {
    const seatPlace = document.getElementById("seats1");
    const seatBtn = document.createElement("BUTTON");
    seatPlace.appendChild(seatBtn);
    seatBtn.setAttribute("id", i);
    seatBtn.setAttribute("class", "chair");
  }

  for (let i = 0; i < 152; i++) {
    const seatPlace = document.getElementById("seats2");
    const seatBtn = document.createElement("BUTTON");
    seatPlace.appendChild(seatBtn);
    seatBtn.setAttribute("id", i);
    seatBtn.setAttribute("class", "chair");
  }

  //! add click event on chairs

  selectSeats = document.querySelectorAll(".chair");
  selectSeats.forEach((button) => button.addEventListener("click", clicked));

  //document.querySelectorAll("chair").addEventListener("click", clicked);

  //!function that adds/removes attributes on selection

  function clicked() {
    if (this.classList.contains("clicked")) {
      this.classList.remove("clicked");
      this.style.backgroundColor = "";
      total -= 1;
      console.log(total);
    } else {
      this.classList.add("clicked");
      this.style.backgroundColor = "darkgreen";
      total += 1;
      console.log(total);
    }
    document.querySelector("#total").innerHTML =
      "You have selected " + total + " x tickets = " + total * 10 + "€";
  }


  //! confirm button press
  var footerBtn = document.querySelector("#footBtn");
  footerBtn.addEventListener("click", function () {
    this.style.backgroundColor = "green";
    setTimeout(function () {
      alert(
      "You have selected " +
        total +
        " x tickets = " +
        total * 10 +
        "€\n\n\n" +
        "Thank you for your Purchase")
    }, 600);
   
    
    setTimeout(function () {
      location.reload();
    }, 1000);
  });
  
})();
