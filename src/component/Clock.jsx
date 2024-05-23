import React,{useState,useEffect} from "react";
import "./Clock.css"
function Clock(){
    const [times,setTime]=useState(new Date());

    useEffect(()=>
    {
        var intervalId=setInterval(() => {
            setTime(new Date());
        }, 1000);

        return()=>{
            clearInterval(intervalId)
        }
    },[])

    function formatTime(){
        let hour=times.getHours();
        const min=times.getMinutes();
        const sec=times.getSeconds();
        const meridian = hour<12 ? "A.M" :"P.M"

        hour=hour%12||12;
        return `${padZero(hour)}:${padZero(min)}:${padZero(sec)}:${padZero(meridian)}` 
    }
    function padZero(number){
         return (number < 10 ? "0" :"")+ number;
    }

    return(
        <div className="clock-container">
            <h1 id="time">{formatTime()}</h1>
        </div>)
}
export default Clock