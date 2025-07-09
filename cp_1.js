const form =document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");
const formWrapper = document.getElementById("form-wrapper");

//character counter
comments.addEventListener('input', () => {
  charCount.textContent = `${comments.value.length} characters`;
});

//tooltips
document.addEventListener("mouseover", (e) =>{
    if (e.target.matches("input,texareas")){
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
}
)
