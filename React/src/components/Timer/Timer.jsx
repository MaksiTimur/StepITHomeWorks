import { useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [pause, setPause] = useState(true);
    let timer = null;
    let calculateTime = () => {
        setTime(prevTime => {
            return prevTime + 10;
        });
    };

    if (pause === false) {
        timer = setTimeout(calculateTime, 10);
    }

    const handleStart = () => {
        setTime(0);
        setPause(false);
    }

    const handlePause = () => {
        setPause(!pause);
    }

    const handleStop = () => {
        clearTimeout(timer);
        setPause(true);
        setTime(0);
    }

    return (
        <>
            <div>Time: {time / 1000}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>pause continue</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
};

export default Timer;