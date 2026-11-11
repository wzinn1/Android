const navBar = document.getElementById('navBar');
 
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navBar.classList.add("pequena");
      } else {
        navBar.classList.remove("pequena");
      }
    });