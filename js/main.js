
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
      });
    });
  });


//TAAC Management
// Get elements
const taacmanagModal = document.getElementById("taacmanagModal");
const taacmanagViewMoreBtn = document.getElementById("taacmanagViewMoreBtn");
const taacmanagCloseModal = document.getElementById("taacmanagCloseModal");

// Open modal
taacmanagViewMoreBtn.addEventListener("click", function () {
  taacmanagModal.style.display = "flex";
});

// Close modal when close button is clicked
taacmanagCloseModal.addEventListener("click", function () {
  taacmanagModal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  if (e.target == taacmanagModal) {
    taacmanagModal.style.display = "none";
  }
});


