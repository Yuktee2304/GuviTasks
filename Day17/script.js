let text = document.getElementById("text");
let bkdiv = document.getElementById("head");

setTimeout(() => {
  text.textContent = "10";
  bkdiv.setAttribute(
    "style",
    "background-image: linear-gradient(to right top, orange,white,green);"
  );

  setTimeout(() => {
    text.textContent = "9";
    bkdiv.setAttribute(
      "style",
      "background-image: linear-gradient(to right,orange,white,green);"
    );
    setTimeout(() => {
      text.textContent = "8";
      bkdiv.setAttribute(
        "style",
        "background-image: linear-gradient(to right bottom,orange,white,green);"
      );
      setTimeout(() => {
        text.textContent = "7";
        bkdiv.setAttribute(
          "style",
          "background-image: linear-gradient(to bottom, orange,white,green);"
        );
        setTimeout(() => {
          text.textContent = "6";
          bkdiv.setAttribute(
            "style",
            "background-image: linear-gradient(to left bottom,orange,white,green);"
          );
          setTimeout(() => {
            text.textContent = "5";
            bkdiv.setAttribute(
              "style",
              "background-image: linear-gradient(to right bottom, orange,white,green);"
            );
            setTimeout(() => {
              text.textContent = "4";
              bkdiv.setAttribute(
                "style",
                "background-image: linear-gradient(to left bottom, orange,white,green);"
              );
              setTimeout(() => {
                text.textContent = "3";
                bkdiv.setAttribute(
                  "style",
                  "background-image: linear-gradient(to top, orange,white,green);"
                );
                setTimeout(() => {
                  text.textContent = "2";
                  bkdiv.setAttribute(
                    "style",
                    "background-image: linear-gradient(to right top, orange,white,green);"
                  );
                  setTimeout(() => {
                    text.textContent = "1";

                    setTimeout(() => {
                      bkdiv.setAttribute(
                        "style",
                        "background-image: url(flag3.jpg);background-repeat: no-repeat;background-size: cover;justify-content: left;"
                      );
                      text.innerHTML = "Happy<br> Independence<br>Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 0);