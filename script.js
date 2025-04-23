document.getElementById("calculate").addEventListener("click", function() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operator = document.getElementById("operator").value;
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
          default:
            result = "Invalid operator";
        }
      }

      document.getElementById("result").innerText = "Result: " + Number(result);
    });

    // Text changing logic
    const originalTexts = ["Hello", "Welcome", "To", "My", "Class"];
    const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];

    document.getElementById("change_text").addEventListener("click", function() {
      const divs = document.querySelectorAll(".division");
      divs.forEach((div, index) => {
        div.textContent = newTexts[index];
      });
    });