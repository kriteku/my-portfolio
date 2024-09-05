const navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navBar.style.backgroundColor = "black";
        navBar.style.transition = "0.5s";
    } else {
        navBar.style.backgroundColor = "";
        navBar.style.transition = "0.5s";
    }
})

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

const headers = document.querySelectorAll('.role-header, .projects-header');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, {
    root: null,
    threshold: 0.1
});

headers.forEach((header) => {
    observer.observe(header);
});

const infoDivs = document.querySelectorAll('.info-div');

const observerInfo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-div-height');
        } else {
            entry.target.classList.remove('info-div-height');
        }
    });
}, {
    root: null,
    threshold: 0.1
});

infoDivs.forEach((infoDiv) => {
    observerInfo.observe(infoDiv);
});


const navbar = document.getElementById('nav-bar');

// In case you want to hide the navigation bar while scrolling uncomment the below code
// let prevScrollPos = window.pageYOffset;
// let isScrollingDown = false;

// window.addEventListener('scroll', () => {
//     const currentScrollPos = window.pageYOffset;

//     if (currentScrollPos > prevScrollPos) {
//         isScrollingDown = true;
//     } else {
//         isScrollingDown = false;
//     }

//     if (isScrollingDown) {
//         navbar.classList.add('hide');
//         navbar.classList.remove('show');
//     } else {
//         navbar.classList.add('show');
//         navbar.classList.remove('hide');
//     }
//     prevScrollPos = currentScrollPos;
// });

const txt = "I'm a Software Engineer with 2+ years in Data Science and Web Development. I'm passionate about solving problems and eager to contribute to innovative projects.";
const speed = 10;
let i = 0;

function typeText() {
    if (i < txt.length) {
        document.getElementById('intro-text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

typeText();

const portfolioDiv = document.getElementById('portfolio-div');
const techSkillsDiv = document.getElementById('tech-skills-outer-div');
const projectDiv = document.getElementById('project-div');
const aboutDiv = document.getElementById('about-div');
const mainBody = document.getElementById('main-body');

const ourWork = document.getElementById('our-work');
const involved = document.getElementById('involved');
const about = document.getElementById('about');
const aboutMe = document.getElementById('about-me');

window.addEventListener('scroll', () => {
    checkVisibility(portfolioDiv, ourWork);
    checkVisibility(techSkillsDiv, involved);
    checkVisibility(projectDiv, about);
    checkVisibility(aboutDiv, aboutMe);
});

function checkVisibility(div, element) {
    const rect = div.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    element.style.borderBottom = isVisible ? '2px solid white' : 'none';
}

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        aboutMe.style.borderBottom = "none";
    }
});

const button = document.getElementById('resume-button');
const pdfFile = 'pdf/kritek_2024[1].pdf';

button.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'resume.pdf';
    link.click();
});