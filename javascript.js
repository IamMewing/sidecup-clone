var cur =  document.querySelector("#cursor")
var bg =  document.querySelector("#cursor-bg")

document.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px" 
    bg.style.left = dets.x- 250 +"px"
    bg.style.top = dets.y- 250 + "px" 
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cur.style.scale = 3
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cur.style.scale = 1
        cur.style.border = "0px solid #95C11e"
        cur.style.backgroundColor = "#95C11e"
    })
})


gsap.to("#nav",{
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})
gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration: 0.8,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub: 3
    }
})
gsap.from("#quote-left",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#quote-left",
        scroll: "body",
        //markers:true,
        start: "top 50%",
        end: "top 48%",
        scrub: 2
    }
})
gsap.from("#quote-right",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#quote-left",
        scroll: "body",
        //markers:true,
        start: "top 50%",
        end: "top 48%",
        scrub: 2
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
    trigger : "#page4 h1",
    scroller:"body",
    //markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:2
    }
})
