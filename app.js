console.log("Hi How are ")

const container = document.querySelector('.container');
const card = document.querySelector('.card');

// Items

const title = document.querySelector('.title');
const sneaker = document.querySelector('.snicker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.size');

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none'
        // Popout
    title.style.transform = "translateZ(120px)"
    sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)"
    description.style.transform = "translateZ(110px)"
    sizes.style.transform = "translateZ(100px)"
    purchase.style.transform = "translateZ(80px)"



})

container.addEventListener("mousemove", (e) => {


    let xAxis = (window.innerWidth / 2 - e.pageX) / 13;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 13;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

})


container.addEventListener("mouseleave", (e) => {

    title.style.transform = "translateZ(0)"

    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    card.style.transition = 'all 0.8s ease'
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    description.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px  )"

})