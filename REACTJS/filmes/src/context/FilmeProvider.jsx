import React, { useState } from 'react';
import { FilmeContext } from './FilmeContext'; 

export const FilmeProvider = ({ children }) => {
  const [filmes, setFilmes] = useState([]); 

  return (
    <FilmeContext.Provider value={{ filmes, setFilmes }}>
      {children}
    </FilmeContext.Provider>
  );
};
