import React, { useContext, useRef } from 'react';
import Context from '../contexts/context';

const Snake = props => {
  const prevLastPos = useRef();
  const {snake} = useContext(Context);
  prevLastPos.current = snake[snake.length - 1]
  return (
    <div className='snakeHead'></div>
  );
};

export default Snake;