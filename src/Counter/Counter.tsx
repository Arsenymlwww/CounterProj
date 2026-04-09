import { useEffect, useState } from "react";
import s from "./Counter.module.css";
import { Button } from "../components/Button/Button";


export type CounterTypeProps = {
    counterMaxValue: number
    counterStartValue: number
    startValue:number
    maxValue:number
    isError: boolean
}

export const Counter = ({counterMaxValue, counterStartValue, startValue, maxValue,isError}: CounterTypeProps) => {
    const [count, setCount] = useState<number>(counterStartValue);
    useEffect(()=> {
        setCount(counterStartValue)
    }, [counterStartValue,counterMaxValue]);

    const incrementCount = () => {
        if (count < counterMaxValue) {
            setCount(prev => prev + 1);
        }
    };
    const resetCount = () => {
        setCount(counterStartValue);
    };
    const isMax = count === counterMaxValue; // true or false
    const isMin = count === counterStartValue; // true or false
    const isSettingsChanged = maxValue !== counterMaxValue || startValue !== counterStartValue; // true or false

    return (
        <div className={s.wrapper}>
        <div className={`${s.display} ${isMax || isError ? s.errorText : ""}`}>
        {isError 
        ? <span className={s.errorText}>Incorrect value!</span> 
        : isSettingsChanged 
            ? <span className={s.setSpan}>Enter values and press 'set'</span> 
            : <span className={isMax ? s.errorNumber: ''}>{count}</span>
            }
        </div>
            <div className={s.buttonsBlock}>
                <Button 
                    title="inc" 
                    onClick={incrementCount} 
                    disabled={isMax || isError || isSettingsChanged} 
                />
                <Button 
                    title="reset" 
                    onClick={resetCount} 
                    disabled={isMin || isError || isSettingsChanged} 
                />
            </div>
        </div>
    );
};
