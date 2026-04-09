import type { ChangeEvent } from "react"
import { Button } from "../components/Button/Button"
import s from '../Counter/Counter.module.css'

export type ErrorPackType = {
    isError: boolean
    errorStart: boolean
    errorMax: boolean
    isSettingsApplied: boolean
}
export type SettTypeProps = {
    maxValue: number
    setMaxValue: (val: number) => void
    startValue: number
    setStartValue: (val: number) => void
    updateSettings: () => void
    errorPack: ErrorPackType 
}

export const Sett = ({ maxValue, setMaxValue, startValue, setStartValue, updateSettings, errorPack }: SettTypeProps) => {

    const{isError,
        errorStart,
        errorMax,
        isSettingsApplied}
        = errorPack; // распаковал переменные с ошибками из Апп

    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) =>  {
        const numberEvent = Number(event.currentTarget.value)
        setMaxValue(numberEvent)
    }
    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const numberEvent = Number(event.currentTarget.value)
        setStartValue(numberEvent)
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.setDisplay}>
                <div className={s.inputWrapper}>
                <span className={s.setSpan}>Max Value :</span>
                <input 
                                    type="number" 
                                    value={maxValue} 
                                    className={`${s.inputStyle} ${errorMax? s.errorInputStyle: ''}`} 
                                    onChange={onChangeMaxHandler}
                />
                </div>
                <div className={s.inputWrapper}>
                <span className={s.setSpan}>Start Value :</span>
                <input 
                                    type="number" 
                                    value={startValue}
                                    className={`${s.inputStyle} ${errorStart || errorMax? s.errorInputStyle: ''}`} 
                                    onChange={onChangeStartHandler}
                />
                </div>
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    onClick={updateSettings}
                    title="Set" 
                    disabled={isError || isSettingsApplied}
                />
            </div>
        </div>
    )
}