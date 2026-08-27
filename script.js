/* =========================================
   SALWAH AULIAH PORTFOLIO
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVBAR
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [
        "Web Development",
        "Computer Networking",
        "IT Support",
        "Technology Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typingEffect() {

        const currentWord = words[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;


            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }


        const speed = deleting ? 45 : 90;

        setTimeout(typingEffect, speed);

    }


    typingEffect();

}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(11, 31, 58, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Mohon isi semua bagian terlebih dahulu.";

            return;

        }


        formMessage.textContent =
            "Terima kasih! Pesan kamu sudah siap dikirim.";


        contactForm.reset();

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   IMAGE FALLBACK
========================================= */

const images = document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        if (!image.dataset.fallback) {

            image.dataset.fallback = "true";

            image.src =
                "https://via.placeholder.com/800x500/d9f0ff/10243e?text=SALWAH+AULIAH";

        }

    });

});
