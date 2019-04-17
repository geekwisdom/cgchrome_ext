chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.contentScriptQuery == 'fetchMessages') 
	{
        var url = 'https://geekwisdom.org/utils/msg.json'
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() 
           {
	  if (xhr.readyState == 4) 
              {
	    // innerText does not let the attacker inject HTML elements.
	    sendResponse(xhr.responseText);
	     }
          }
         xhr.send();        
        return true;  // Will respond asynchronously.
      }
      if (request.contentScriptQuery == 'loadSettings') 
	{
	  chrome.storage.sync.get({decoder_color: 'Red', message_center: '', Frequency: "106.9",  encKey: "Secret Password" }, function(items) {  sendResponse(items); });
         return true;  // Will respond asynchronously.
      }

    });

