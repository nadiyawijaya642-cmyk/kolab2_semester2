// Smooth Scroll
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });

    });

});


// Typing Effect
const text = [
    "Web Developer",
    "UI Designer",
    "Frontend Beginner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typingEffect(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-text').textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(typingEffect, 1500);

    }else{

        setTimeout(typingEffect, 120);

    }

})();


// Reveal Animation
const sections = document.querySelectorAll('section');

function revealSection(){

    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.classList.add('show');

        }

    });

}

window.addEventListener('scroll', revealSection);

revealSection();


// Contact Form
const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    alert('Pesan berhasil dikirim!');

    form.reset();

});

