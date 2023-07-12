let div = document.createElement("div");
div.setAttribute("class", "container");
document.body.append(div);

let heading1 = document.createElement("h1");
heading1.setAttribute("id", "title");
heading1.setAttribute("class", "text-center");
heading1.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>&nbsp;Rest Countries Weather`;
div.append(heading1);

let divrow = document.createElement("div");
divrow.setAttribute("class", "row");
div.append(divrow);

let div3 = document.createElement("div");
div3.innerHTML = `<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">Loading...</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body" id="popupmsg">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`;

div.append(div3);
let popTitle = document.getElementById("staticBackdropLabel");
let popBody = document.getElementById("popupmsg");

function card(cname, capital, region, cc, ll, flag, pop, native) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");
  div1.innerHTML = ` <div class="card h-100 rounded-5 text-center">
      <div class="card-header rounded-5 rounded-bottom h1">
        ${cname}
      </div>
     <img src="${flag}" class="card-img-top" alt="">
      <div class="card-body">
        
        <div class="card-text h5">Native Name : ${native}</div>
        <div class="card-text h5">Capital : ${capital}</div>
        <div class="card-text h5">Region : ${region}</div>
        <div class="card-text h5">Population : ${pop}</div>
        <div class="card-text h5">Country Code : ${cc}</div>
        <div class="card-text h5">Coordinates : ${ll}</div>
        
        
        <button type="button" class="btn btn-primary" name="${cname}" value=${ll} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Click for Weather</button>
      </div>
  </div>`;
  divrow.append(div1);
}

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((obj) => {
    obj.forEach((obj1) => {
      card(
        obj1.name.common,
        obj1.capital,
        obj1.region,
        obj1.flag,
        obj1.latlng,
        obj1.flags.png,
        obj1.population,
        obj1.name.official
      );
      //let native = obj1.name.nativeName;
      // console.log(Object.values(native)[0]?.official);
      //console.log(Object.entries(native)[0][1]?.official);
    });
  })
  .catch((err) => console.log(err));

// card("name", "capi", "rea", "ccc", "fdf");

div.addEventListener("click", function (e) {
  let l = e.target.value.split(",");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${l[0]}&lon=${l[1]}&appid=bacc241480f654c2fe762b973d8dd222`
  )
    .then((data) => data.json())
    .then((obj) => {
      popBody.innerHTML = `Weather: ${obj.weather[0].main}<br>Description: ${obj.weather[0].description}<br>Temp: ${obj.main.temp}<br>Max-Temp: ${obj.main.temp_max}<br>Min-Temp: ${obj.main.temp_min}<br>Pressure: ${obj.main.pressure}<br>Humidity: ${obj.main.humidity}`;
      popTitle.innerText = `${e.target.name}`;
    })
    .catch((err) => console.log(err));
});