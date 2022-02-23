import React, { useContext, useState } from 'react';
import Context from '../contexts/context';

const Food = props => {
  const [position, setPosition] = useState(0)
  const snakeFood = useContext(Context);
  if (props.foodPos === props.snakePos) {
   // snakeFood.setSnake([...snakeFood.snake, props.foodPos])
   // snakeFood.setfoodRange(Math.random())
   
  }
  return (
    <div className='food'></div>
  );
};

export default Food;