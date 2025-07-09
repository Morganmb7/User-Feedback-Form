const form =document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");
feedbackDisplay.style.display="none";
const formWrapper = document.getElementById("form-wrapper");

//character counter
comments.addEventListener('input', () => {
  charCount.textContent = `${comments.value.length} characters`;
});

//tooltips
document.addEventListener("mouseover", (e) =>{
    if (e.target.matches("input,textarea")){ 
        const tooltip = document.createElement("div");
        tooltip.className ="tooltip";
        tooltip.textContent =e.target.dataset.tooltip;
        document.body.appendChild(tooltip);
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom+5}px`;
        tooltip.style.display ="block";
        e.target.tooltipEl = tooltip;
    }
    });

document.addEventListener("mouseout",(e)=>{
    if (e.target.tooltipEl) {
        e.target.tooltipEl.remove(); 
        e.target.tooltipEl = null;   
    }
})

//prevent background clicks from triggering fomr logic 
document.body.addEventListener("click",(e) =>{

}, true);

formWrapper.addEventListener("click",(e) =>{
    e.stopPropagation(); //prevent bubbling to body
});

//event delegation for input validation
form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = comments.value.trim();

    //clear existing error messages
    document.querySelectorAll(".error").forEach(el => el.remove());
    let valid = true;

    if (!name) {
        showError(nameInput,"Name is required");
        valid = false;

    }
    if (!email) {
        showError(emailInput,"Email is required");
        valid = false;
    }
    if (!comment){
        showError(comments, "Comment is required");
        valid = false;
    }
    if (valid) {
        const entry = document.createElement("div");
           entry.innerHTML = `<strong>${name}</strong> (${email}) said: <p>${comment}</p><hr>`;
           feedbackDisplay.appendChild(entry);
           form.reset ();
           charCount.textContent ="0 characters";
           feedbackDisplay.style.display ="block";


    }
});


//helper to show error messages
function showError(inputEl,message){
    const error = document.createElement("div");
    error.className ="error";
    error.style.color ="red";
    error.textContent = message; 
    inputEl.insertAdjacentElement("afterend",error);
}
