import gsap from "gsap";

export function scrollGet(e, element) {
  e.preventDefault();
  const targetElement = document.getElementById(element);
  console.log(targetElement)
  if (targetElement) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: `#${element}`,
      ease: "power3.out",
    })
  } else {
    window.location.href = `/?scrollTo=${element}`;
  }
};
