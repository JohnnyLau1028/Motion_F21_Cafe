import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin"; 

gsap.registerPlugin (GSDevTools, DrawSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo);

const mainTL = gsap.timeline();

function cup (){
const TL = gsap.timeline();
gsap.to("#cup", { duration: 2, ease: "power3.out", x: "-800%" });
return TL;
}

mainTL.add(cup);










//const mainTL = gsap.timeline();

//mainTL.from(".hero", {duration:2, alpha:0, y:"-=1000", scale:2})
//.from(".hero h1",{duration:3, alpha:0, x:"+=1000"}, "-=2");

//mainTL.from("aside", {duration:.5, alpha:0, scale:5});

//mainTL.from("#visitus", {duration:.5, alpha:0, scale:3, y:"+=1000"}, "-=1");

//mainTL.from("p", {duration:.5, alpha:0, y:"+=100"});

GSDevTools.create();