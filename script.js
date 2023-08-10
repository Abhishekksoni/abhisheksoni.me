

  
function valueSetters() {
    gsap.set("#nav a" ,
     { y: "-100%" , 
     opacity: 0
    });
    gsap.set("#home span .child" , { 
        y :"100%"
    });

    document.querySelectorAll("#Visual>g").forEach( function (e){
        var character = e.childNodes[0].childNodes[0];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    }) 
}

function revealToSpan() {
    document.querySelectorAll(".reveal")
    .forEach(function(elem) {
        var parent = document.createElement("span"); 
        var child = document.createElement("span"); 

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML =  elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = " ";
        elem.appendChild(parent);
    });
}

function loaderAnimation() {
    var tl = gsap.timeline();

tl
.from("#loader .child span" , {
    x:"100px " ,
    delay:1 , 
    opacity:0,
    stagger: .2,
    duration:1.4 ,
    ease: Power3.easeInOut
})
.to("#loader .parent .child" , {
    y:"-100%",
    opacity:1,
    duration:1,
    ease: Circ.easeInOut,

})
.to("#loader" , {
    height:0,
    duration:1,
    ease: Circ.easeInOut,

})
.to("#green" , {
    height:"100%",
    top:0,
    duration:1,
    delay:-1 ,
    ease: Circ.easeInOut,
})
.to("#green" , {
    height:"0%",
    duration:1,
    delay:-.8,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})

}

function animateHomepage() {
  

    var tl = gsap.timeline();

    
    tl.to("#home .parent .child" , {
        y:0 ,
        stagger: .1,
        duration:.5,
        ease: Expo.easeInOut,
        onComplete : function() {
            animateSvg();
        }
    })
    tl.to("#nav a" , {
        y:0 ,
        opacity:1, 
        stagger: .05,
        ease: Expo.easeInOut
    })
}

function animateSvg() {

    gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
        strokeDashoffset: 0 , 

        duration:2,
        ease: Expo.easeInOut,
    })
}

function loco() {

const scroll = new LocomotiveScroll({
    el: document.querySelector('#locom'),
    smooth: true
});
}

function hoverEffect() {
    let showImg = document.querySelector("#bg")
    let cont = document.querySelector(".cont");

    cont.addEventListener("mousemove", () => {
        showImg.style.filter = "grayscale(1)"
        document.querySelector("#work").style.backgroundColor = "#0a0a0a"
        
        document.querySelector("#cc").style.color = "#fff8f8"
    })
    cont.addEventListener("mouseleave" , () => {
        document.querySelector("#work").style.backgroundColor = "#F2F2F2"
        document.querySelector("#cc").style.color = "#0a0a0a"
    })
}
function hoverEffect2() {
    let cont2 = document.querySelector(".cont2");
    cont2.addEventListener("mousemove" , () => {
        document.querySelector("#work").style.backgroundColor = "#C8C0B7"   

    })

    cont2.addEventListener("mouseleave" , () => {
        document.querySelector("#work").style.backgroundColor = "#F2F2F2"  

    })
}
function hoverEffect3() {
    let cont3 = document.querySelector(".cont3");
    let gradientValue = "linear-gradient(90deg, rgba(7,7,11,0.9430365896358543) 26%, rgba(161,42,42,0.8954175420168067) 51%, rgba(22,180,208,0.9430365896358543) 78%)";

    cont3.addEventListener("mousemove" , () => {
        document.querySelector("#work").style.background = gradientValue
        document.querySelector("#work2").style.background = gradientValue
        document.querySelector("#work2").style.opacity = "1"
        document.querySelector("#cc").style.color = "#fff8f8"
    })

    cont3.addEventListener("mouseleave" , () => {
        document.querySelector("#work").style.background = "#F2F2F2"
        document.querySelector("#work2").style.background = "#F2F2F2"
        document.querySelector("#work2").style.background = "0"
        document.querySelector("#cc").style.color = "#0a0a0a"


    })
}

const dropdownTrigger = document.querySelector(".social");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownTrigger.addEventListener("mouseenter", () => {
    dropdownContent.style.visibility = "visible";
});

dropdownTrigger.addEventListener("mouseleave", () => {
    // Add a small delay to give time to reach the dropdown content with the mouse
    setTimeout(() => {
        // Check if the mouse is not over the dropdown content
        if (!dropdownContent.matches(":hover")) {
            dropdownContent.style.visibility = "hidden";
        }
    }, 400); // Adjust the delay as needed (milliseconds)
});

dropdownContent.addEventListener("mouseleave", () => {
    dropdownContent.style.visibility = "hidden";
});



const btnEl = document.querySelector(".btn")


btnEl.addEventListener("mouseover" , (event)=> {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos" ,x + "px");
    btnEl.style.setProperty("--yPos" ,y + "px");
});
const btn2El = document.querySelector(".btn2")


btn2El.addEventListener("mouseover" , (event)=> {
    const x = event.pageX - btn2El.offsetLeft;
    const y = event.pageY - btn2El.offsetTop;

    btn2El.style.setProperty("--xPos" ,x + "px");
    btn2El.style.setProperty("--yPos" ,y + "px");
});



// JavaScript to handle the click event
document.addEventListener("DOMContentLoaded", () => {
    const imgConts = document.querySelectorAll(".imgcont");
    
    imgConts.forEach((imgCont, index) => {
        imgCont.addEventListener("click", () => {
            // Increase the clicked image's z-index to bring it to the front
            imgCont.style.zIndex = imgConts.length;
            
            // Decrease the z-index of other images to push them back
            imgConts.forEach((otherImgCont, otherIndex) => {
                if (otherIndex !== index) {
                    otherImgCont.style.zIndex = 0;
                }
            
            });
        });
    });
});



gsap.registerPlugin(ScrollTrigger);

function animateReveal() {
    gsap.fromTo(".reveal-img", {
        opacity: 0, // Start with 0 opacity
        y: 50, // Start slightly below the viewport
    }, {
        scrollTrigger: {
            trigger: '#cc', // Trigger at #cc div
            start: 'top 30%', // Adjust this value as needed
            // markers:true,
            toggleActions: 'play none none reverse', // Play animation when entering viewport
        },
        opacity: 1, // Fade in to full opacity
        y: -50, // Move to original position
        stagger: 0.3,
        duration: 1,
    });
}

function animateFot(){
    gsap.fromTo(".reveal-bg", {
        opacity:0,
       
    },{
        scrollTrigger:{
            trigger:'.cont2',
            start:'top 10%',
            toggleActions: 'play none none reverse'
        },
        opacity:1,
        
        duration:1
    })
}


function checkScreenWidth() {
    if (window.innerWidth <= 600) { // Adjust the screen width threshold as needed
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#locom'),
            smooth: true
            // Add other options as needed for small screens
        });

        animateReveal();
        animateFot();
    }
}



checkScreenWidth();






revealToSpan();
valueSetters();
loaderAnimation();

loco();
hoverEffect();
hoverEffect2();
hoverEffect3();
