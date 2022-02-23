import React, {useEffect, useRef} from 'react';
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
  const getRangeArr = rangeArr();
  const counter = useRef();
  counter.current = 0;
  const renderCounts = useEffect(() => {
    counter.current++;
    // console.log('Ренедер FieldItem '+ props.number + counter.current + 'раз')
    //console.log(`Ренедер Field ${counter.current} раз`)
   
  })
  return (
    <div className='field'>
      {props.snake.map((item, index) => <FieldItem foodRange={(() => {getRangeArr[index].position = index; return getRangeArr[index]})()} snake={props.onClick} setSnakeInPos={props.setSnakeInPos} number={index} snakeIn={item.snakeIn} key={item.id}/>)}
    </div>
  );
};

export default Field;