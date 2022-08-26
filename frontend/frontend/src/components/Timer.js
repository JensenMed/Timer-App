
import React, {useEffect, useState, useRef} from 'react'

const Timer = (props) => {


    const btn = props.btn
    const setBtn = props.setBtn
    const press = props.press
    const setPress = props.setPress
    const minutes = props.minutes
    const setMinutes = props.setMinutes
    const seconds = props.seconds
    const setSeconds = props.setSeconds
    const hours = props.hours
    const setHours = props.setHours
    const start = props.start
    const setStart = props.setStart


    // const[press, setPress] = useState("")
    // const { getByText } = render(Clock);
    // expect(getByText(/Click me/i).closest('button')).toHaveAttribute('disabled');
    // console.log(press)


    // const[start, setStart] = useState(false)

    const timerRef = useRef()
    const secondsPlusRef = useRef(null)
 


  // Handle Seconds Add
    function handleAddSeconds(id){
      // alert('click')
      if(seconds >= 0 && seconds <= 59){
        setSeconds(prevState => prevState + 1)
      }

      id.preventDefault()

    }






  // Handle seconds subtract

    function handleMinusSeconds(id){
      if(seconds > 0 && seconds <= 59){
        setSeconds(prevState => prevState -1)
        // setPress('secondsMinus')
      }
      id.preventDefault()
    }









    //Handle minutes add

    function handleAddMinutes(id){
      if(minutes >= 0 && minutes <= 59){
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



    //Long press functions

    function hoverPress(){
      setPress("")

    }




    function longhPressStart(e){
      const nameVal = e.target.name
      console.log(nameVal)


      //Seconds add Long press
      if(nameVal === "secondsAdd"){
        if(seconds >= 0 && seconds < 59){
          setPress('addSeconds')
          startLongPress()
          
        }

      }

      //Seconds minus long press
      if(nameVal === "secondsMinus"){
        if(seconds > 0 && seconds <= 59){
          setPress('minusSeconds')
          startLongPress()
          
        }

      }



      //minutes add long press
      if(nameVal === "minutesAdd"){
        if(minutes >= 0 && minutes <= 59){
          setPress('addMinutes')
          startLongPress()
          
        }

      }

      //minutes minus long press

      if(nameVal === "minutesMinus"){
        if(minutes > 0 && minutes <= 59){
          setPress('minusMinutes')
          startLongPress()
          
        }

      }

      //hours add long press

      
      if(nameVal === "hoursAdd"){
        if(hours >= 0 && hours <= 24){
          setPress('addHours')
          startLongPress()
          
        }

      }

      if(nameVal === "hoursMinus"){
        if(hours > 0 && hours <= 24){
          setPress('minusHours')
          startLongPress()
          
        }

      }






      e.preventDefault()


    }



    function mouseOver(e){
        const nameVal = e.target.name
        // console.log(nameVal)
  
  
        //Seconds add Long press
        if(nameVal === "secondsAdd"){
          if(seconds >= 0 && seconds < 59){
            setPress('addSeconds')
            
          }
  
        }
  
        //Seconds minus long press
        if(nameVal === "secondsMinus"){
          if(seconds > 0 && seconds <= 59){
            setPress('minusSeconds')
            
          }
  
        }
  
  
  
        //minutes add long press
        if(nameVal === "minutesAdd"){
          if(minutes >= 0 && minutes <= 59){
            setPress('addMinutes')
            
          }
  
        }
  
        //minutes minus long press
  
        if(nameVal === "minutesMinus"){
          if(minutes > 0 && minutes <= 59){
            setPress('minusMinutes')
            
          }
  
        }
  
        //hours add long press
  
        
        if(nameVal === "hoursAdd"){
          if(hours >= 0 && hours <= 24){
            setPress('addHours')
            
          }
  
        }
  
        if(nameVal === "hoursMinus"){
          if(hours > 0 && hours <= 24){
            setPress('minusHours')
            
          }
  
        }
  
  
  
  
  
  
        e.preventDefault()
  
  
      }
  



    // useEffect(() =>{
    //     if(start === true){

    //       let count = 0
    //       const myTimer = setInterval(() => {
    //         count +=1
    //         if(count === 12){
    //           setBtn(false)
    //           clearInterval(myTimer)
    
    //         }
    //         if(count < 12){
    //           setBtn(true)
    
    //         }
            
    //       }, 250);
  

    //     }


    // },[start])







    function longPressStop(){
      // setPress("")
      // console.log("jjje")
      clearInterval(timerRef.current)

    }






    function startLongPress(){
      timerRef.current = setInterval(() =>{

        //Seconds add
          if(press === "addSeconds"){
            if(seconds >= 0 && seconds < 59){
                setSeconds(seconds => seconds + 1)
            }

        }

        //Seconds minus

        if(press === "minusSeconds"){
          if(seconds > 0 && seconds <= 59){
              setSeconds(seconds => seconds - 1)
          }

      }


      //Minutes add

      if(press === "addMinutes"){
        if(minutes >= 0 && minutes <= 59){
            setMinutes(minutes => minutes + 1)
        }

    }

    //Minutes minus

    
    if(press === "minusMinutes"){
      if(minutes > 0 && minutes <= 59){
          setMinutes(minutes => minutes - 1)
      }

  }



  //Hours add

    if(press === "minusHours"){
      if(hours > 0 && hours <= 24){
          setHours(hours => hours - 1)
      }

    }

  //Hours minus
    if(press === "addHours"){
      if(hours >= 0 && hours <= 24){
          setHours(hours => hours + 1)
      }

    }
      


      }, 95)
    }


    useEffect(() => {
      // const idk = secondsPlusRef.current
      // console.log(idk)

      if( seconds >= 59){
        longPressStop()
        hoverPress()
        setSeconds(59)
      }
      console.log(seconds)
                        // --------> sets boundaries of seconds data
      if( seconds < 0){
        longPressStop()
        hoverPress()
        setSeconds(0)
      }

  

      if(minutes === 59){
        longPressStop()
        hoverPress()
        setMinutes(59)
      }
                          // ----> sets boundaries of minutes data
      if(minutes < 0){
        longPressStop()
        hoverPress()
        setMinutes(0)
      }


      if(hours < 0){
        longPressStop()
        hoverPress()
        setHours(0)
      }
                          // ------> sets boundaries of hours data
      if(hours === 24){
        longPressStop()
        hoverPress() 
        setHours(24)
      }
      




    }, [seconds, minutes, hours])





    function handleInputSeconds(e){

        if( 0 <= e.target.value <= 59){
            setSeconds(e.target.value)

        }else{
             if(e.target.value >= 59){
                setSeconds(59)
             }
             else if(e.target.value <= 0){
                setSeconds(0)
             }
             else{
                setSeconds(0)
             }
        }

    }


    function handlemouseOut(e){

      setSeconds(e.target.value)

    }




  return (
    <div>


        <form >
            <input type = "number" placeholder='00' value = {seconds} name = "seconds" onChange = {handleInputSeconds} maxLength = {2}  onMouseOver = {handlemouseOut}/>
            <button disabled = {start == true ? true: false || seconds === 59? true: false} onMouseOver = {mouseOver} secondsPlusRef = {secondsPlusRef} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleAddSeconds} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {seconds} name = "secondsAdd">+</button>
            <button disabled = {start == true ? true: false || seconds === 0? true: false} onMouseOver = {mouseOver} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleMinusSeconds} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {seconds} name = "secondsMinus" >-</button>
            <span>{seconds >= 10 ? seconds : "0" + seconds}</span>
        </form>


        <form>
            <button disabled = {start == true ? true: false || minutes === 59? true: false} onMouseOver = {mouseOver} onMouseOut = {hoverPress} onClick={handleAddMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} name = "minutesAdd">+</button>
            <button disabled = {start == true ? true: false || minutes === 0? true: false} onMouseOver = {mouseOver} onMouseOut = {hoverPress} onClick={handleMinusMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} name = "minutesMinus">-</button>
            <span>{minutes >= 10 ? minutes : "0" + minutes}</span>
        </form>


        <form>
            <button disabled = {start == true ? true: false || hours === 24? true: false} onMouseOver = {mouseOver} onClick={handleAddHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {hours} name = "hoursAdd">+</button>
            <button disabled = {start == true ? true: false || hours === 0? true: false} onMouseOver = {mouseOver} onClick={handleMinusHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {hours} name = "hoursMinus">-</button>
            <span>{hours >= 10 ? hours : "0" + hours}</span>
        </form>
        <span>
          <button onClick={startCountdown} >Start</button>
        </span>


    </div>
  )
}

export default Timer