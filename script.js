const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    let value = e.target.value;

    // only one digit allowed
    if (value.length > 1) {
      value = value[0];
      e.target.value = value;
    }

    // move forward
    if (value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      // if current has value → clear it
      if (code.value !== "") {
        code.value = "";
      } 
      // if empty → go to previous
      else if (index > 0) {
        codes[index - 1].value = "";
        codes[index - 1].focus();
      }
    }
  });

});