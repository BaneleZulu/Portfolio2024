//This code is for the navigation bar. To add responsive width animation to the navigation bar. When the user hovers on the nav the width constructs and constrict when the mouse leaves the nav bar.
const navbar = document.getElementById("navbar");

//?What does it do?. This script take the message written from the from and writes it to the google sheet ths, i can view it.
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyG0m3z8Q0y15HKMVYxiSINOzTS02z2nayhbvlnL08f-zRc2t0zfYOWuIfPkW47C4887Q/exec";
const form = document.forms["myForm"];
const msg = document.getElementById("message");

// This function is for the portfolio section. Specifically in the languages section, the function enable the progress bars to be responsive and add animation when ever scrolled into view.
document.addEventListener("DOMContentLoaded", function () {
  let circle = document.querySelectorAll(".circle");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let progress = entry.target;
          let degree = 0;
          let targetDegree = parseInt(progress.getAttribute("data-degree"));
          let color = progress.getAttribute("data-color");
          let number = progress.querySelector(".number");

          var interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
              clearInterval(interval);
              observer.observe(entry.target); // Stop observing the element after animation
              return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + "<span>%</span>";
            number.style.color = color;
          }, 50);
        }
      });
    },
    { threshold: 0.1 }
  );
  circle.forEach((progress) => {
    observer.observe(progress); //this code set the how many time the observer must watch/listen to the scroll event. noobserver: the scroll is only received once.
  });
});

//** This script i got from Sanele<very helpful>.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
