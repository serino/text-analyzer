let inputBox = document.getElementById("inputBox");
let paragraph = document.getElementById("paragraph");
let charactersDiv = document.getElementById("charactersDiv");

inputBox.addEventListener("input", showInParagraph);

function showInParagraph() {
  //creates an array equal to the size of the amount of characters that user types into inputBox. UPDATE: Creates a counter to determine how many characters have been are in the values of the keys
  let totalNumCharacters = 0;

  //creates object (also called associative array)
  let characterKeyStorage = {}

  //creates for of loop that iterates through the inputBox.value and compares it with the keys in the characterKeyStorage object I created above.
  for (let i = 0; i < inputBox.value.length; i++) {
    if (inputBox.value[i] != " " && inputBox.value[i] != "\n") {
      totalNumCharacters = totalNumCharacters + 1;
      //creates variable equal to i'th character that user types into the input box.
      let key = inputBox.value[i]; // e.g. "a"
      if (characterKeyStorage[key] == null) {
        // key doesn't exist
        // TODO: add key
        //I need to add a key and add a value
        characterKeyStorage[key] = 1;
      }
      else {
        // key already exists
        //I need to change the value of a specific key but do not need to add a new key.
        characterKeyStorage[key] = characterKeyStorage[key] + 1;
      }
    }
  }

  updateParagraph(characterKeyStorage, totalNumCharacters);
}

function updateParagraph(characterKeyStorage, totalNumCharacters) {
  charactersDiv.innerHTML = "";
  for (let character in characterKeyStorage) {
    var characterCountParagraph = document.createElement("p");
    characterCountParagraph.innerHTML = `${character}: 
    ${(characterKeyStorage[character] / totalNumCharacters * 100).toFixed(2)}%`

    charactersDiv.appendChild(characterCountParagraph);
  }
}


