let user_input = document.getElementById("input");
let error = document.getElementById("error");
let errormsg = document.getElementById("error-msg");
let result1 = document.getElementById("result");
let resultPage = document.getElementById("result-page");

function successfull() {
  document.body.style =
    "background-image: url(https://tibushlabs.b-cdn.net/shrtcode/img/confetti.gif)";
  setTimeout(() => {
    document.body.style = "background-image: none";
  }, 5000);
}

document.getElementById("submit").addEventListener("click", function () {
  if (user_input.value != "") {
    error.classList.add("d-none");
    let radiobtn = document.querySelector(".domain:checked").value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${user_input.value}`)
      .then((data) => data.json())
      .then((obj) => {
        if (radiobtn == "shrtco.de") {
          result1.classList.remove("d-none");
          successfull();
          resultPage.textContent = obj.result.short_link;
          resultPage.href = `http://${obj.result.short_link}`;
        }
        if (radiobtn == "9qr.de") {
          result1.classList.remove("d-none");
          successfull();
          resultPage.textContent = obj.result.short_link2;
          resultPage.href = `http://${obj.result.short_link2}`;
        }
        if (radiobtn == "shiny.link") {
          result1.classList.remove("d-none");
          successfull();
          resultPage.textContent = obj.result.short_link3;
          resultPage.href = `http://${obj.result.short_link3}`;
        }
      })
      .catch((err) => {
        result1.classList.add("d-none");
        error.classList.remove("d-none");
        console.log(err);
      });
  } else {
    error.classList.remove("d-none");
  }
});