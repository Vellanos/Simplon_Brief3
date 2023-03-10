// sélectionnez votre élément d'en-tête
const header = document.querySelector('header');
let links = document.querySelectorAll(".header-a");

// détectez le défilement de la page
window.addEventListener('scroll', () => {
  // si la position de défilement est supérieure à la hauteur de l'en-tête
  if (window.scrollY > header.offsetHeight) {
    // ajoutez la classe scrolled à l'en-tête
    header.classList.add('scrolled');
    for (let i = 0; i < links.length; i++){
      links[i].classList.add('scrolled');
    }
    
  } else {
    // sinon, retirez la classe scrolled de l'en-tête
    header.classList.remove('scrolled');
    for (let i = 0; i < links.length; i++){
      links[i].classList.remove('scrolled');
    }
  }
});
