
import React, {useState, useEffect} from 'react'
import List from './List'
import Start from './Start'

const Clock = () => {

    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[total, setTotal] = useState(0)
    const[btn, setBtn] = useState(false)

    console.log(btn)

    const[start, setStart] = useState(false)
    // const[timer, setTimer] = useState({
    //   "seconds" : seconds,
    //   "minutes": minutes,
    //   "hours": hours,
    // })



  // Handle Seconds Add
    function handleAddSeconds(id){
      if(seconds >= 0 && seconds < 59){
        setSeconds(prevState => prevState + 1)
      }
      id.preventDefault()

    }

  // Handle seconds subtract

    function handleMinusSeconds(id){

      if(seconds >= 1 && seconds < 59){
        setSeconds(prevState => prevState -1)
      }
      id.preventDefault()
    }








    //Handle minutes add

    function handleAddMinutes(id){
      if(minutes >= 0 && minutes < 59){
        setMinutes(prevState => prevState + 1)
        
      }
      id.preventDefault()

    }

  //Handle minutes subtract

    function handleMinusMinutes(id){

      if(minutes >= 1 && minutes < 59){
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
      console.log(start)
      setStart(!start)
      // let count = 0
      // const myTimer = setTimeout(() => {
      //   count +=1
      //   if(count === 2){
      //     setBtn(false)
      //     clearTimeout(myTimer)

      //   }
      //   if(count < 2){
      //     setBtn(true)

      //   }
        
      // }, 1000);



    }



    //try and mak estart btn dissapear fro 2 seconds after click then reappear
    useEffect(() =>{
      let count = 0
      const myTimer = setTimeout(() => {
        count +=1
        if(count === 2){
          setBtn(false)
          clearTimeout(myTimer)

        }
        if(count < 2){
          setBtn(true)

        }
        
      }, 1000);

      // startCountdown()
      

    },[start])



    

















  return (
    <div>
        <form >
        <button disabled = {start == true ? true: false} onClick={handleAddSeconds} >+</button>
        <button disabled = {start == true ? true: false} onClick={handleMinusSeconds}>-</button>
        <span>{seconds >= 10 ? seconds : "0" + seconds}</span>
        </form>


        <form>
        <button disabled = {start == true ? true: false} onClick={handleAddMinutes}>+</button>
        <button disabled = {start == true ? true: false} onClick={handleMinusMinutes}>-</button>
        <span>{minutes >= 10 ? minutes : "0" + minutes}</span>
        </form>


        <form>
        <button disabled = {start == true ? true: false} onClick={handleAddHours}>+</button>
        <button disabled = {start == true ? true: false} onClick={handleMinusHours}>-</button>
        <span>{hours >= 10 ? hours : "0" + hours}</span>
        </form>

        <span>
          <button onClick={startCountdown} disabled = {btn === true? true: false}>Start</button>
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
          setStart = {setStart}


          total = {total}
          setTotal = {setTotal}
          
          />
        </div>
        


    </div>








  )
}

export default Clock