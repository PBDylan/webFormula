const images = document.querySelectorAll(".carousel-container img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let index = 0;

function showImage(newIndex) {
  
  images.forEach((img) => {
    img.classList.remove("active");
  });

  
  images[newIndex].classList.add("active");

  
  const teamSections = document.querySelectorAll(".teams section");
  teamSections.forEach((section) => {
    section.style.display = "none";
  });


  const activeImageAlt = images[newIndex].alt; 
  const activeTeamSection = document.getElementById(activeImageAlt);  
  
  if (activeTeamSection) {
    activeTeamSection.style.display = "block"; 
  }

  index = newIndex;
}

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    let newIndex = (index - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  nextButton.addEventListener("click", () => {
    let newIndex = (index + 1) % images.length;
    showImage(newIndex);
  });
}


showImage(index);
