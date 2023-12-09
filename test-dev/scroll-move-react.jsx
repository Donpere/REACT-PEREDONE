import { useState, useEffect } from 'react';

function ScrollBlock() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Nettoyer l'écouteur d'événements lors du démontage du composant
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'green',
        position: 'absolute',
        top: `${scrollPosition}px`,
        transition: 'top 0.3s ease-out', // Ajouter une transition pour un mouvement en douceur
      }}
    >
      {/* Contenu du bloc */}
    </div>
  );
}

export default ScrollBlock;
