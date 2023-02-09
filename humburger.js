const navicon = document.querySelector('.nav-icon');
const navmenu = document.querySelector('.nav-menu');
 
navicon.addEventListener('click', () => {
  navicon.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach (n => n.addEventListener('click', () => {
  navicon.classList.remove('active');
  navmenu.classList.remove('active');
}));