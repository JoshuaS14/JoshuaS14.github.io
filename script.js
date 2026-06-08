document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    // Toggle the 'open' class when clicking the hamburger button
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Matches your CSS (.nav-toggle.open and .nav-links.open)
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Automatically close the menu overlay when a user clicks a section link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Bonus: Automatically updates the copyright year in your footer element
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
