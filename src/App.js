import React, { useRef, useState, useEffect, useReducer } from 'react';
import './App.css';
import './styles/App.css'
import Field from './components/Field';
import Button from './components/Button';
import Context from './contexts/context';

// let options = {
//   speed: 1000,
// };

// function reducer(state, action) {
//   switch(action.type) {
//     case 'moveRight': {
//      // clearInterval(timerId);
//      let arrGlob
//      let timerId = setInterval(() => {
//         //stop();
//        let arr = snakeMove(state);
       
//           if(!((arr[0] + 1) % 5)) {
//             arr[0] = arr[0] - 4
//           } else {
//             arr[0] = arr[0] + 1
//           }
//         arrGlob = arr;
//         console.log(arrGlob);
//     }, options.speed);
//     return arrGlob;
//     }
//   }
// }

// function stop (timerId) {
//   //console.log(timerId.current);
//   clearInterval(timerId.current);
// }


// const snakeMove = (arr) => {
//   let array = arr;
//   for (let i = arr.length; i > 1; --i) {
//     arr[i - 1] = arr[i -2];
//   }
//  return array;
  
// }

function App() {
let options = {
  speed: 1000,
};

const [snakeInPos, setSnakeInPos] = useState(2);
const [snake,setSnake] = useState([2, 1, 0])
const [foodRange, setfoodRange] = useState() 
const prevSnake = useRef();
//const [snake, dispatch] = useReducer(reducer, [2, 1, 0])
console.log(`snakeInPos glob ${snakeInPos}`)
 useEffect(() => {
 console.log('RENDER!')
 //start()
  //prevSnakeHeadPos.current = snakeInPos;
  //console.log(prevSnakeHeadPos.current)
}, [snakeInPos])
prevSnake.current = snake;


let timerId = useRef()
  const getInitArr = () => {
    let arr = []
    for (let i = 1; i <= 25; ++i) {
      arr.push({
        id: i,
        snakeIn: false
      })
    }
    return arr
  }
  //let snakePos = useEffect(() => console.log(snakeInPos),[snakeInPos])
  const initArr = getInitArr();
  const getSnakeIn = id => {
    setSnakeInPos(id);
   // setSnake([...snake, id])
  }
  
function start () {
    
   timerId.current = setInterval(() => {
        //console.log(timerId);
        //prevSnakeHeadPos.current = snakeInPos;
        snakeMove();
        
          if(!((prevSnake.current[0] + 1) % 5)) {
            prevSnake.current[0] = (prevSnake.current[0] - 4)
          } else {
            prevSnake.current[0] = (prevSnake.current[0] + 1)
          }
          console.log(prevSnake.current)
          
        setSnake([...prevSnake.current])
        
        //stop()
       // console.log(snake)
  }, options.speed);
  
    // (function (snakepPos) {
    // setInterval(() => {
    //   console.log('first :' + snakepPos);
    //   setSnakeInPos(snakepPos + 1);
    //   console.log('last :' + snakepPos);
    //   snakepPos++;
    // }, 1000)})(snakeInPos);
    // let move = setTimeout(function tick () {
    //   setSnakeInPos(snakeInPos + 1);
    //   move = setTimeout(tick, 1000);
    // }, 1000)
  setfoodRange(Math.random())
  }
function stop () {
  console.log(timerId.current);
  clearInterval(timerId.current);
}

  const changeDirection = direction => {
    switch(direction.keyCode) {
      case 37 : return moveLeft()
      case 38 : return moveUp()
      case 39 : return moveRight()
      case 40 : return moveDown()
    }
   
  }


  const moveRight = () => {
    stop();
    timerId.current = setInterval(() => {
      snakeMove();
        
          if(!((prevSnake.current[0] + 1) % 5)) {
            prevSnake.current[0] = (prevSnake.current[0] - 4)
          } else {
            prevSnake.current[0] = (prevSnake.current[0] + 1)
          }
          console.log(prevSnake.current)
          
        setSnake([...prevSnake.current])
  }, options.speed);
  }

  // const moveRight = () => {
  //   stop();
  //   timerId.current = setInterval(() => {
  //     setSnakeInPos((prev) => {
  //       if(!((prev + 1) % 5)) {
  //         setSnakeInPos(prev - 4)
  //       } else {
  //         setSnakeInPos(prev + 1)
  //       }
  //     });
  // }, options.speed);
  // }

  // const moveRight = () => {
  //   if(!((snakeInPos + 1) % 5)) {
  //     setSnakeInPos(snakeInPos - 4)
  //   } else {
  //     setSnakeInPos(snakeInPos + 1)
  //   }
  // }

  const moveLeft = () => {
    stop();
    
    timerId.current = setInterval(() => {
      snakeMove();
        
      if(!((prevSnake.current[0]) % 5)) {
        prevSnake.current[0] = (prevSnake.current[0] + 4)
      } else {
        prevSnake.current[0] = (prevSnake.current[0] - 1)
      }
      console.log(prevSnake.current)
      
    setSnake([...prevSnake.current])

     
  }, options.speed);
  }

  // const moveLeft = () => {
  //   stop();
  //   timerId.current = setInterval(() => {
  //     setSnakeInPos((prev) => {
  //       if(!(prev % 5)) {
  //         setSnakeInPos(prev + 4)
  //       } else {
  //         setSnakeInPos(prev - 1)
  //       }
  //     });
  // }, options.speed);
  // }


  // const moveLeft = () => {
  //   if((!(snakeInPos % 5)) || !snakeInPos) {
  //     setSnakeInPos(snakeInPos + 4)
  //   } else {
  //     setSnakeInPos(snakeInPos - 1)
  //   }
  // }

  // const moveUp = () => {
  //   stop();
  //   timerId.current = setInterval(() => {
  //     setSnakeInPos((prev) => {
  //       if (prev < 5) {
  //         setSnakeInPos(prev + 20)
  //       } else {
  //         setSnakeInPos(prev - 5)
  //       }
  //     });
  // }, options.speed);
  // }

  const moveUp = () => {
    stop();
    timerId.current = setInterval(() => {

      snakeMove();
      if(((prevSnake.current[0] - 5) < 0)) {
        prevSnake.current[0] = (prevSnake.current[0] + 20)
      } else {
        prevSnake.current[0] = (prevSnake.current[0] - 5)
      }
      console.log(prevSnake.current)
      
    setSnake([...prevSnake.current])

     
  }, options.speed);
  }

  // const moveUp = () => {
  //   if(snakeInPos < 5) {
  //     setSnakeInPos(snakeInPos + 20)
  //   } else {
  //     setSnakeInPos(snakeInPos - 5)
  //   }
  // }


  const moveDown = () => {
   
    stop();
    timerId.current = setInterval(() => {
      snakeMove();
      if(((prevSnake.current[0] + 5) > 24)) {
        prevSnake.current[0] = (prevSnake.current[0] - 20)
      } else {
        prevSnake.current[0] = (prevSnake.current[0] + 5)
      }
      console.log(prevSnake.current)
      
    setSnake([...prevSnake.current])

    
  }, options.speed);
  }
  
  // const moveDown = () => {
   
  //   stop();
  //   timerId.current = setInterval(() => {
  //     setSnakeInPos((prev) => {
  //       if (prev + 1 > 20) {
  //         setSnakeInPos(prev - 20)
  //       } else {
  //         setSnakeInPos(prev + 5)
  //       }
  //     });
  // }, options.speed);
  // }
  const snakeMove = () => {
    //let arr = array;
   // console.log(`snakeInPos inSnakeMove ${snakeInPos}`)
    for (let i = prevSnake.current.length; i > 1; --i) {
      prevSnake.current[i - 1] = prevSnake.current[i -2];
    }
   // arr[0] = prevSnakeHeadPos.current;
   // setSnake(arr)
    
  }
  // const moveDown = () => {
  //   if(snakeInPos > 20) {
  //     setSnakeInPos(snakeInPos - 20)
  //   } else {
  //     setSnakeInPos(snakeInPos + 5)
  //   }
  // }

  const right = '->'
  const left = '<-'
 
 
  return (
    <Context.Provider value={{foodRange, setfoodRange, snake}}>
      <div tabIndex='0' onKeyDown={(e) => changeDirection(e)} className="App">
        <button className='button'>{right}</button>
        <button className='button' onClick={() => moveLeft()}>{left}</button>
        <button className='button' onClick={() => moveUp()}>Вверх</button>
        <button className='button' onClick={() => moveDown()}>Вниз</button>
        <button className='button' onClick={() => start()}>Start!!!</button>
        <button className='button' onClick={() => stop()}>Stop!!!</button>
        <Field onClick={getSnakeIn} setSnakeInPos={snakeInPos} snake={initArr}/>
      </div>
    </Context.Provider>
  );
}
//export const Cntext = createContext();
export default App;
