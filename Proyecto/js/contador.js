document.addEventListener("DOMContentLoaded", () => {
    let allValues = document.querySelectorAll(".value");
  
    allValues.forEach((singleValue) => {
      let startValue = 0;
      let endValue = parseInt(singleValue.getAttribute("data-value"));
      let duration = Math.floor(2000 / endValue);
  
      // Counter for increasing the values & display
      let counter = setInterval(function () {
        startValue += 1;
        singleValue.textContent = startValue;
        // Clearing the interval
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  });
  