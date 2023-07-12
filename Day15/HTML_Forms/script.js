let div = document.createElement("div");
div.setAttribute("class", "container");
document.body.append(div);
let divcon = document.querySelector(".container");

let heading1 = document.createElement("h1");
heading1.setAttribute("id", "title");
heading1.textContent = "DOM Manipulation with Forms";
divcon.append(heading1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.textContent = "Using HTML, CSS and JS";
divcon.append(p);

let div2 = document.createElement("div");
div2.setAttribute("class", "container");
div2.setAttribute("id", "form-group");
document.body.append(div2);
let divcon2 = document.getElementById("form-group");
divcon2.classList.add("form-group");

let form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "form");
divcon2.append(form);

let formDetails = (namelab, name, texttype) => {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "form");
  div1.setAttribute("class", "form-group");
  getForm.append(div1);

  let label = document.createElement("label");
  label.innerText = ` ${namelab} `;
  label.setAttribute("for", `${name}`);
  label.setAttribute("class", "form-label");

  if (texttype !== "textarea") {
    let input = document.createElement("input");
    input.setAttribute("type", `${texttype}`);
    input.setAttribute("id", `${name}`);
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "");
    input.setAttribute("name", `${name}`);
    input.setAttribute("value", "");

    div1.append(label);
    div1.append(input);
  } else {
    let textarea = document.createElement("textarea");
    textarea.setAttribute("class", "form-control form-group");
    textarea.setAttribute("rows", 2);
    textarea.setAttribute("id", "address");
    textarea.setAttribute("placeholder", "");
    textarea.setAttribute("name", `${name}`);
    textarea.setAttribute("value", "");

    div1.append(label);
    div1.append(textarea);
  }
};
function creatediv(names) {
  let div = document.createElement("div");
  div.setAttribute("id", "divid");
  div.setAttribute("class", "form-group");
  getForm.append(div);

  let label = document.createElement("label");
  label.innerText = `${names}`;

  document.getElementById("divid").append(label);
}

function createradio(namelab, name, type) {
  let label = document.createElement("label");
  label.innerText = ` ${namelab} `;
  label.setAttribute("for", `${name}`);
  //   label.setAttribute("class", "form-check-label");
  let input = document.createElement("input");
  input.setAttribute("type", `${type}`);
  input.setAttribute("id", `${name}`);
  //   input.setAttribute("class", "form-check-input");
  input.setAttribute("name", "ageradio");
  input.setAttribute("value", `${namelab}`);
  document.getElementById("divid").append(input);
  document.getElementById("divid").append(label);
}

function creatediv2(names) {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "divcheckbox");
  div1.setAttribute("class", "checkboxthis");
  getForm.append(div1);

  let checkdiv = document.querySelector(".checkboxthis");
  checkdiv.classList.add("form-group");

  let label = document.createElement("label");
  label.innerText = `${names}`;

  checkdiv.append(label);
}

function createcheckbox(namelab, name, type) {
  let label = document.createElement("label");
  label.innerText = ` ${namelab} `;
  label.setAttribute("for", `${name}`);
  //   label.setAttribute("class", "form-check-label");
  let input = document.createElement("input");
  input.setAttribute("type", `${type}`);
  input.setAttribute("id", `${name}`);
  input.setAttribute("class", "form-check-input");
  input.setAttribute("value", `${namelab}`);
  //   input.setAttribute("class", "form-check-input");
  document.querySelector(".checkboxthis").append(input);
  document.querySelector(".checkboxthis").append(label);
}

let getForm = document.getElementById("form");
formDetails("Firstname", "first-name", "text");
formDetails("Lastname", "last-name", "text");
formDetails("Email", "email", "email");
creatediv("Gender :");
createradio("Male", "gender1", "radio");
createradio("Female", "gender2", "radio");
createradio("Others", "gender3", "radio");
formDetails("Address", "address", "textarea");
formDetails("State", "state", "text");
formDetails("Country", "country", "text");
formDetails("pincode", "pincode", "text");
creatediv2("Choice of Food :");
createcheckbox("Biriyani", "food", "checkbox");
createcheckbox("Fried rice", "food", "checkbox");
createcheckbox("veg rice", "food", "checkbox");
createcheckbox("Curd Rice", "food", "checkbox");
createcheckbox("soup", "food", "checkbox");

let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("class", "btn");
submit.setAttribute("id", "submit");
getForm.append(submit);

let firstname = document.getElementById("first-name");
firstname.classList.add("form-group");
firstname.setAttribute("required", "");
let lastname = document.getElementById("last-name");
lastname.setAttribute("required", "");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let address = document.getElementById("address");
let state = document.getElementById("state");
let country = document.getElementById("country");
let pincode = document.getElementById("pincode");
pincode.setAttribute("required", "");
let getsubmit = document.getElementById("submit");

getsubmit.classList.add("btn-primary");

firstname.placeholder = "Enter Your Firstname";
lastname.placeholder = "Enter Your Lastname";
email.placeholder = "Enter Your Email Address";
address.placeholder = "Enter Your Address here";
pincode.placeholder = "Enter your Pincode";

let SubmittedData = [];

//table

let div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.setAttribute("class", "table-responsive");
document.body.append(div1);

let divText = document.getElementById("div1");
divText.classList.add("d-none");

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

createtabHEad("No");
createtabHEad("Firstname");
createtabHEad("Lastname");
createtabHEad("Email");
createtabHEad("Gender");
createtabHEad("Address");
createtabHEad("State");
createtabHEad("Country");
createtabHEad("Pincode");
createtabHEad("Choice of Food");

//body table
let tbody = document.createElement("tbody");
tab.append(tbody);

getsubmit.addEventListener("click", function (event) {
  if (firstname.value == "") {
    alert("Enter the firstname");
    event.preventDefault();
    return false;
  }
  if (lastname.value == "") {
    alert("Enter the lastname");
    event.preventDefault();
    return false;
  }

  if (email.value == "") {
    alert("Enter the email address");
    event.preventDefault();
    return false;
  }
  if (address.value == "") {
    alert("Enter the Address");
    event.preventDefault();
    return false;
  }
  if (state.value == "") {
    alert("Enter the state");
    event.preventDefault();
    return false;
  }
  if (country.value == "") {
    alert("Enter the country");
    event.preventDefault();
    return false;
  }
  if (pincode.value == "") {
    alert("Enter the pincode");
    event.preventDefault();
    return false;
  }
  let gendergroup;
  if (true) {
    let valid = false;
    let allradio = document.getElementsByName("ageradio");

    for (let i = 0; i < allradio.length; i++) {
      if (allradio[i].checked) {
        gendergroup = allradio[i].value;
        valid = true;
        break;
      }
    }
    if (!valid) {
      alert("click any one of the gender");
      event.preventDefault();
      return false;
    }
  }
  let checklistfood = [];
  if (true) {
    let valid = 0;
    let allcheck = document.querySelectorAll("#food");

    for (let i = 0; i < allcheck.length; i++) {
      if (allcheck[i].checked) {
        checklistfood.push(allcheck[i].value);
        valid += 1;
      }
    }
    if (valid < 2) {
      alert("Select minimum 2 foods");
      event.preventDefault();
      return false;
    }
  }
  let tempdata = {};
  tempdata.firsts = firstname.value;
  tempdata.lasts = lastname.value;
  tempdata.email = email.value;
  tempdata.adds = address.value;
  tempdata.pins = pincode.value;
  tempdata.gens = gendergroup;
  tempdata.foods = checklistfood.join(",");
  tempdata.states = state.value;
  tempdata.countrys = country.value;
  console.log(tempdata);
  SubmittedData.push(tempdata);

  let confirmLogin = confirm("Are you sure, want to submit");
  if (confirmLogin) {
    event.preventDefault();
    getForm.reset();
    console.log(SubmittedData);
    alert("Submitted Successfully");
    divText.classList.remove("d-none");

    function createtabData() {
      let tr1 = document.createElement("tr");
      tbody.append(tr1);
      let nameTD = [
        "tno",
        "tfirst",
        "tlast",
        "temail",
        "tgender",
        "taddress",
        "tstate",
        "tcountry",
        "tpin",
        "tchoice",
      ];

      for (let i = 0; i < 10; i++) {
        let td = document.createElement("td");
        td.setAttribute("id", `${nameTD[i]}`);
        // td.textContent = "Demo";
        tr1.append(td);
      }
    }

    if (SubmittedData.length > 0) {
      for (let i = 0; i < 1; i++) createtabData();

      let tableSlno = document.querySelectorAll("#tno");
      let tableFirstname = document.querySelectorAll("#tfirst");
      let tableLast = document.querySelectorAll("#tlast");
      let tableEmail = document.querySelectorAll("#temail");
      let tableGender = document.querySelectorAll("#tgender");
      let tableAddress = document.querySelectorAll("#taddress");
      let tableState = document.querySelectorAll("#tstate");
      let tableCountry = document.querySelectorAll("#tcountry");
      let tablePin = document.querySelectorAll("#tpin");
      let tableChoice = document.querySelectorAll("#tchoice");

      for (let i = 0; i < SubmittedData.length; i++) {
        tableSlno[i].textContent = i + 1;
        tableFirstname[i].textContent = SubmittedData[i].firsts;
        tableLast[i].textContent = SubmittedData[i].lasts;
        tableEmail[i].textContent = SubmittedData[i].email;
        tableGender[i].textContent = SubmittedData[i].gens;
        tableAddress[i].textContent = SubmittedData[i].adds;
        tableState[i].textContent = SubmittedData[i].states;
        tableCountry[i].textContent = SubmittedData[i].countrys;
        tablePin[i].textContent = SubmittedData[i].pins;
        tableChoice[i].textContent = SubmittedData[i].foods;
      }
    }
    return true;
  } else {
    return false;
  }
});