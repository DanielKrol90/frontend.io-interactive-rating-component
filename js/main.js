const btnRate = document.querySelectorAll('.button__secondary');
const btnSubmit = document.querySelector('.button__primary');
const textValue = document.querySelector('.thanks__rate-value-answer');
const cardRating = document.querySelector('.rating__card');
const cardThanks = document.querySelector('.thanks__card');
const rateNotSelected = document.querySelector('.rating__not-selected');

let value;

//function for loop for each elements, storing the rating and showing the rating on thanks card, after click it change the color of rate button

btnRate.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        e.preventDefault();
        value = e.target.innerHTML;
        rating.style.backgroundColor = "hsl(25, 97%, 53%)";
        rating.style.color = "hsl(0, 0%, 100%)";
        textValue.innerHTML = `You selected ${value} out of 5`;
    })
});

// funcion for submit click, after submit hide rateing card and show thanks card. If user didnt choose a rating it block and send a message for chose a rating. After chosing rating send to thanks card

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!value) {
        rateNotSelected.innerHTML = "Choose a rating befoce submiting...";
    }
    if (value) {
        cardRating.style.display = "none";
        cardThanks.style.display = "flex";
    }
});