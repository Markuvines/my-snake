import React, { useContext, useEffect, useRef } from 'react';
import Snake from './Snake';
//import Cntext from '../App';
import Context from '../contexts/context';
import Food from './Food';

const FieldItem = props => {
  // let counter = useRef(0);
  //counter.current = 0;
  // const renderCounts = useEffect(() => {
  //   // console.log('Ренедер FieldItem '+ props.number + counter.current + 'раз')
  //   ++counter.current
  //   console.log(`Ренедер FieldItem ${props.number} ${counter.current} раз`)
  // })
 const snakeFood = useContext(Context);
 console.log('snakeItem was rendered')
 //console.log(snakeFood.snake)
// console.log (snakeFood)
  return (
    <div className="fieldItem" onClick={() => props.snake(props.number)}>
      {snakeFood.snake.some(item => item === props.number) && <Snake/>}
      {(snakeFood.foodRange > props.foodRange.from && snakeFood.foodRange < props.foodRange.to) && <Food foodPos={props.foodRange.position} snakePos={props.setSnakeInPos} />}
    </div>
  );
};

export default FieldItem;

//console.log(e)
//e.target.value = props.children