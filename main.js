let display = document.getElementById("display");

    function addToDisplay(value) {
      if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = "";
      }

      if (value === '√') {
        try {
          display.innerText = Math.sqrt(eval(display.innerText)).toString();
        } catch {
          display.innerText = "Error";
        }
        return;
      }

      if (value === '^2') {
        try {
          display.innerText = Math.pow(eval(display.innerText), 2).toString();
        } catch {
          display.innerText = "Error";
        }
        return;
      }

      display.innerText += value;
    }

    function clearDisplay() {
      display.innerText = "0";
    }

    function calculate() {
      try {
        display.innerText = eval(display.innerText).toString();
      } catch {
        display.innerText = "Error";
      }
    }