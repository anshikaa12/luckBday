var dob = document.querySelector("#birth-date");
var lucky = document.querySelector("#lucky-number");
var checkbtn = document.querySelector("#btn");
var outputText = document.querySelector("#result");


checkbtn.addEventListener("click", function checkB() {
    var s = sum(dob.value);
    if (s % (lucky.value) === 0) {
        outputText.innerText = "🤩Your birthday is luckyy!🤩";


    } else {
        outputText.innerText = "🙁Your birthday is not that luckyy!🙁";

    }
})

function sum(inputDate) {
    inputDate = inputDate.replaceAll("-", "");
    var sum = 0;
    for (var i = 0; i < inputDate.length; i++) {
        sum = sum + Number(inputDate[i]);
    }
    return sum;
}