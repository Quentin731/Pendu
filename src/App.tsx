import React, { useState } from 'react';
import { useRandomWord } from './queries/randomWord';

const App = () => {

  const { data, error, isLoading } = useRandomWord();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <p>Voici le mot à deviner : {data![0].name}</p>
    </div>
  );
}

export default App
