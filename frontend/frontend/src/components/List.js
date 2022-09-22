

// This file handles the countdown timer and countdown sound/circle


import React, { useEffect, useState } from 'react'
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactAudioPlayer from 'react-audio-player';
import "./css/List.css"


const List = (props) => {


  const endSound = props.endSound
  const[sound, setSound] = useState(<ReactAudioPlayer
    src= ""
    autoPlay = {true}
    />)



    //Seconds data

    var seconds = props.seconds 
    var setSeconds = props.setSeconds





    //Minutes data

    var minutes = props.minutes * 60
    var setMinutes = props.setMinutes




    //Hours data
    var hours = props.hours * 3600
    var setHours = props.setHours


    //Start data
    const start = props.start
    const setStart = props.setStart

    //Total number of seconds
    var total = props.total
    var setTotal = props.setTotal



    
      



    useEffect(() => {

      var totalCalc =  parseInt(seconds) + parseInt(minutes) + parseInt(hours)

      if(totalCalc >= 0){
        setTotal(totalCalc)
      }
      if(totalCalc <= 0){
        setTotal(0)
      }
    }, [seconds, minutes, hours])





    var min = Math.floor((total - hours) / 60)
    var sec = total % 60
    var hrs = Math.floor(total / 3600)



    function timerValues(total){


        //Changes the value of seconds
        if(sec > 0){
            setSeconds(sec => sec -1)
            total = total - 1
        }


        //Change the value of minutes
        if(sec === 0 && min > 0){
            setMinutes(min => min -1)
            setSeconds(59)
        }

        //Chnage the value of Hours 

        if(sec === 0 && min === 0 && hrs > 0){
            setHours(hrs => hrs -1)
            setMinutes(59)
            setSeconds(59)
        }




    
    }



      //Sets the value of the start and timer

    useEffect(() => {


        var count = total
        const myTimer = setTimeout(() => {
            if(start === true && total == 0){
                setStart(false)
            }
            if(start === true && count != 0){
                timerValues(count)
            }
            else{
                clearTimeout(myTimer)
            }
            
        }, 1000);



    }, [start, total])








    // Effect state that changes based on if the values are true and will set the sound
    useEffect(() => {

      if(total === 0 && start === true){

        var counter = 0
        const mySound = setInterval(() => {
          counter +=1
          if(counter <= 10){
            setSound(<ReactAudioPlayer
              src= {endSound}
              autoPlay = {true}

              />)
  
          }
          if(counter > 10){
            setSound(<ReactAudioPlayer
              src= ""
              autoPlay = {true}
              />)
            clearInterval(mySound)
          }
  
        }, 1000)
        
      }

    }, [start, sound, total])
  






  return (
    <div  className = 'circle'>


       {sound && (<div>{sound}</div>)}

  

      

        


        <div>
          
        <CircularProgressbar value={total} maxValue = {start === true ? 100: total} textColor = 'red' text={total > 0 ? `${props.hours >= 10 ? props.hours: "0" + props.hours}:${props.minutes >= 10 ? props.minutes: "0" + props.minutes}:${props.seconds >= 10 ? props.seconds:"0" + props.seconds}`: `${'00:00:00'}`} styles={{
    root: {},
    path: {
      stroke: '#582C83',
      strokeLinecap: 'butt',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    trail: {
      stroke: '#9259DA',
      strokeLinecap: 'butt',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    text: {
      fill:  '#9259DA',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    background: {
      fill: 'red',
    },

  }}></CircularProgressbar>

        </div>


        
    </div>
  )
}

export default List

