import React, {useState, useEffect} from 'react'
import List from './List'

const Random = () => {

    const[box, setBox] = useState([2,3,4])
    // const[idk, setIdk] = useState(false)/
    const[makeBox, setMakeBox] = useState({
        time: "nice",
    })

    console.log(makeBox)


    // function btn(){
    //     setBox(!box)
    // }



    // useEffect(() => {

    //     if(box){
    //         setMakeBox({
    //             time:"5"
    //         })
    //         idk()
            
            
    //     }



    // }, [box])


    function idk(){
        makeBox.map(ele => {
            return <List>{ele.time}</List>
        })
    }
  
  
  
  
  
  
    return (
    <div>

        <button >click me</button>
        <h1>{box}</h1>

        {/* {box && <h1>{box}</h1>} */}

        {/* {idk ? } */}

        









    </div>
  )
}

export default Random