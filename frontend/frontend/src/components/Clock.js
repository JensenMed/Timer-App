

//This file handles the clock buttons and main clock page
// This is the parent file that passes props to childern 


import React, {useState, useEffect} from 'react'
import List from './List'
import Timer from './Timer'
import './css/Clock.css'
import Images from './images/images';


const Clock = () => {

    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[hours, setHours] = useState(0)
    const[total, setTotal] = useState(0)
    const[btn, setBtn] = useState(false)
    const[title, setTitle] = useState("")
    const[endSound, setEndSound] = useState()
    const[image,setImage] = useState()
    const[renderTimer, setRenderTimer] = useState(false)
    const[press, setPress] = useState("")
    const[start, setStart] = useState(false)


  //start countdown

    function startCountdown(){
      setStart(!start)

    }






    //UseEffect that will disable teh start button


    useEffect(() =>{
        if(start === true){

          let count = 0
          const myTimer = setInterval(() => {
            count +=1
            if(count === 4){
              setBtn(false)
              clearInterval(myTimer)
    
            }
            if(count < 3){
              setBtn(true)
    
            }
            
          }, 100);
  

        }


    },[start])






    // Function that will render the timer pop-up  on click

    function handleTimer(){
      if(start === false){
        setRenderTimer(!renderTimer)

      }else{
        setRenderTimer(false)
      }
    }


    // funtion that resets values of text Ex: '00:00:00'

    function resetValues(){
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      setStart(false)
    }






  return (
    <div>
      <div className='title1'>
        <h1  >{title}</h1>

      </div>


      <div className = "image-box">
      {Images && (Images.map(ele => {
        if(ele.label === image){
          if(ele.value === ""){
            return<div></div>
          }
          return <img className = "image" src = {ele.value} key = {ele.id}/>
        }

      }))
      
      }

      </div>

      {renderTimer && 
      <div className = "open-timer"> 

      <Timer 

      image = {image}
      setImage = {setImage}

      total = {total}
      setTotal = {setTotal}

      renderTimer = {renderTimer}
      setRenderTimer = {setRenderTimer}

      endSound = {endSound}
      setEndSound = {setEndSound}

      title = {title}
      setTitle = {setTitle}

      btn = {btn}
      setBtn = {setBtn}


      press = {press}
      setPress = {setPress}


      minutes = {minutes}
      setMinutes = {setMinutes}


      seconds = {seconds}
      setSeconds= {setSeconds}

      hours = {hours}
      setHours = {setHours}

      start = {start}
      setStart = {setStart}





      />



      </div>
      
      
      
      }
        <div >

        <div >
          {start ? <button className='start-clock' disabled = {btn === true || total === 0? true: false} onClick={startCountdown} >Stop</button>: <button className='start-clock' disabled = {btn === true || total === 0 ? true: false} onClick={startCountdown} >Start</button>}
        </div>
        <div>
            <button disabled = {start === true || total === 0? true: false} className = 'reset-clock' onClick = {resetValues}>Reset</button>
        </div>

        </div>

  
    


        <div>
          <span onClick = {handleTimer}>
            
          <List

          endSound = {endSound}
          setEndSound = {setEndSound}



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

          </span>
          
        
        </div>

        


    </div>








  )
}

export default Clock