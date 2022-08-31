

import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { easeQuadInOut } from 'd3-ease';

import "./css/List.css"
const List = (props) => {

    // const {
    //     path,
    //     pathLength,
    //     stroke,
    //     strokeDashoffset,
    //     remainingTime,
    //     elapsedTime,
    //     size,
    //     strokeWidth,
    //   } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })



    //Seconds data

    var seconds = props.seconds 
    var setSeconds = props.setSeconds





    //Minutes data

    var minutes = props.minutes * 60
    var setMinutes = props.setMinutes




    //Hours data
    var hours = props.hours * 3600
    var setHours = props.setHours
    // console.log(hours)
    // console.log(seconds)
    // console.log(minutes)



    //Start data
    const start = props.start
    const setStart = props.setStart
    // console.log(start)

    //Total number of seconds
    var total = props.total
    var setTotal = props.setTotal



    
      



    useEffect(() => {

        setTotal( parseInt(seconds) + parseInt(minutes) + parseInt(hours))
        // setTotal( seconds + minutes + hours)
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
        // console.log(total)

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



    // useEffect(() => {
    //   if()

    // }, [start])

    console.log(total)
  return (
    <div className = 'circle'>
        {/* <span>{props.hours >= 10 ? props.hours: "0" + props.hours}:</span>
        <span>{props.minutes >= 10 ? props.minutes: "0" + props.minutes}:</span>
        <span>{props.seconds >= 10 ? props.seconds:"0" + props.seconds}</span> */}


{/* 

        <CircularProgressbarWithChildren value={total}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  {/* <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>66%</strong> mate
  </div>
</CircularProgressbarWithChildren>; */} 

        
        <CircularProgressbar  value={total} maxValue = {start === true ? 100: total} text={`${props.hours >= 10 ? props.hours: "0" + props.hours}:${props.minutes >= 10 ? props.minutes: "0" + props.minutes}:${props.seconds >= 10 ? props.seconds:"0" + props.seconds}`} styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: 'purple',
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
      stroke: 'gray',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: 'purple',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: 'red',
    },
  }}/>
    </div>
  )
}

export default List





// <CountdownCircleTimer
// duration= {total}
// colors={['#004777', '#F7B801', '#A30000', '#A30000']}
// colorsTime={[(total), total - (total * 0.25), total - (total * 0.50), total - total ]}
// >
// {({ remainingTime }) => {
//     // return remainingTime

// return `${props.hours >= 10 ? props.hours: "0" + props.hours}:${props.minutes >= 10 ? props.minutes: "0" + props.minutes}:${props.seconds >= 10 ? props.seconds:"0" + props.seconds}`
// }}
// </CountdownCircleTimer>