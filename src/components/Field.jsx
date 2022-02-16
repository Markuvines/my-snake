import React from 'react';
import FieldItem from './FieldItem';

const Field = (props) => {
  // const fieldItemStep = () => {
  //   let arr = [];
  //   let step = 0;
  //   for (let i = 0; i < 25; ++i) {
  //     arr.push(step + 1 / 25)
  //     step += 1/25;
  //   }
  //   return arr;
  // }
  const rangeArr = () => {
    let range = [{from: 0, to: 1/25}];
    for (let i = 1; i < 25; ++i) {
      range.push({from: range[i - 1].to, to: range[i - 1].to + 1 / 25})
    }
    return range
  }
  // const arr = fieldItemStep();
  return (
    <div className='field'>
      {props.snake.map((item, index) => <FieldItem foodRange={rangeArr()[index]} snake={props.onClick} setSnakeInPos={props.setSnakeInPos} number={index} snakeIn={item.snakeIn} key={item.id}/>)}
    </div>
  );
};

export default Field;