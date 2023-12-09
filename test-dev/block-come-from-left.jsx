import { useState, useEffect } from 'react';

const BlockComeFromLeft = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Réglez la position de défilement à partir de laquelle le bloc doit apparaître
      const scrollThreshold = 600;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'green',
        position: 'fixed', // Changé de 'absolute' à 'fixed'
        left: isVisible ? '0' : '-100px',
        top: '0',
        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Utilisez cubic-bezier pour ease-in-out
      }}
    >
      {/* Contenu du bloc */}
    </div>
  );
};

export default BlockComeFromLeft;
