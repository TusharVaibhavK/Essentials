document.getElementById("calc").addEventListener("click", function() {
    let number = parseInt(document.getElementById("num").value);
    let sum = 0;

    for (let i = 1; i <= number; i++){
        sum += i;
    }

    document.getElementById("result").innerHTML = sum;
});
