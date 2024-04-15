//**This script is for controlling the view of the image, reason why? because some of my projects are desktop based and do not have GitHub pages   */

let screen = document.getElementById("screen");

// Corrected function declaration and assignment
const viewImageEnlarged = (imageURL) => {
  alert(CLICKED);
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${imageURL})`;
  screen.style.backgroundSize = "cover";
  screen.style.backgroundPosition = "center";
  screen.style.backgroundRepeat = "no-repeat";
  screen.style.width = "100%";
  screen.style.height = "100%";
  screen.style.position = "fixed";
};

function method() {
  alert("CLICKED");
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${imageURL})`;
  screen.style.backgroundSize = "cover";
  screen.style.backgroundPosition = "center";
  screen.style.backgroundRepeat = "no-repeat";
  screen.style.width = "100%";
  screen.style.height = "100%";
  screen.style.position = "fixed";
}

const exit = document.getElementById("exit").addEventListener("click", () => {
  screen.style.display = "none";
});


// the below code fragment can be found in: https://github.com/
//This is close but what i want is a hidden, div let call it display which it display is set to block when the image is clicked. There are many img elements that must be resized hence the methdo must receive parameter and adjust the appropriate pass the img path to the function than set the div(display) background-image url to the parameters received
