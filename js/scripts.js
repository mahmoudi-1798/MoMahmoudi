const navbar = document.querySelector('.navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) { // Change this value based on when you want the change to happen
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});