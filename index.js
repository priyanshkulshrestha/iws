let bars = document.getElementById("bars");
let mobile = document.getElementById("mobile-nav");
console.log(bars);
console.log(mobile);
a = 1;
function myfunction() {
  console.log("clicked");
  // let bars = document.getElementById("bars");
  // let mobile = document.getElementById("mobile-nav")
  if (a == 1) {
    mobile.style.display = "block";
    a = 0;
  } else {
    mobile.style.display = "none";
    a = 1;
  }
}
