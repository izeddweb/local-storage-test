// --------------Set Variable
const items = document.querySelectorAll(".items");
const result = document.querySelector(".result");
let colorPick;
if (colorPick === undefined) {
  result.style.backgroundColor = window.localStorage.getItem("color");
}
  
// ---------------Set Function

// set color to items
items.forEach((item) => {
  item.style.backgroundColor = item.getAttribute("data-color");
});

// get color from i tem
items.forEach((item) => {
  item.onclick = function () {
    items.forEach((item) => {
      item.classList.remove("active");
    });

    colorPick = item.getAttribute("data-color");
    item.classList.add("active");
    console.log(colorPick);
    // change BGC to div result
    result.style.backgroundColor = colorPick;
    result.style.backgroundColor = window.localStorage.setItem(
      "color",
      colorPick
    );
  };
});
