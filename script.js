var typed = new Typed(".auto",{
    strings:["Frontend Developer","Designer","Programmer"],
    typespeed:100,
    backspeed:100,
    backDelay:1500,
    loop:true
})
let cv = document.getElementById("cv");
cv.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Sorry ! CV is currently unavailable")
})
let submitButton = document.querySelector(".submit")
let input = document.querySelector("input")
submitButton.addEventListener("click",()=>{
        if(input.value !="")
        {
            submitButton.innerHTML = `<i class="fa-solid fa-check"></i>`
        }
})
// toogle navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
// scroll section section 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });
    // sticky navbar 
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);
    // remove toggle ion and navbar 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}
// scroll reveal
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading ', {origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1 , .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content', {origin:'right'});
