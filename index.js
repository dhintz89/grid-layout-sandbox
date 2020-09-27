// Wrap every letter in its own span
const textWrapper = document.querySelectorAll('.letters');
textWrapper.forEach((line, i) => {
    let length = line.textContent.length;
    line.innerHTML = line.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
});

function animate(thing) {
    anime.timeline({loop: false})
    // Daniel String
    .add({
        targets: '.cursor',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "linear",
        duration: 150,
        delay: 750
    }).add({
        targets: '.cursor',
        translateX: [0, document.querySelector('.daniel').getBoundingClientRect().width + 6],
        easing: "linear",
        duration: 750,
        delay: 200
    }).add({
        targets: '.daniel .letter',
        opacity: 1,
        easing: 'linear',
        duration: 1,
        offset: '-=900',
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.cursor',
        // scaleX: [1,0],
        opacity: [1,0],
        easing: "linear",
        duration: 1,
        delay: 100
    })
    // Hintz String
    .add({
        targets: '.cursor',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "linear",
        duration: 150,
        delay: 750
    }).add({
        targets: '.cursor',
        translateX: [0, document.querySelector('.hintz').getBoundingClientRect().width + 5.6],
        easing: "linear",
        duration: 600,
        delay: 200
    }).add({
        targets: '.hintz .letter',
        opacity: [0,1],
        easing: 'linear',
        duration: 1,
        offset: '-=750',
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.cursor',
        // scaleX: [1,0],
        opacity: [1,0],
        easing: "linear",
        duration: 1,
        delay: 100
    })
    // Designs String
    .add({
        targets: '.cursor',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "linear",
        duration: 150,
        delay: 750
    }).add({
        targets: '.cursor',
        translateX: [0, document.querySelector('.designs').getBoundingClientRect().width + 5.6],
        easing: "linear",
        duration: 900,
        delay: 200
    }).add({
        targets: '.designs .letter',
        opacity: [0,1],
        easing: 'linear',
        duration: 1,
        offset: '-=1050',
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.cursor',
        // scaleX: [1,0],
        opacity: [1,0],
        easing: "linear",
        duration: 1,
        delay: 100,
    })
    // cursor blinking effect
    .add({
        targets: '.cursor',
        opacity: 1,
        loop: 7,
        easing: "linear",
        duration: 150,
        delay: 350,
        direction: "alternate",
    })
};


// anime.timeline({loop: false}).add({
//     targets: '.cursor',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "linear",
//     duration: 150,
//     delay: function(el, i, l) {
//         return i * 750;
//     },
//     endDelay: function(el, i, l) {
//         return (l - i) * 100;
//     }
// })


animate(document.querySelector('.letters'));


    // anime({
    //     targets: '.cursor',
    //     opacity: 1,
    //     loop: 7,
    //     easing: "linear",
    //     duration: 150,
    //     delay: 350,
    //     direction: "alternate",
    // });