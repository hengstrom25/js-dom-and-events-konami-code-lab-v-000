const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Keep track of index outside of the event handler.
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body;
  
  body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
    index++;
    
      if (index === code.length) {
      alert("Hurray!");
      }
      
    } else {
      
      index = 0;
    }
});
}


 