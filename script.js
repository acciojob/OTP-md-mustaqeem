//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// first input auto focus
codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    if (e.target.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      }
    }
  });

});