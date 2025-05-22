import gsap from "gsap";

let tl = gsap.timeline()

export function openMenu() {
  const menu = document.querySelector("#menu");
  const menuWidth = menu.offsetWidth;

  if (tl) {
    tl = gsap.timeline()
    tl.to("#menu", {
      x:-menuWidth,
      ease: 'easeInOut',
      duration: 0.5
    }
    )
  } else {
    tl.play()
  }
}

  export function closeMenu() {
    tl.reverse()
  }

