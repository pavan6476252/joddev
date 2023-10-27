import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
 
    window.addEventListener('beforeunload', startLoading);
    window.addEventListener('load', stopLoading);

    return () => {
      window.removeEventListener('beforeunload', startLoading);
      window.removeEventListener('load', stopLoading);
    };
  }, []);

  return (
    <div className={`absolute z-50 top-0 left-0 w-full progress-bar ${loading ? 'visible' : 'hidden'}`}>
      <div
        className="animate-pulse h-1 bg-red-600"
        style={{ width: loading ? '100%' : '0' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
