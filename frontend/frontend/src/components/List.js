

import React, { useEffect, useState } from 'react'

const List = (props) => {



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
    // console.log(start)

    //Total number of seconds
    var total = props.total
    var setTotal = props.setTotal



    




    useEffect(() => {

        setTotal(seconds + minutes + hours)
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
        // console.log(start)

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






  return (
    <div>
        <span>{props.hours >= 10 ? props.hours: "0" + props.hours}:</span>
        <span>{props.minutes >= 10 ? props.minutes: "0" + props.minutes}:</span>
        <span>{props.seconds >= 10 ? props.seconds:"0" + props.seconds}</span>

    </div>
  )
}

export default List