// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  var mc = document.getElementById('MessageCenter').value;
  var Freq = document.getElementById('Frequency').value;
  var key = document.getElementById('enc_key').value;

  chrome.storage.sync.set({
    decoder_color: color,
    message_center: mc,
    Frequency: Freq,
    encKey: key
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    decoder_color: 'Red',
    message_center: '',
    Frequency: "106.9",
    encKey: "Secret Password"

  }, function(items) {

 document.getElementById('color').value = items.decoder_color;
 document.getElementById('MessageCenter').value = items.message_center;
 document.getElementById('Frequency').value = items.Frequency;
 document.getElementById('enc_key').value= items.encKey;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);