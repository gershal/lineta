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
            targetSection.style.display = 'block';

            // Ensure nav stays visible
            navMenu.style.display = 'flex';
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

/** Contact */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact form');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = document.getElementById('red-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button to prevent multiple submissions
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            try {
                // Show sending state (optional)
                // submitBtn.classList.add('sending');
                
                // First show our success message
                formSuccess.classList.add('show');
                contactForm.style.display = 'none';
                
                // Then proceed with the actual form submission
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                // Optional: Handle the API response
                if (response.ok) {
                    // Success - already showing message
                    console.log('Form submitted successfully');
                } else {
                    // If API fails but we've already shown success, maybe log the error
                    console.error('Form submission failed', await response.text());
                    // Optionally revert back to form and show error
                    // formSuccess.classList.remove('show');
                    // contactForm.style.display = 'block';
                    // submitBtn.disabled = false;
                    // submitBtn.textContent = 'Submit Form';
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                // In case of network error, you might want to:
                // formSuccess.classList.remove('show');
                // contactForm.style.display = 'block';
                // submitBtn.disabled = false;
                // submitBtn.textContent = 'Submit Form';
                // Then show an error message to the user
            }
        });
    }
    
    // Optional: Add floating label functionality if not using the HTML I provided earlier
    const formInputs = document.querySelectorAll('.contact input, .contact textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.classList.add('active');
            }
        });
        
        input.addEventListener('blur', function() {
            const label = this.nextElementSibling;
            if (label && label.tagName === 'LABEL' && !this.value) {
                label.classList.remove('active');
            }
        });
        
        // Initialize labels based on existing values
        if (input.value) {
            const label = input.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.classList.add('active');
            }
        }
    });
});
