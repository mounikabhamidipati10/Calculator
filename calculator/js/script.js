// Button clears all values in text c-checkbox
function ac(){
  document.getElementById('res').value="";
}
// Displays value when we press the Button
function show(input){
  document.getElementById("res").value+=input;
}
// To calculate output and generate results
function calc(){
  var output = eval(document.getElementById('res').value)

  document.getElementById('res').value = output;
}
// Backspace
function back() {
    var value = document.getElementById("res").value;
    document.getElementById("res").value = value.substr(0, value.length - 1);
}
