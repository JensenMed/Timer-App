
//This file makes a sound object to be passes in to Clock.js/List.js

import Geese from './Geese.wav'
import Alarm from "./Alarm.wav"
import Applause from "./Applause.wav"
import Trombone from "./Trombone.wav"


const sounds = [{
    label: "No Sound",
    value: "",

}, {

    label: "Geese",
    value: Geese,

}, {

    label: "Alarm",
    value: Alarm,
},{

    label: "Applause",
    value: Applause,
},{

    label: "Trombone",
    value: Trombone,
}
]

export default sounds