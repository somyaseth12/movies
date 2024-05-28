import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div>
      {state}
    </div>
  );
};

export default MyComponent;
