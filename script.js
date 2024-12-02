
window.addEventListener("scroll", () => {
  const indexHome = document.querySelector(".index-home");
  const projects = document.querySelector(".projects-grid");
  const scrollThreshold = 500; 

  const projectsTop = projects.getBoundingClientRect().top + window.scrollY;


  const scrollY = Math.min(window.scrollY, scrollThreshold);
  const opacity = 1 - scrollY / scrollThreshold;

 
  if (window.scrollY < projectsTop - scrollThreshold) {
    indexHome.style.opacity = opacity;
  } else {
    indexHome.style.opacity = 0;
  }
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  });


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }