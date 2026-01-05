// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll animations
const sections = document.querySelectorAll('.section');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (currentScroll > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Project frames hover effect
const projectFrames = document.querySelectorAll('.project-frame');
projectFrames.forEach(frame => {
  frame.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) rotateX(2deg)';
  });
  frame.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotateX(0)';
  });
});

// Skill frames click effect
const skillFrames = document.querySelectorAll('.skill-frame');
skillFrames.forEach(skill => {
  skill.addEventListener('click', function() {
    this.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
      this.style.animation = '';
    }, 500);
  });
});
