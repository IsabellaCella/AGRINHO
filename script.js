// =========================================
// AGRO FORTE 2025
// SCRIPT.JS
// =========================================


// ANIMAÇÃO AO ROLAR

const fadeElements = document.querySelectorAll('.fade-up');

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(element => {

        const boxTop = element.getBoundingClientRect().top;

        if(boxTop < triggerBottom){

            element.classList.add('show');

        } else {

            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// NAVBAR DINÂMICA

const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.padding = '10px 0';

        navbar.style.background = 'rgba(16, 42, 32, 0.96)';

    } else {

        navbar.style.padding = '15px 0';

        navbar.style.background = 'rgba(27,67,50,0.92)';
    }
});


// CONTADORES ANIMADOS

const counters = document.querySelectorAll('[data-counter]');

const speed = 200;

function animateCounters(){

    counters.forEach(counter => {

        const updateCount = () => {

            const target = +counter.getAttribute('data-counter');

            const count = +counter.innerText;

            const increment = target / speed;

            if(count < target){

                counter.innerText = Math.ceil(count + increment);

                setTimeout(updateCount, 10);

            } else {

                counter.innerText = target;
            }
        };

        updateCount();
    });
}

animateCounters();


// BARRAS DE PROGRESSO

const progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBars(){

    progressBars.forEach(bar => {

        const value = bar.getAttribute('data-progress');

        bar.style.width = value + '%';
    });
}

window.addEventListener('load', animateProgressBars);


// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'
            });
        }
    });
});


// EFEITO HOVER NOS CARDS

const cards = document.querySelectorAll('.info-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            rotateX(${-(y - rect.height / 2) / 25}deg)
            rotateY(${(x - rect.width / 2) / 25}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0)';
    });
});


// TEXTO DIGITANDO NO HEADER

const typingText = document.querySelector('.typing-text');

if(typingText){

    const text = typingText.dataset.text;

    let index = 0;

    function typeWriter(){

        if(index < text.length){

            typingText.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 60);
        }
    }

    typeWriter();
}


// BOTÃO VOLTAR AO TOPO

const backToTop = document.createElement('button');

backToTop.innerHTML = '↑';

backToTop.id = 'backToTop';

document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '30px';
backToTop.style.right = '30px';
backToTop.style.width = '55px';
backToTop.style.height = '55px';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '50%';
backToTop.style.background = '#2d6a4f';
backToTop.style.color = 'white';
backToTop.style.fontSize = '1.5rem';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '999';
backToTop.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
backToTop.style.transition = '0.3s';

window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

        backToTop.style.display = 'block';

    } else {

        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {

    window.scrollTo({

        top:0,
        behavior:'smooth'
    });
});