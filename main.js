// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//run mimic on the like click
// if mimic service call is resolved, click gives us full heart
// if not resolved throw error message
// mimicServerCall()

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let heartImage = document.querySelectorAll(`.like-glyph`);

function likeButton(e) {
  let heart = e.target;
  mimicServerCall(`url`)
  .then(function(serverMessage){
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error) {
    alert(error.message);
    let errorMessage = document.getElementById(`modal`)
    errorMessage.style.visibility = `visible`;
    setTimeout(function() {
      errorMessage.style.visibility = `hidden`;
    }, 5000);
  });
}
  for(let glyph of heartImage) {
    glyph.addEventListener(`click`, likeButton);
  }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
