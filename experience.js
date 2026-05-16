// Reveal Animation
const fadeElements = document.querySelectorAll('.fade-up');

function revealFade(){

  const triggerBottom = window.innerHeight / 1.2;

  fadeElements.forEach(element => {

    const boxTop = element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      element.classList.add('show');

    }

  });

}

window.addEventListener('scroll', revealFade);

revealFade();


// Hover Effect
const photoBox = document.querySelector('.photo-box');

photoBox.addEventListener('mouseenter', () => {

  photoBox.style.boxShadow = '0 15px 40px rgba(0,255,200,0.3)';

});

photoBox.addEventListener('mouseleave', () => {

  photoBox.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';

});