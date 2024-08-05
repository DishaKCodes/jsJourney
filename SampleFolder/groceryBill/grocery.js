let a, b, c;
function calc() {
a = parseFloat(document.getElementById("grocery1").value);
b = parseFloat(document.getElementById("grocery2").value);
c = parseFloat(document.getElementById("grocery3").value);
    let sum =  a + b + c;
    document.getElementById("output").innerText = `the total is: ${sum}`;
}
