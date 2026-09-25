function addToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    let expression=document.getElementById("display").value;

    try{
        document.getElementById("display").value= eval(expression);
    }
    catch{
        document.getElementById("display").value= "error";
    }
}
function remove() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}