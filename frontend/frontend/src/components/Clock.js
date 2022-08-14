
import React, {useState, useEffect} from 'react'
import List from './List'

const Clock = () => {

    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[total, setTotal] = useState(0)

    const[start, setStart] = useState(false)
    const[timer, setTimer] = useState({
      "seconds" : seconds,
      "minutes": minutes,
      "hours": hours,
    })



  // Handle Seconds Add
    function handleAddSeconds(id){
      if(seconds >= 0 && seconds < 60){
        setSeconds(prevState => prevState + 1)
      }
      id.preventDefault()

    }

  // Handle seconds subtract

    function handleMinusSeconds(id){

      if(seconds >= 1 && seconds < 60){
        setSeconds(prevState => prevState -1)
      }
      id.preventDefault()
    }








    //Handle minutes add

    function handleAddMinutes(id){
      if(minutes >= 0 && minutes < 60){
        setMinutes(prevState => prevState + 1)
        
      }
      id.preventDefault()

    }

  //Handle minutes subtract

    function handleMinusMinutes(id){

      if(minutes >= 1 && minutes < 60){
        setMinutes(prevState => prevState -1)
      }
      id.preventDefault()
    }





  //Handle add hours



    function handleAddHours(id){
      if(hours >= 0){
        setHours(prevState => prevState + 1)
        
      }
      id.preventDefault()

    }

  //Handle Hours subtract

    function handleMinusHours(id){

      if(hours >= 1){
        setHours(prevState => prevState -1)
      }
      id.preventDefault()
    }




    //start countdown

    function startCountdown(){
      setStart(!start)
    }



    function startTimer(){

      if(start == true){

        
      }

    }

















  return (
    <div>
        <form >
        <button onClick={handleAddSeconds} >+</button>
        <button onClick={handleMinusSeconds}>-</button>
        <span>{seconds >= 10 ? seconds : "0" + seconds}</span>
        </form>


        <form>
        <button onClick={handleAddMinutes}>+</button>
        <button onClick={handleMinusMinutes}>-</button>
        <span>{minutes >= 10 ? minutes : "0" + minutes}</span>
        </form>


        <form>
        <button onClick={handleAddHours}>+</button>
        <button onClick={handleMinusHours}>-</button>
        <span>{hours >= 10 ? hours : "0" + hours}</span>
        </form>

        <span>
          <button onClick = {startCountdown}>Start</button>
        </span>


        <div>
          
          




          <List 
          minutes = {minutes}
          setMinutes = {setMinutes}


          seconds = {seconds}
          setSeconds= {setSeconds}

          hours = {hours}
          setHours = {setHours}

          start = {start}


          timer = {timer}
          setTimer = {setTimer}

          total = {total}
          setTotal = {setTotal}
          
          />
        </div>
        


    </div>








  )
}

export default Clock