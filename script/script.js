/*** Password confirmation ***/
function check() {
  var input = document.getElementById("passwordConf");
  if (input.value != document.getElementById("passwordNew").value) {
    input.setCustomValidity("Password Must be Matching.");
  } else {
    // input is valid -- reset the error message
    input.setCustomValidity("");
  }
}
