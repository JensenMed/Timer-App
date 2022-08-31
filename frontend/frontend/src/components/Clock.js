
import React, {useState, useEffect, useRef} from 'react'
import List from './List'
// import Random from './Random'
import Timer from './Timer'
import { render } from '@testing-library/react';
// import Random from './Random';
// import Start from './Start'
// import useLongPress from './Random.js'; 
import './css/Clock.css'


const Clock = () => {

    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[total, setTotal] = useState(0)
    const[btn, setBtn] = useState(false)



    const[renderTimer, setRenderTimer] = useState(false)




    const[press, setPress] = useState("")


    const[start, setStart] = useState(false)


  //   //start countdown

    function startCountdown(){
      setStart(!start)

    }





    useEffect(() =>{
        if(start === true){

          let count = 0
          const myTimer = setInterval(() => {
            count +=1
            if(count === 4){
              setBtn(false)
              clearInterval(myTimer)
    
            }
            if(count < 3){
              setBtn(true)
    
            }
            
          }, 100);
  

        }


    },[start])








    function handleTimer(){
      setRenderTimer(!renderTimer)
    }

    function resetValues(){
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      setStart(false)
    }






  return (
    <div>

      {renderTimer && 
      <div className = "open-timer"> 

      <Timer 

      btn = {btn}
      setBtn = {setBtn}


      press = {press}
      setPress = {setPress}


      minutes = {minutes}
      setMinutes = {setMinutes}


      seconds = {seconds}
      setSeconds= {setSeconds}

      hours = {hours}
      setHours = {setHours}

      start = {start}
      setStart = {setStart}





      />



      </div>
      
      
      
      }
        <div className='start-clock'>
          <span>
            <button onClick = {resetValues}>Reset</button>
          </span>

        <span >
          {start ? <button disabled = {btn === true? true: false} onClick={startCountdown} >Stop</button>: <button disabled = {btn === true? true: false} onClick={startCountdown} >Start</button>}
        </span>

        </div>

  
    


        <div>
          <span onClick = {handleTimer}>
            
          <List
          minutes = {minutes}
          setMinutes = {setMinutes}


          seconds = {seconds}
          setSeconds= {setSeconds}

          hours = {hours}
          setHours = {setHours}

          start = {start}
          setStart = {setStart}


          total = {total}
          setTotal = {setTotal}
          
          />

          </span>
          
        
        </div>

        <span>
          {/* <Random /> */}
        </span>
        


    </div>








  )
}

export default Clock