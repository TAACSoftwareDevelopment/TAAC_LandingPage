
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


//TAAC_Gallery
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.transform = `scale(1.05) rotate3d(1, 1, 1, 10deg) translate(${x / 10}px, ${y / 10}px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1) rotate(0deg) translate(0, 0)';
  });
});

//TAAC Gallery Carousel
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


/* Disabling Dev Tools */
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.taaccl_lib_panel');
  let currentPanel = 0;

  function showPanel(index) {
    panels.forEach((panel, i) => {
      panel.classList.remove('active');
      if (i === index) {
        panel.classList.add('active');
      }
    });
  }

  panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
      currentPanel = (currentPanel + 1) % panels.length;
      showPanel(currentPanel);
    });
  });

  showPanel(currentPanel); // Initialize the first panel as active
});
