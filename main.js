let inputText = document.querySelector(".inputText");
let array = [];
let pressButton = document.querySelector("#press-button");
//console.log(pressButton);
let form = document.querySelector("#form");
form.addEventListener("click", function () {

    if (input = "12"

    ) {
        pressButton.removeAttribute("disabled");
    } else pressButton.setAttribute("disabled", true);

});
pressButton.addEventListener("click", function () {
    let inputTextValue = inputText.value;
    array.push(inputTextValue);
    console.log(array)
    inputText.value = "";
    localStorage.setItem(array, 'inputText')

    function showNewArray(array) {

        let arrayLength = array.length;
        let cuttedElementArray;
        if (arrayLength === 10) { cuttedElementArray = array.shift() };
        console.log(cuttedElementArray);

    }
    showNewArray(array);
});
