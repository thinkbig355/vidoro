import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]); // Scroll when pathname changes

  return null;
};

export default ScrollToTop;