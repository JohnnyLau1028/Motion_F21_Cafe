import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const mainTL = gsap.timeline();











//const mainTL = gsap.timeline();

//mainTL.from(".hero", {duration:2, alpha:0, y:"-=1000", scale:2})
//.from(".hero h1",{duration:3, alpha:0, x:"+=1000"}, "-=2");

//mainTL.from("aside", {duration:.5, alpha:0, scale:5});

//mainTL.from("#visitus", {duration:.5, alpha:0, scale:3, y:"+=1000"}, "-=1");

//mainTL.from("p", {duration:.5, alpha:0, y:"+=100"});