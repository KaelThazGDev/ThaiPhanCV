document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Theme Toggle Functionality
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }

  // Toggle theme handler
  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });

  // ==========================================================================
  // Language Toggle (EN / VN) - stores selection but does not translate content
  // ==========================================================================
  const langEnBtn = document.getElementById('lang-en');
  const langVnBtn = document.getElementById('lang-vn');

  const setActiveLang = (lang) => {
    if (!langEnBtn || !langVnBtn) return;
    if (lang === 'vn') {
      langEnBtn.classList.remove('active');
      langEnBtn.setAttribute('aria-pressed', 'false');
      langVnBtn.classList.add('active');
      langVnBtn.setAttribute('aria-pressed', 'true');
    } else {
      langVnBtn.classList.remove('active');
      langVnBtn.setAttribute('aria-pressed', 'false');
      langEnBtn.classList.add('active');
      langEnBtn.setAttribute('aria-pressed', 'true');
    }
    localStorage.setItem('lang', lang);
  };

  // Initialize language from localStorage (default EN)
  const savedLang = localStorage.getItem('lang') || 'en';
  setActiveLang(savedLang);

  if (langEnBtn) langEnBtn.addEventListener('click', () => setActiveLang('en'));
  if (langVnBtn) langVnBtn.addEventListener('click', () => setActiveLang('vn'));

  // ==========================================================================
  // Entrance Animations (Intersection Observer)
  // ==========================================================================
  const timelineNodes = document.querySelectorAll('.timeline-node');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const nodeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add class to trigger animation
        entry.target.classList.add('active');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to all timeline nodes
  // On large desktop, add a staggered transition when first visible
  const isDesktop = window.innerWidth > 1024;
  
  if (isDesktop) {
    // If desktop, apply delay to make horizontal entrance look elegant
    timelineNodes.forEach((node, index) => {
      // Set inline animation delay
      node.style.animationDelay = `${index * 150}ms`;
      nodeObserver.observe(node);
    });
  } else {
    // On mobile, trigger as they scroll in
    timelineNodes.forEach(node => {
      nodeObserver.observe(node);
    });
  }

  // Dynamic axis fill animation on mobile scroll
  const handleMobileScroll = () => {
    if (window.innerWidth <= 1024) {
      const container = document.querySelector('.timeline-container');
      const progress = document.querySelector('.timeline-progress');
      if (!container || !progress) return;
      
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline container has been scrolled through
      const totalHeight = containerRect.height;
      const scrolledPast = Math.max(0, -containerRect.top + (windowHeight / 2));
      
      const percent = Math.min(100, Math.max(0, (scrolledPast / totalHeight) * 100));
      progress.style.height = `${percent}%`;
    } else {
      // Reset progress width for desktop
      const progress = document.querySelector('.timeline-progress');
      if (progress) {
        progress.style.height = '100%';
      }
    }
  };

  // Attach scroll handler for vertical timeline progression
  window.addEventListener('scroll', handleMobileScroll);
  window.addEventListener('resize', () => {
    handleMobileScroll();
  });
  
  // Run once to initialize
  handleMobileScroll();
});
