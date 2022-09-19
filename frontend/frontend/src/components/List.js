

import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useSound from 'use-sound';
import ReactAudioPlayer from 'react-audio-player';
// import { easeQuadInOut } from 'd3-ease';
import sounds from './sounds/sounds'

import "./css/List.css"
const List = (props) => {


  const endSound = props.endSound

  const[over, setOver] = useState(false)

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



    function Idk(total){


        //Change th value of seconds
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


    useEffect(() => {


        var count = total
        const myTimer = setTimeout(() => {
            if(start === true && total == 0){
                setStart(false)
            }
            if(start === true && count != 0){
                Idk(count)
            }
            else{
                clearTimeout(myTimer)
            }
            
        }, 1000);



    }, [start, total])



    
    function handleMouseOver(){

      setOver(true)
    }

    function handleMouseOut(){
      setOver(false)
    }





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

  

      

        


        <div onTouchMove={handleMouseOut} onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut} >
          
        <CircularProgressbar value={total} maxValue = {start === true ? 100: total} textColor = 'red' text={total > 0 ? `${props.hours >= 10 ? props.hours: "0" + props.hours}:${props.minutes >= 10 ? props.minutes: "0" + props.minutes}:${props.seconds >= 10 ? props.seconds:"0" + props.seconds}`: `${'00:00:00'}`} styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#582C83',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#9259DA',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // textColor: '#f88',
      // Text color
      fill:  '#9259DA',
      // Text size
      fontSize: '20px',
      fontWeight: 'bold',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: 'red',
    },

  }}></CircularProgressbar>

        </div>


        
    </div>
  )
}

export default List

