function countCharacters() {
  var text = document.getElementById('inputText').value;
  var count = text.length;
  document.getElementById('characterCount').textContent = count;
}
