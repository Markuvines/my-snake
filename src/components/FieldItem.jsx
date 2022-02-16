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
 const snakeFodd = useContext(Context);
  return (
    <div className="fieldItem" onClick={() => props.snake(props.number)}>
      {props.setSnakeInPos === props.number && <Snake/>}
      {(snakeFodd.foodRange > props.foodRange.from && snakeFodd.foodRange < props.foodRange.to && <Food/>)}
      {/* {props.number} */}
    </div>
  );
};

export default FieldItem;

//console.log(e)
//e.target.value = props.children