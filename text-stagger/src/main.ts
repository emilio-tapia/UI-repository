import './styles/style.scss'
import gsap from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

// or all tools are exported from the "all" file (excluding members-only plugins):
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

const titles:Array<Element> = gsap.utils.toArray('p')
const tl = gsap.timeline({
  repeat: -1,
})



titles.forEach(title => {
  const char = title.querySelectorAll('.char')

  tl.from(char, {
    opacity: 0,
    y: 80,
    rotateX: -90,
    stagger: .05,
  }, "<")
  .to(char, {
    // duration: .5,
    opacity: 1,
    y: -80,
    rotateX: 90,
    stagger: .05,
  }, ">")
})