let heading1 = document.createElement("h1");
heading1.setAttribute("id", "title");
heading1.textContent = "Pagination DOM Task";
document.body.append(heading1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.textContent = "Using HTML, CSS and JS";
document.body.append(p);

let div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.setAttribute("class", "table-responsive");
document.body.append(div1);

let divText = document.getElementById("div1");

let table = document.createElement("table");
table.setAttribute("id", "table");
table.setAttribute("class", "table");
divText.append(table);

let tab = document.querySelector(".table");
tab.classList.add("table-bordered");
tab.classList.add("table-hover");

let thead = document.createElement("thead");
tab.append(thead);

let tr = document.createElement("tr");
thead.append(tr);

function createtabHEad(heading) {
  let th = document.createElement("th");
  th.textContent = heading;
  tr.append(th);
}

createtabHEad("Name");
createtabHEad(`ID`);
createtabHEad("Email");

//body table
let tbody = document.createElement("tbody");
tab.append(tbody);
function createtabData() {
  let tr1 = document.createElement("tr");
  tbody.append(tr1);
  let nameTD = ["name", "idno", "email"];

  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");
    td.setAttribute("id", `${nameTD[i]}`);
    td.textContent = "Demo";
    tr1.append(td);
  }
}

for (let i = 0; i < 10; i++) createtabData();

let tableName = document.querySelectorAll("#name");
let tableid = document.querySelectorAll("#idno");
let tableemail = document.querySelectorAll("#email");

let divlast = document.createElement("div");
divlast.setAttribute("id", "buttons");
divlast.setAttribute("class", "d-flex");
document.body.append(divlast);

let divPage = document.getElementById("buttons");
divPage.classList.add("justify-content-center");

let unorderedList = document.createElement("ul");
unorderedList.setAttribute("id", "ulList");
unorderedList.setAttribute("class", "pagination");
unorderedList.setAttribute("data-current-page", "1");
divPage.append(unorderedList);

let unlist = document.getElementById("ulList");

let list = document.createElement("li");

let createlist = function (i) {
  let list = document.createElement("li");
  list.setAttribute("class", "page-item");
  let anchortag = document.createElement("a");
  anchortag.setAttribute("class", "page-link");
  anchortag.setAttribute("href", "#");
  anchortag.textContent = `${i}`;
  unlist.append(list);
  list.append(anchortag);
};

let order1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let order2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let order3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let order4 = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
let order5 = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
let order6 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
let order7 = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
let order8 = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
let order9 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
let order10 = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
let allorder = [
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
  order7,
  order8,
  order9,
  order10,
];
let currentpage = 1;
let presentpage = 1;
let jsonfile = new XMLHttpRequest();
jsonfile.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);
jsonfile.send();
jsonfile.onload = function () {
  if (jsonfile.status == 200) {
    let users = JSON.parse(jsonfile.response);
    let usersLen = 10;
    createlist("First");

    createlist("Previous");
    for (let i = 2; i <= usersLen; i++) {
      createlist(i);
    }
    createlist("Next");
    createlist("Last");
    let pageList = document.querySelectorAll(".page-item");
    // pageList[0].classList.add("disabled");
    let firstpage = pageList[0];
    let previouspage = pageList[1];
    let nextpage = pageList[usersLen + 1];
    let lastpage = pageList[usersLen + 2];

    let pageinwindow = function (n) {
      pageList.forEach((t) => {
        t.classList.remove("active");
      });

      allorder.forEach((arr) => {
        if (arr.includes(+n)) {
          arr.forEach((value) => {
            // pageList[value].classList.remove("d-none");
          });
        }
      });
    };

    function showtodiv(n) {
      if (Number.isInteger(+n)) {
        if (+n > 0) {
          let show = +n - 1;

          let numb = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
          let a = [];
          allorder.forEach((arr) => {
            if (arr.includes(numb[show])) {
              a = arr;
            }
          });

          for (let i = 0; i < 10; i++) {
            tableName[i].textContent = users[a[i]].name;
            tableid[i].textContent = users[a[i]].id;
            tableemail[i].textContent = users[a[i]].email;
          }
          pageinwindow(presentpage);
          pageList[presentpage].classList.add("active");
          previouspage.classList.remove("active");
          if (presentpage == 10) lastpage.classList.add("active");
        }

        //   if (n == "First") {
        //     divText.innerHTML = `Name:${users[0].name}<br>
        // ID:${users[0].id}<br>
        // Email:${users[0].email}`;
        //     previouspage.classList.add("disable");
        //   }
      }
    }
    firstpage.addEventListener("click", function () {
      presentpage = 1;
      showtodiv(presentpage);
      firstpage.classList.add("active");
    });
    lastpage.addEventListener("click", function () {
      presentpage = 10;
      showtodiv(presentpage);
      lastpage.classList.add("active");
    });
    nextpage.addEventListener("click", function () {
      // if (presentpage == 9) lastpage.classList.add("active");
      if (presentpage <= 9) {
        presentpage += 1;
        showtodiv(presentpage);
      }
    });
    previouspage.addEventListener("click", function () {
      console.log(presentpage);

      if (presentpage > 1) {
        presentpage -= 1;
        showtodiv(presentpage);
      }
      if (presentpage == 1) firstpage.classList.add("active");
    });
    // it will show you the result as per button click
    unlist.addEventListener("click", function (e) {
      let n = e.target.textContent;
      if (Number.isInteger(+n)) {
        presentpage = +n;
      }
      showtodiv(n);

      //   if (Number.isInteger(+value.textContent)) {
      //     value.classList.add("d-none");
      //   }
    });
    showtodiv(presentpage);
  } else {
    console.log(xhr.status);
  }
};