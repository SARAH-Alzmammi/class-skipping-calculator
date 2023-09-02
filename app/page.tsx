'use client'
import {  useState } from 'react';

export default function Home() {
  const [percentage, setPercentage] = useState(0); // Initial value is set to 0
  const [number, seNumber] = useState(0);
  const [status, setStatus] = useState('');

    const calculate = () => {
        let result = Math.round((number * percentage)* 10) /10;
        setStatus( String(result));
        if (result < 10) {

            setStatus('  🤙الوضع في السليم');
        } else if (result > 10 && result < 20) {
            let new_percentage = 20 - result;
            let range = Math.floor(new_percentage/ percentage)
            let new_status1 = " لوضع في السليم  ، لكن انتبه، باقي تغيب/بِ ️ "
            let new_status2 = "  مرات عشان تقرب من ال 20 بالمية ⚠️ "
            setStatus(new_status1 +range+ new_status2 );
        }else {
            setStatus(' 🛼الله يستر... ، الطريق المنحدرة ');
        }
    }

  const handleInputChange = (value:number,type:string) => {
    if (type === 'percentage') {
      setPercentage(value); // Update the value when input changes
    }  else if (type === 'number') {
      seNumber(value);
    }
  }
  return (
    <main className="flex justify-center mt-10 flex-col items-center text-white">


    <div className="mt-10 flex flex-col items-center gap-2">
      <label>كم نسبة الغياب الواحد بالمادة ؟ </label>
      <input
        type="number"
        value={percentage}
        onChange={(e)=>handleInputChange(e.target.value,'percentage')}
        className="w-40   text-black py-2 px-6 rounded"      />
    </div>



      <div className="mt-10 flex flex-col items-center gap-2">
        <label>كم مره غبت/تِ؟ </label>
        <input
            type="number"
            value={number}
            onChange={(e)=>handleInputChange(e.target.value,  'number')}
            className="w-40 text-black py-2 px-6 rounded"
        />
      </div>
<button  className=" mt-10 w-40 mx-auto text-center  hover:bg-transparent bg-yellow hover:text-yellow font-semibold text-black py-2 px-6 border hover:border-yellow border-transparent rounded"  onClick={calculate}>
   شالوضع؟
</button>

      <div className="mt-10 flex flex-col items-center gap-2  max-w-52 text-right">
        {status}
      </div>


        <p className="text-white text-center opacity-40 bottom-0 absolute"><a href="https://sarah-alzmammi.vercel.app/"  target="_blank"> ©2023 Sarah Alzmammi</a></p>

    </main>
  )
}
