
/*function useDebounce(cb, delay = 2000) {
    let timerId;
    return (...args) => {
        console.log(...args);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

export default useDebounce;*/


import { useRef } from "react";

function useDebounce(callback, delay = 2000) {
    const timerRef = useRef(null);

    return (value) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current); // ✅ cancel previous
        }

        timerRef.current = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

export default useDebounce;
