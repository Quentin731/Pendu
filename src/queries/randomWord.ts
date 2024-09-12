import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface RandomWordProps {
    name: string;
    categorie: string;
}
  
const fetchRandomWord = async (): Promise<RandomWordProps[]> => {
    const response = await fetch('https://trouve-mot.fr/api/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const useRandomWord = () => {
    return useQuery<RandomWordProps[], Error>({
      queryKey: ['randomWord'], // Clé de requête
      queryFn: fetchRandomWord, // Fonction de récupération
      refetchOnWindowFocus: false 
    });
  };
