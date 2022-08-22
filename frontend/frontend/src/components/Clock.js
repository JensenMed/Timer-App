
import React, {useState, useEffect, useRef} from 'react'
import List from './List'
import Random from './Random'
// import Start from './Start'
// import useLongPress from './Random.js'; 


const Clock = () => {

    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[total, setTotal] = useState(0)
    const[btn, setBtn] = useState(false)




    const[press, setPress] = useState()
    console.log(press)


    const[start, setStart] = useState(false)

    const timerRef = useRef()
 


  // Handle Seconds Add
    function handleAddSeconds(id){
      // alert('click')
      if(seconds >= 0 && seconds < 59){
        setSeconds(prevState => prevState + 1)
        onTouchStart()
      }

      id.preventDefault()

    }
  // Handle seconds subtract

    function handleMinusSeconds(id){

      if(seconds >= 1 && seconds <= 59){
        setSeconds(prevState => prevState -1)
      }
      id.preventDefault()
    }




    function handleSecondsLongPlus(){
      if(seconds >= 0 && seconds <= 59){
        setPress('addSeconds')
        onTouchStart()
      }
      // e.preventDefault()
    }
  


    function handleSecondsLongMinus(){

      // setPress("minusSeconds")
      // onTouchStart()
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

      if(minutes >= 1 && minutes <= 59){
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



    //try and mak estart btn dissapear fro 2 seconds after click then reappear

    useEffect(() =>{
        if(start === true){

          let count = 0
          const myTimer = setInterval(() => {
            count +=1
            if(count === 12){
              setBtn(false)
              clearInterval(myTimer)
    
            }
            if(count < 12){
              setBtn(true)
    
            }
            
          }, 250);
  

        }


    },[start])



    
    // function onMouseDown(e){
    //   console.log("Mouse down")

    //   e.preventDefault()
    //   // startLongPress()
    // }
    
    // function onMouseUp(e){
    //   console.log("Mouse up")
    //   e.preventDefault()
    //   // startLongPress()
    // }



    function onTouchStart(){
      console.log("Start")
      // setPress("addSeconds")
      // e.preventDefault()
      startLongPress()
    }

    function onTouchEnd(e){
      console.log("end")
       clearInterval(timerRef)

      e.preventDefault()
    }


    function startLongPress(){
      timerRef.current = setInterval(() =>{
        if(press === "addSeconds"){
            setSeconds(seconds => seconds + 1)
            setPress("")
        }

        // if(press === "minusSeconds"){
        //   setPress("")
        //   setSeconds(seconds => seconds - 1)
        // }
      }, 100)
    }

    // function endLongPress(){
    //   timerRef.current = setInterval(() =>{
    //     setSeconds(seconds => seconds + 1)
    //   }, 500)
    // }

























  return (
    <div>
        <form >
        <button disabled = {start == true ? true: false} onTouchStart = {handleSecondsLongPlus} onTouchEnd = {onTouchEnd}  >+</button>
        <button disabled = {start == true ? true: false}  onTouchStart = {handleSecondsLongMinus} onTouchEnd = {onTouchEnd} onClick={handleMinusSeconds}>-</button>
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
        {/* <button 
        onMouseDown={onMouseDown}
        onMouseUp = {onMouseup}
        onTouchEnd = {onTouchEnd}
        onTouchStart = {onTouchStart}
        
        >
          Click
        </button> */}

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
        <Random />
        


    </div>








  )
}

export default Clock