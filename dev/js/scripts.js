import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin (GSDevTools, DrawSVGPlugin);

const mainTL = gsap.timeline();

mainTL.from("#cup", {duration:.5, alpha:0, scale:1, x:"+=1000"});
mainTL.from("#handle", {duration:.5, alpha:0, scale:1, x:"-=1000"});
mainTL.from("#plate", {duration:.5, alpha:0, scale:3, y:"+=1000"});

function preloader1(){
    const TL= gsap.timeline();

    TL.from("#preloader1", {alpha:0})
    
}

function circle(){
    const TL= gsap.timeline();

    TL.from("#circle", {duration:1.5, drawSVG: "0%"})
    TL.to("#circle", {alpha:0})
}



mainTL.add(circle());











//const mainTL = gsap.timeline();

//mainTL.from(".hero", {duration:2, alpha:0, y:"-=1000", scale:2})
//.from(".hero h1",{duration:3, alpha:0, x:"+=1000"}, "-=2");

//mainTL.from("aside", {duration:.5, alpha:0, scale:5});

//mainTL.from("#visitus", {duration:.5, alpha:0, scale:3, y:"+=1000"}, "-=1");

//mainTL.from("p", {duration:.5, alpha:0, y:"+=100"});

GSDevTools.create();