

const steps = document.querySelectorAll(".step");
let currentStepIndex = 0;

const showCurrentStep = () => {
    steps.forEach ((step, index) => {
        step.classList.toggle("active", index === currentStepIndex);
    });

    currentStepIndex = (currentStepIndex + 1) % steps.length;
};

showCurrentStep();

const intervalId = setInterval(showCurrentStep, 3000);


function handleNavClick(event) {
  event.preventDefault(); 

  const link = event.currentTarget;
  const href = link.getAttribute('href');

  
  link.classList.add('fade-out');

  
  setTimeout(() => {
    window.location.href = href; 
  }, 500); 
}


document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
});


