document.getElementById("calc").addEventListener("click", function() {
    let n = parseInt(document.getElementById("num").value);
    let l = parseInt(document.getElementById("limit").value);
    let resultText = "";

    for (let i = 1; i <= l; i++) {
        resultText += n + " x " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("result").innerHTML = resultText;
});
