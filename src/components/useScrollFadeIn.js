import { useEffect } from 'react';

const useScrollFadeIn = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);
};

export default useScrollFadeIn;
