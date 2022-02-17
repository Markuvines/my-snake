import React, { useRef, useState, useEffect, createContext } from 'react';
import './App.css';
import './styles/App.css'
import Field from './components/Field';
import Button from './components/Button';
//let timerId = null;
import Context from './contexts/context';

function App() {
let options = {
  speed: 500,
};
const [snake,setSnake] = useState([])
const [foodRange, setfoodRange] = useState() 
const putFoodIn = useEffect(() => {}, [foodRange])

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
  const [snakeInPos, setSnakeInPos] = useState();
  const initArr = getInitArr();
  //const [snake, setSnake] = useState(initArr);

  const getSnakeIn = id => {
    setSnakeInPos(id);
    
    
    // let arr = initArr;
    // arr[id].snakeIn = true;
    // setSnake([...arr]);
    //console.log(snakeInPos);
  }
  
  function start () {
   timerId.current = setInterval(() => {
        //console.log(timerId);
        setSnakeInPos((prev) => {
          if(!((prev + 1) % 5)) {
            setSnakeInPos(prev - 4)
          } else {
            setSnakeInPos(prev + 1)
          }
        });
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
      setSnakeInPos((prev) => {
        if(!((prev + 1) % 5)) {
          setSnakeInPos(prev - 4)
        } else {
          setSnakeInPos(prev + 1)
        }
      });
  }, options.speed);
  }

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
      setSnakeInPos((prev) => {
        if(!(prev % 5)) {
          setSnakeInPos(prev + 4)
        } else {
          setSnakeInPos(prev - 1)
        }
      });
  }, options.speed);
  }


  // const moveLeft = () => {
  //   if((!(snakeInPos % 5)) || !snakeInPos) {
  //     setSnakeInPos(snakeInPos + 4)
  //   } else {
  //     setSnakeInPos(snakeInPos - 1)
  //   }
  // }
  const moveUp = () => {
    stop();
    timerId.current = setInterval(() => {
      setSnakeInPos((prev) => {
        if (prev < 5) {
          setSnakeInPos(prev + 20)
        } else {
          setSnakeInPos(prev - 5)
        }
      });
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
      setSnakeInPos((prev) => {
        if (prev + 1 > 20) {
          setSnakeInPos(prev - 20)
        } else {
          setSnakeInPos(prev + 5)
        }
      });
  }, options.speed);
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
 
 
  // console.log(fieldItemStep());

  return (
    <Context.Provider value={{foodRange, setfoodRange}}>
      <div tabIndex='0' onKeyDown={(e) => changeDirection(e)} className="App">
        {/* <button className='button' onClick={() => moveRight()}>{right}</button>
        <button className='button' onClick={() => moveLeft()}>{left}</button>
        <button className='button' onClick={() => moveUp()}>Вверх</button>
        <button className='button' onClick={() => moveDown()}>Вниз</button>
        <button className='button' onClick={() => start()}>Start!!!</button>
        <button className='button' onClick={() => stop()}>Stop!!!</button> */}
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
