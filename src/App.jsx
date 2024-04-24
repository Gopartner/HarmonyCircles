import React from 'react';
import CircleElement from './components/CircleElement';

const App = () => {
  const numbers = Array.from({ length: 300 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center">
      {numbers.map((num) => (
        <CircleElement
          key={num}
          number={num}
          color={getRandomColor()}
        />
      ))}
    </div>
  );
};

const getRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-cyan-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default App;

