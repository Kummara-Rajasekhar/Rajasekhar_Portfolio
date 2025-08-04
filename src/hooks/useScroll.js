import { useState, useEffect, useCallback } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);

    // Calculate scroll progress
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (currentScrollY / docHeight) * 100;
    setScrollProgress(scrollPercent);

    // Detect if user is actively scrolling
    setIsScrolling(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }
    };
  }, [handleScroll]);

  const scrollTo = useCallback((target, offset = 0) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, []);

  const isElementInView = useCallback((element, threshold = 0.1) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    return (
      rect.top <= windowHeight * (1 - threshold) &&
      rect.bottom >= windowHeight * threshold
    );
  }, []);

  return {
    scrollY,
    scrollProgress,
    isScrolling,
    scrollTo,
    scrollToTop,
    scrollToBottom,
    isElementInView
  };
};

export default useScroll; 