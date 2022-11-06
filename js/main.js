// jQuery workings

const ratingCard = document.querySelector('.rating__card');
const thanksCard = document.querySelector('.thanks__card');
const ratingBtns = document.querySelector('.rating__card-scores');
const submitBtn = document.querySelector('.button__primary');
const eachBtns = document.querySelectorAll('.button__secondary');
const textResult = document.querySelector('.thanks__rate-value-answer');
const home = document.querySelector('.home');
const errorMessage = document.querySelector('.error');


// function for making add/remove class hidden to show card rating/thanks 

submitBtn.addEventListener('click', () => {
  // this function is for showing what value was chosen by user
  callBack();
  
  //spread operator to convert them to array
  const newArray = [...eachBtns]; 
  newArray.forEach((btn) => {
    //checking if the user click on rating btn (at least one of it makes it true)
    if (btn.classList.contains('btn-active')) {
      // adding/removing class from cards
      ratingCard.classList.add('hidden');
      thanksCard.classList.remove('hidden');
      // after submiting rate remove class to show option back to rate card
      home.classList.remove('hidden');
      // making error message invisible
      errorMessage.classList.remove('error-active'); 
      //  checking if user clicked on rate btn, remove class 
    } else if (!thanksCard.classList.contains('hidden')) {
      errorMessage.classList.remove('error-active');
    } else {
      // if user didnt click on rate btn making error message visible and it will turn invisible after 2seconds
      errorMessage.classList.add('error-active');
      function hideError() {
        errorMessage.classList.remove('error-active');
      }
      setTimeout(hideError, 2000);
    }
  });
});

//home btn click event
home.addEventListener('click', () => {
  // making home btn hiden/visible on specified card
  ratingCard.classList.remove('hidden');
  thanksCard.classList.add('hidden');
  home.classList.add('hidden');
  eachBtns.forEach((btn) => {
    //when you go back the selection btns are empty
    btn.classList.remove('btn-active');
  });
});

function callBack() {
  //logic-when we click on the btns container[ratingbtns]
  ratingBtns.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove active state from btns and after click on other btn making it active
      eachBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
        e.target.classList.add('btn-active');
        //printing the selected value to result
        textResult.innerHTML = `You selected <span> ${id}</span> out of 5`;
      });
    }
  });
}
callBack();
