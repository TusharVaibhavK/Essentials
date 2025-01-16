document.getElementById("checkButton").addEventListener("click", function() {
    let number = document.getElementById("num").value;
    let result = "";

    if (number % 2 === 0) {
        result = "Even";
    }
    else {
        result = "Odd";
    }

    document.getElementById("result").innerHTML = result;
});