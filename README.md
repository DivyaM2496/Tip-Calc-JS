# 💰 Tip Calculator App

## 📌 Overview

The **Tip Calculator App** is a simple web application built using **HTML, CSS, and JavaScript**. It allows users to calculate the **tip amount** and **total bill amount** based on the bill value and tip percentage entered.

This project is beginner-friendly and focuses on **form handling**, **input validation**, and **basic calculations** using JavaScript.

---

## 🧩 Features

* Calculates tip based on percentage
* Displays total bill amount (bill + tip)
* Input validation with error messages
* Simple and clean UI logic

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## ⚙️ How It Works

* User enters:

  * Bill amount
  * Tip percentage
* On clicking the **Calculate** button:

  * Inputs are validated
  * If inputs are empty, an error message is shown
  * If valid, tip and total amount are calculated and displayed

---

## 📂 Project Structure

```
tip-calculator-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function calculate() {
  let billAmountValue = document.getElementById("billAmount").value;
  let percentageTipValue = document.getElementById("percentageTip").value;

  if (billAmountValue === "" || percentageTipValue === "") {
    document.getElementById("errorMessage").textContent = "please enter a valid input";
  } else {
    let calculatedTip = (percentageTipValue / 100) * billAmountValue;
    let totalAmountValue = parseInt(billAmountValue) + calculatedTip;

    document.getElementById("tipAmount").value = calculatedTip;
    document.getElementById("totalAmount").value = totalAmountValue;
  }
}
```

---

## 📚 Concepts Covered

* DOM input handling
* Input validation
* Conditional statements
* Arithmetic operations in JavaScript

---

## 🚀 Future Improvements

* Add currency formatting
* Improve validation for numeric input
* Add reset button

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
