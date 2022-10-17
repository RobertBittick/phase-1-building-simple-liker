// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => likeFunc())

let modal= document.getElementById('modal')
modal.classList.add('hidden')

function likeFunc() {
  const like = document.querySelector('.like-glyph')
  like.addEventListener('click', (event) => {
    event.preventDefault()
    mimicServerCall()
    .then((response => {
    if (like.innerText == EMPTY_HEART) {
      like.innerText = FULL_HEART
      like.classList.add('activated-heart')
      console.log('add heart')
    } else {
      like.innerText = EMPTY_HEART
      like.classList.remove('activated-heart')
      console.log('remove heart')
    }
  })
  ) .catch(function(){
    modal.classList.remove('hidden')
    setTimeout(() => myTimeout(),3000)
    function myTimeout(){
      modal.classList.add('hidden')
    }
  })}
  )
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
