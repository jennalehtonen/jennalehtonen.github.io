var navLinks = document.querySelector(".nav-links");
var openButton = document.getElementById("openButton")
var closeButton = document.getElementById("closeButton")
function showMenu() {
  navLinks.style.display = "block"
  openButton.style.display = "none"
  closeButton.style.display = "block"

}
function hideMenu() {

  navLinks.style.display = "none"
  closeButton.style.display = "none"
  openButton.style.display = "block"

}


function showDropdown() {
  document.querySelector(".dropdown-content").style.display = "block"
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelector(".dropdown-content").style.display = "none";   
  }
}



