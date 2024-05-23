import React, { useState, useEffect, useRef } from "react"
import "./StopWatch.css"

function StopWatch() {
    const [isRunning, setisRunning] = useState(false)
    const [elapsedTime, setelapsedTime] = useState(0)
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setelapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning])

    function hanldeStop() {
        setisRunning(false)
    }
    function hanldeReset() {
        setelapsedTime(0)
        setisRunning(false)
    }
    function hanldeStart() {
        setisRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    function handleformat() {
        let min = Math.floor(elapsedTime / (1000 * 60) % 60);
        let sec = Math.floor(elapsedTime / (1000 % 60));
        let milli = Math.floor((elapsedTime % 1000) / 10);

        min = String(min).padStart(2, "0")
        sec = String(sec).padStart(2, "0")
        milli = String(milli).padStart(2, "0")

        return `${min}:${sec}:${milli}`
    }
    return (
            <div className="StopWatch-Container">
                <h1>{handleformat()}</h1>
                <div className="button">
                    <button id="stop-button" onClick={hanldeStop}><b>STOP</b></button>
                    <button id="reset-button" onClick={hanldeReset}><b>RESET</b></button>
                    <button id="start-button" onClick={hanldeStart}><b>START</b></button>
                </div>
            </div>
    )
}
export default StopWatch