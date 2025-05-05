document.addEventListener('DOMContentLoaded', () => {
  // Select all clickable elements with data-target
  const navigableElements = document.querySelectorAll('[data-target]');

  // Shared animation function
  function animateAndNavigate(targetPage) {
    document.body.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    document.body.style.transform = 'translateY(100%)';

    setTimeout(() => {
      alert(`Navigating to ${targetPage}`);
      document.body.style.transition = '';
      document.body.style.transform = '';
    }, 1000);
  }

  // Attach click handler to each element
  if (navigableElements.length > 0) {
    navigableElements.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const target = element.getAttribute('data-target');
        animateAndNavigate(target);
      });
    });
  }
});