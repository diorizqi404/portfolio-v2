document.addEventListener('DOMContentLoaded', function () {
    let perPage = 3;
    
    if(window.matchMedia("(min-width: 600px)").matches){
        perPage = 6;
    }

    const splide = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: perPage,
        arrows: false,
        pagination: false,
    });

    splide.mount(window.splide.Extensions);

    new window.splide.Extensions.AutoScroll(splide, {
            
    }).mount();
});

// TYPED.JS
document.getElementById('start').addEventListener('click', function(){
    document.getElementById('start').innerText = "✅Already Run"
    document.getElementById('start').setAttribute("disabled", "true");

    var typed = new Typed('#element', {
        strings: ['Hello, my name is Muhammad Dio Rizqi. Just call me Dio or Io...^2000\n I am passionate about programming and cloud computing, which is why I\'m currently studying software engineering at SMK Negeri 2 Surabaya...^1000\n I have practiced creating websites and build cloud architecture using Laravel, JavaScript, Tailwind, nginx, aws. Right now, I\'m expanding my knowledge by learning cloud computing...^1000\n I always strive to improve my skills and keep up with the latest technology...Nice to meet you!'],
        typeSpeed: 15,
        backSpeed: 0,
        loop: false
    });

    
});