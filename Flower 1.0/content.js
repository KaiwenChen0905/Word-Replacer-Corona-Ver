alert('Open the Extension Pop-Up screen to replace the words you don not want to see!');

chrome.runtime.onMessage.addListener(
  function(request, sender, senderResponse){

    alert('receiving');

    var everything = document.getElementsByTagName("body");

    console.log('word redactor extension running');

    for (var i = 0; i < everything.length; i++) {

      var txt = everything[i].innerHTML;

      var tokens = txt.split(/(<.*?>)/);

    for (var j = 0; j < tokens.length; j++) {

      if (tokens[j].charAt(0) !== '<') {
      tokens[j] = tokens[j].replace((new RegExp(request.userinput, "gi")),'<span class="redact">🌼🌻💐🌹🌷</span>');
    }
  }

  everything[i].innerHTML = tokens.join('');
   }
});
