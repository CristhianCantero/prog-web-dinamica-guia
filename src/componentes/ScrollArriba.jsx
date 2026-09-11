// Este componente lo que hace es que cuando se cambia de ruta, 
// la página se desplace automáticamente hacia arriba. 
// Debido al comportamiento de React, usualmente toma la posición actual de la pantalla.
// Esto es útil para mejorar la experiencia del usuario al navegar por diferentes páginas de la aplicación.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollArriba() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollArriba;
