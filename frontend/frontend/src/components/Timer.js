



//This file takes care of the pop up timer and input details


import React, {useEffect, useState, useRef, useMemo} from 'react'
import './css/Timer.css'
import Select from 'react-select'
import sounds from './sounds/sounds'


const Timer = (props) => {




    // Parent props passsed


    const btn = props.btn
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
    const title = props.title
    const setTitle = props.setTitle
    const total = props.total
    const endSound = props.endSound
    const setEndSound = props.setEndSound
    const renderTimer = props.renderTimer
    const setRenderTimer = props.setRenderTimer
    const setImage = props.setImage
    const timerRef = useRef()
    const longPressInit = useRef()
 


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
      setRenderTimer(!renderTimer)
      setStart(!start)

    }



    //Long press functions

    function hoverPress(){
      setPress("")

    }




    //handles click of longpress --> then passes to startLongPress


    function longhPressStart(e){
      const nameVal = e.target.name
      console.log(nameVal)


      var timer = 0

      longPressInit.current = setInterval(() => {
        timer += 1
        if(timer === 2){


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
        }

      }, 200)

    }





    //Function handles if mouse over button inputs


    function mouseOver(e){
        let nameVal = e.target.name
  
  
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






      // Handles long press up

    function longPressStop(){
      console.log("jjje")
      clearInterval(timerRef.current)
      clearInterval(longPressInit.current)

    }

    console.log(press)




    //Long press function

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
      


      }, 40)
    }


  



    //Handles timer boundaries

    useEffect(() => {

      if( seconds > 59){
        longPressStop()
        setSeconds(59)
      }
                        // --------> sets boundaries of seconds data
      if( seconds < 0){
        longPressStop()
        setSeconds(0)
      }

  

      if(minutes > 59){
        longPressStop()
        setMinutes(59)
      }
                          // ----> sets boundaries of minutes data
      if(minutes < 0){
        longPressStop()
        setMinutes(0)
      }


      if(hours < 0){
        longPressStop()
        setHours(0)
      }
                          // ------> sets boundaries of hours data
      if(hours > 24){
        longPressStop()
        setHours(24)
      }
      




    }, [seconds, minutes, hours])





    //Functikon that  handles input seconds
  

    function handleInputSeconds(e){
      const name = e.target.name

      if(name === "seconds"){
        if(e.target.value === "" || isNaN(e.target.value)){
          e.target.value = "0"
          setSeconds(parseInt(e.target.value))
        }
        setSeconds(parseInt(e.target.value))
      }
      if(name === "minutes" ){
        if(e.target.value === ""  || isNaN(e.target.value)){
          e.target.value = "0"
          setMinutes(parseInt(e.target.value))
        }
        setMinutes(parseInt(e.target.value))
      }
      if(name === "hours"){
        if(e.target.value === ""  || isNaN(e.target.value)){
          e.target.value = "0"
          setHours(parseInt(e.target.value))
        }
        setHours(parseInt(e.target.value))
      }

    }



    // Function hanles reset button

    function resetValues(){
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      setStart(false)
    }


    //function hanles Title input

    function handleTitle(e){
      setTitle(e.target.value)
      e.preventDefault()
    }




    //Function handles sound input

    function handleSound(e){
      sounds.map(sound => {
        if(sound.label === e.label){
          setEndSound(sound.value)
          setImage(sound.label)
        }
      })
    }




  return (
    <div className='container'>

        <div className='seconds-form'>
        <form>
          <div className='add-seconds'>

          <button className='add-seconds1' disabled = {start == true ? true: false || seconds === 59? true: false} onTouchMove = {hoverPress} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleAddSeconds} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} onMouseOver = {mouseOver} value = {seconds} name = "secondsAdd">+</button>
          <button  className='minus-seconds1' disabled = {start == true ? true: false || seconds === 0? true: false} onTouchMove = {hoverPress} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick = {handleMinusSeconds} onMouseUp = {longPressStop} onMouseOver = {mouseOver} onMouseDown = {longhPressStart} value = {seconds} name = "secondsMinus" >-</button>
          </div>
          
          <input disabled= {start ? true: false} className = 'inp-seconds' type = "text" placeholder= '00' min = "00" max = "59" value = {seconds=== 0 ? "": seconds } name = "seconds" onChange = {handleInputSeconds} maxLength = {2} />
        </form>
  

        </div>
        <div className='semi-1'>
          :
        </div>


        <div className='minutes-form'>
        <form>
          <div className='add-minutes'>

          <button className='add-minutes1' disabled = {start == true ? true: false || minutes === 59? true: false} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onMouseOut = {hoverPress} onClick={handleAddMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} onMouseOver = {mouseOver} name = "minutesAdd">+</button>
          <button className='minus-minutes1' disabled = {start == true ? true: false || minutes === 0? true: false} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onMouseOut = {hoverPress} onClick={handleMinusMinutes} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} value = {minutes} onMouseOver = {mouseOver} name = "minutesMinus">-</button>

          </div>
          <input  disabled= {start ? true: false} className = 'inp-minutes' type = "text"  min = "0" max = "59" placeholder='00' value = {minutes === 0 ? "": minutes } name = "minutes" onChange = {handleInputSeconds} maxLength = {2}  />
        </form>  
        </div>
        <div className='semi-2'>
          :
        </div>

      <div className='hours-form'>
      <form>
        <div className='add-hours'>
        <button className='add-hours1' disabled = {start == true ? true: false || hours === 24? true: false}  onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick={handleAddHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} onMouseOver = {mouseOver} value = {hours} name = "hoursAdd">+</button>
          <button className='minus-hours1'  disabled = {start == true ? true: false || hours === 0? true: false} onTouchStart = {longhPressStart} onTouchEnd = {longPressStop} onClick={handleMinusHours} onMouseOut = {hoverPress} onMouseUp = {longPressStop} onMouseDown = {longhPressStart} onMouseOver = {mouseOver} value = {hours} name = "hoursMinus">-</button>

        </div>
  
          
          <input disabled= {start ? true: false}  className = 'inp-hours' type = "text"  min = "0" max = "24" placeholder='00' value = {hours === 0 ? "": hours }name = "hours" onChange = {handleInputSeconds} maxLength = {2} />
        </form>

      </div>



      <div>

          <input className='title-inp' maxLength={18} value = {title} name = "title" type = "text" placeholder='Enter a title' onChange={handleTitle}/>

      </div>

      <div>
        <Select onChange = {handleSound} value = {endSound} options = {sounds} className = 'select-inp' placeholder = 'Choose sound'></Select>

      </div>





        <span>
          {start ? <button disabled = {btn === true || total === 0? true: false} className='start-timer' onClick={startCountdown} >Stop</button>: <button disabled = {btn === true || total === 0? true: false} className='start-timer' onClick={startCountdown} >Start</button>}
          <button disabled = {start === true || total === 0? true: false} className='reset-timer' onClick = {resetValues}>Reset</button>
        </span>
      

    </div>
  )
}

export default Timer