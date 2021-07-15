const button = document.querySelector('.button-begin')
const hoho = document.querySelector('.inner-button')
const toto = document.querySelector('.container')
const heartIcon = document.querySelector('.heart-icon')
const imageShare = document.querySelector('.share')
const imageHover = document.querySelector('.hover-share')
const bkColor = document.querySelector('.bg-image')
const bars = document.querySelectorAll('.bars')
const bar = document.querySelectorAll('.bar')
const VideoMargot = document.querySelector('.margot-robbie')
const barIcon = document.querySelector('.bar-icon')
const nothoveredButton = document.querySelector('.nothovered')
const hoveredButton = document.querySelector('.hovered-video')

let clipPath = false
let audioPlaying = false
var audio = new Audio('./Assets/ess.mp3');

let ButtonX = 0.1
let ButtonY = 0.1

function cursor(e) {
      
    let myX = ((e.clientX - (toto.getBoundingClientRect().left + button.getBoundingClientRect().width / 2)) / 26).toFixed(5)
    let myY = ((e.clientY - (toto.getBoundingClientRect().top + button.getBoundingClientRect().height / 2)) / 38).toFixed(5)

    // console.log('x: ' + myX + ' ' + 'y: ' + myY );

    toto.style.transform = `translate3d(${myX}px, ${myY}px, 0px)`;

}

button.addEventListener("mousemove", function (e) {
    let myX = ((e.clientX - (button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2)) / 2.5).toFixed(5)
    let myY = ((e.clientY - (button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2)) / 2.5).toFixed(5)

    // console.log('x: ' + myX + ' ' + 'y: ' + myY );

    hoho.style.transform = `translate3d(${myX}px, ${myY}px, 0px)`;

    hoho.style.color = 'black';
    hoho.style.backgroundColor = 'white'
})

button.addEventListener("mouseout", function () {
    hoho.style.transform = 'translate3d(0px, 0px, 0px)'
    hoho.style.color = 'white';
    hoho.style.backgroundColor = 'transparent'
})

heartIcon.addEventListener("mousemove", function (e) {
    let myX = ((e.clientX - (heartIcon.getBoundingClientRect().left + heartIcon.getBoundingClientRect().width / 2)) / 1.6).toFixed(5)
    let myY = ((e.clientY - (heartIcon.getBoundingClientRect().top + heartIcon.getBoundingClientRect().height / 2)) / 1.6).toFixed(5)

    imageShare.style.opacity = "0"
    imageHover.style.opacity = "1"

    imageHover.style.transform = `translate3d(${myX}px, ${myY}px, 0px)`;
    bkColor.style.transform = `translate3d(${myX}px, ${myY}px, 0px)`;
    // imageShare.style.transform = `translate3d(${myX}px, ${myY}px, 0px)`;
})

heartIcon.addEventListener("mouseout", function () {
    imageHover.style.transform = `translate3d(0px, 0px, 0px)`;
    bkColor.style.transform = `translate3d(0px, 0px, 0px)`;
    imageHover.style.opacity = "0"
    imageShare.style.opacity = "1"
    // imageShare.style.transform = `translate3d(0px, 0px, 0px)`;

    bkColor.style.transform = `scale(0)`;
    
})

function playControl() {
    audioPlaying = !audioPlaying
    if (audioPlaying == true) {
        audio.loop = true
        audio.volume = '0.3'
        audio.play();

        for (let index = 0; index < 6; index++) {
            bar[index].style.animationName = 'sound'
        }
    } else if (audioPlaying === false) {
        audio.pause()

        for (let index = 0; index < 6; index++) {
            bar[index].style.animationName = 'soundStop'

        }
    }
}

nothoveredButton.addEventListener("click", function () {
    clipPath = !clipPath
    if (clipPath === true) {
        VideoMargot.style.clipPath = "circle(150% at 0% 110%)"
    } else {
        VideoMargot.style.clipPath = "circle(0px at 0% 110%)"
    }
    
})

nothoveredButton.addEventListener("mousemove", function () {
    nothoveredButton.style.opacity = "0"
    hoveredButton.style.opacity = "1"
})

nothoveredButton.addEventListener("mouseout", function () {
    nothoveredButton.style.opacity = "1"
    hoveredButton.style.opacity = "0"
})

window.addEventListener("mousemove", cursor)

// window.onload = function() {
//     playControl()
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

tl.fromTo(".container", {x: -50, opacity: 0}, {x: 0, opacity: 1})
tl.fromTo(".button-begin", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 3})


