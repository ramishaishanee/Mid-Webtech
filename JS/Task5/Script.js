// Get elements
const textInput = document.getElementById("textInput");
const analyzeBtn = document.getElementById("analyzeBtn");

const errorMsg = document.getElementById("errorMsg");
const charCountSpan = document.getElementById("charCount");
const wordCountSpan = document.getElementById("wordCount");
const reversedTextDiv = document.getElementById("reversedText");

function analyzeText() {

    errorMsg.innerHTML = "";

  const text = textInput.value;
  const trimmed = text.trim();

  if (trimmed === "") {
    errorMsg.innerHTML = "Please enter some text.";
    errorMsg.style.color = "red";

    charCountSpan.innerText = "0";
    wordCountSpan.innerText = "0";
    reversedTextDiv.innerText = "";
    return;
  }

  // Total characters including spaces & punctuation
  const charCount = text.length;

  // Total words (handle multiple spaces)
  // Split on any whitespace and filter out empty strings
  const wordsArray = trimmed.split(/\s+/);
  const wordCount = wordsArray.filter(word => word !== "").length;

  // Reverse entire text
  const reversed = text.split("").reverse().join("");

  // Display results
  charCountSpan.innerText = charCount;
  wordCountSpan.innerText = wordCount;
  reversedTextDiv.innerText = reversed;
}

// Button click event
analyzeBtn.addEventListener("click", analyzeText);