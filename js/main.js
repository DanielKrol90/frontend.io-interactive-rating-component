const scoreBtns = document.querySelectorAll('.button__secondary');
const submitBtn = document.querySelector('.button__primary');
const ratingText = document.querySelector('.thanks__rate-value-answer');
const ratingCard = document.querySelector('.rating__card');
const thanksCard = document.querySelector('.thanks__card');

let rating;

//Loops through score buttons to see which one was clicked and stores the rating

scoreBtns.forEach((score) => {
    score.addEventListener('click', (e) => {
        e.preventDefault();
        rating = e.target.innerHTML;
        score.style.backgroundColor = "hsl(25, 97%, 53%)";
        score.style.color = "hsl(0, 0%, 100%)";
        ratingText.innerHTML = `You selected ${rating} out of 5`;
    })
});


//Listens for submit button click, then hides rating card and shows thank you card
//Also checks to see if the user submitted a rating.  If not, provides a message.


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!rating) {
        ratingText.innerHTML = "You forgot to choose a rating, still thanks for trying!";
    }
    ratingCard.style.display = "none";
    thanksCard.style.display = "flex";
});