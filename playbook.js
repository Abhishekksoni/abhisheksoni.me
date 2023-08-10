let btn = document.querySelector("#playbook")

btn.addEventListener("click" ,() => {
    animate()
})


function animate(){

var tl = gsap.timeline();
tl
.to("#loader" , {
    height:"100%",
    top:0,
    duration:1,
    ease: Circ.easeInOut,
})
.to("#loader" , {
    height:"0%",
    duration:2,
    ease: Circ.easeInOut,

})
}
