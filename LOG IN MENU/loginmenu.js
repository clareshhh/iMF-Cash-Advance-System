// loginmenu.js

document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordLink = document.querySelector('.text');
  
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', () => {
        // Simulate navigation with spring animation
        document.body.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.transform = 'translateY(100%)';
  
        setTimeout(() => {
          alert("Navigating to SIGN IN MENU");
          // Replace this with real routing/navigation logic if needed
        }, 1000);
      });
    }
  });