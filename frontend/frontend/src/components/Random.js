import React, {useState, useRef, useEffect} from 'react'








const Random = () => {




    const[sec, setSeconds] = useState(0)
    const[press, setPress] = useState()

    const timerRef = useRef()



    function onTouchStart(){
        // console.log('start')
        if(sec >= 0 && sec < 59){
            setPress("addSeconds")
            LongPress()

        }

        // setPress("")



    }

    function onTouchEnd(){
        console.log('end')
        clearInterval(timerRef.current)
    }


    function LongPress(){
        timerRef.current = setInterval(() => {
            

            if(sec >= 0 && sec < 59){
                if(sec === 59){
                    console.log('jj')
                }
                if(press === "addSeconds"){
                    // if(sec >= 0 && sec < 59){
                        setSeconds(sec => sec + 1)
    
                    // }
                }
               
            }
        }, 100)
    }

    useEffect(() => {
        if( sec > 59){
            setSeconds(59)
        }
        if( sec < 0){
            setSeconds(0)
        }
    }, [sec])



  return (
    <div>

        <button onTouchStart={onTouchStart} onTouchEnd = {onTouchEnd}>{sec}</button>
        



    </div>
  )
}

export default Random