import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const menuIcon = mobileMenuButton?.querySelector('span');

  if (mobileMenuButton && mobileMenuDrawer) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      
      if (!isExpanded) {
        // Open drawer
        mobileMenuDrawer.classList.remove('invisible', 'opacity-0', '-translate-y-full');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
        if (menuIcon) menuIcon.textContent = 'close';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        // Close drawer
        mobileMenuDrawer.classList.add('invisible', 'opacity-0', '-translate-y-full');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.textContent = 'menu';
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Fade-in animation logic
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // 4. Lazy Load Videos logic
  const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        // If it's an iframe (like YouTube), set src from data-src
        if (video.tagName === 'IFRAME') {
          if (video.dataset.src) {
            video.src = video.dataset.src;
            video.removeAttribute('data-src');
          }
        } 
        // If it's a HTML5 video, load sources
        else if (video.tagName === 'VIDEO') {
          const sources = video.querySelectorAll('source');
          sources.forEach(source => {
            if (source.dataset.src) {
              source.src = source.dataset.src;
              source.removeAttribute('data-src');
            }
          });
          video.load();
        }
        video.classList.remove('lazy-video');
        observer.unobserve(video);
      }
    });
  }, { rootMargin: "100px" }); // Load slightly before coming into view

  document.querySelectorAll('.lazy-video').forEach(video => {
    lazyVideoObserver.observe(video);
  });
});
