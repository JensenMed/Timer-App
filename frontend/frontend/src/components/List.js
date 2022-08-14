

import React, { useEffect } from 'react'

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

    //Total number of seconds
    var total = props.total
    var setTotal = props.setTotal



    


    var timer = props.timer
    var setTimer = props.setTimer



    useEffect(() => {

        setTotal(seconds + minutes + hours)
    }, [seconds, minutes, hours])

    // console.log(total)



    var min = Math.floor((total - hours) / 60)
    var sec = total % 60
    var hrs = Math.floor(total / 3600)

    console.log(sec)
    // console.log(total)



    function Idk(){

        // console.log(total)
        // var hrs =  total / hours

        // let sec = props.seconds

      

        if (sec > 0 && sec <= 59){
            setSeconds(sec => sec -1)
            // setTotal(total => total -1)
        }
        else{
            console.log('jdsk')
        }


        // var sec = props.seconds
        // var min = props.minutes

        // console.log(sec -1)
        // var hours = props.hours
        // console.log(sec)
        // if(sec > 0 && sec <= 59){
        //     setSeconds(props.seconds -1)
            
        //     setTotal(total => total-1)
        // }
        // if (sec == 0 && min > 0){
        //     setMinutes(min => min - 1)
        //     // setTotal(total => total - 60)
        //     setSeconds(59)
        // }

        // console.log(sec)
        // if(sec > 0 && sec <= 60 ){
        //     // if(sec == 60){
        //     //     setSeconds(sec => sec -1)
        //     //     total = total -1

        //     // }
        //     setSeconds(sec => sec -1)
        //     total = total -1
        // }
        // if(sec == 0 && min > 0){
        //     setMinutes(min => min -1)
        //     setSeconds(59)
        //     // total = total -60
        //     // setSec
        // }
        // if(min == 0 && hrs > 0){
        //    setHours(hrs => hrs -1)
        //    total = total - 3600
        // }

    
    }




    // if(sec == 0){
    //     console.log('hsdjh')
    // }

    function startTimer(){

        // var myTimer = setInterval(Idk, 1000)
        // console.log(myTimer)

        // if(sec == 0){
        //     clearInterval(myTimer)
        // }

        // set
        // var myTimer = setInterval(Idk, 1000)
        // if(start == true && sec != 0){
        //     Idk()

        // }
        // if(sec == 0){
        //     clearInterval(myTimer)
        // }

        let k = false

        const myTimer = setInterval(() => {
            

            // if(start == true && total != 0){
            //     if (sec > 0 && sec <= 59){
            //         setSeconds(sec => sec -1)
            //     }
            // }
            if(start == true){
                if(sec != 0){
                    setSeconds(sec => sec -1)
                }else{
                    setSeconds(2)
                }
                // if (sec > 1 && sec <= 59){
                //     setSeconds(sec => sec -1)
                // }
            }
            else{
                clearInterval(myTimer)

            }
        }, 1000);





    }




  return (
    <div>
        <button onClick={startTimer}>++</button>
        <span>{props.hours >= 10 ? props.hours: "0" + props.hours}:</span>
        <span>{props.minutes >= 10 ? props.minutes: "0" + props.minutes}:</span>
        <span>{props.seconds >= 10 ? props.seconds:"0" + props.seconds}</span>

    </div>
  )
}

export default List