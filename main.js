gsap.from(".hero span", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".star-shape", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "elastic.out(1, 0.5)"
  });