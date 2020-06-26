import React from 'react';
import { useSpring, animated } from 'react-spring';

export const SpringButton = () => {
  const spring = useSpring({
    from: {
      transform: `translate(0px)`,
    },
    to: {
      transform: `translate(120px)`,
    },
    config: {
      mass: 6,
    },
  });

  return (
    <div>
      <animated.div style={{ ...spring, display: 'inline-block' }}>
        <h1>BTN</h1>
      </animated.div>
    </div>
  );
};
