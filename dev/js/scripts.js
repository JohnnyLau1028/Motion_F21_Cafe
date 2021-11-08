import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin (GSDevTools, DrawSVGPlugin);

const mainTL = gsap.timeline();

function cup(){
    const tl= gsap.timeline();

    tl.from("#cup", {duration:.5, alpha:0, scale:1, x:"+=1000"});
    tl.from("#handle", {duration:.5, alpha:0, scale:1, x:"-=1000"});
    tl.from("#plate", {duration:.5, alpha:0, scale:3, y:"+=1000"});

    return tl;
}

function circle(){
    const tl= gsap.timeline();

    tl.from("#circle", {duration:1.5, drawSVG: "0%"})
    tl.to("#circle", {alpha:0})

    return tl;
}

function halfmoon(){
    const tl= gsap.timeline();

    tl.from("#halfmoon", {alpha:0})
    tl.to("#halfmoon", {alpha:1})

    return tl;
}

function progress1(){
    const tl= gsap.timeline();

    tl.from("#progress1", {duration:2, scaleY:0})

    return tl;
}

function progress3(){
    const tl= gsap.timeline();

    tl.from("#progress3", {duration:2, scaleY:0})

    return tl;
}

function progress2(){
    const tl= gsap.timeline();

    tl.from("#progress2", {duration:2, scaleY:5})
    tl.from("#ellipse", {scale:.1, y:"100"})

    return tl;
}

mainTL.add(cup())
        .add(circle())
        .add(halfmoon())
        .add(progress1())
        .add(progress3())
        .add(progress2());









GSDevTools.create();

//const mainTL = gsap.timeline();

//mainTL.from(".hero", {duration:2, alpha:0, y:"-=1000", scale:2})
//.from(".hero h1",{duration:3, alpha:0, x:"+=1000"}, "-=2");

//mainTL.from("aside", {duration:.5, alpha:0, scale:5});

//mainTL.from("#visitus", {duration:.5, alpha:0, scale:3, y:"+=1000"}, "-=1");

//mainTL.from("p", {duration:.5, alpha:0, y:"+=100"});
