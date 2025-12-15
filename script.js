function calculate() {
    let billAmountValue = document.getElementById("billAmount").value;
    let percentageTipValue = document.getElementById("percentageTip").value;
    if (billAmountValue === "") {
        document.getElementById("errorMessage").textContent = "please enter a valid input";
    } else if (percentageTipValue === "") {
        document.getElementById("errorMessage").textContent = "please enter a valid input";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let calculatedTip = (percentageTipValue / 100) * (billAmountValue);
        let totalAmountValue = parseInt(billAmountValue) + calculatedTip;

        document.getElementById("tipAmount").value = calculatedTip;
        document.getElementById("totalAmount").value = totalAmountValue;

    }
}
