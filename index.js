const form = document.querySelector('.container');
const reveal = document.querySelector('.submit-answer');
const btn = document.querySelectorAll('.button-rating__button');
const submit = document.querySelector('.submit-answer__button');
const thankYou = document.querySelector('.thank-you-container');
const rating = document.querySelector('.rating-selected'); 

let selectRating = " ";

btn.forEach((button) =>{
    button.addEventListener("click",() =>{
        selectRating = button.textContent;
        rating.textContent =`You selected ${selectRating} out of 5`
    });
});

submit.addEventListener("click",() =>{
    if(selectRating === ""){
        window.alert('Please select a rating');
    } 
    else {
        thankYou.classList.remove("hidden"); 
        form.classList.add("hidden");
    }
});
