
const modal = document.getElementById("popupForm");

const btn = document.getElementById("openFormBtn");


const span = document.getElementById("closeBtn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const backBtns = document.querySelectorAll('.back-btn');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = index === step ? 'block' : 'none';
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    backBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    
    showStep(currentStep);

    document.getElementById('multiStepForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        
    });
});
function notification(){
    var sound = new Audio('level-up-191997.mp3');
    sound.currentTime = 0; 
    sound.play();
}
