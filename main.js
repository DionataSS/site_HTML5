function translateToLibras() {
  const textInput = document.getElementById('text-input').value;
  const translatedText = VLibras.getInstance().translate(textInput);
  document.getElementById('translated-text').innerHTML = translatedText;
}
