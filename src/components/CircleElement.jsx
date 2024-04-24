import React from 'react';

const CircleElement = ({ number, color }) => {
  const handleClick = () => {
    const sound = new Audio(`/${getSound(number)}.mp3`);
    sound.currentTime = 0;
    sound.play();
  };

  const getSound = (number) => {
    switch (number) {
      case 1:
        return 'do';
      case 2:
        return 're';
      case 3:
        return 'mi';
      case 4:
        return 'fa';
      case 5:
        return 'sol';
      case 6:
        return 'la';
      case 7:
        return 'si';
      case 8:
        return 'high-do';
      default:
        return 'do';
    }
  };

  return (
    <div
      className={`w-12 h-12 md:w-16 md:h-16 text-4xl lg:w-20 lg:h-20 flex items-center justify-center rounded-full cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:scale-110 ${color}`}
      style={{ margin: '5px' }}
      onClick={handleClick}
    >
      <span className="text-white text-xl">{number}</span>
    </div>
  );
};

export default CircleElement;

