document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.executeScript({
      code: 'window.getSelection().toString();'
    }, function(selection) {
      updateCounter(selection[0]);
    });
  });
  
  function updateCounter(selectedText) {
    const wordCount = selectedText.split(/\s+/).filter(function(word) {
      return word.length > 0;
    }).length;
  
    const charCount = selectedText.length;
  
    document.getElementById('word-count').innerText = 'Words: ' + wordCount;
    document.getElementById('char-count').innerText = 'Characters: ' + charCount;
  }
  