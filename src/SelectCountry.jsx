import SearchBox from "./SearchBox"
import { useEffect, useRef, useState } from "react"
import {countryList} from './codes'
export default function SelectCountry ({what,id,setnation}){
    const[flag,setflag]=useState(false)
    const[data,setdata]=useState([])
    const submitref=useRef()

    function handleChange(e){
        
        let x =[]
        const countryName=e.target.value;
        const modified =  countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
        console.log(modified);
        for(let i of countryList){
            if(i.country.startsWith(modified)){
                x.push(i)
                
            }
        }
        setdata(x)
        setflag(true)
    }
    
    return(
        <>
           <div className="w-[35%]">
            <div className=" flex  flex-col gap-5 p-2 relative">
                <h1 className="text-4xl font-mono font-bold">{what}</h1>
                <input ref={submitref} onChange={handleChange} className="text-white px-3 py-2 text-lg bg-black border mx-4 rounded-2xl" placeholder="Search Country Name" type="text" />
                <SearchBox submitbutton={submitref} flag={flag} setflag={setflag} data={data} setnation={setnation} />
            </div>
           </div>

        </>
    )
}