import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
const App = () => {
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(()=>{
      setsec(sec+1);

      if(sec===59)
      {
        setmin(min+1);
        setsec(0);
      }
    },1000);

    return () => clearInterval(timerRef.current);
  }, [sec,min]);

  const Restart =() => {
    setsec(0);
    setmin(0);
  }

  const stop =() => {
    clearInterval(timerRef.current);
  }

  return (
  <div className="bg-violet-400 w-screen h-screen flex justify-center items-center">
    <div className=" bg-violet-600 w-80 h-80 rounded-3xl drop-shadow-xl
    grid grid-cols-1 place-items-center">

      <h1 className="text-5xl font-semibold text-center py-3 text-white">Timer</h1>

      <div className="grid grid-cols-3">
        <h1 className="bg-violet-400 w-20 h-20 flex justify-center items-center
        rounded-3xl drop-shadow-xl text-white text-5xl font-semibold">{min<10? "0"+min: min}</h1>
        <h1 className='flex justify-center items-center text-white text-5xl'>:</h1>
        <h1 className="bg-violet-400	 w-20 h-20 flex justify-center items-center
        rounded-3xl drop-shadow-xl text-white text-5xl font-semibold">{sec<10? "0"+sec: sec}</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-20 place-items-center">
      <button className="bg-violet-800 hover:bg-violet-900 w-24 h-10 rounded-xl drop-shadow-xl font-semibold text-xl text-white" onClick={Restart}>Restart</button>
      <button className="bg-violet-800 hover:bg-red-600 w-24 h-10 rounded-xl drop-shadow-xl font-semibold text-xl text-white" onClick={stop}>Stop</button>
      </div>
    </div>
  </div>
  );
}
export default App;
