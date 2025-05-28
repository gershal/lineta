document.addEventListener('DOMContentLoaded', function(){
    const navMenu = document.querySelector('.nav-menu');
    const blueSection = document.getElementById('blue');
    const yellowSection = document.getElementById('about');
    const navBar = document.getElementById('nav-bar');
    const navLinks = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('section');
    const blueBtn = document.getElementById('blue-btn');

    // 1. Clicking Blue reveals Yellow and Nav-bar
    blueBtn.addEventListener('click', function() {
        blueSection.classList.add('active');
        navBar.classList.add('active');
        yellowSection.classList.remove('active');
    });
    
    // 2. Nav links smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections except the target
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected section
            targetSection.style.display = 'flex';

            // Ensure nav stays visible
            navMenu.style.display = 'block';
        });
    });
});

/* Opens the Detail*/
document.addEventListener('mouseover', (event) => {
  const details = event.target.closest('.details');
  if (details) {
    details.open = true;
    content.style.maxHeight = `${content.scrollHeight}px`; // Set to actual content height
  }
});

document.addEventListener('mouseout', (event) => {
  const details = event.target.closest('.details');
  if (details) {
    details.open = false;
    content.style.maxHeight = '0';
  }
});
