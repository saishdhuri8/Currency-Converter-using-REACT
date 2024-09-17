import Card from "./Card"
import { useRef } from "react"

export default function SearchBox({flag,setflag,data,setnation,submitbutton}){

const boxref=useRef()

if(flag){
    boxref.current.classList.add('flex')
    boxref.current.classList.remove('hidden')
}

const searchCards=data.map((e,i)=>{
return <Card key={i*7} setflag={setflag} boxref={boxref} countrydata={e} setnation={setnation} submitbutton={submitbutton}/>
})
    return(
        <>
        <div ref={boxref} className="bg-black SearchBox absolute w-[409px] hidden left-[28px]  flex-col gap-3 top-[116px] max-h-60 p-2 overflow-y-scroll rounded-xl">
        {searchCards}
        </div>
        </>
    )

}