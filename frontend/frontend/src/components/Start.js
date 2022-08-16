
import React from 'react'

const Start = (props) => {

    function hideStart(){

    }

    function startCount(){
        props.startCountdown()

    }

    // function 
    
  return (
   <button onClick = {startCount}>
    Start
   </button>
  )
}

export default Start