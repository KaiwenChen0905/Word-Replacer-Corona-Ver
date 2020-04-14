let userinput = document.querySelector("#userinput")
let button = document.querySelector("input[type='button']")

button.addEventListener('click', updateButton);

function updateButton(){
  chrome.runtime.sendMessage({userinput: userinput.value});
  console.log('submitting')
 }
