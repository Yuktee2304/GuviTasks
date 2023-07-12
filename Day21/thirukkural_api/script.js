class Thirukural {
    constructor(num) {
      this.num = num;
    }
  
    tamilThirukkural(num) {
      fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
        .then((data) => data.json())
        .then((obj) => {
          document.getElementById("sect_tam").innerText = `பால்: ${obj.sect_tam}`;
          document.getElementById(
            "chapgrp_tam"
          ).innerText = `பாட குழு: ${obj.chapgrp_tam}`;
          document.getElementById("tamLine1").innerText = obj.line1;
          document.getElementById("tamLine2").innerText = obj.line2;
          document.getElementById("tam_exp").innerText = obj.tam_exp;
          document.getElementById(
            "thiruNo"
          ).innerText = `Thirukkural No - ${obj.number}`;
          document.title = `Thirukkural - ${obj.number}`;
          document.getElementById("kuralline1").innerText = obj.line1;
          document.getElementById("kuralline2").innerText = obj.line2;
        });
    }
  
    englishThirukkural(num) {
      fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
        .then((data) => data.json())
        .then((obj) => {
          document.getElementById(
            "sect_eng"
          ).innerText = `Section: ${obj.sect_eng}`;
          document.getElementById("engLine").innerText = obj.eng;
          document.getElementById(
            "chapgrp_eng"
          ).innerText = `Chapter group : ${obj.chapgrp_eng}`;
          document.getElementById("eng_exp").innerText = obj.eng_exp;
        });
    }
  
    randomThirukkural() {
      let num = Math.floor(Math.random() * 1330);
      this.tamilThirukkural(num);
      this.englishThirukkural(num);
    }
  }
  
  function random() {
    document.getElementById("inputNum").reset();
    let num = document.getElementById("userNum").value;
    let text = new Thirukural(num);
    text.randomThirukkural();
  }
  
  function getUserKural() {
    let num = document.getElementById("userNum").value;
    if (num == "") {
      alert("Enter Number Between 1 and 1330");
    } else if (num > 1330) {
      alert("Number cannot be more than 1330");
    } else {
      let text = new Thirukural(num);
      text.tamilThirukkural(num);
      text.englishThirukkural(num);
    }
  }
  
  document.getElementById("random").addEventListener("click", random);
  document.getElementById("search").addEventListener("click", getUserKural);
  window.addEventListener("load", function () {
    random();
  });