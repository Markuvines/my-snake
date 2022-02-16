import React, { useContext, useEffect } from 'react';
import Snake from './Snake';

const FieldItem = (props) => {
  //const snakeFood = useContext(context);
  return (
    <div className="fieldItem" onClick={() => props.snake(props.number)}>
      {props.setSnakeInPos === props.number && <Snake/>}
      {/* {props.number} */}
    </div>
  );
};

export default FieldItem;

//console.log(e)
//e.target.value = props.children