
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
// Confirm script is loading
console.log("Deterrent script loaded");

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("Right-click is disabled.");
});

// Disable common developer tool shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U)
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" || 
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    alert("This action is disabled!");
    console.log("Developer tool shortcut disabled.");
  }
});

// Detect if developer tools are open and display an alert
setInterval(() => {
  const start = new Date().getTime();
  debugger; // This will introduce a delay if developer tools are open
  const end = new Date().getTime();
  if (end - start > 100) {
    alert("Developer tools are open!");
    console.log("Developer tools detected.");
  }
}, 500);

// Additional deterrents for advanced debugging techniques
function preventDebuggerTools() {
  // If console is open, try to obscure it
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      alert("Developer tools detected! Please close them.");
      console.log("Developer tools accessed.");
    }
  });
  console.log(element);
}

preventDebuggerTools();
