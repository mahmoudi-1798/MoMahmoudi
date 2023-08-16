const navbar = document.querySelector('.navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) { // Change this value based on when you want the change to happen
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.getElementById('btn').addEventListener('click', function() {
  var menuList = document.getElementById('list');
  var navbar = document.getElementById('navbar');
  menuList.classList.toggle('active');
  navbar.classList.toggle('active');
});