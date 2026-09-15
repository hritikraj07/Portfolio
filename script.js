/**
 * HRITIK RAJ — PORTFOLIO SCRIPTS
 * Includes:
 * - Dynamic Typewriter Backspace & Retype Text Effect
 * - Direct Section Header Scroll Alignment (Zero top blank space)
 * - Mobile Navigation Modal Drawer
 * - Scrollspy Active Link Highlighting
 * - Scroll-Triggered Animated Skill Progress Bars Fill
 * - Back to Top Button
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Dynamic Typewriter / Backspacing Text Effect
  // -------------------------------------------------------------------------
  const typewriterElement = document.getElementById('typewriter-text');

  if (typewriterElement) {
    const phrases = [
      'B.Tech CSE (AI/ML) Student',
      'Frontend Web Developer',
      'Python Programmer',
      'Creative Tech Builder'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length; // start with first phrase already shown or ready
    let isDeleting = false;
    const typeSpeed = 80;      // Typing speed in ms
    const deleteSpeed = 38;    // Backspacing speed in ms
    const pauseEnd = 2000;     // Pause when full phrase is typed
    const pauseStart = 350;    // Pause before typing next phrase

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        // Backspace / cut letters
        charIndex--;
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeLoop, pauseStart);
          return;
        }
        setTimeout(typeLoop, deleteSpeed);
      } else {
        // Type letters
        charIndex++;
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeLoop, pauseEnd);
          return;
        }
        setTimeout(typeLoop, typeSpeed);
      }
    }

    // Initial pause before first backspacing cycle
    setTimeout(() => {
      isDeleting = true;
      typeLoop();
    }, 1800);
  }

  // -------------------------------------------------------------------------
  // 2. Direct Smooth Scrolling to Section Header (Zero Top Empty Void)
  // -------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Target the section header directly if it exists, or the section top
        const headerElement = targetElement.querySelector('.section-header') || targetElement;
        const navbarHeight = 82; // Height of floating navbar + safe clearance
        const targetTop = headerElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. Mobile Modal Sheet Drawer Navigation
  // -------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const mobileModal = document.getElementById('mobile-modal');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileMenu() {
    if (!mobileModal) return;
    mobileModal.classList.add('open');
    mobileModal.setAttribute('aria-hidden', 'false');
    if (mobileToggleBtn) mobileToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileModal) return;
    mobileModal.classList.remove('open');
    mobileModal.setAttribute('aria-hidden', 'true');
    if (mobileToggleBtn) mobileToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileModal && mobileModal.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // -------------------------------------------------------------------------
  // 4. Active Nav Link Tracking (Scrollspy)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-pill .nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // -------------------------------------------------------------------------
  // 5. Scroll-Triggered Animated Skill Progress Bars
  // -------------------------------------------------------------------------
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  let skillsAnimated = false;

  function fillSkillBars() {
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      if (progress) {
        bar.style.width = progress;
      }
    });
  }

  const aboutSection = document.querySelector('.about-section');
  if (aboutSection && 'IntersectionObserver' in window) {
    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
          skillsAnimated = true;
          fillSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(aboutSection);
  } else {
    fillSkillBars();
  }

  // -------------------------------------------------------------------------
  // 6. Back to Top Button
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
