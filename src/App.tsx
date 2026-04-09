import { useEffect, useState } from "react"
import { Counter } from "./Counter/Counter"
import { Sett } from "./Sett/Sett"
import s from '././Counter/Counter.module.css'



function App() {

  const [maxValue, setMaxValue] = useState<number>(5)
  const [startValue, setStartValue] = useState<number>(0)
  const [appliedSettings, setAppliedSettings] = useState({ start: 0, max: 5 });

    useEffect(() => {
    const saved = localStorage.getItem('counter-settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAppliedSettings(parsed);
      setStartValue(parsed.start);
      setMaxValue(parsed.max);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem('counter-settings', JSON.stringify(appliedSettings));
  },[appliedSettings])




    const updateSettings = () => {
    setAppliedSettings({start: startValue, max: maxValue})
    }

    const isSettingsApplied = startValue === appliedSettings.start && maxValue === appliedSettings.max; // блокировка кнопки сета
    const errorStart = startValue < 0; // ошибка инициализации стартового значения в инпуте сеттинга
    const errorMax = maxValue <= startValue; // ошибка инициализации максимального значения в инпуте сеттинга
    const isError = errorStart || errorMax;  // Общий флаг ошибки для блокировки кнопок и табло

    const errorPack = {
        isError,
        errorStart,
        errorMax,
        isSettingsApplied
      };


  return (
    <div className={s.CounterContainer}>
      <Sett 
      maxValue={maxValue}
      setMaxValue={setMaxValue}
      startValue={startValue}
      setStartValue={setStartValue}
      updateSettings={updateSettings}
      errorPack={errorPack}
      />
      <Counter
      counterMaxValue={appliedSettings.max}
      counterStartValue={appliedSettings.start}
      startValue={startValue}
      maxValue={maxValue}
      isError={isError}
      />
    </div>
    
  )
}

export default App
