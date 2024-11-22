// GSAP Library Animations
gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  
  gsap.from(".hero h2", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
  
  gsap.from(".hero p", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.5,
    ease: "power2.out",
  });
  
  gsap.from(".hero button", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay: 1,
    ease: "elastic.out(1, 0.3)",
  });
  
  gsap.from(".about", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
  });
  
  gsap.from(".services", {
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -50,
    duration: 1.2,
  });
  
  gsap.from(".contact", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 50,
    duration: 1.2,
  });
  
// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('header nav ul');

// Toggle menu visibility on burger click
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
