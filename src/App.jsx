import React, { useState } from 'react';
import Item from './components/item';

const App = () => {

  const [arr, setArr] = useState([]);

  const clickBtn = () => {
    let newArr = [...arr];
    newArr.push(1);
    setArr(newArr);

    console.log(arr)
  }

  return (
    <div>
      <div className='text-[100px] border border-solid' onClick={()=> {clickBtn()}}>
        <div>자식추가하기</div>
      </div>
      {
        arr.map((item, index) => {
            return <div key={index}><Item/></div>
        })
      }
   
    </div>
  )
};

export default App;