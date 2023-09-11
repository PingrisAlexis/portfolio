import React, { useState, useEffect } from 'react'
import styles  from './ScrollToTop.module.scss'
import top from '../../assets/top.svg'

const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY  > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
    <img src={top} className={styles.scroll_to_top_button} onClick={scrollToTop}/>
    )
  );
};

export default ScrollToTop