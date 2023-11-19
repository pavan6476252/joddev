import React from 'react';

const PlaceholderCard: React.FC = () => {
  const cardStyles =
    'rounded-md bg-gray-800 hover:scale-105 transform transition-transform p-4';
  const placeholderStyles = 'h-52 w-full rounded-md bg-gray-700 animate-pulse';

  return (
    <div className={cardStyles}>
      <div className={placeholderStyles}></div>

      <div className="flex justify-between my-2">
        <div className="flex gap-2 items-center">
          <div className="h-6 w-12 bg-gray-700 animate-pulse"></div>
          <div className="h-6 w-6 bg-gray-700 animate-pulse"></div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="h-6 w-6 bg-gray-700 animate-pulse"></div>
          <div className="h-6 w-6 bg-gray-700 animate-pulse"></div>
        </div>
      </div>

      <div className="h-4 bg-gray-700 animate-pulse mb-2"></div>
      <div className="h-8 bg-gray-700 animate-pulse"></div>
      <div className="h-12 bg-gray-700 animate-pulse my-2"></div>

      <div className="border-2 rounded-md border-gray-700 mt-3 p-3 text-center animate-pulse">
        <div className="h-6 w-full bg-gray-700 animate-pulse"></div>
      </div>
    </div>
  );
};

export default PlaceholderCard;
