function getMessage() {
  return "Pipeline is working!";
}

function showMessage() {
  document.getElementById("output").textContent = getMessage();
}

module.exports = { getMessage };