/**
 * HRITIK RAJ — PORTFOLIO SCRIPT
 * Functionality: Dark/Light Mode with localStorage, Mobile Drawer Navigation,
 * Active Section Tracking, Interactive 3D Card Tilt, and Smooth Scroll Handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Dark Mode / Light Mode Management with LocalStorage
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
  const themeText = document.getElementById('theme-text');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or default to 'light'
  const savedTheme = localStorage.getItem('hritik_portfolio_theme') || 'light';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      if (themeText) themeText.textContent = 'Light';
      localStorage.setItem('hritik_portfolio_theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      if (themeText) themeText.textContent = 'Dark';
      localStorage.setItem('hritik_portfolio_theme', 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  }

  // -------------------------------------------------------------------------
  // 2. Mobile Menu / Drawer Management
  // -------------------------------------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on click outside
    document.addEventListener('click', (event) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. Active Navigation State Tracking (IntersectionObserver)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // -------------------------------------------------------------------------
  // 4. Subtle Interactive 3D Perspective Tilt on Mousemove
  // -------------------------------------------------------------------------
  const codeScene = document.querySelector('.code-card-scene');
  const codeWindow = document.getElementById('code-window');

  if (codeScene && codeWindow && window.matchMedia('(pointer: fine)').matches) {
    codeScene.addEventListener('mousemove', (e) => {
      const rect = codeScene.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Max tilt angles: subtle and elegant
      const rotY = (x / (rect.width / 2)) * 6;
      const rotX = -(y / (rect.height / 2)) * 6;

      codeWindow.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-4px)`;
    });

    codeScene.addEventListener('mouseleave', () => {
      // Revert back to original perspective with slight default tilt
      codeWindow.style.transform = '';
    });
  }

  // -------------------------------------------------------------------------
  // 5. Smooth Scroll Fallback for Internal Links
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          if (targetId === '#home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }
          const navHeight = document.getElementById('navbar')?.offsetHeight || 76;
          // Align section flush under navbar bottom border (-1px) so previous section background is completely hidden
          const targetPosition = Math.max(0, targetElement.getBoundingClientRect().top + window.pageYOffset - (navHeight - 1));
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 6. Smooth Scroll Reveal for Content Cards & Sections
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.about-card, .skill-card, .project-card, .contact-card');
  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});

