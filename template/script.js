  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll(
    '.skills-grid .skill-card, .projects-list .project-card, .exp-list .exp-item, .edu-grid .edu-card'
  ).forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
    el.classList.add('reveal');
    observer.observe(el);
  });

  // =========================
  // PROJECT PREVIEW TOGGLE
  // =========================
  document.querySelectorAll('.preview-toggle').forEach(button => {

    button.addEventListener('click', () => {

      const previewWrapper =
        button.nextElementSibling;

      previewWrapper.classList.toggle('active');

      if (previewWrapper.classList.contains('active')) {
        button.textContent = 'Hide Preview ↑';
      } else {
        button.textContent = 'Preview Project ↓';
      }

    });

  });

  document.querySelectorAll('.project-preview-wrapper').forEach(wrapper => {

  const images = wrapper.querySelectorAll('.preview-image');

  const prevBtn = wrapper.querySelector('.preview-arrow.prev');
  const nextBtn = wrapper.querySelector('.preview-arrow.next');

  let current = 0;

  function showSlide(index) {

    images.forEach(img => {
      img.classList.remove('active');
    });

    images[index].classList.add('active');
  }

  prevBtn.addEventListener('click', function(e) {

    e.preventDefault();
    e.stopPropagation();

    current--;

    if(current < 0) {
      current = images.length - 1;
    }

    showSlide(current);

  });

  nextBtn.addEventListener('click', function(e) {

    e.preventDefault();
    e.stopPropagation();

    current++;

    if(current >= images.length) {
      current = 0;
    }

    showSlide(current);

  });

  showSlide(current);

});
