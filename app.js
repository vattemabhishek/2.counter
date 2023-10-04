const btns = document.querySelectorAll(".btn");

const value = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (element) {
    const classtype = element.currentTarget.classList;
    if (classtype.contains("decrease")) {
      value.textContent--;
      colorChange();
    } else if (classtype.contains("increase")) {
      value.textContent++;
      colorChange();
    } else {
      value.textContent = 0;
      colorChange();
    }
  });
});

function colorChange() {
  if (value.textContent < 0) {
    value.style.color = "red";
  } else if (value.textContent == 0) {
    value.style.color = "black";
  } else {
    value.style.color = "green";
  }
}
