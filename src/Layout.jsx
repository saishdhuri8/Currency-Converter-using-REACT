import React from 'react'
import Navbar from './Navbar'
import SelectCountry from './SelectCountry'
import Arrow from './Arrow'
import { useState } from 'react'
const Layout = () => {
  const [nation1,setnation1]=useState("");
  const [nation2,setnation2]=useState("");
  const[value,setvalue]=useState(0)
  const[ans,setans]=useState(0)

  

  async function getData(nation1,nation2){
        const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_PASSKEY/pair/${nation1}/${nation2}`)
        const actualData= await response.json();
        
        return actualData;
      }
      
      function handleOnChnage(e){
        setvalue(parseInt(e.target.value));
      }
      async function handleOnClick(e){
        if(nation1!="" && nation2!=""&&value!=0){
          const exchangerate= await getData(nation1,nation2);
          setans(value*exchangerate.conversion_rate)
          console.log("hello");
          
        }
  }
  return (
    <>
      <Navbar />
      <div className='w-[90%] mx-auto rounded-3xl bg-[#1c0328]  m-12 p-5'>
        <div className='flex flex-row p-2 justify-between   w-full'>
          <SelectCountry what={"From:"} id={1} setnation={setnation1}/>
          <Arrow />
          <SelectCountry what={"To:"} id={2} setnation={setnation2} />
        </div>
        <div className='flex flex-col justify-between items-center gap-2 my-20'>
          <h1 className='font-bold font-mono text-2xl'>Enter Amount:</h1>
          <input type="number" placeholder='Enter Amount' className='text-white px-3 py-2 text-lg bg-black border mx-4 rounded-2xl no-arrows' onChange={handleOnChnage} />
          <button className='bg-red-600 px-10 rounded-full py-2 hover:bg-red-700 duration-150 mt-3 font-bold text-lg ' onClick={handleOnClick}>Convert</button>
        </div>
        <div className='border p-3  bg-black text-3xl w-[65%] mx-auto'>{ans.toString()}</div>
      </div>
    </>
  )
}

export default Layout