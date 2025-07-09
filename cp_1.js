const form =document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");
const formWrapper = document.getElementById("form-wrapper");

//character counter
comments.addEventListener("input",() =>{
    charCount.textContent = ${comments.ariaValueMax.length} characters;
    });

    
