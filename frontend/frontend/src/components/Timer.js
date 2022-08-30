
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


    // const[disabledsec, setDisabledSec] = useState(false)


    // const[press, setPress] = useState("")
    // const { getByText } = render(Clock);
    // expect(getByText(/Click me/i).closest('button')).toHaveAttribute('disabled');
    // console.log(press)


    // const[start, setStart] = useState(false)

    const timerRef = useRef()
    const secondsPlusRef = useRef(null)
 


  // Handle Seconds Add
    function handleAddSeconds(id){
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




  //   //start countdown

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
      


      }, 90)
    }


    useEffect(() => {

      if( seconds >= 59){
        longPressStop()
        // setDisabledSec(true)
        setSeconds(59)
      }
                        // --------> sets boundaries of seconds data
      if( seconds <= 0){
        longPressStop()
        setSeconds(0)
      }

  

      if(minutes >= 59){
        setMinutes(59)
      }
                          // ----> sets boundaries of minutes data
      if(minutes <= 0){
        setMinutes(0)
      }


      if(hours <= 0){
        setHours(0)
      }
                          // ------> sets boundaries of hours data
      if(hours >= 24){
        setHours(24)
      }
      




    }, [seconds, minutes, hours])

  

    function handleInputSeconds(e){
      const name = e.target.name

      if(name === "seconds"){
        setSeconds(parseInt(e.target.value))
      }
      if(name === "minutes"){
        setMinutes(parseInt(e.target.value))
      }
      if(name === "hours"){
        setHours(parseInt(e.target.value))
      }

    }


    // function handlemouseOut(e){

    //   setSeconds(e.target.value)

    // }


    // function onMouse(e){

    //   const name = e.target.name

    //   if(name === "addSeconds"){
    //     setPress("addSeconds")
    //   }
    //   if(name === "secondsMinus"){
    //       setPress("minusSeconds")
    //   }

    // }

    function inputMouseOut(e){
      const nameVal = e.target

      if(nameVal.name === "seconds"){
        setSeconds(nameVal.value)
      }
      if(nameVal.name === "minutes"){
        setMinutes(nameVal.value)
      }
    }




  return (
    <div>


        <form>
        <button disabled = {start == true ? true: false || seconds === 59? true: false} secondsPlusRef = {secondsPlusRef} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleAddSeconds} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} onMouseOver = {mouseOver} value = {seconds} name = "secondsAdd">+</button>
          <button disabled = {start == true ? true: false || seconds === 0? true: false} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleMinusSeconds} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseOver = {mouseOver} onMouseDown = {longhPressStart} value = {seconds} name = "secondsMinus" >-</button>
          
          <input  type = "text" placeholder= '00' min = "00" max = "59" value = {seconds=== 0 ? "": seconds } name = "seconds" onChange = {handleInputSeconds} maxLength = {2} />
        </form>


        <form>
          <button disabled = {start == true ? true: false || minutes === 59? true: false}  onMouseOut = {hoverPress} onClick={handleAddMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} name = "minutesAdd">+</button>
          <button disabled = {start == true ? true: false || minutes === 0? true: false} onMouseOut = {hoverPress} onClick={handleMinusMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} name = "minutesMinus">-</button>
          <input type = "text"  min = "0" max = "59" placeholder='00' value = {minutes === 0 ? "": minutes } name = "minutes" onChange = {handleInputSeconds} maxLength = {2}  />
  
        </form>


        <form>
          <button disabled = {start == true ? true: false || hours === 24? true: false} onClick={handleAddHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {hours} name = "hoursAdd">+</button>
          <button disabled = {start == true ? true: false || hours === 0? true: false} onClick={handleMinusHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {hours} name = "hoursMinus">-</button>
          
          <input type = "text"  min = "0" max = "24" placeholder='00' value = {hours === 0 ? "": hours }name = "hours" onChange = {handleInputSeconds} maxLength = {2} />
        </form>












       {/* <span>
       <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress= {false}/>
        </span>


        <form >
            <input type = "number" placeholder= '00' min = "0" max = "59" value = {seconds=== 0 ? "": seconds } name = "seconds" onChange = {handleInputSeconds} maxLength = {2} />
        </form>


        <form>
          <input type = "number"  min = "0" max = "59" placeholder='00' value = {minutes === 0 ? "": minutes } name = "minutes" onChange = {handleInputSeconds} maxLength = {2}  />
        </form>


        <form>
          <input type = "number"  min = "0" max = "24" placeholder='00' value = {hours === 0 ? "": hours }name = "hours" onChange = {handleInputSeconds} maxLength = {2} />
        </form> */}
        <span>
          <button onClick={startCountdown} >Start</button>
        </span>
      

    </div>
  )
}

export default Timer