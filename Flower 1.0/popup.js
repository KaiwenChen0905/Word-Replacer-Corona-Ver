let userinput = document.querySelector("#userinput")
let button = document.querySelector("input[type='button']")

button.addEventListener('click', updateButton);

function updateButton(){
  chrome.tabs.query({}, function (tabs){
    for (tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {userinput: userinput.value});
    }
   });
  console.log('submitting')
 }
